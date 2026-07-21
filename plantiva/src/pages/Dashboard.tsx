import React, { useState } from 'react';
import { 
  BarChart3, 
  Calendar, 
  Sprout, 
  Package, 
  Star, 
  User, 
  Settings, 
  LogOut, 
  Award, 
  Clock, 
  UserCircle2,
  Check,
  ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlantEmoji from '../components/PlantEmoji';
import { C, styles } from '../constants/designSystem';
import { PLANTS } from '../constants/mockData';

interface DashboardProps {
  navigate: (target: string, data?: any) => void;
}

export default function Dashboard({ navigate }: DashboardProps) {
  const [activeTab, setActiveTab] = useState("Dashboard");
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

  const stats = [
    { value: "14", icon: Sprout, label: "Total Plants", bg: C.pastels.pink },
    { value: "Plus", icon: Award, label: "Green Plus Member", bg: C.pastels.yellow },
    { value: "24 Jul", icon: Calendar, label: "Next Visit", bg: C.pastels.mint },
    { value: "4", icon: Clock, label: "Days Left", bg: C.pastels.blue }
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
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, marginTop: 2, fontWeight: 600 }}>neha.sharma@email.com</div>
          </div>

          <div style={{ padding: "16px 12px" }}>
            {navItems.map(({ icon: Icon, label }) => (
              <div 
                key={label} 
                onClick={() => {
                  setActiveTab(label);
                  if (label === "Logout") navigate("home");
                  else if (label === "My Visits") navigate("visit-report");
                  else if (label === "Membership") navigate("membership");
                  else if (label === "Profile") navigate("profile");
                }}
                style={{ 
                  display: "flex", 
                  gap: 12, 
                  alignItems: "center", 
                  padding: "12px 18px", 
                  borderRadius: 9999,
                  cursor: "pointer", 
                  background: activeTab === label ? C.accentLime : "transparent", 
                  color: C.primary, 
                  fontWeight: activeTab === label ? 800 : 600, 
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

        {/* Main Content Area */}
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginBottom: 28 }}>
            {stats.map(({ value, icon: Icon, label, bg }) => (
              <div key={label} className="alldae-card" style={{ background: bg, padding: 22, borderRadius: 24, textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", color: C.primary, marginBottom: 6 }}>
                  <Icon size={24} />
                </div>
                <div style={{ fontWeight: 800, color: C.primary, fontSize: 22 }}>{value}</div>
                <div style={{ color: C.textMid, fontSize: 12, marginTop: 2, fontWeight: 700 }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 28 }}>
            {/* Recent Visit Card */}
            <div style={{ background: "#FFFFFF", padding: 28, borderRadius: 28, border: "1px solid rgba(18, 43, 30, 0.06)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ margin: 0, fontWeight: 800, color: C.primary, fontSize: 18 }}>Recent Visit</h3>
                <button className="pill-btn pill-btn-outline" style={{ padding: "6px 16px", fontSize: 12 }} onClick={() => navigate("visit-report")}>
                  View Report
                </button>
              </div>
              <div style={{ background: C.pastels.yellow, padding: 20, borderRadius: 20 }}>
                <div style={{ fontWeight: 800, color: C.primary, fontSize: 15 }}>18 July 2026</div>
                <div style={{ color: C.textMid, fontSize: 13, marginTop: 2, fontWeight: 600 }}>Plant Wellness Visit & Soil Check</div>
                <div style={{ background: C.accentLime, color: C.primary, padding: "4px 12px", borderRadius: 9999, fontSize: 11, fontWeight: 800, marginTop: 10, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <Check size={12} /> Completed
                </div>
              </div>
            </div>

            {/* My Plants Quick Card */}
            <div style={{ background: "#FFFFFF", padding: 28, borderRadius: 28, border: "1px solid rgba(18, 43, 30, 0.06)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ margin: 0, fontWeight: 800, color: C.primary, fontSize: 18 }}>My Balcony Garden</h3>
                <button className="pill-btn pill-btn-outline" style={{ padding: "6px 16px", fontSize: 12 }} onClick={() => navigate("store")}>
                  Explore Store
                </button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                {PLANTS.slice(0, 3).map(p => (
                  <div key={p.id} style={{ background: C.pastels.mint, textAlign: "center", padding: 12, borderRadius: 20 }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <PlantEmoji name={p.name} size={50} />
                    </div>
                    <div style={{ fontSize: 11, fontWeight: 800, color: C.primary, marginTop: 6 }}>{p.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Orders Table */}
          <div style={{ background: "#FFFFFF", padding: 28, borderRadius: 28, border: "1px solid rgba(18, 43, 30, 0.06)", marginBottom: 28 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <h3 style={{ margin: 0, fontWeight: 800, color: C.primary, fontSize: 18 }}>Recent Plantiva Orders</h3>
              <button className="pill-btn pill-btn-outline" style={{ padding: "6px 16px", fontSize: 12 }}>
                View All
              </button>
            </div>
            {[
              ["#PLT-56879", "Areca Palm x 2", "16 Jul 2026", "₹998", "Delivered"],
              ["#PLT-56878", "Snake Plant", "10 Jul 2026", "₹399", "Processing"]
            ].map(([id, item, date, price, status]) => (
              <div key={id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: `1px solid rgba(18, 43, 30, 0.08)`, fontSize: 14 }}>
                <span style={{ color: C.textMid, fontWeight: 800, fontFamily: "monospace" }}>{id}</span>
                <span style={{ fontWeight: 800, color: C.primary }}>{item}</span>
                <span style={{ color: C.textLight, fontSize: 13, fontWeight: 600 }}>{date}</span>
                <span style={{ fontWeight: 800, color: C.primary }}>{price}</span>
                <span style={{ background: status === "Delivered" ? C.accentLime : C.accentYellow, color: C.primary, padding: "3px 12px", borderRadius: 9999, fontSize: 11, fontWeight: 800 }}>
                  {status}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            <button className="pill-btn pill-btn-lime" style={{ flex: 1, padding: "14px", justifyContent: "center" }} onClick={() => navigate("book")}>
              Book Soil Diagnostics Visit
            </button>
            <button className="pill-btn pill-btn-dark" style={{ flex: 1, padding: "14px", justifyContent: "center" }} onClick={() => navigate("membership")}>
              Manage Green Membership
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

