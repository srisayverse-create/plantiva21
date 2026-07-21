import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlantEmoji from '../components/PlantEmoji';
import { C, styles } from '../constants/designSystem';
import { PLANTS } from '../constants/mockData';
import { Heart, ArrowLeft, Filter } from 'lucide-react';

interface ProductListProps {
  navigate: (target: string, data?: any) => void;
}

export default function ProductList({ navigate }: ProductListProps) {
  const [priceMax, setPriceMax] = useState(1000);
  const [selectedLight, setSelectedLight] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  const toggleFavorite = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getPlantSubtitle = (tags: string[]) => {
    if (tags.includes("Air Purifying")) return "Glow & Air Purification";
    if (tags.includes("Indoor")) return "Daily Balance & Fresh Air";
    if (tags.includes("Balcony")) return "Sunlight & Natural Vitality";
    if (tags.includes("Succulent")) return "Low Maintenance Essential";
    if (tags.includes("Flowering")) return "Vibrant Blooms & Joy";
    return "Science-Backed Foliage";
  };

  const filteredPlants = PLANTS.filter(p => {
    const matchesPrice = p.price <= priceMax;
    const matchesLight = selectedLight.length === 0 || selectedLight.includes(p.light);
    return matchesPrice && matchesLight;
  });

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} cartCount={2} />
      <div style={styles.container}>
        <div style={{ padding: "24px 0 20px", color: C.textLight, fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
          <span onClick={() => navigate("store")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 4, color: "#0D2A20", fontWeight: 800 }}>
            <ArrowLeft size={14} /> Store Catalog
          </span>
          <span>/</span>
          <span style={{ color: "#0D2A20", fontWeight: 800 }}>All Plants</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 36, paddingBottom: 80 }}>
          {/* Filters Panel */}
          <div>
            <div style={{ background: "#FFFFFF", padding: 24, borderRadius: 28, border: "1px solid rgba(13, 42, 32, 0.06)", boxShadow: "0 10px 30px -5px rgba(13, 42, 32, 0.04)" }}>
              <div style={{ fontWeight: 800, fontSize: 15, color: "#0D2A20", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                <Filter size={16} /> Filters
              </div>

              {/* Price Filter */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontWeight: 800, color: "#0D2A20", fontSize: 13, marginBottom: 10 }}>Max Price: ₹{priceMax}</div>
                <input 
                  type="range" 
                  min={100} 
                  max={1000} 
                  step={50}
                  value={priceMax} 
                  onChange={e => setPriceMax(Number(e.target.value))} 
                  style={{ width: "100%", accentColor: "#0D2A20" }} 
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.textLight, marginTop: 4, fontWeight: 700 }}>
                  <span>₹100</span><span>₹1,000</span>
                </div>
              </div>

              {/* Sunlight Filter */}
              <div style={{ marginBottom: 28 }}>
                <div style={{ fontWeight: 800, color: "#0D2A20", fontSize: 13, marginBottom: 12 }}>Sunlight Requirement</div>
                {["Low Light", "Medium Light", "Bright Light"].map(l => (
                  <label key={l} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, cursor: "pointer", fontSize: 13, color: C.textMid, fontWeight: 600 }}>
                    <input 
                      type="checkbox" 
                      checked={selectedLight.includes(l)} 
                      onChange={() => setSelectedLight(prev => prev.includes(l) ? prev.filter(x => x !== l) : [...prev, l])}
                      style={{ accentColor: "#0D2A20" }}
                    />
                    {l}
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Plant Grid */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {filteredPlants.map((p) => (
                <div 
                  key={p.id} 
                  className="alldae-card-hover"
                  style={{ 
                    background: "#F4F4F0", 
                    borderRadius: 28,
                    padding: 24, 
                    cursor: "pointer", 
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    border: "1px solid rgba(13, 42, 32, 0.04)"
                  }}
                  onClick={() => navigate("product-detail", p)}
                >
                  <div 
                    onClick={e => toggleFavorite(e, p.id)}
                    style={{ position: "absolute", top: 16, right: 16, cursor: "pointer", color: favorites[p.id] ? C.danger : "#0D2A20", zIndex: 2 }}
                  >
                    <Heart size={18} fill={favorites[p.id] ? C.danger : "none"} />
                  </div>

                  {!p.stock && (
                    <div style={{ position: "absolute", top: 16, left: 16, background: C.danger, color: "#FFFFFF", borderRadius: 9999, padding: "3px 10px", fontSize: 10, fontWeight: 800, zIndex: 2 }}>
                      Sold Out
                    </div>
                  )}

                  <div>
                    {/* Centered Image */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 16, height: 170, background: "#FFFFFF", borderRadius: 20 }}>
                      <PlantEmoji name={p.name} size={100} />
                    </div>

                    {/* Title & Rating */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                      <h3 style={{ fontWeight: 800, color: "#0D2A20", fontSize: 18, margin: 0 }}>{p.name}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#FFFFFF", padding: "2px 8px", borderRadius: 9999 }}>
                        <span style={{ color: "#EAB308", fontSize: 12 }}>★</span>
                        <span style={{ fontSize: 12, fontWeight: 800, color: "#0D2A20" }}>{p.rating}</span>
                      </div>
                    </div>

                    {/* Subtitle */}
                    <div style={{ fontSize: 12, color: "rgba(13, 42, 32, 0.6)", fontWeight: 600, marginBottom: 20 }}>
                      {getPlantSubtitle(p.tags)}
                    </div>
                  </div>

                  {/* Price & Pill Button */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <span style={{ fontWeight: 800, color: "#0D2A20", fontSize: 20 }}>₹{p.price}</span>
                      <span style={{ color: "rgba(13, 42, 32, 0.4)", fontSize: 12, textDecoration: "line-through", marginLeft: 6 }}>₹{p.originalPrice}</span>
                    </div>

                    <button 
                      style={{ 
                        background: p.stock ? "#0D2A20" : "rgba(13, 42, 32, 0.3)", 
                        color: "#FFFFFF", 
                        border: "none",
                        padding: "8px 18px", 
                        borderRadius: 9999,
                        fontSize: 12, 
                        fontWeight: 800,
                        cursor: p.stock ? "pointer" : "not-allowed"
                      }} 
                      disabled={!p.stock}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}


