import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { C, styles } from '../constants/designSystem';
import { PLANS } from '../constants/mockData';
import { Sparkles, Check, Crown, ShieldCheck } from 'lucide-react';

interface MembershipProps {
  navigate: (target: string, data?: any) => void;
}

export default function Membership({ navigate }: MembershipProps) {
  const cardColors = [C.pastels.mint, C.pastels.yellow, C.pastels.purple];

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
            ✨ PLANTIVA GREEN MEMBERSHIP
          </span>
          <h1 style={{ fontSize: 48, fontWeight: 800, color: C.primary, margin: "8px 0 0", letterSpacing: "-1px" }}>
            Unlimited Care for <span className="font-serif-italic" style={{ fontSize: 56 }}>Your Balcony Garden</span>
          </h1>
          <p style={{ color: C.textMid, marginTop: 12, fontSize: 16, maxWidth: 620, margin: "12px auto 0", lineHeight: 1.7 }}>
            Enjoy scheduled soil testing, regular plant doctor visits, and exclusive nursery discounts every month.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, paddingBottom: 90, alignItems: "stretch" }}>
          {PLANS.map((plan, idx) => {
            const isPopular = plan.popular;
            return (
              <div 
                key={plan.id}
                className="alldae-card alldae-card-hover"
                style={{ 
                  borderRadius: 32,
                  padding: 36,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  border: isPopular ? `2px solid ${C.primary}` : "1px solid rgba(18, 43, 30, 0.06)",
                  background: cardColors[idx % cardColors.length],
                  transform: isPopular ? "scale(1.03)" : "none",
                  zIndex: isPopular ? 2 : 1
                }}
              >
                {isPopular && (
                  <div style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: C.primary,
                    color: C.accentLime,
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    padding: "6px 18px",
                    borderRadius: 9999,
                    boxShadow: "0 4px 12px rgba(18, 43, 30, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6
                  }}>
                    <Crown size={12} color={C.accentLime} /> MOST POPULAR CHOICE
                  </div>
                )}

                <div>
                  <h3 style={{ fontSize: 28, fontWeight: 800, color: C.primary, margin: "0 0 8px" }}>
                    {plan.name}
                  </h3>
                  <div style={{ color: C.textMid, fontSize: 13, fontWeight: 600, marginBottom: 20 }}>
                    {plan.visits} Dedicated Doctor Visits / Month
                  </div>

                  <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 28 }}>
                    <span style={{ fontSize: 44, fontWeight: 800, color: C.primary }}>₹{plan.price}</span>
                    <span style={{ fontSize: 14, color: C.textMid, fontWeight: 600 }}>/ month</span>
                  </div>

                  <div style={{ borderTop: `1px solid rgba(18, 43, 30, 0.08)`, paddingTop: 24, marginBottom: 32 }}>
                    <div style={{ fontWeight: 800, fontSize: 12, color: C.primary, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 14 }}>
                      PLAN INCLUSIONS
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {plan.features.map(f => (
                        <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div style={{ width: 20, height: 20, borderRadius: "50%", background: C.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Check size={12} color="#FFFFFF" strokeWidth={3} />
                          </div>
                          <span style={{ fontSize: 14, color: C.primary, fontWeight: 700 }}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => navigate("book")}
                  className={isPopular ? "pill-btn pill-btn-lime" : "pill-btn pill-btn-dark"}
                  style={{
                    width: "100%",
                    padding: "14px",
                    justifyContent: "center",
                    fontSize: 14
                  }}
                >
                  Join {plan.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

