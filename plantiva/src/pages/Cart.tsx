import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlantEmoji from '../components/PlantEmoji';
import { C, styles } from '../constants/designSystem';
import { Trash2, ArrowLeft, ArrowRight, Plus, Minus, ShoppingBag } from 'lucide-react';

interface CartProps {
  navigate: (target: string, data?: any) => void;
}

export default function Cart({ navigate }: CartProps) {
  const [items, setItems] = useState([
    { id: 1, name: "Areca Palm", price: 499, qty: 1, category: "Indoor Plants" },
    { id: 2, name: "Snake Plant", price: 399, qty: 1, category: "Air Purifying" }
  ]);

  const cardColors = [C.pastels.mint, C.pastels.yellow, C.pastels.pink, C.pastels.blue];

  const updateQty = (id: number, delta: number) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const delivery = subtotal > 0 ? 99 : 0;
  const total = subtotal + delivery;

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} cartCount={items.reduce((a, b) => a + b.qty, 0)} />

      <div style={styles.container}>
        <div style={{ padding: "24px 0 16px", color: C.textLight, fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
          <span onClick={() => navigate("store")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 4, color: C.primary, fontWeight: 800 }}>
            <ArrowLeft size={14} /> Continue Shopping
          </span>
          <span>/</span>
          <span style={{ color: C.primary, fontWeight: 800 }}>Nursery Cart</span>
        </div>

        <div style={{ maxWidth: 960, margin: "0 auto", paddingBottom: 80 }}>
          <div style={{ marginBottom: 32 }}>
            <h1 style={{ fontSize: 44, fontWeight: 800, color: C.primary, margin: 0, letterSpacing: "-1px" }}>
              Your Nursery <span className="font-serif-italic" style={{ fontSize: 52 }}>Cart</span>
            </h1>
            <p style={{ color: C.textMid, marginTop: 4, fontSize: 15 }}>
              {items.length} healthy plants ready for delivery
            </p>
          </div>

          {items.length === 0 ? (
            <div style={{ textAlign: "center", padding: 60, borderRadius: 32, background: C.pastels.mint }}>
              <ShoppingBag size={48} color={C.primary} style={{ margin: "0 auto 16px" }} />
              <h3 style={{ fontSize: 24, fontWeight: 800, color: C.primary }}>Your Cart is Empty</h3>
              <p style={{ color: C.textMid, fontSize: 14, marginBottom: 24 }}>Explore our scientific nursery collection to add plants.</p>
              <button className="pill-btn pill-btn-lime" style={{ padding: "12px 28px" }} onClick={() => navigate("store")}>
                Explore Nursery Store
              </button>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 36, alignItems: "start" }}>
              {/* Item List */}
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {items.map((item, idx) => (
                  <div 
                    key={item.id} 
                    className="alldae-card"
                    style={{ 
                      background: cardColors[idx % cardColors.length], 
                      padding: 20, 
                      borderRadius: 24, 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "space-between" 
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <PlantEmoji name={item.name} size={64} />
                      <div>
                        <h4 style={{ fontWeight: 800, color: C.primary, fontSize: 18, margin: 0 }}>{item.name}</h4>
                        <div style={{ fontSize: 12, color: C.textMid, fontWeight: 600, marginTop: 2 }}>{item.category}</div>
                        <div style={{ fontWeight: 800, color: C.primary, fontSize: 16, marginTop: 4 }}>₹{item.price}</div>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                      {/* Qty Selector */}
                      <div style={{ background: "#FFFFFF", border: "1px solid rgba(18, 43, 30, 0.1)", display: "flex", alignItems: "center", gap: 10, padding: "4px 12px", borderRadius: 9999 }}>
                        <button onClick={() => updateQty(item.id, -1)} style={{ border: "none", background: "transparent", cursor: "pointer", color: C.primary }}>
                          <Minus size={14} />
                        </button>
                        <span style={{ fontWeight: 800, fontSize: 14, minWidth: 20, textAlign: "center", color: C.primary }}>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} style={{ border: "none", background: "transparent", cursor: "pointer", color: C.primary }}>
                          <Plus size={14} />
                        </button>
                      </div>

                      <button onClick={() => removeItem(item.id)} style={{ border: "none", background: "transparent", cursor: "pointer", color: C.danger, padding: 6 }}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary Card */}
              <div style={{ background: "#FFFFFF", padding: 32, borderRadius: 32, border: "1px solid rgba(18, 43, 30, 0.06)", boxShadow: "0 10px 30px -5px rgba(18, 43, 30, 0.04)" }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: C.primary, margin: "0 0 20px" }}>
                  Order Summary
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20, borderBottom: `1px solid rgba(18, 43, 30, 0.08)`, paddingBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: C.textMid }}>
                    <span>Subtotal</span>
                    <span style={{ fontWeight: 800, color: C.primary }}>₹{subtotal}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: C.textMid }}>
                    <span>Care Packaging & Delivery</span>
                    <span style={{ fontWeight: 800, color: C.primary }}>₹{delivery}</span>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, fontWeight: 800, color: C.primary, marginBottom: 28 }}>
                  <span>Total Payable</span>
                  <span>₹{total}</span>
                </div>

                <button 
                  className="pill-btn pill-btn-lime" 
                  style={{ width: "100%", padding: "14px", fontSize: 15, justifyContent: "center" }}
                  onClick={() => navigate("checkout", { items, total })}
                >
                  Proceed to Checkout <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

