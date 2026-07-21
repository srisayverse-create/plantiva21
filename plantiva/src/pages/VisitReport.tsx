import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, HeartCrack, Sprout, Check, UserCheck, Download, ArrowLeft, Activity, Thermometer, Droplets } from 'lucide-react';
import { C, styles } from '../constants/designSystem';

interface VisitReportProps {
  navigate: (target: string, data?: any) => void;
}

export default function VisitReport({ navigate }: VisitReportProps) {
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} />
      <div style={styles.container}>
        <div style={{ padding: "24px 0 16px", color: C.textLight, fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
          <span onClick={() => navigate("dashboard")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 4, color: C.primary, fontWeight: 800 }}>
            <ArrowLeft size={14} /> My Dashboard
          </span>
          <span>/</span>
          <span style={{ color: C.primary, fontWeight: 800 }}>Soil & Plant Visit Diagnostic Report</span>
        </div>

        <div style={{ maxWidth: 840, margin: "0 auto", paddingBottom: 80 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
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
                LAB DIAGNOSTIC #PL-8942
              </span>
              <h1 style={{ fontSize: 40, fontWeight: 800, color: C.primary, margin: "6px 0 0", letterSpacing: "-1px" }}>
                Scientific Soil & <span className="font-serif-italic" style={{ fontSize: 46 }}>Plant Health Report</span>
              </h1>
              <div style={{ color: C.textMid, fontSize: 14, marginTop: 4, display: "flex", alignItems: "center", gap: 6, fontWeight: 600 }}>
                <Calendar size={14} color={C.primary} /> July 18, 2026 · 10:30 AM · Inspector: Mr. Abhay's Team
              </div>
            </div>

            <button className="pill-btn pill-btn-outline" style={{ padding: "10px 20px", fontSize: 13 }}>
              <Download size={15} /> Export PDF
            </button>
          </div>

          {/* Soil Analysis Gauge Panel */}
          <div style={{ background: "#FFFFFF", padding: 36, borderRadius: 32, border: "1px solid rgba(18, 43, 30, 0.06)", boxShadow: "0 10px 30px -5px rgba(18, 43, 30, 0.04)", marginBottom: 28 }}>
            <h3 style={{ margin: "0 0 20px", fontWeight: 800, color: C.primary, fontSize: 22, display: "flex", alignItems: "center", gap: 8 }}>
              <Activity size={22} color={C.primary} /> Soil Metrics & pH Gauge
            </h3>

            {/* pH Gauge visual */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 800, marginBottom: 10 }}>
                <span>Soil pH Level: <strong style={{ color: C.primary, fontSize: 16 }}>6.8 (Slightly Acidic - Ideal)</strong></span>
                <span style={{ color: C.primary, background: C.accentLime, padding: "2px 10px", borderRadius: 9999, fontSize: 12 }}>Optimal Balance</span>
              </div>
              <div style={{ height: 14, borderRadius: 9999, background: "linear-gradient(to right, #E53E3E 0%, #ECC94B 35%, #38A169 50%, #3182CE 80%, #805AD5 100%)", position: "relative" }}>
                <div style={{
                  position: "absolute",
                  left: "55%",
                  top: -3,
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: C.primary,
                  border: "2px solid #FFFFFF",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.3)"
                }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: C.textLight, marginTop: 8, fontWeight: 700 }}>
                <span>Acidic (pH 4.0)</span>
                <span>Neutral (pH 7.0)</span>
                <span>Alkaline (pH 9.0)</span>
              </div>
            </div>

            {/* NPK & Moisture Bar */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              <div style={{ background: C.pastels.blue, padding: 18, borderRadius: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: C.textLight }}>MOISTURE CONTENT</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: C.primary, margin: "4px 0" }}>65%</div>
                <div style={{ fontSize: 12, color: C.primary, fontWeight: 700 }}>Good Retention</div>
              </div>

              <div style={{ background: C.pastels.yellow, padding: 18, borderRadius: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: C.textLight }}>NITROGEN (N)</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: C.primary, margin: "4px 0" }}>High</div>
                <div style={{ fontSize: 12, color: C.primary, fontWeight: 700 }}>Supports Foliage</div>
              </div>

              <div style={{ background: C.pastels.mint, padding: 18, borderRadius: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: C.textLight }}>PHOSPHORUS & POTASSIUM</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: C.primary, margin: "4px 0" }}>Balanced</div>
                <div style={{ fontSize: 12, color: C.primary, fontWeight: 700 }}>Optimal Root Health</div>
              </div>
            </div>
          </div>

          {/* Before & After Progress */}
          <div style={{ background: "#FFFFFF", padding: 36, borderRadius: 32, border: "1px solid rgba(18, 43, 30, 0.06)", boxShadow: "0 10px 30px -5px rgba(18, 43, 30, 0.04)", marginBottom: 28 }}>
            <h3 style={{ margin: "0 0 20px", fontWeight: 800, color: C.primary, fontSize: 22 }}>Foliage Recovery Status</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              <div>
                <div style={{ fontWeight: 800, color: C.primary, marginBottom: 10, fontSize: 13, textAlign: "center" }}>Before Treatment (Yellowing)</div>
                <div style={{ background: C.pastels.pink, borderRadius: 24, height: 190, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <HeartCrack size={64} color={C.danger} />
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 800, color: C.primary, marginBottom: 10, fontSize: 13, textAlign: "center" }}>After Spa & Soil Enrichment</div>
                <div style={{ background: C.pastels.mint, borderRadius: 24, height: 190, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Sprout size={64} color={C.primary} />
                </div>
              </div>
            </div>
          </div>

          {/* Services Completed Checklist */}
          <div style={{ background: C.pastels.yellow, padding: 32, borderRadius: 32, marginBottom: 28 }}>
            <h3 style={{ margin: "0 0 16px", fontWeight: 800, color: C.primary, fontSize: 22 }}>Completed Care Procedures</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {["Full Plant Spa & Leaf Shine", "Soil Aeration & Topsoil Refresh", "Organic Neem Oil Pest Spray", "Balcony Sunlight Placement Alignment"].map(item => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: C.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Check size={13} color="#FFFFFF" strokeWidth={3} />
                  </div>
                  <span style={{ fontSize: 14, color: C.primary, fontWeight: 700 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor Notes */}
          <div style={{ background: "#FFFFFF", padding: 36, borderRadius: 32, border: "1px solid rgba(18, 43, 30, 0.06)" }}>
            <h3 style={{ margin: "0 0 12px", fontWeight: 800, color: C.primary, fontSize: 22 }}>Senior Plant Doctor Observations</h3>
            <p style={{ color: C.textMid, fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
              Balcony orientation provides 4 hours of direct morning sunlight, which is excellent for Areca Palms and Rubber plants. We recommend watering every 3 days in summer, ensuring pots drain thoroughly. Soil pH is ideal; continue using organic compost monthly.
            </p>
            <div style={{ display: "flex", gap: 14, alignItems: "center", borderRadius: 24, padding: 20, background: C.pastels.mint }}>
              <div style={{ color: C.primary }}><UserCheck size={40} /></div>
              <div>
                <div style={{ fontWeight: 800, color: C.primary, fontSize: 16 }}>Rohit Verma</div>
                <div style={{ fontSize: 12, color: C.textMid, fontWeight: 600 }}>Senior Plant Doctor · Trained under Soil Lab Guidelines · 8 Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

