import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { C, styles } from '../constants/designSystem';
import mascotImg from '../assets/Mascot.png';
import { Award, Compass, Sun, ShieldCheck, Heart, Sparkles, Sprout, CheckCircle2, Play, Pause, ChevronRight, ChevronLeft, ArrowRight, RotateCcw, AlertTriangle } from 'lucide-react';

interface AboutProps {
  navigate: (target: string, data?: any) => void;
}

export default function About({ navigate }: AboutProps) {
  const [activeChapter, setActiveChapter] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [comparisonMode, setComparisonMode] = useState<"synthetic" | "scientific">("scientific");
  const [visionTab, setVisionTab] = useState<"vision" | "mission">("vision");
  const [interactiveQuote, setInteractiveQuote] = useState(false);

  const chapters = [
    { id: 0, title: "1. Scientific Roots", icon: Award, label: "35+ Years Legacy" },
    { id: 1, title: "2. Balcony Realities", icon: AlertTriangle, label: "The Nursery Problem" },
    { id: 2, title: "3. Birth of Plantiva", icon: Sprout, label: "Science Meets Home" },
    { id: 3, title: "4. Our 5 Core Pillars", icon: ShieldCheck, label: "What Makes Us Different" },
    { id: 4, title: "5. Vision & Mission", icon: Compass, label: "The Green Future" }
  ];

  const diffPoints = [
    {
      icon: Sun,
      title: "Right Plant for Right Balcony",
      desc: "Every home is unique. We recommend plants based on your actual growing conditions, sunlight exposure, and balcony direction.",
      bg: C.pastels.yellow
    },
    {
      icon: Award,
      title: "35+ Years Soil Science",
      desc: "Our recommendations are built on 35+ years of government soil testing expertise in soil health and plant nutrition.",
      bg: C.pastels.mint
    },
    {
      icon: Sprout,
      title: "Healthy Soil, Healthy Plants",
      desc: "We focus on long-term plant health using organic soil mixes and balanced nutrition rather than temporary chemical fixes.",
      bg: C.pastels.pink
    },
    {
      icon: Heart,
      title: "Honest Guidance",
      desc: "Our goal is not simply to sell plants but to give you the guidance and confidence to become a successful plant parent.",
      bg: C.pastels.blue
    },
    {
      icon: ShieldCheck,
      title: "Sustainable Green Living",
      desc: "We believe every thriving balcony contributes to a greener, healthier, and happier community for urban cities.",
      bg: C.pastels.orange
    }
  ];

  // Auto-play timer loop
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveChapter(prev => (prev + 1) % chapters.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay, chapters.length]);

  const progressPercent = ((activeChapter + 1) / chapters.length) * 100;

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} />

      {/* HERO BANNER STORYLINE INTRO */}
      <section style={{ 
        background: C.pastels.mint, 
        padding: "60px 0 50px",
        borderRadius: 36,
        margin: "20px 24px 40px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ ...styles.container, display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 40, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.accentLime, color: C.primary, padding: "6px 16px", borderRadius: 9999, fontSize: 12, fontWeight: 800, marginBottom: 16 }}>
              <Sparkles size={14} /> INTERACTIVE STORYLINE EXPERIENCE
            </div>
            
            <h1 style={{ fontSize: 50, fontWeight: 800, color: C.primary, margin: "10px 0 16px", lineHeight: 1.1, letterSpacing: "-1.5px" }}>
              Every Great Garden <br />
              <span className="font-serif-italic" style={{ fontSize: 58, color: C.primary }}>Begins with Trust.</span>
            </h1>

            <p style={{ color: C.textMid, fontSize: 16, lineHeight: 1.7, marginBottom: 28, maxWidth: 540 }}>
              Step inside the Plantiva journey. Explore how 35+ years of government soil science evolved into India's premier balcony wellness platform.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <button 
                onClick={() => setAutoPlay(!autoPlay)}
                style={{
                  background: autoPlay ? C.primary : C.accentLime,
                  color: autoPlay ? "#FFFFFF" : C.primary,
                  border: "none",
                  padding: "12px 26px",
                  borderRadius: 9999,
                  fontWeight: 800,
                  fontSize: 14,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  boxShadow: "0 4px 16px rgba(18, 43, 30, 0.15)"
                }}
              >
                {autoPlay ? <Pause size={16} /> : <Play size={16} />}
                {autoPlay ? "Pause Storyline" : "Auto-Play Storyline"}
              </button>

              <button 
                className="pill-btn pill-btn-outline" 
                style={{ padding: "12px 24px" }} 
                onClick={() => navigate("book")}
              >
                Book Consultation <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <div style={{ textAlign: "center", position: "relative" }}>
            <div 
              onClick={() => setInteractiveQuote(!interactiveQuote)}
              style={{
                display: "inline-block",
                padding: 24,
                borderRadius: 32,
                background: "#FFFFFF",
                boxShadow: "0 20px 40px rgba(18, 43, 30, 0.08)",
                cursor: "pointer",
                position: "relative"
              }}
              className="alldae-card animate-float"
            >
              <img 
                src={mascotImg} 
                alt="Plantiva Mascot Tare" 
                style={{ height: 220, objectFit: "contain" }} 
              />
              <div style={{ marginTop: 12, fontWeight: 800, color: C.primary, fontSize: 14, letterSpacing: "0.5px" }}>
                MEET TARE — OUR STORY GUIDE 🌿
              </div>
              <div style={{ fontSize: 12, color: C.textMid, fontWeight: 700, marginTop: 4 }}>
                {interactiveQuote ? "“Healthy soil makes plants thrive naturally!”" : "Click Tare to hear his story tip!"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING STORYLINE CHAPTER NAV & PROGRESS BAR */}
      <section style={{ sticky: "top", top: 80, zIndex: 100, padding: "0 24px 40px" }}>
        <div style={{ ...styles.container, maxWidth: 1060 }}>
          <div style={{
            background: "#FFFFFF",
            borderRadius: 32,
            padding: "16px 24px",
            border: "1px solid rgba(18, 43, 30, 0.08)",
            boxShadow: "0 12px 32px rgba(18, 43, 30, 0.06)",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Smooth Progress Bar Line */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 4,
              width: `${progressPercent}%`,
              background: C.accentLime,
              transition: "width 0.4s ease-in-out"
            }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", flex: 1 }}>
                {chapters.map(({ id, title, icon: IconComp }) => {
                  const isActive = activeChapter === id;
                  return (
                    <button
                      key={id}
                      onClick={() => { setActiveChapter(id); setAutoPlay(false); }}
                      style={{
                        padding: "10px 18px",
                        borderRadius: 9999,
                        border: "none",
                        background: isActive ? C.primary : "#FAF8F5",
                        color: isActive ? "#FFFFFF" : C.primary,
                        fontWeight: isActive ? 800 : 600,
                        fontSize: 13,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        transition: "all 0.2s ease"
                      }}
                    >
                      <IconComp size={14} color={isActive ? C.accentLime : C.primary} />
                      <span>{title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Prev / Next Controls */}
              <div style={{ display: "flex", gap: 6 }}>
                <button 
                  onClick={() => { setActiveChapter(prev => Math.max(0, prev - 1)); setAutoPlay(false); }}
                  disabled={activeChapter === 0}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "1px solid rgba(18,43,30,0.15)",
                    background: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: activeChapter === 0 ? "not-allowed" : "pointer",
                    opacity: activeChapter === 0 ? 0.4 : 1
                  }}
                >
                  <ChevronLeft size={18} color={C.primary} />
                </button>
                <button 
                  onClick={() => { setActiveChapter(prev => Math.min(chapters.length - 1, prev + 1)); setAutoPlay(false); }}
                  disabled={activeChapter === chapters.length - 1}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    border: "none",
                    background: C.primary,
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: activeChapter === chapters.length - 1 ? "not-allowed" : "pointer",
                    opacity: activeChapter === chapters.length - 1 ? 0.4 : 1
                  }}
                >
                  <ChevronRight size={18} color="#FFFFFF" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC STORYLINE CHAPTER DISPLAY */}
      <section style={{ paddingBottom: 80 }}>
        <div style={{ ...styles.container, maxWidth: 1060 }}>
          
          {/* CHAPTER 1: SCIENTIFIC ROOTS */}
          {activeChapter === 0 && (
            <div className="story-fade-in" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "center" }}>
              <div style={{ background: C.pastels.yellow, padding: 40, borderRadius: 36 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FFFFFF", padding: "6px 16px", borderRadius: 9999, color: C.primary, fontWeight: 800, fontSize: 12, marginBottom: 20 }}>
                  <Award size={14} /> CHAPTER 1 · SCIENTIFIC LEGACY
                </div>

                <h2 style={{ fontSize: 36, fontWeight: 800, color: C.primary, margin: "0 0 8px", letterSpacing: "-1px" }}>
                  Mr. Abhay Kumar
                </h2>
                
                <div style={{ color: C.primary, fontWeight: 800, fontSize: 15, marginBottom: 20 }}>
                  Retired Assistant Director, Soil Testing Laboratory (UP Govt)
                </div>

                <p style={{ color: C.textMid, fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                  For over three decades, Mr. Abhay Kumar dedicated his career to helping farmers improve crop health through scientific soil testing and sustainable cultivation practices. His research allowed thousands of farmers to cultivate thriving crops with right nutrition rather than excessive synthetic chemicals.
                </p>

                <div style={{ background: "#FFFFFF", padding: "16px 20px", borderRadius: 20, fontWeight: 700, color: C.primary, fontSize: 14, fontStyle: "italic", borderLeft: `4px solid ${C.primary}` }}>
                  “Retirement did not mark the end of his journey—it became the beginning of a new purpose.”
                </div>
              </div>

              {/* Animated Stats Cards */}
              <div style={{ display: "grid", gap: 20 }}>
                {[
                  { num: "35+ Years", title: "Government Soil Testing Legacy", bg: C.pastels.mint },
                  { num: "100,000+", title: "Soil Diagnostics Conducted", bg: C.pastels.blue },
                  { num: "50,000+", title: "Farmers & Gardeners Guided", bg: C.pastels.orange }
                ].map((stat, i) => (
                  <div key={i} style={{ background: stat.bg, padding: 28, borderRadius: 28, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 32, fontWeight: 800, color: C.primary }}>{stat.num}</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: C.textMid, marginTop: 4 }}>{stat.title}</div>
                    </div>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", color: C.primary, fontWeight: 800 }}>
                      ✓
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CHAPTER 2: BALCONY REALITIES */}
          {activeChapter === 1 && (
            <div className="story-fade-in">
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <span style={{ background: C.pastels.pink, color: C.danger, padding: "6px 16px", borderRadius: 9999, fontSize: 12, fontWeight: 800 }}>
                  CHAPTER 2 · THE URBAN UNMET NEED
                </span>
                <h2 style={{ fontSize: 36, fontWeight: 800, color: C.primary, margin: "12px 0 0", letterSpacing: "-1px" }}>
                  The Problem He Couldn't Ignore
                </h2>
              </div>

              {/* Interactive Comparison Switcher */}
              <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 32 }}>
                <button
                  onClick={() => setComparisonMode("synthetic")}
                  style={{
                    padding: "10px 24px",
                    borderRadius: 9999,
                    border: "none",
                    background: comparisonMode === "synthetic" ? C.danger : "#FFFFFF",
                    color: comparisonMode === "synthetic" ? "#FFFFFF" : C.textMid,
                    fontWeight: 800,
                    fontSize: 14,
                    cursor: "pointer"
                  }}
                >
                  ⚠️ What Regular Nurseries Do
                </button>
                <button
                  onClick={() => setComparisonMode("scientific")}
                  style={{
                    padding: "10px 24px",
                    borderRadius: 9999,
                    border: "none",
                    background: comparisonMode === "scientific" ? C.primary : "#FFFFFF",
                    color: comparisonMode === "scientific" ? C.accentLime : C.textMid,
                    fontWeight: 800,
                    fontSize: 14,
                    cursor: "pointer"
                  }}
                >
                  🌿 What Plantiva Science Does
                </button>
              </div>

              {/* Animated Mode Detail Box */}
              <div style={{
                background: comparisonMode === "synthetic" ? C.pastels.pink : C.pastels.mint,
                borderRadius: 36,
                padding: 44,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 40,
                alignItems: "center"
              }}>
                <div>
                  <h3 style={{ fontSize: 28, fontWeight: 800, color: C.primary, margin: "0 0 16px" }}>
                    {comparisonMode === "synthetic" ? "The Synthetic Nursery Trap" : "Scientific Soil Care Approach"}
                  </h3>
                  <p style={{ color: C.textMid, fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                    {comparisonMode === "synthetic" 
                      ? "Many plants are heavily treated with temporary synthetic boosters to look attractive at nurseries. They are sold without checking balcony sunlight or wind direction, causing them to wilt within weeks."
                      : "We inspect your actual balcony orientation (East, West, North, South), measure sunlight hours, and prepare living organic soil mixes tailored to your microclimate so plants thrive naturally."}
                  </p>
                  <div style={{ background: "#FFFFFF", padding: 20, borderRadius: 20, fontWeight: 800, color: C.primary, fontSize: 16 }}>
                    {comparisonMode === "synthetic"
                      ? "❌ Result: High plant mortality & frustrated plant parents."
                      : "✅ Result: Thriving balcony greenery with long-term resilience."}
                  </div>
                </div>

                <div style={{ textAlign: "center" }}>
                  <img 
                    src={mascotImg} 
                    alt="Mascot Comparison" 
                    style={{ height: 220, objectFit: "contain", filter: comparisonMode === "synthetic" ? "grayscale(40%)" : "none" }} 
                  />
                </div>
              </div>
            </div>
          )}

          {/* CHAPTER 3: BIRTH OF PLANTIVA */}
          {activeChapter === 2 && (
            <div className="story-fade-in" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, alignItems: "center" }}>
              <div style={{ background: C.pastels.mint, padding: 40, borderRadius: 36 }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#FFFFFF", padding: "6px 16px", borderRadius: 9999, color: C.primary, fontWeight: 800, fontSize: 12, marginBottom: 20 }}>
                  <Sprout size={14} /> CHAPTER 3 · REVOLUTIONARY APPROACH
                </div>

                <h2 style={{ fontSize: 36, fontWeight: 800, color: C.primary, margin: "0 0 16px", letterSpacing: "-1px" }}>
                  The Birth of Plantiva
                </h2>

                <p style={{ color: C.textMid, fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>
                  Plantiva was born to bridge the gap between agricultural soil science and modern urban homes.
                </p>

                <div style={{ background: "#FFFFFF", padding: 24, borderRadius: 24, marginBottom: 20 }}>
                  <div style={{ fontSize: 13, color: C.textLight, textDecoration: "line-through", marginBottom: 6 }}>
                    Traditional: "Which plant would you like to buy?"
                  </div>
                  <div style={{ fontSize: 17, fontWeight: 800, color: C.primary }}>
                    Plantiva: "Which plant will truly thrive in your balcony?"
                  </div>
                </div>

                <button className="pill-btn pill-btn-dark" onClick={() => navigate("book")}>
                  Experience Plantiva Visit →
                </button>
              </div>

              {/* Interactive Balcony Factors Showcase */}
              <div style={{ background: "#FFFFFF", padding: 36, borderRadius: 36, border: "1px solid rgba(18, 43, 30, 0.08)" }}>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: C.primary, margin: "0 0 20px" }}>
                  4 Scientific Balcony Factors We Measure:
                </h3>

                <div style={{ display: "grid", gap: 16 }}>
                  {[
                    { title: "1. Sunlight Hours & Direction", desc: "Direct South vs East morning sun matching" },
                    { title: "2. Wind Exposure & Height", desc: "Potted root stability for high-rise apartments" },
                    { title: "3. Soil NPK & pH Metrics", desc: "Custom organic soil potting mix ratios" },
                    { title: "4. Homeowner Schedule", desc: "Low-maintenance vs daily care plant species" }
                  ].map((factor, i) => (
                    <div key={i} style={{ background: C.pastels.yellow, padding: 18, borderRadius: 20 }}>
                      <div style={{ fontWeight: 800, color: C.primary, fontSize: 15 }}>{factor.title}</div>
                      <div style={{ fontSize: 12, color: C.textMid, marginTop: 2 }}>{factor.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CHAPTER 4: OUR 5 CORE PILLARS */}
          {activeChapter === 3 && (
            <div className="story-fade-in">
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <span style={{ background: C.pastels.orange, color: C.primary, padding: "6px 16px", borderRadius: 9999, fontSize: 12, fontWeight: 800 }}>
                  CHAPTER 4 · WHAT MAKES US DIFFERENT
                </span>
                <h2 style={{ fontSize: 36, fontWeight: 800, color: C.primary, margin: "12px 0 0", letterSpacing: "-1px" }}>
                  Our 5 Pillar Care Philosophy
                </h2>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 24 }}>
                {diffPoints.slice(0, 3).map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="alldae-card alldae-card-hover"
                      style={{ background: item.bg, padding: 32, borderRadius: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                    >
                      <div>
                        <div style={{ width: 48, height: 48, borderRadius: 16, background: C.primary, color: C.accentLime, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                          <IconComp size={24} />
                        </div>
                        <h4 style={{ fontSize: 20, fontWeight: 800, color: C.primary, margin: "0 0 10px" }}>{item.title}</h4>
                        <p style={{ color: C.textMid, fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 720, margin: "0 auto" }}>
                {diffPoints.slice(3).map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="alldae-card alldae-card-hover"
                      style={{ background: item.bg, padding: 32, borderRadius: 32, display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                    >
                      <div>
                        <div style={{ width: 48, height: 48, borderRadius: 16, background: C.primary, color: C.accentLime, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                          <IconComp size={24} />
                        </div>
                        <h4 style={{ fontSize: 20, fontWeight: 800, color: C.primary, margin: "0 0 10px" }}>{item.title}</h4>
                        <p style={{ color: C.textMid, fontSize: 14, lineHeight: 1.6 }}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* CHAPTER 5: VISION & MISSION */}
          {activeChapter === 4 && (
            <div className="story-fade-in">
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <span style={{ background: C.pastels.purple, color: C.primary, padding: "6px 16px", borderRadius: 9999, fontSize: 12, fontWeight: 800 }}>
                  CHAPTER 5 · FUTURE LOOKING
                </span>
                <h2 style={{ fontSize: 36, fontWeight: 800, color: C.primary, margin: "12px 0 0", letterSpacing: "-1px" }}>
                  Vision & Mission
                </h2>
              </div>

              {/* Tab Selector */}
              <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 32 }}>
                <button
                  onClick={() => setVisionTab("vision")}
                  style={{
                    padding: "10px 24px",
                    borderRadius: 9999,
                    border: "none",
                    background: visionTab === "vision" ? C.primary : "#FFFFFF",
                    color: visionTab === "vision" ? C.accentLime : C.textMid,
                    fontWeight: 800,
                    fontSize: 14,
                    cursor: "pointer"
                  }}
                >
                  🔭 Our Vision
                </button>
                <button
                  onClick={() => setVisionTab("mission")}
                  style={{
                    padding: "10px 24px",
                    borderRadius: 9999,
                    border: "none",
                    background: visionTab === "mission" ? C.primary : "#FFFFFF",
                    color: visionTab === "mission" ? C.accentLime : C.textMid,
                    fontWeight: 800,
                    fontSize: 14,
                    cursor: "pointer"
                  }}
                >
                  🎯 Our Mission
                </button>
              </div>

              {/* Vision / Mission Display Box */}
              <div style={{
                background: visionTab === "vision" ? C.pastels.blue : C.pastels.purple,
                borderRadius: 36,
                padding: 48,
                textAlign: "center",
                maxWidth: 720,
                margin: "0 auto 40px"
              }}>
                <h3 style={{ fontSize: 32, fontWeight: 800, color: C.primary, marginBottom: 16 }}>
                  {visionTab === "vision" ? "Our Vision for Urban Greening" : "Our Mission for Plant Parents"}
                </h3>
                <p style={{ color: C.textMid, fontSize: 18, lineHeight: 1.8, margin: 0 }}>
                  {visionTab === "vision" 
                    ? "To make every urban balcony greener by helping people grow plants that truly belong in their space—creating vibrant balconies, healthier families, and sustainable cities across India."
                    : "To combine 35+ years of agricultural soil expertise with genuine care, making balcony gardening simple, successful, and joyful for every home."}
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* CLOSING QUOTE BANNER */}
      <section style={{ background: C.primary, color: "#FFFFFF", padding: "70px 24px", textAlign: "center", borderRadius: 36, margin: "0 24px 60px" }}>
        <div style={{ ...styles.container, maxWidth: 760 }}>
          <div className="font-serif-italic" style={{ fontSize: 40, fontWeight: 400, margin: "0 auto 16px", lineHeight: 1.3, color: C.accentLime }}>
            "We don't just deliver plants. We deliver the confidence to grow them."
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginBottom: 28, fontWeight: 600 }}>
            Plantiva • Right Plant • Right Place • Scientific Soil Care
          </p>
          <button className="pill-btn pill-btn-lime" onClick={() => navigate("book")} style={{ padding: "14px 32px" }}>
            Book Doctor Consultation →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}


