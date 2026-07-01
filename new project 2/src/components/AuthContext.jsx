// src/context/AuthContext.jsx
// Wraps the whole app and provides the current user + helpers
// to every component via useAuth()

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);   // Supabase auth user
  const [profile, setProfile] = useState(null);   // our profiles table row
  const [loading, setLoading] = useState(true);   // true while session loads

  // Fetch the extra profile data (name, role) from our profiles table
  async function fetchProfile(userId) {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();
    if (!error) setProfile(data);
  }

  useEffect(() => {
    // 1. Check if there's already an active session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      const u = session?.user ?? null;
      setUser(u);
      if (u) fetchProfile(u.id);
      setLoading(false);
    });

    // 2. Listen for login / logout events
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const u = session?.user ?? null;
        setUser(u);
        if (u) fetchProfile(u.id);
        else setProfile(null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  // ── Sign Up ──────────────────────────────────────────────
  async function signUp({ email, password, name, role }) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;

    // Insert extra info into profiles table
    const userId = data.user?.id;
    if (userId) {
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([{ id: userId, name, role, email }]);
      if (profileError) throw profileError;
    }
  }

  // ── Log In ───────────────────────────────────────────────
  async function logIn({ email, password }) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  }

  // ── Log Out ──────────────────────────────────────────────
  async function logOut() {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  }

  return (
    <AuthContext.Provider value={{ user, profile, loading, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook — use this in any component
export function useAuth() {
  return useContext(AuthContext);
}