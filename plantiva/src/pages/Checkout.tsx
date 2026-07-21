import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { C, styles } from '../constants/designSystem';
import { ShieldCheck, CreditCard, Smartphone, Truck, ArrowLeft } from 'lucide-react';

interface CheckoutProps {
  navigate: (target: string, data?: any) => void;
}

export default function Checkout({ navigate }: CheckoutProps) {
  const location = useLocation();
  const stateData = location.state || {};
  const total = stateData.total || 997;

  const [paymentMode, setPaymentMode] = useState("upi");
  const [formData, setFormData] = useState({
    name: "Neha Sharma",
    phone: "+91 98765 43210",
    address: "Flat 402, Green Balcony Towers",
    city: "Lucknow",
    pincode: "226010"
  });

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} />

      <div style={styles.container}>
        <div style={{ padding: "24px 0 16px", color: C.textLight, fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
          <span onClick={() => navigate("cart")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 4, color: C.primary, fontWeight: 800 }}>
            <ArrowLeft size={14} /> Back to Cart
          </span>
          <span>/</span>
          <span style={{ color: C.primary, fontWeight: 800 }}>Checkout</span>
        </div>

        <div style={{ maxWidth: 960, margin: "0 auto", paddingBottom: 80 }}>
          <div style={{ marginBottom: 32 }}>
            <h1 style={{ fontSize: 44, fontWeight: 800, color: C.primary, margin: 0, letterSpacing: "-1px" }}>
              Secure Delivery <span className="font-serif-italic" style={{ fontSize: 52 }}>Checkout</span>
            </h1>
            <p style={{ color: C.textMid, marginTop: 4, fontSize: 15 }}>
              Safe packaging and doorstep plant health delivery
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 36, alignItems: "start" }}>
            {/* Form Fields */}
            <div style={{ background: "#FFFFFF", padding: 36, borderRadius: 32, border: "1px solid rgba(18, 43, 30, 0.06)", boxShadow: "0 10px 30px -5px rgba(18, 43, 30, 0.04)" }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: C.primary, margin: "0 0 20px" }}>
                1. Delivery Shipping Address
              </h3>

              <div style={{ display: "grid", gap: 18, marginBottom: 32 }}>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 800, color: C.primary, marginBottom: 6, display: "block" }}>FULL NAME</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={styles.input} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 800, color: C.primary, marginBottom: 6, display: "block" }}>MOBILE NUMBER</label>
                  <input type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} style={styles.input} />
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 800, color: C.primary, marginBottom: 6, display: "block" }}>STREET / BALCONY ADDRESS</label>
                  <textarea rows={2} value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} style={{ ...styles.input, borderRadius: 20, resize: "none" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 800, color: C.primary, marginBottom: 6, display: "block" }}>CITY</label>
                    <input type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} style={styles.input} />
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 800, color: C.primary, marginBottom: 6, display: "block" }}>PINCODE</label>
                    <input type="text" value={formData.pincode} onChange={e => setFormData({...formData, pincode: e.target.value})} style={styles.input} />
                  </div>
                </div>
              </div>

              <h3 style={{ fontSize: 22, fontWeight: 800, color: C.primary, margin: "0 0 20px" }}>
                2. Select Payment Option
              </h3>

              <div style={{ display: "grid", gap: 12 }}>
                {[
                  { id: "upi", icon: Smartphone, title: "UPI Instant Payment (GPay, PhonePe, Paytm)" },
                  { id: "card", icon: CreditCard, title: "Credit / Debit Card" },
                  { id: "cod", icon: Truck, title: "Cash on Delivery" }
                ].map(opt => {
                  const isSel = paymentMode === opt.id;
                  const IconC = opt.icon;
                  return (
                    <div 
                      key={opt.id} 
                      onClick={() => setPaymentMode(opt.id)}
                      style={{
                        padding: "16px 20px",
                        borderRadius: 20,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        background: isSel ? C.pastels.yellow : "#FAF8F5",
                        border: isSel ? `2px solid ${C.primary}` : "1px solid rgba(18, 43, 30, 0.06)"
                      }}
                    >
                      <IconC size={20} color={C.primary} />
                      <span style={{ fontSize: 14, fontWeight: 800, color: C.primary }}>{opt.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Summary */}
            <div style={{ background: C.pastels.mint, padding: 32, borderRadius: 32, border: "1px solid rgba(18, 43, 30, 0.05)" }}>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: C.primary, margin: "0 0 20px" }}>
                Payment Summary
              </h3>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: C.textMid, marginBottom: 12 }}>
                <span>Subtotal & Packaging</span>
                <span style={{ fontWeight: 800, color: C.primary }}>₹{total - 99}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, color: C.textMid, marginBottom: 20, borderBottom: `1px solid rgba(18, 43, 30, 0.08)`, paddingBottom: 16 }}>
                <span>Plant Protection Care Fee</span>
                <span style={{ fontWeight: 800, color: C.primary }}>₹99</span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, fontWeight: 800, color: C.primary, marginBottom: 28 }}>
                <span>Total Amount</span>
                <span>₹{total}</span>
              </div>

              <button 
                className="pill-btn pill-btn-lime"
                style={{ width: "100%", padding: "16px", fontSize: 15, justifyContent: "center" }}
                onClick={() => navigate("order-confirm", { total, address: formData })}
              >
                Confirm & Place Order
              </button>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, color: C.primary, fontSize: 12, marginTop: 16, fontWeight: 700 }}>
                <ShieldCheck size={14} color={C.primary} /> 256-bit Encrypted Safe Transaction
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
