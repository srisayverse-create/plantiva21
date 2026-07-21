import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  Trophy, 
  ShieldCheck, 
  Target, 
  Smile, 
  Leaf, 
  Trees, 
  TreeDeciduous, 
  Flower, 
  Flower2,
  ArrowRight,
  Sparkles,
  Check,
  Star,
  ShoppingBag,
  CheckCircle2
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlantEmoji from '../components/PlantEmoji';
import ServiceIcon from '../components/ServiceIcon';
import { C, styles } from '../constants/designSystem';
import { SERVICES, PLANTS } from '../constants/mockData';
import leafOverlay from '../assets/houseplant_leaves_1782409091396.png';

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

interface HomeProps {
  navigate: (target: string, data?: any) => void;
}

export default function Home({ navigate }: HomeProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Best Seller");

  const sliderPlants = [
    { name: "Areca Palm", icon: Trees, bg: "#EAF3EB", type: "Air Purifier" },
    { name: "Snake Plant", icon: Sprout, bg: "#FBF5D5", type: "Low Light" },
    { name: "Peace Lily", icon: Flower, bg: "#FCEEE8", type: "Flowering" },
    { name: "ZZ Plant", icon: Leaf, bg: "#E8EEF9", type: "Easy Care" },
    { name: "Rubber Plant", icon: TreeDeciduous, bg: "#FDF1E6", type: "Bold Foliage" },
    { name: "Money Plant", icon: Flower2, bg: "#F3EAF8", type: "Climber" }
  ];

  const getIndex = (offset: number) => {
    return (activeIndex + offset + sliderPlants.length) % sliderPlants.length;
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % sliderPlants.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, sliderPlants.length]);

  const categories = ["Best Seller", "Air Purifier", "Low Light", "Flowering", "Easy Care"];

  // Benefit circles matching Alldae "Huge Benefits inside" section
  const benefits = [
    { name: "Pure Air", icon: "🍃", bg: C.pastels.pink, desc: "Toxins Removed" },
    { name: "Soil Nutrition", icon: "🧪", bg: C.pastels.blue, desc: "pH Balanced" },
    { name: "Doctor Care", icon: "🪴", bg: C.pastels.yellow, desc: "Expert Advice" },
    { name: "Pest Defense", icon: "🛡️", bg: C.pastels.orange, desc: "100% Organic" },
    { name: "Eco Planters", icon: "🌿", bg: C.pastels.mint, desc: "Sustainable" },
  ];

  // Featured Pastel Product Cards for "Discover our range"
  const rangeProducts = [
    { id: 1, name: "All-in-One Package", pack: "1 Box (3 Plants)", price: "₹1,299", bg: C.pastels.pink, tag: "Best Seller" },
    { id: 2, name: "Areca Palm", pack: "1 Pot (Air Purifier)", price: "₹499", bg: C.pastels.yellow, tag: "Air Purifying" },
    { id: 3, name: "Snake Plant", pack: "1 Pot (Low Light)", price: "₹399", bg: C.pastels.mint, tag: "Low Maintenance" },
    { id: 4, name: "Peace Lily", pack: "1 Pot (Flowering)", price: "₹499", bg: C.pastels.blue, tag: "Flowering" },
  ];

  // Social Grid Posts
  const socialPosts = [
    { handle: "@christian", img: "🪴", color: C.pastels.yellow },
    { handle: "@ilpadska", img: "🫖", color: C.pastels.pink },
    { handle: "@iamschris", img: "🌿", color: C.pastels.mint },
    { handle: "@plantivacare", img: "🌱", color: C.pastels.orange },
    { handle: "@myliestudio", img: "📦", color: C.pastels.purple },
  ];

  // Testimonials
  const reviews = [
    {
      name: "Elliot Mark",
      handle: "@ylicstudio",
      rating: 5.0,
      title: "Delicious! Great blend!",
      text: "I like the doctor visits due to the personal touch. Soil test gave exact nutrition formula for my balcony."
    },
    {
      name: "Elliot Mark",
      handle: "@ylicstudio",
      rating: 5.0,
      title: "Light and great taste",
      text: "Tried this at the plant expo, love the concept and the benefits. Plants are thriving after 3 months!"
    },
    {
      name: "Elliot Mark",
      handle: "@ylicstudio",
      rating: 5.0,
      title: "Great pick me up!",
      text: "I'll definitely be renewing this subscription again. High scientific advice for urban balconies."
    }
  ];

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} />

      <div style={styles.container}>
        
        {/* HERO BANNER - Soft rounded pale mint container matching Alldae screenshot */}
        <section style={{
          marginTop: 20,
          marginBottom: 60,
          background: "#E8F1EA",
          borderRadius: 36,
          padding: "60px 50px",
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Subtle leaf overlay */}
          <img 
            src={leafOverlay} 
            alt="" 
            className="animate-sway"
            style={{
              position: "absolute",
              right: "-8%",
              bottom: "-15%",
              width: "45%",
              opacity: 0.12,
              pointerEvents: "none"
            }}
          />

          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, alignItems: "center" }}>
            
            {/* Left Typography Column */}
            <div>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#FFFFFF",
                borderRadius: 9999,
                padding: "6px 16px",
                marginBottom: 24,
                boxShadow: "0 2px 8px rgba(18, 43, 30, 0.05)"
              }}>
                <img src={leafOverlay} alt="" style={{ width: 14, height: 14, objectFit: "cover" }} />
                <span style={{ fontSize: 12, fontWeight: 800, color: C.primary, letterSpacing: "0.5px" }}>
                  scientific soil & plant care
                </span>
              </div>

              <h1 style={{
                fontSize: 62,
                fontWeight: 800,
                color: C.primary,
                lineHeight: 1.1,
                margin: "0 0 20px",
                letterSpacing: "-1.5px"
              }}>
                Savour <span className="font-serif-italic" style={{ fontSize: 72, color: C.primaryMid }}>the Scientific</span> essence of plants in every corner.
              </h1>

              <p style={{
                color: C.textMid,
                fontSize: 16,
                lineHeight: 1.7,
                margin: "0 0 36px",
                maxWidth: 480
              }}>
                We combine scientific soil nutrition analysis with home gardening advice. We don't just sell plants—we recommend the right plants that will thrive in your home’s sunlight.
              </p>

              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <button
                  onClick={() => navigate("store")}
                  className="pill-btn pill-btn-lime"
                  style={{ padding: "14px 32px", fontSize: 15 }}
                >
                  Sip Fresh <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => navigate("book")}
                  className="pill-btn pill-btn-dark"
                  style={{ padding: "14px 28px", fontSize: 14 }}
                >
                  Book Visit
                </button>
              </div>

              {/* Floating Stat Badge */}
              <div style={{
                position: "absolute",
                right: 48,
                bottom: 48,
                textAlign: "right"
              }}>
                <div style={{ fontSize: 38, fontWeight: 800, color: C.primary, lineHeight: 1 }}>78%</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.textMid, maxWidth: 130 }}>Natural ingredients used in soil blend</div>
              </div>
            </div>

            {/* Right Interactive Card Slider */}
            <div 
              style={{ display: "flex", justifyContent: "center", position: "relative" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div style={{
                width: 280,
                height: 380,
                borderRadius: 32,
                background: "#FFFFFF",
                boxShadow: "0 20px 50px rgba(18, 43, 30, 0.08)",
                padding: "30px 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center"
              }}>
                <span style={{
                  fontSize: 11,
                  fontWeight: 800,
                  background: C.accentLime,
                  color: C.primary,
                  padding: "4px 14px",
                  borderRadius: 9999
                }}>
                  {sliderPlants[activeIndex].type}
                </span>

                <div style={{ animation: "float 4s ease-in-out infinite" }}>
                  <PlantEmoji name={sliderPlants[activeIndex].name} size={130} />
                </div>

                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: C.primary, margin: "0 0 4px" }}>
                    {sliderPlants[activeIndex].name}
                  </h3>
                  <span style={{ fontSize: 13, color: C.textLight, fontWeight: 600 }}>100% Organic Nursery Grown</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* DISCOVER OUR RANGE SECTION - Matching Alldae Screenshot */}
        <section style={{ marginBottom: 80 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: C.primary, margin: 0 }}>
              Discover <span className="font-serif-italic" style={{ fontSize: 52 }}>our range</span> -
            </h2>

            {/* Category Filter Pills */}
            <div style={{ display: "flex", gap: 10 }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: "8px 20px",
                    borderRadius: 9999,
                    border: "1.5px solid rgba(18, 43, 30, 0.2)",
                    background: activeFilter === cat ? C.primary : "transparent",
                    color: activeFilter === cat ? "#FFFFFF" : C.primary,
                    fontWeight: 700,
                    fontSize: 13,
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Pastel Product Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {rangeProducts.map(p => (
              <div
                key={p.id}
                className="alldae-card alldae-card-hover"
                style={{
                  background: p.bg,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 380,
                  cursor: "pointer"
                }}
                onClick={() => navigate("store")}
              >
                <div>
                  {/* Top Image Preview Frame */}
                  <div style={{
                    height: 200,
                    borderRadius: 20,
                    background: "rgba(255, 255, 255, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20
                  }}>
                    <PlantEmoji name={p.name} size={110} />
                  </div>

                  <h3 style={{ fontSize: 20, fontWeight: 800, color: C.primary, margin: "0 0 4px" }}>
                    {p.name}
                  </h3>
                </div>

                {/* Bottom Bar: Pill Tag & Price Dropdown */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 800,
                    background: C.accentYellow,
                    color: C.primary,
                    padding: "6px 12px",
                    borderRadius: 8
                  }}>
                    {p.pack}
                  </span>
                  <span style={{
                    fontSize: 13,
                    fontWeight: 800,
                    background: "#FFFFFF",
                    color: C.primary,
                    padding: "6px 14px",
                    borderRadius: 8,
                    boxShadow: "0 2px 6px rgba(18,43,30,0.05)"
                  }}>
                    {p.price} v
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFIT CIRCLES SECTION ("Huge Benefits inside our detoxified Plantiva") */}
        <section style={{ marginBottom: 90, textAlign: "center" }}>
          <h2 style={{ fontSize: 44, fontWeight: 800, color: C.primary, marginBottom: 44 }}>
            Huge Benefits <span className="font-serif-italic" style={{ fontSize: 52 }}>inside</span> our detoxified plantiva
          </h2>

          <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap" }}>
            {benefits.map(b => (
              <div key={b.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 120 }}>
                <div style={{
                  width: 90,
                  height: 90,
                  borderRadius: "50%",
                  background: b.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 40,
                  marginBottom: 16,
                  boxShadow: "0 8px 20px rgba(18, 43, 30, 0.05)"
                }}>
                  {b.icon}
                </div>
                <div style={{ fontSize: 15, fontWeight: 800, color: C.primary, marginBottom: 2 }}>{b.name}</div>
                <div style={{ fontSize: 12, color: C.textLight, fontWeight: 600 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROMO SPLIT BANNER ("Nurture real greenery every time") */}
        <section style={{
          background: C.pastels.orange,
          borderRadius: 36,
          padding: "60px 50px",
          marginBottom: 90,
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: 50,
          alignItems: "center"
        }}>
          {/* Left Visual Card */}
          <div style={{
            height: 320,
            borderRadius: 28,
            background: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 16px 36px rgba(18, 43, 30, 0.06)"
          }}>
            <PlantEmoji name="Areca Palm" size={160} />
          </div>

          {/* Right Content */}
          <div>
            <h2 style={{ fontSize: 44, fontWeight: 800, color: C.primary, margin: "0 0 16px", lineHeight: 1.15 }}>
              Nurture <span className="font-serif-italic" style={{ fontSize: 52 }}>real greenery</span> every time
            </h2>
            <p style={{ color: C.textMid, fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
              Enjoy the pure health of real plants, refreshing, natural, and absolutely thriving in your space.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {[
                "Natural air purification without artificial sprays",
                "Scientifically formulated soil composition from expert analysis",
                "Verified plant doctor consultations included on demand"
              ].map(point => (
                <div key={point} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: C.accentYellow,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: C.primary
                  }}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: C.primary }}>{point}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <button
                onClick={() => navigate("book")}
                className="pill-btn pill-btn-lime"
                style={{ padding: "12px 28px" }}
              >
                Shop Now <ArrowRight size={15} />
              </button>

              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 32, fontWeight: 800, color: C.primary, lineHeight: 1 }}>85%</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.textMid }}>Plant-based organic recipe</div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL GRID SECTION ("Thriving on social") */}
        <section style={{ marginBottom: 90 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
            <h2 style={{ fontSize: 40, fontWeight: 800, color: C.primary, margin: 0 }}>
              Thriving <span className="font-serif-italic" style={{ fontSize: 48 }}>on social</span>
            </h2>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 800, color: C.primary }}>
              <InstagramIcon size={18} /> @plantivacare
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 18 }}>
            {socialPosts.map((post, i) => (
              <div
                key={i}
                style={{
                  height: 240,
                  borderRadius: 24,
                  background: post.color,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: 16,
                  boxShadow: "0 8px 20px rgba(18, 43, 30, 0.04)"
                }}
              >
                <div style={{ fontSize: 50, textAlign: "center", marginTop: 20 }}>{post.img}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: C.primary, opacity: 0.8 }}>{post.handle}</div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS SECTION ("Our customers love us") */}
        <section style={{
          background: C.pastels.pink,
          borderRadius: 36,
          padding: "60px 40px",
          marginBottom: 80,
          textAlign: "center"
        }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🥰</div>
          <h2 style={{ fontSize: 40, fontWeight: 800, color: C.primary, margin: "0 0 40px" }}>
            Our customers <span className="font-serif-italic" style={{ fontSize: 48 }}>love us</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {reviews.map((r, i) => (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  borderRadius: 24,
                  padding: 28,
                  textAlign: "left",
                  boxShadow: "0 10px 30px rgba(18, 43, 30, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <h4 style={{ fontSize: 16, fontWeight: 800, color: C.primary, margin: "0 0 8px" }}>
                    {r.title}
                  </h4>
                  <p style={{ fontSize: 13, color: C.textMid, lineHeight: 1.6, margin: "0 0 20px" }}>
                    {r.text}
                  </p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(18, 43, 30, 0.06)", paddingTop: 16 }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 800, color: C.primary }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: C.textLight }}>{r.handle}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 800, color: C.primary }}>
                    5.0 <Star size={14} fill={C.primary} color={C.primary} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Floating Action Link to Admin Dashboard */}
      <div 
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: C.primary,
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 24px rgba(18,43,30,0.35)",
          cursor: "pointer",
          zIndex: 99,
          transition: "all 0.2s"
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1.08) translateY(-2px)";
          e.currentTarget.style.background = C.primaryLight;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
          e.currentTarget.style.background = C.primary;
        }}
        onClick={() => navigate("admin")}
      >
        <Sprout size={22} />
      </div>

      <Footer />
    </div>
  );
}

