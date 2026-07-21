import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Rating from '../components/Rating';
import PlantEmoji from '../components/PlantEmoji';
import { C, styles } from '../constants/designSystem';
import { PLANTS } from '../constants/mockData';
import { CheckCircle, Search, ShoppingBag, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Leaf, Heart, Sprout } from 'lucide-react';

interface StoreProps {
  navigate: (target: string, data?: any) => void;
}

export default function Store({ navigate }: StoreProps) {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [cartCount, setCartCount] = useState(1);
  const [emailInput, setEmailInput] = useState("");

  const categories = [
    "All Products",
    "Indoor Plants", 
    "Balcony Plants", 
    "Wellness Plants", 
    "Air Purifying", 
    "Flowering"
  ];

  // Plant subtitle / tag helper to match Vitonix subheadings
  const getPlantSubtitle = (tags: string[]) => {
    if (tags.includes("Air Purifying")) return "Glow & Air Purification";
    if (tags.includes("Indoor")) return "Daily Balance & Fresh Air";
    if (tags.includes("Balcony")) return "Sunlight & Natural Vitality";
    if (tags.includes("Succulent")) return "Low Maintenance Essential";
    if (tags.includes("Flowering")) return "Vibrant Blooms & Joy";
    return "Science-Backed Foliage";
  };

  // Filter plants based on active category and search query
  const filteredPlants = PLANTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeCategory === "All Products") return matchesSearch;
    
    const categoryTagMap: Record<string, string> = {
      "Indoor Plants": "Indoor",
      "Balcony Plants": "Balcony",
      "Wellness Plants": "Air Purifying",
      "Air Purifying": "Air Purifying",
      "Flowering": "Flowering"
    };

    const targetTag = categoryTagMap[activeCategory];
    const matchesCategory = targetTag ? p.tags.some(t => t.toLowerCase().includes(targetTag.toLowerCase())) : true;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCartCount(prev => prev + 1);
    setShowNotification(true);
  };

  useEffect(() => {
    if (!showNotification) return;
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [showNotification]);

  return (
    <div style={{ background: C.bg, minHeight: "100vh", position: "relative" }}>
      <Navbar navigate={navigate} cartCount={cartCount} />
      
      {/* Toast Notification */}
      {showNotification && (
        <div style={{
          position: "fixed",
          top: 100,
          right: 24,
          background: "#0D2A20",
          color: "#FFFFFF",
          padding: "14px 24px",
          borderRadius: 9999,
          boxShadow: "0 10px 30px rgba(13, 42, 32, 0.25)",
          display: "flex",
          alignItems: "center",
          gap: 10,
          zIndex: 1000,
          animation: "float 0.3s ease"
        }}>
          <CheckCircle color={C.accentLime} size={20} />
          <span style={{ fontWeight: 700, fontSize: 14 }}>Plant added to your nursery cart!</span>
        </div>
      )}

      {/* VITONIX HERO BANNER */}
      <section style={{ 
        background: "#FAF7E9", 
        padding: "60px 24px 70px", 
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(18,43,30,0.06)"
      }}>
        {/* Soft floating circles background elements */}
        <div style={{ position: "absolute", top: -40, left: "10%", width: 140, height: 140, borderRadius: "50%", background: "rgba(214, 240, 69, 0.15)", filter: "blur(30px)" }} />
        <div style={{ position: "absolute", bottom: -30, right: "12%", width: 180, height: 180, borderRadius: "50%", background: "rgba(231, 243, 236, 0.6)", filter: "blur(40px)" }} />

        <div style={{ maxWidth: 780, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Top Pill Badge */}
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: 8, 
            background: "#0D2A20", 
            color: "#FFFFFF", 
            padding: "6px 20px", 
            borderRadius: 9999, 
            fontSize: 12, 
            fontWeight: 800, 
            letterSpacing: "0.5px",
            marginBottom: 20
          }}>
            <span>✦</span>
            <span>Products List</span>
            <span>✦</span>
          </div>

          <h1 style={{ fontSize: 52, fontWeight: 800, color: "#0D2A20", margin: "0 0 16px", letterSpacing: "-1.5px", lineHeight: 1.1 }}>
            Explore Our Essentials
          </h1>

          <p style={{ color: "rgba(13, 42, 32, 0.7)", fontSize: 16, lineHeight: 1.7, maxWidth: 620, margin: "0 auto 32px" }}>
            Discover a curated collection of daily plants designed to support air purification, natural stress relief, aesthetics, and balcony wellness all in one place.
          </p>

          {/* Search bar inside Hero */}
          <div style={{ position: "relative", maxWidth: 440, margin: "0 auto" }}>
            <Search size={18} color="#0D2A20" style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)" }} />
            <input 
              type="text" 
              placeholder="Search for plants (e.g. Snake Plant, Areca Palm)..." 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                height: 50,
                borderRadius: 9999,
                border: "1px solid rgba(13, 42, 32, 0.15)",
                background: "#FFFFFF",
                paddingLeft: 48,
                paddingRight: 20,
                fontSize: 14,
                fontWeight: 600,
                color: "#0D2A20",
                boxShadow: "0 4px 20px rgba(13, 42, 32, 0.05)",
                outline: "none"
              }}
            />
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER PILLS BAR */}
      <section style={{ padding: "40px 24px 20px" }}>
        <div style={styles.container}>
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            gap: 12, 
            flexWrap: "wrap",
            marginBottom: 40 
          }}>
            {categories.map(cat => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "10px 24px",
                    borderRadius: 9999,
                    border: isActive ? "none" : "1px solid rgba(13, 42, 32, 0.12)",
                    background: isActive ? "#0D2A20" : "#F4F4F0",
                    color: isActive ? "#FFFFFF" : "#0D2A20",
                    fontWeight: 800,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "all 0.2s ease-in-out",
                    boxShadow: isActive ? "0 4px 14px rgba(13, 42, 32, 0.2)" : "none"
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* VITONIX 3-COLUMN PRODUCT CARDS GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, marginBottom: 80 }}>
            {filteredPlants.map(p => (
              <div
                key={p.id}
                onClick={() => navigate("product-detail", p)}
                style={{
                  background: "#F4F4F0",
                  borderRadius: 28,
                  padding: 24,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  border: "1px solid rgba(13, 42, 32, 0.04)"
                }}
                className="alldae-card-hover"
              >
                <div>
                  {/* Centered Image Container with Whitespace */}
                  <div style={{
                    background: "#FFFFFF",
                    borderRadius: 20,
                    height: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                    position: "relative"
                  }}>
                    <PlantEmoji name={p.name} size={110} />
                    
                    {!p.stock && (
                      <div style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        background: "#E53E3E",
                        color: "#FFFFFF",
                        padding: "3px 10px",
                        borderRadius: 9999,
                        fontSize: 10,
                        fontWeight: 800
                      }}>
                        Sold Out
                      </div>
                    )}
                  </div>

                  {/* Title & Rating Row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                    <h3 style={{ fontWeight: 800, fontSize: 18, color: "#0D2A20", margin: 0 }}>
                      {p.name}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, background: "#FFFFFF", padding: "2px 8px", borderRadius: 9999 }}>
                      <span style={{ color: "#EAB308", fontSize: 12 }}>★</span>
                      <span style={{ fontSize: 12, fontWeight: 800, color: "#0D2A20" }}>{p.rating}</span>
                    </div>
                  </div>

                  {/* Subtitle / Benefit Tag */}
                  <div style={{ fontSize: 12, color: "rgba(13, 42, 32, 0.6)", fontWeight: 600, marginBottom: 20 }}>
                    {getPlantSubtitle(p.tags)}
                  </div>
                </div>

                {/* Bottom Row: Price + Dark Pill Add to Cart Button */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span style={{ fontSize: 20, fontWeight: 800, color: "#0D2A20" }}>₹{p.price}</span>
                    {p.originalPrice > p.price && (
                      <span style={{ fontSize: 12, color: "rgba(13, 42, 32, 0.4)", textDecoration: "line-through", marginLeft: 6 }}>
                        ₹{p.originalPrice}
                      </span>
                    )}
                  </div>

                  <button
                    disabled={!p.stock}
                    onClick={(e) => handleAddToCart(e)}
                    style={{
                      background: p.stock ? "#0D2A20" : "rgba(13, 42, 32, 0.3)",
                      color: "#FFFFFF",
                      border: "none",
                      padding: "8px 18px",
                      borderRadius: 9999,
                      fontSize: 12,
                      fontWeight: 800,
                      cursor: p.stock ? "pointer" : "not-allowed",
                      display: "flex",
                      alignItems: "center",
                      gap: 6
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* "A SMARTER APPROACH TO PLANT CARE" DIAGRAM SECTION */}
          <div style={{ 
            background: "#FFFFFF", 
            borderRadius: 36, 
            padding: "60px 40px", 
            textAlign: "center", 
            marginBottom: 70,
            border: "1px solid rgba(13, 42, 32, 0.06)",
            boxShadow: "0 10px 30px -5px rgba(13, 42, 32, 0.04)"
          }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, color: "#0D2A20", margin: "0 0 48px", letterSpacing: "-1px" }}>
              A Smarter Approach to Daily Plant Care
            </h2>

            <div style={{ position: "relative", maxWidth: 640, margin: "0 auto", height: 380 }}>
              {/* Circular Dashed Ring */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 320,
                height: 320,
                borderRadius: "50%",
                border: "2px dashed rgba(13, 42, 32, 0.15)",
                pointerEvents: "none"
              }} />

              {/* Central Bottle / Plant Container */}
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 140,
                height: 140,
                borderRadius: "50%",
                background: "#0D2A20",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                boxShadow: "0 12px 32px rgba(13, 42, 32, 0.25)",
                zIndex: 2
              }}>
                <div style={{ fontSize: 42 }}>🌿</div>
                <div style={{ fontSize: 13, fontWeight: 800, color: C.accentLime, marginTop: 4 }}>Plantiva</div>
              </div>

              {/* 5 Surrounding Circular Benefit Nodes */}
              {[
                { title: "Science backed", pos: { top: "0%", left: "50%", transform: "translateX(-50%)" } },
                { title: "Clean soil mix", pos: { top: "28%", right: "2%" } },
                { title: "Trusted quality", pos: { bottom: "5%", right: "12%" } },
                { title: "Pure organic care", pos: { bottom: "5%", left: "12%" } },
                { title: "Targeted wellness", pos: { top: "28%", left: "2%" } }
              ].map((node, i) => (
                <div 
                  key={i} 
                  style={{
                    position: "absolute",
                    ...node.pos,
                    width: 110,
                    height: 110,
                    borderRadius: "50%",
                    background: "#F4F4F0",
                    border: "1px solid rgba(13, 42, 32, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 12,
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#0D2A20",
                    boxShadow: "0 6px 16px rgba(0,0,0,0.03)",
                    zIndex: 3
                  }}
                >
                  {node.title}
                </div>
              ))}
            </div>
          </div>

          {/* SPLIT HIGHLIGHT CALLOUT CARDS */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, marginBottom: 70 }}>
            {/* Left Card: Plant Image Card */}
            <div style={{ 
              background: "#E2EBE4", 
              borderRadius: 32, 
              padding: 40, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              minHeight: 280
            }}>
              <div style={{ textAlign: "center" }}>
                <PlantEmoji name="Areca Palm" size={140} />
                <div style={{ fontWeight: 800, color: "#0D2A20", fontSize: 16, marginTop: 12 }}>Organically Grown & Inspected</div>
              </div>
            </div>

            {/* Right Card: Dark Forest Green Card */}
            <div style={{ 
              background: "#0D2A20", 
              borderRadius: 32, 
              padding: 44, 
              color: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              <h3 style={{ fontSize: 32, fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.5px" }}>
                Ready to Elevate Your Plant Care
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: 15, lineHeight: 1.6, marginBottom: 28, maxWidth: 360 }}>
                Choose your plants, add to cart, and start your green wellness journey today with expert care support.
              </p>
              <div>
                <button
                  onClick={() => navigate("product-list")}
                  style={{
                    background: C.accentLime,
                    color: "#0D2A20",
                    border: "none",
                    padding: "12px 28px",
                    borderRadius: 9999,
                    fontWeight: 800,
                    fontSize: 14,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8
                  }}
                >
                  Shop Now <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* SUBSCRIBE NOW BANNER */}
          <div style={{ 
            background: "#EFF5CD", 
            borderRadius: 36, 
            padding: "50px 60px", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 40
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <h2 style={{ fontSize: 44, fontWeight: 800, color: "#0D2A20", margin: 0, letterSpacing: "-1px" }}>
                  Subscribe Now
                </h2>
                <div style={{ 
                  width: 44, 
                  height: 44, 
                  borderRadius: "50%", 
                  border: "2px solid #0D2A20", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  <ArrowUpRight size={22} color="#0D2A20" />
                </div>
              </div>
              <p style={{ color: "rgba(13, 42, 32, 0.7)", fontSize: 15, marginTop: 8, margin: "8px 0 0" }}>
                Get expert soil tips, seasonal nursery offers, and care guidance directly in your inbox.
              </p>
            </div>

            <div style={{ display: "flex", gap: 10, width: "100%", maxWidth: 400 }}>
              <input 
                type="email"
                placeholder="Enter your email address..."
                value={emailInput}
                onChange={e => setEmailInput(e.target.value)}
                style={{
                  flex: 1,
                  height: 48,
                  borderRadius: 9999,
                  border: "1px solid rgba(13, 42, 32, 0.15)",
                  background: "#FFFFFF",
                  paddingLeft: 20,
                  fontSize: 14,
                  outline: "none"
                }}
              />
              <button 
                onClick={() => setEmailInput("")}
                style={{
                  background: "#0D2A20",
                  color: "#FFFFFF",
                  border: "none",
                  padding: "0 24px",
                  borderRadius: 9999,
                  fontWeight: 800,
                  fontSize: 14,
                  cursor: "pointer"
                }}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


