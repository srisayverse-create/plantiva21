import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceIcon from '../components/ServiceIcon';
import { C, styles } from '../constants/designSystem';
import { SERVICES } from '../constants/mockData';
import { Sparkles, Calendar, BadgePercent, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  navigate: (target: string, data?: any) => void;
}

export default function Services({ navigate }: ServicesProps) {
  const cardColors = [C.pastels.pink, C.pastels.yellow, C.pastels.mint, C.pastels.blue, C.pastels.orange, C.pastels.purple];

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} />

      <div style={styles.container}>
        {/* Header Block */}
        <div style={{ padding: "50px 0 32px", textAlign: "center" }}>
          <span style={{
            background: C.accentLime,
            color: C.primary,
            borderRadius: 9999,
            padding: "6px 18px",
            fontSize: 12,
            fontWeight: 800,
            display: "inline-block",
            marginBottom: 16
          }}>
            🌿 ON-DEMAND PLANT CARE
          </span>
          <h1 style={{ fontSize: 48, fontWeight: 800, color: C.primary, margin: "8px 0 0", letterSpacing: "-1px" }}>
            Professional <span className="font-serif-italic" style={{ fontSize: 56 }}>Plant Doctor</span> Services
          </h1>
          <p style={{ color: C.textMid, marginTop: 12, fontSize: 16, maxWidth: 600, margin: "12px auto 0", lineHeight: 1.6 }}>
            On-demand certified plant doctors & soil specialists at your doorstep starting from ₹149.
          </p>
        </div>

        {/* Promo Strip */}
        <div 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: 20, 
            marginBottom: 50,
            padding: 24, 
            borderRadius: 24,
            background: C.pastels.mint,
            border: "1px solid rgba(18, 43, 30, 0.05)"
          }}
        >
          {[
            { icon: Sparkles, text: "Government Certified Soil & Plant Doctors" },
            { icon: Calendar, text: "Flexible Visit Rescheduling Anytime" },
            { icon: BadgePercent, text: "Up to 15% Savings for Green Members" }
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center", color: C.primary, fontWeight: 700, fontSize: 13 }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={18} color={C.primary} />
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>

        {/* 6-Card Services Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, paddingBottom: 90 }}>
          {SERVICES.map((s, idx) => (
            <div 
              key={s.id} 
              className="alldae-card alldae-card-hover"
              style={{ 
                background: cardColors[idx % cardColors.length], 
                padding: 30, 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "space-between",
                minHeight: 360,
                cursor: "pointer"
              }}
              onClick={() => navigate("service-detail", s)}
            >
              <div>
                {/* Icon Container */}
                <div style={{ 
                  width: 58, 
                  height: 58, 
                  borderRadius: 20, 
                  background: "#FFFFFF", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  color: C.primary,
                  marginBottom: 20,
                  boxShadow: "0 4px 12px rgba(18,43,30,0.04)"
                }}>
                  <ServiceIcon name={s.icon} size={28} />
                </div>

                <h3 style={{ fontWeight: 800, fontSize: 22, color: C.primary, margin: "0 0 10px" }}>
                  {s.name}
                </h3>
                
                <p style={{ fontSize: 14, color: C.textMid, lineHeight: 1.6, margin: "0 0 20px", minHeight: 60 }}>
                  {s.desc}
                </p>

                {/* Key items list preview */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  {s.includes.slice(0, 2).map((inc, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: C.primary, fontWeight: 700 }}>
                      <CheckCircle2 size={14} color={C.primary} />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `1px solid rgba(18, 43, 30, 0.08)`, paddingTop: 18 }}>
                <div>
                  <span style={{ fontSize: 11, color: C.textLight, textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.5px" }}>ESTIMATED</span>
                  <div style={{ fontSize: 13, fontWeight: 800, color: C.primary }}>{s.duration}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ color: C.primary, fontWeight: 800, fontSize: 22 }}>₹{s.price}</div>
                  <span style={{ fontSize: 12, color: C.primary, fontWeight: 800, display: "flex", alignItems: "center", gap: 4 }}>
                    Book Service <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

