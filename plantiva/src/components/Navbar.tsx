import React from 'react';
import { Search, ShoppingBag, User, Sparkles, ArrowRight } from 'lucide-react';
import { C, styles } from '../constants/designSystem';
import logo from '../assets/logo.png';

interface NavbarProps {
  navigate: (target: string, data?: any) => void;
  cartCount?: number;
}

export default function Navbar({ navigate, cartCount = 1 }: NavbarProps) {
  return (
    <nav style={{
      background: "rgba(250, 248, 245, 0.9)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(18, 43, 30, 0.05)",
      position: "sticky",
      top: 0,
      zIndex: 100,
      transition: "all 0.3s"
    }}>
      <div style={{ ...styles.container, display: "flex", alignItems: "center", justifyContent: "space-between", height: 76 }}>
        {/* Left: Brand Logo & Text */}
        <div 
          onClick={() => navigate("home")} 
          style={{ 
            cursor: "pointer", 
            display: "flex", 
            alignItems: "center", 
            gap: 10,
            transition: "transform 0.2s" 
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={logo} alt="Plantiva Logo" style={{ height: 38, width: 38, objectFit: "contain", borderRadius: "20%" }} />
          <span style={{
            fontWeight: 800,
            fontSize: 26,
            color: C.primary,
            letterSpacing: "-0.8px"
          }}>
            plantiva<span style={{ color: "#8EB89B" }}>.</span>
          </span>
        </div>

        {/* Center: Menu Links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {[
            ["Nursery", "store"],
            ["Services", "services"],
            ["About Us", "about"],
          ].map(([label, page]) => (
            <span
              key={page}
              onClick={() => navigate(page)}
              style={{
                cursor: "pointer",
                fontSize: 14,
                color: C.primary,
                fontWeight: 600,
                letterSpacing: "0.1px",
                position: "relative",
                transition: "color 0.2s"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = C.primaryMid;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = C.primary;
              }}
            >
              {label}
            </span>
          ))}

          {/* Green Member Special Link */}
          <span
            onClick={() => navigate("membership")}
            style={{
              cursor: "pointer",
              fontSize: 13,
              color: "#122B1E",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: C.accentLime,
              padding: "6px 14px",
              borderRadius: 9999,
              boxShadow: "0 2px 8px rgba(214, 240, 69, 0.3)",
              transition: "transform 0.2s, background 0.2s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <Sparkles size={13} fill="#122B1E" color="#122B1E" />
            Green Member
          </span>
        </div>

        {/* Right: Book Service Button + Icons */}
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          {/* Search Icon */}
          <button
            onClick={() => navigate("store")}
            style={{ 
              border: "none", 
              background: "transparent", 
              color: C.primary, 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center",
              padding: 8,
              borderRadius: "50%",
              transition: "background 0.2s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(18, 43, 30, 0.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <Search size={19} strokeWidth={2.2} />
          </button>

          {/* Shopping Bag Icon with Badge */}
          <button
            onClick={() => navigate("cart")}
            style={{ 
              border: "none", 
              background: "transparent", 
              color: C.primary, 
              cursor: "pointer", 
              position: "relative", 
              display: "flex", 
              alignItems: "center",
              padding: 8,
              borderRadius: "50%",
              transition: "background 0.2s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(18, 43, 30, 0.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <ShoppingBag size={19} strokeWidth={2.2} />
            {cartCount > 0 && (
              <span style={{
                position: "absolute",
                top: 2,
                right: 2,
                background: C.primary,
                color: "#FFFFFF",
                fontSize: 9,
                fontWeight: 700,
                width: 16,
                height: 16,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* User Profile Icon */}
          <button
            onClick={() => navigate("profile")}
            style={{ 
              border: "none", 
              background: "transparent", 
              color: C.primary, 
              cursor: "pointer", 
              display: "flex", 
              alignItems: "center",
              padding: 8,
              borderRadius: "50%",
              transition: "background 0.2s"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(18, 43, 30, 0.05)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            <User size={19} strokeWidth={2.2} />
          </button>

          {/* Book Visit Pill CTA */}
          <button
            onClick={() => navigate("book")}
            className="pill-btn pill-btn-lime"
            style={{
              padding: "10px 20px",
              fontSize: 13,
              fontWeight: 800
            }}
          >
            Book Visit <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}

