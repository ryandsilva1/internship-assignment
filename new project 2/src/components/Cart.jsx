// src/components/Cart.jsx

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQty, totalItems, totalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <main className="page-wrapper">
        <section className="page-hero">
          <div className="page-hero-text">
            <div className="hero-badge">🛒 Your Cart</div>
            <h1 className="page-hero-title">Your cart is empty</h1>
            <p className="page-hero-desc">
              Looks like you haven't added anything yet. Head to the shop and grab some study material!
            </p>
            <Link to="/Shop" className="btn-primary" style={{ display: "inline-block", marginTop: "20px" }}>
              Browse Shop →
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page-wrapper">

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="page-hero-text">
          <div className="hero-badge">🛒 Your Cart</div>
          <h1 className="page-hero-title">Review Your Order</h1>
          <p className="page-hero-desc">
            {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart.
          </p>
        </div>
      </section>

      {/* ── CART BODY ── */}
      <section className="cart-body">

        {/* Items list */}
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>

              <div className="cart-item-icon">{item.icon}</div>

              <div className="cart-item-info">
                <p className="cart-item-type">{item.type}</p>
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-pages">📄 {item.pages}</p>
              </div>

              <div className="cart-item-controls">
                {/* Quantity */}
                <div className="qty-control">
                  <button onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                </div>
                {/* Price */}
                <div className="cart-item-price">₹{item.price * item.qty}</div>
                {/* Remove */}
                <button
                  className="cart-remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="cart-summary">
          <h3 className="summary-title">Order Summary</h3>

          <div className="summary-rows">
            {cartItems.map((item) => (
              <div className="summary-row" key={item.id}>
                <span>{item.title} × {item.qty}</span>
                <span>₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <div className="summary-divider" />

          <div className="summary-total">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="summary-note">
            🎓 Student pricing. All materials are digital downloads.
          </div>

          <button className="btn-primary summary-checkout">
            Proceed to Checkout →
          </button>

          <button className="summary-clear" onClick={clearCart}>
            Clear Cart
          </button>

          <Link to="/Shop" className="summary-continue">
            ← Continue Shopping
          </Link>
        </div>

      </section>
    </main>
  );
}