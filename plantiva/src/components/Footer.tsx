import React from 'react';
import logo from '../assets/logo.png';
import { C, styles } from '../constants/designSystem';

export default function Footer() {
  return (
    <footer style={{ 
      background: "#122B1E", 
      color: "#FFFFFF", 
      padding: "80px 0 40px",
      marginTop: 60,
      borderTopLeftRadius: 36,
      borderTopRightRadius: 36
    }}>
      <div style={{ ...styles.container, display: "grid", gridTemplateColumns: "2.5fr 1.2fr 1.2fr 2fr", gap: 50 }}>
        {/* Column 1: Brand Info */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <img src={logo} alt="Plantiva Logo" style={{ height: 38, width: 38, filter: "brightness(0) invert(1)", objectFit: "contain" }} />
            <span style={{
              fontWeight: 800,
              fontSize: 26,
              letterSpacing: "-0.8px",
              color: "#FFFFFF"
            }}>
              plantiva<span style={{ color: C.accentLime }}>.</span>
            </span>
          </div>
          <p style={{ 
            color: "rgba(255, 255, 255, 0.7)", 
            fontSize: 14, 
            lineHeight: 1.8, 
            maxWidth: 280,
            marginBottom: 24 
          }}>
            Combining scientific soil analysis with expert plant doctor care. Making urban spaces greener, healthier, and happier.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {["𝕏", "Insta", "FB", "In"].map(soc => (
              <span 
                key={soc} 
                style={{ 
                  color: "#FFFFFF", 
                  fontSize: 12, 
                  fontWeight: 700, 
                  cursor: "pointer", 
                  padding: "6px 14px", 
                  borderRadius: 9999,
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  transition: "all 0.2s"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = C.accentLime;
                  e.currentTarget.style.color = C.primary;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.color = "#FFFFFF";
                }}
              >
                {soc}
              </span>
            ))}
          </div>
        </div>

        {/* Column 2 & 3: Navigation Links */}
        {[
          ["Services", ["Plant Wellness", "Plant Spa", "Leaf Cleaning", "Holiday Care"]],
          ["Nursery", ["Indoor Plants", "Balcony Plants", "Air Purifying", "Succulents"]]
        ].map(([title, links]) => (
          <div key={title as string}>
            <div style={{ 
              fontWeight: 700, 
              fontSize: 13,
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: 20, 
              color: C.accentLime 
            }}>{title as string}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {(links as string[]).map(l => (
                <span 
                  key={l} 
                  style={{ 
                    color: "rgba(255, 255, 255, 0.7)", 
                    fontSize: 14, 
                    cursor: "pointer",
                    transition: "color 0.2s" 
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = C.accentLime}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Column 4: Newsletter */}
        <div>
          <div style={{ 
            fontWeight: 700, 
            fontSize: 13,
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: 20, 
            color: C.accentLime 
          }}>Join Our Newsletter</div>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.6, marginBottom: 18 }}>
            Subscribe to receive gardening tips, plant care alerts, and exclusive Green member offers.
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <input 
              type="email" 
              placeholder="Email address..." 
              style={{
                flex: 1,
                padding: "12px 18px",
                borderRadius: 9999,
                border: "1px solid rgba(255, 255, 255, 0.15)",
                background: "rgba(255, 255, 255, 0.08)",
                color: "#FFFFFF",
                fontSize: 13,
                outline: "none"
              }}
            />
            <button 
              className="pill-btn pill-btn-lime"
              style={{
                padding: "12px 20px",
                fontSize: 13
              }}
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <div style={{ 
        ...styles.container, 
        borderTop: "1px solid rgba(255, 255, 255, 0.08)", 
        marginTop: 60, 
        paddingTop: 24, 
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
        color: "rgba(255, 255, 255, 0.5)", 
        fontSize: 13 
      }}>
        <div>© 2026 Plantiva. All rights reserved. Built for scientific soil and urban gardening.</div>
        <div style={{ display: "flex", gap: 20 }}>
          <span style={{ cursor: "pointer" }}>Privacy Policy</span>
          <span style={{ cursor: "pointer" }}>Terms of Service</span>
          <span style={{ cursor: "pointer" }}>Contact</span>
        </div>
      </div>
    </footer>
  );
}

