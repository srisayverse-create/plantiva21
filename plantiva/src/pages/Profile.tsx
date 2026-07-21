import React from 'react';
import { 
  BarChart3, 
  Calendar, 
  Sprout, 
  Package, 
  Star, 
  User, 
  Settings, 
  LogOut, 
  UserCircle2,
  CreditCard,
  MapPin
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { C, styles } from '../constants/designSystem';

interface ProfileProps {
  navigate: (target: string, data?: any) => void;
}

export default function Profile({ navigate }: ProfileProps) {
  const navItems = [
    { icon: BarChart3, label: "Dashboard" },
    { icon: Calendar, label: "My Visits" },
    { icon: Sprout, label: "My Plants" },
    { icon: Package, label: "Orders" },
    { icon: Star, label: "Membership" },
    { icon: User, label: "Profile" },
    { icon: Settings, label: "Settings" },
    { icon: LogOut, label: "Logout" }
  ];

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} />
      <div style={{ ...styles.container, display: "grid", gridTemplateColumns: "250px 1fr", gap: 36, padding: "40px 24px 80px", maxWidth: 1160, margin: "0 auto" }}>
        
        {/* Sidebar Panel */}
        <div style={{ background: "#FFFFFF", borderRadius: 32, padding: 0, overflow: "hidden", border: "1px solid rgba(18, 43, 30, 0.06)", boxShadow: "0 10px 30px -5px rgba(18, 43, 30, 0.04)", alignSelf: "start" }}>
          <div style={{ background: C.primary, padding: "30px 20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ color: C.accentLime, display: "flex", justifyContent: "center" }}>
              <UserCircle2 size={52} />
            </div>
            <div style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 16, marginTop: 10 }}>Neha Sharma</div>
          </div>
          <div style={{ padding: "16px 12px" }}>
            {navItems.map(({ icon: Icon, label }) => (
              <div 
                key={label} 
                onClick={() => {
                  if (label === "Dashboard") navigate("dashboard");
                  else if (label === "My Visits") navigate("visit-report");
                  else if (label === "Membership") navigate("membership");
                  else if (label === "Logout") navigate("home");
                }}
                style={{ 
                  display: "flex", 
                  gap: 12, 
                  alignItems: "center", 
                  padding: "12px 18px", 
                  borderRadius: 9999,
                  cursor: "pointer", 
                  background: label === "Profile" ? C.accentLime : "transparent", 
                  color: C.primary, 
                  fontWeight: label === "Profile" ? 800 : 600, 
                  fontSize: 14, 
                  marginBottom: 4,
                  transition: "all 0.2s"
                }}
              >
                <Icon size={18} color={C.primary} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Details Cards */}
        <div style={{ display: "grid", gap: 24 }}>
          <div style={{ background: "#FFFFFF", padding: 32, borderRadius: 32, border: "1px solid rgba(18, 43, 30, 0.06)", boxShadow: "0 10px 30px -5px rgba(18, 43, 30, 0.04)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontWeight: 800, color: C.primary, fontSize: 20 }}>Personal Information</h3>
              <button className="pill-btn pill-btn-outline" style={{ padding: "8px 18px", fontSize: 13 }}>Edit Profile</button>
            </div>
            <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
              <div style={{ color: C.primary }}><UserCircle2 size={68} /></div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 22, color: C.primary }}>Neha Sharma</div>
                <div style={{ color: C.textMid, fontSize: 14, marginTop: 2, fontWeight: 600 }}>neha.sharma@email.com</div>
                <div style={{ color: C.textMid, fontSize: 14, marginTop: 2, fontWeight: 600 }}>+91 98765 43210</div>
              </div>
            </div>
          </div>

          <div style={{ background: "#FFFFFF", padding: 32, borderRadius: 32, border: "1px solid rgba(18, 43, 30, 0.06)", boxShadow: "0 10px 30px -5px rgba(18, 43, 30, 0.04)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ margin: 0, fontWeight: 800, color: C.primary, fontSize: 20, display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={20} color={C.primary} /> Saved Balcony Address
              </h3>
              <button className="pill-btn pill-btn-outline" style={{ padding: "8px 18px", fontSize: 13 }}>Update Address</button>
            </div>
            <p style={{ color: C.textMid, fontSize: 15, lineHeight: 1.7, margin: 0, fontWeight: 600 }}>
              Flat 402, Green Balcony Towers, Gomti Nagar, Lucknow, Uttar Pradesh - 226010
            </p>
          </div>

          <div style={{ background: C.pastels.yellow, padding: 32, borderRadius: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ margin: 0, fontWeight: 800, color: C.primary, fontSize: 20 }}>Membership Status</h3>
              <button className="pill-btn pill-btn-lime" style={{ padding: "8px 20px", fontSize: 13 }} onClick={() => navigate("membership")}>
                View Benefits
              </button>
            </div>
            <div style={{ background: C.primary, color: C.accentLime, marginBottom: 8, display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 16px", borderRadius: 9999, fontSize: 13, fontWeight: 800 }}>
              <Star size={14} fill={C.accentLime} color={C.accentLime} /> Green Plus Member
            </div>
            <div style={{ fontSize: 13, color: C.primary, marginTop: 4, fontWeight: 700 }}>Active until July 2027</div>
          </div>

          <div style={{ background: "#FFFFFF", padding: 32, borderRadius: 32, border: "1px solid rgba(18, 43, 30, 0.06)", boxShadow: "0 10px 30px -5px rgba(18, 43, 30, 0.04)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ margin: 0, fontWeight: 800, color: C.primary, fontSize: 20 }}>Payment Methods</h3>
              <button className="pill-btn pill-btn-outline" style={{ padding: "8px 18px", fontSize: 13 }}>Add Card</button>
            </div>
            <div style={{ display: "flex", gap: 14, alignItems: "center", borderRadius: 20, padding: 18, background: C.pastels.mint }}>
              <CreditCard size={28} color={C.primary} />
              <div>
                <div style={{ fontWeight: 800, fontSize: 15, color: C.primary }}>•••• •••• •••• 4242 (Visa)</div>
                <div style={{ fontSize: 12, color: C.textMid, fontWeight: 600 }}>Default Payment Method</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

