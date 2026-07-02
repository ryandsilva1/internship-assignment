// src/components/Shop.jsx

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const PRODUCTS = [
  {
    id: 1,
    title: "Data Structures & Algorithms Bundle",
    type: "Notes Bundle",
    desc: "Complete handwritten + typed notes covering arrays, linked lists, trees, graphs, sorting, and dynamic programming.",
    price: 149,
    icon: "📦",
    tag: "Bestseller",
    tagColor: { bg: "rgba(79,142,247,0.15)", color: "#7CAAFF" },
    dept: "CO",
    deptClass: "icon-co",
    pages: "120 pages",
  },
  {
    id: 2,
    title: "Machine Learning Handbook",
    type: "PDF Book",
    desc: "From linear regression to neural networks. Includes solved examples, diagrams, and cheat sheets for quick revision.",
    price: 199,
    icon: "🤖",
    tag: "Popular",
    tagColor: { bg: "rgba(25,201,163,0.15)", color: "#19C9A3" },
    dept: "AN",
    deptClass: "icon-an",
    pages: "200 pages",
  },
  {
    id: 3,
    title: "Operating Systems Exam Prep Pack",
    type: "Exam Prep",
    desc: "Topic-wise notes + 5 solved previous year papers + quick revision cards for OS concepts.",
    price: 99,
    icon: "💻",
    tag: "Exam Ready",
    tagColor: { bg: "rgba(251,179,64,0.15)", color: "#FBB340" },
    dept: "CO",
    deptClass: "icon-co",
    pages: "80 pages",
  },
  {
    id: 4,
    title: "Thermodynamics Complete Notes",
    type: "Notes Bundle",
    desc: "All 4 laws, thermodynamic cycles (Carnot, Rankine, Brayton), solved numericals and diagrams included.",
    price: 129,
    icon: "🔥",
    tag: "New",
    tagColor: { bg: "rgba(239,68,68,0.15)", color: "#F87171" },
    dept: "ME",
    deptClass: "icon-me",
    pages: "95 pages",
  },
  {
    id: 5,
    title: "Cloud Computing & AWS Guide",
    type: "PDF Book",
    desc: "Covers cloud architecture, AWS core services (EC2, S3, RDS, Lambda), and real-world deployment examples.",
    price: 179,
    icon: "☁️",
    tag: "Popular",
    tagColor: { bg: "rgba(25,201,163,0.15)", color: "#19C9A3" },
    dept: "BD",
    deptClass: "icon-bd",
    pages: "160 pages",
  },
  {
    id: 6,
    title: "DBMS Full Course Notes",
    type: "Notes Bundle",
    desc: "ER diagrams, normalization (1NF–BCNF), SQL queries, transactions, and indexing — all in one place.",
    price: 119,
    icon: "🗄️",
    tag: "Bestseller",
    tagColor: { bg: "rgba(79,142,247,0.15)", color: "#7CAAFF" },
    dept: "CO",
    deptClass: "icon-co",
    pages: "110 pages",
  },
  {
    id: 7,
    title: "Fluid Mechanics Notes + Numericals",
    type: "Notes Bundle",
    desc: "Bernoulli's theorem, flow measurements, viscosity, pipes, and 50+ solved numericals with step-by-step solutions.",
    price: 109,
    icon: "💧",
    tag: "New",
    tagColor: { bg: "rgba(239,68,68,0.15)", color: "#F87171" },
    dept: "ME",
    deptClass: "icon-me",
    pages: "88 pages",
  },
  {
    id: 8,
    title: "Computer Networks Revision Pack",
    type: "Exam Prep",
    desc: "OSI model, TCP/IP, routing algorithms, subnetting, and network security — formatted for fast exam revision.",
    price: 89,
    icon: "🌐",
    tag: "Exam Ready",
    tagColor: { bg: "rgba(251,179,64,0.15)", color: "#FBB340" },
    dept: "CO",
    deptClass: "icon-co",
    pages: "70 pages",
  },
];

const FILTERS = ["All", "Notes Bundle", "PDF Book", "Exam Prep"];

export default function Shop() {
  const { addToCart, cartItems } = useCart();
  const { user } = useAuth();
  const [activeFilter, setActiveFilter] = useState("All");
  const [added, setAdded] = useState({}); // tracks "Added!" flash per product

  const filtered = activeFilter === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.type === activeFilter);

  const handleAdd = (product) => {
    addToCart(product);
    setAdded((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [product.id]: false })), 1500);
  };

  const inCart = (id) => cartItems.some((i) => i.id === id);

  return (
    <main className="page-wrapper">

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-text">
          <div className="hero-badge">🛒 Study Shop</div>
          <h1 className="page-hero-title">Premium Study Materials</h1>
          <p className="page-hero-desc">
            Handcrafted notes, PDF books, and exam packs — curated by toppers,
            organized by department, and priced for students.
          </p>
        </div>
      </section>

      {/* ── SHOP BODY ── */}
      <section className="shop-body">

        {/* Filter tabs */}
        <div className="filter-tabs">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`tab ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="shop-grid">
          {filtered.map((product) => (
            <div className="product-card" key={product.id}>

              {/* Top row */}
              <div className="product-card-top">
                <div className="product-emoji">{product.icon}</div>
                <span
                  className="product-tag"
                  style={{ background: product.tagColor.bg, color: product.tagColor.color }}
                >
                  {product.tag}
                </span>
              </div>

              {/* Info */}
              <div className={`product-dept-badge dept-icon ${product.deptClass}`}>
                {product.dept}
              </div>
              <p className="product-type">{product.type}</p>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-desc">{product.desc}</p>
              <p className="product-pages">📄 {product.pages}</p>

              {/* Footer */}
              <div className="product-footer">
                <div className="product-price">₹{product.price}</div>
                <button
                  className={`add-to-cart-btn ${inCart(product.id) ? "in-cart" : ""}`}
                  onClick={() => handleAdd(product)}
                >
                  {added[product.id]
                    ? "✓ Added!"
                    : inCart(product.id)
                    ? "Add More"
                    : "+ Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}