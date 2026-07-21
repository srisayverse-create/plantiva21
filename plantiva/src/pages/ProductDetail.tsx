import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Rating from '../components/Rating';
import PlantEmoji from '../components/PlantEmoji';
import { C, styles } from '../constants/designSystem';
import { PLANTS } from '../constants/mockData';
import type { PlantItem } from '../constants/mockData';

import { Sun, Droplets, ShieldCheck, ShoppingBag, ArrowLeft, Plus, Minus, CheckCircle } from 'lucide-react';

interface ProductDetailProps {
  navigate: (target: string, data?: any) => void;
  plant?: PlantItem;
}

export default function ProductDetail({ navigate, plant }: ProductDetailProps) {
  const location = useLocation();
  const p = plant || (location.state as PlantItem) || PLANTS[0];
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} />
      <div style={styles.container}>
        {/* Breadcrumb */}
        <div style={{ padding: "24px 0 16px", color: C.textLight, fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
          <span onClick={() => navigate("store")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 4, color: C.primary, fontWeight: 800 }}>
            <ArrowLeft size={14} /> Nursery Store
          </span>
          <span>/</span>
          <span style={{ color: C.primary, fontWeight: 800 }}>{p.name}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, paddingBottom: 80 }}>
          {/* Left Column: Plant Visual & Care Icons */}
          <div>
            <div className="alldae-card" style={{ borderRadius: 36, height: 380, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, background: C.pastels.mint }}>
              <PlantEmoji name={p.name} size={150} />
            </div>

            {/* Quick Care Indicator Panels */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              <div style={{ background: "#FFFFFF", padding: 20, borderRadius: 24, textAlign: "center", border: "1px solid rgba(18, 43, 30, 0.06)" }}>
                <Sun size={22} color={C.primary} style={{ margin: "0 auto 6px" }} />
                <div style={{ fontSize: 11, color: C.textLight, fontWeight: 800 }}>SUNLIGHT</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: C.primary, marginTop: 2 }}>{p.light}</div>
              </div>
              <div style={{ background: "#FFFFFF", padding: 20, borderRadius: 24, textAlign: "center", border: "1px solid rgba(18, 43, 30, 0.06)" }}>
                <Droplets size={22} color={C.primary} style={{ margin: "0 auto 6px" }} />
                <div style={{ fontSize: 11, color: C.textLight, fontWeight: 800 }}>WATERING</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: C.primary, marginTop: 2 }}>Every 3-4 Days</div>
              </div>
              <div style={{ background: "#FFFFFF", padding: 20, borderRadius: 24, textAlign: "center", border: "1px solid rgba(18, 43, 30, 0.06)" }}>
                <ShieldCheck size={22} color={C.primary} style={{ margin: "0 auto 6px" }} />
                <div style={{ fontSize: 11, color: C.textLight, fontWeight: 800 }}>GUARANTEE</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: C.primary, marginTop: 2 }}>14 Day Replacement</div>
              </div>
            </div>
          </div>

          {/* Right Column: Plant Information & Action Buttons */}
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              {p.tags.map(t => (
                <span key={t} style={{ fontSize: 11, fontWeight: 800, background: C.accentLime, color: C.primary, padding: "4px 14px", borderRadius: 9999 }}>
                  {t}
                </span>
              ))}
            </div>

            <h1 style={{ fontSize: 48, fontWeight: 800, color: C.primary, margin: "0 0 8px", letterSpacing: "-1px" }}>{p.name}</h1>
            
            <div style={{ marginBottom: 20 }}>
              <Rating value={p.rating} count={p.reviews} />
            </div>

            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: 38, fontWeight: 800, color: C.primary }}>₹{p.price}</span>
              <span style={{ fontSize: 16, color: C.textLight, textDecoration: "line-through" }}>₹{p.originalPrice}</span>
              <span style={{ fontSize: 12, fontWeight: 800, color: C.primary, background: C.accentYellow, padding: "4px 12px", borderRadius: 9999 }}>
                Save ₹{p.originalPrice - p.price}
              </span>
            </div>

            <p style={{ color: C.textMid, fontSize: 15, lineHeight: 1.7, marginBottom: 30 }}>
              Nurtured with organic soil health mixtures, tested for optimal root growth. Recommended for balcony gardens and living spaces.
            </p>

            {/* Quantity Selector */}
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
              <span style={{ fontWeight: 800, color: C.primary, fontSize: 14 }}>Quantity:</span>
              <div style={{ background: "#FFFFFF", border: "1px solid rgba(18, 43, 30, 0.1)", display: "flex", alignItems: "center", gap: 14, padding: "6px 16px", borderRadius: 9999 }}>
                <button 
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  style={{ border: "none", background: "transparent", cursor: "pointer", color: C.primary, display: "flex", alignItems: "center" }}
                >
                  <Minus size={16} />
                </button>
                <span style={{ fontWeight: 800, fontSize: 16, color: C.primary, minWidth: 24, textAlign: "center" }}>{qty}</span>
                <button 
                  onClick={() => setQty(qty + 1)}
                  style={{ border: "none", background: "transparent", cursor: "pointer", color: C.primary, display: "flex", alignItems: "center" }}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
              <button 
                onClick={handleAddToCart}
                className="pill-btn pill-btn-lime"
                style={{ 
                  flex: 1, 
                  padding: "16px", 
                  fontSize: 15, 
                  fontWeight: 800, 
                  justifyContent: "center"
                }}
              >
                {added ? <CheckCircle size={18} /> : <ShoppingBag size={18} />}
                {added ? "Added to Cart!" : "Add to Nursery Cart"}
              </button>
              <button 
                onClick={() => navigate("checkout")}
                className="pill-btn pill-btn-dark"
                style={{ 
                  flex: 1, 
                  padding: "16px", 
                  fontSize: 15, 
                  fontWeight: 800, 
                  justifyContent: "center"
                }}
              >
                Buy Now
              </button>
            </div>

            <div style={{ padding: 24, borderRadius: 24, background: C.pastels.yellow, border: "1px solid rgba(18, 43, 30, 0.05)" }}>
              <div style={{ fontWeight: 800, color: C.primary, fontSize: 13, marginBottom: 4 }}>💡 Plant Doctor Tip</div>
              <div style={{ fontSize: 13, color: C.textMid, lineHeight: 1.5 }}>
                Pair this plant with Plantiva Soil Mix during repotting for enhanced root respiration and optimal growth.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

