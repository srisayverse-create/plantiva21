import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Rating from '../components/Rating';
import { C, styles } from '../constants/designSystem';
import { SERVICES } from '../constants/mockData';
import type { ServiceItem } from '../constants/mockData';

import { UserCheck, Heart, Target, Award, Check, ArrowLeft, ShieldCheck } from 'lucide-react';
import ServiceIcon from '../components/ServiceIcon';

interface ServiceDetailProps {
  navigate: (target: string, data?: any) => void;
  service?: ServiceItem;
}

export default function ServiceDetail({ navigate, service }: ServiceDetailProps) {
  const location = useLocation();
  const s = service || (location.state as ServiceItem) || SERVICES[0];

  const features = [
    { icon: UserCheck, label: "Government Trained Plant Doctors" },
    { icon: Heart, label: "100% Organic & Non-Toxic Formulas" },
    { icon: Target, label: "Scientific Soil pH & NPK Inspection" },
    { icon: Award, label: "Guaranteed Plant Health Recovery" }
  ];

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} />
      <div style={styles.container}>
        {/* Breadcrumb Navigation */}
        <div style={{ padding: "24px 0 16px", color: C.textLight, fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
          <span onClick={() => navigate("services")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 4, color: C.primary, fontWeight: 800 }}>
            <ArrowLeft size={14} /> Back to Services
          </span>
          <span>/</span>
          <span style={{ color: C.primary, fontWeight: 800 }}>{s.name}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, paddingBottom: 80 }}>
          {/* Left Column: Visual Showcase & Why Choose Us */}
          <div>
            <div className="alldae-card" style={{ borderRadius: 36, height: 340, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20, background: C.pastels.mint }}>
              <ServiceIcon name={s.icon} size={90} color={C.primary} />
            </div>

            <div style={{ background: "#FFFFFF", padding: 28, borderRadius: 28, border: "1px solid rgba(18, 43, 30, 0.06)", boxShadow: "0 10px 30px -5px rgba(18, 43, 30, 0.04)" }}>
              <h4 style={{ fontWeight: 800, color: C.primary, fontSize: 18, margin: "0 0 16px", display: "flex", alignItems: "center", gap: 8 }}>
                <ShieldCheck size={20} color={C.primary} />
                Why Plantiva Scientific Care?
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {features.map(({ icon: Icon, label }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 10, background: C.pastels.yellow, display: "flex", alignItems: "center", justifyContent: "center", color: C.primary }}>
                      <Icon size={16} />
                    </div>
                    <span style={{ fontSize: 14, color: C.textMid, fontWeight: 600 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Service Details & Booking Panel */}
          <div>
            <span style={{
              background: C.accentLime,
              color: C.primary,
              borderRadius: 9999,
              padding: "4px 14px",
              fontSize: 12,
              fontWeight: 800,
              display: "inline-block",
              marginBottom: 12
            }}>
              SERVICE SPECIFICATION
            </span>
            <h1 style={{ fontSize: 44, fontWeight: 800, color: C.primary, margin: "0 0 12px", letterSpacing: "-1px" }}>{s.name}</h1>
            
            <div style={{ marginBottom: 16 }}>
              <Rating value={4.9} count={142} />
            </div>

            <p style={{ color: C.textMid, fontSize: 16, lineHeight: 1.7, marginBottom: 28 }}>
              {s.desc} Our plant specialists bring certified soil kits and organic remedies right to your doorstep.
            </p>

            {/* Checklist Box */}
            <div style={{ background: C.pastels.pink, padding: 24, borderRadius: 28, marginBottom: 28 }}>
              <div style={{ fontWeight: 800, color: C.primary, marginBottom: 16, fontSize: 14, letterSpacing: "0.5px" }}>WHAT'S INCLUDED IN THIS VISIT</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 12 }}>
                {s.includes.map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", background: C.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Check size={13} color="#FFFFFF" strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: 14, color: C.primary, fontWeight: 700 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Duration and Pricing */}
            <div style={{ background: "#FFFFFF", padding: 24, borderRadius: 24, border: "1px solid rgba(18, 43, 30, 0.08)", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <div>
                <div style={{ color: C.textLight, fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>Estimated Time</div>
                <div style={{ fontWeight: 800, color: C.primary, fontSize: 16, marginTop: 2 }}>{s.duration}</div>
              </div>
              <div style={{ width: 1, height: 36, background: "rgba(18, 43, 30, 0.08)" }} />
              <div style={{ textAlign: "right" }}>
                <div style={{ color: C.textLight, fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>Total Charge</div>
                <div style={{ fontWeight: 800, fontSize: 32, color: C.primary }}>₹{s.price}</div>
              </div>
            </div>

            <button 
              className="pill-btn pill-btn-lime"
              style={{ width: "100%", fontSize: 16, padding: "16px", fontWeight: 800, justifyContent: "center" }} 
              onClick={() => navigate("book", s)}
            >
              Book Service Appointment Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

