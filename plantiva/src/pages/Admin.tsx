import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Package, 
  Star, 
  ShoppingBag, 
  TrendingUp, 
  Settings, 
  LogOut,
  User,
  ArrowLeft
} from 'lucide-react';
import { C, styles } from '../constants/designSystem';
import logo from '../assets/logo.png';

interface AdminProps {
  navigate: (target: string, data?: any) => void;
}

export default function Admin({ navigate }: AdminProps) {
  const [activeNav, setActiveNav] = useState("Dashboard");

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Users, label: "Customers" },
    { icon: Calendar, label: "Visits" },
    { icon: Package, label: "Orders" },
    { icon: Star, label: "Memberships" },
    { icon: ShoppingBag, label: "Products" },
    { icon: TrendingUp, label: "Reports" },
    { icon: Settings, label: "Settings" },
    { icon: LogOut, label: "Logout" }
  ];

  const stats = [
    { num: "1,268", label: "Total Customers", icon: Users, bg: C.pastels.mint },
    { num: "18", label: "Upcoming Visits", icon: Calendar, bg: C.pastels.yellow },
    { num: "24", label: "Today's Orders", icon: Package, bg: C.pastels.pink },
    { num: "12", label: "Renewals Due", icon: Star, bg: C.pastels.purple }
  ];

  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex" }}>
      {/* Admin Sidebar */}
      <div style={{ width: 250, background: C.primary, minHeight: "100vh", flexShrink: 0 }}>
        <div style={{ padding: "28px 24px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <img src={logo} alt="Plantiva Logo" style={{ height: 36, width: 36, filter: "brightness(0) invert(1)", objectFit: "contain" }} />
            <span style={{ fontWeight: 800, fontSize: 22, color: "#FFFFFF" }}>plantiva<span style={{ color: C.accentLime }}>.</span></span>
          </div>
          <div style={{ color: C.accentLime, fontSize: 11, marginTop: 4, letterSpacing: "0.5px", fontWeight: 800 }}>SOIL SCIENCE ADMIN CONSOLE</div>
        </div>

        <div style={{ padding: "16px 12px" }}>
          {sidebarItems.map(({ icon: Icon, label }) => (
            <div 
              key={label} 
              onClick={() => { setActiveNav(label); if (label === "Logout") navigate("home"); }}
              style={{ 
                display: "flex", 
                gap: 12, 
                alignItems: "center", 
                padding: "12px 18px", 
                borderRadius: 9999,
                cursor: "pointer", 
                background: activeNav === label ? C.accentLime : "transparent", 
                color: activeNav === label ? C.primary : "#FFFFFF", 
                fontWeight: activeNav === label ? 800 : 600, 
                fontSize: 14, 
                marginBottom: 4,
                transition: "all 0.2s"
              }}
            >
              <Icon size={18} color={activeNav === label ? C.primary : "#FFFFFF"} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: "36px 40px", overflow: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <span style={{
              background: C.accentLime,
              color: C.primary,
              borderRadius: 9999,
              padding: "4px 14px",
              fontSize: 12,
              fontWeight: 800,
              display: "inline-block",
              marginBottom: 8
            }}>
              MANAGEMENT CONTROL
            </span>
            <h1 style={{ fontSize: 36, fontWeight: 800, color: C.primary, margin: "4px 0 0", letterSpacing: "-1px" }}>
              Admin Operations <span className="font-serif-italic" style={{ fontSize: 42 }}>Panel</span>
            </h1>
          </div>
          <button 
            className="pill-btn pill-btn-outline" 
            style={{ padding: "10px 20px", fontSize: 13 }}
            onClick={() => navigate("home")}
          >
            <ArrowLeft size={16} /> Exit to Public Site
          </button>
        </div>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 32 }}>
          {stats.map(({ num, label, icon: Icon, bg }) => (
            <div key={label} className="alldae-card" style={{ background: bg, padding: 24, borderRadius: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 32, color: C.primary }}>{num}</div>
                  <div style={{ color: C.textMid, fontSize: 13, marginTop: 4, fontWeight: 700 }}>{label}</div>
                </div>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", color: C.primary }}>
                  <Icon size={22} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Upcoming Visits */}
          <div style={{ background: "#FFFFFF", padding: 32, borderRadius: 32, border: "1px solid rgba(18, 43, 30, 0.06)", boxShadow: "0 10px 30px -5px rgba(18, 43, 30, 0.04)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontWeight: 800, color: C.primary, fontSize: 18 }}>Upcoming Doctor Visits</h3>
              <button className="pill-btn pill-btn-outline" style={{ padding: "6px 14px", fontSize: 12 }}>View All</button>
            </div>
            {[
              ["Neha Sharma", "Plant Wellness Visit", "24 Jul · 10:00 AM"],
              ["Rahul Verma", "Plant Spa Care", "24 Jul · 12:30 PM"],
              ["Anjali Mehta", "Soil Diagnostics", "24 Jul · 04:00 PM"]
            ].map(([name, service, time]) => (
              <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: `1px solid rgba(18, 43, 30, 0.08)` }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: C.primary }}>{name}</div>
                  <div style={{ fontSize: 12, color: C.textMid, fontWeight: 600 }}>{service}</div>
                </div>
                <div style={{ fontSize: 12, color: C.primary, fontWeight: 800 }}>{time}</div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div style={{ background: "#FFFFFF", padding: 32, borderRadius: 32, border: "1px solid rgba(18, 43, 30, 0.06)", boxShadow: "0 10px 30px -5px rgba(18, 43, 30, 0.04)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h3 style={{ margin: 0, fontWeight: 800, color: C.primary, fontSize: 18 }}>Recent Store Orders</h3>
              <button className="pill-btn pill-btn-outline" style={{ padding: "6px 14px", fontSize: 12 }}>View All</button>
            </div>
            {[
              ["#PLT-56879", "Neha S.", "Areca Palm x 2", "₹998"],
              ["#PLT-56878", "Rahul V.", "Snake Plant", "₹399"],
              ["#PLT-56877", "Anjali M.", "Leaf Cleaning Kit", "₹199"]
            ].map(([id, name, item, price]) => (
              <div key={id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: `1px solid rgba(18, 43, 30, 0.08)` }}>
                <span style={{ fontSize: 11, color: C.textMid, fontFamily: "monospace", fontWeight: 800 }}>{id}</span>
                <span style={{ fontSize: 13, color: C.primary, fontWeight: 700 }}>{name}</span>
                <span style={{ fontSize: 13, color: C.textMid, fontWeight: 600 }}>{item}</span>
                <span style={{ fontWeight: 800, color: C.primary, fontSize: 15 }}>{price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

