import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, Calendar, ShoppingBag, ArrowRight } from 'lucide-react';
import { C, styles } from '../constants/designSystem';

interface OrderConfirmProps {
  navigate: (target: string, data?: any) => void;
}

export default function OrderConfirm({ navigate }: OrderConfirmProps) {
  const location = useLocation();
  const data = location.state || {};
  const isBooking = !!data.service;

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} />
      <div style={{ ...styles.container, display: "flex", justifyContent: "center", alignItems: "center", minHeight: "75vh", padding: "60px 24px" }}>
        <div style={{ background: "#FFFFFF", textAlign: "center", maxWidth: 540, padding: 48, borderRadius: 36, border: "1px solid rgba(18, 43, 30, 0.06)", boxShadow: "0 16px 40px 0 rgba(18, 43, 30, 0.05)", width: "100%" }}>
          
          <div style={{ 
            width: 84, 
            height: 84, 
            background: C.pastels.mint, 
            borderRadius: "50%", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            margin: "0 auto 24px"
          }}>
            <CheckCircle2 size={48} color={C.primary} strokeWidth={2.5} />
          </div>

          <h1 style={{ fontSize: 40, fontWeight: 800, color: C.primary, margin: "0 0 10px", letterSpacing: "-1px" }}>
            {isBooking ? (
              <>Appointment <span className="font-serif-italic" style={{ fontSize: 46 }}>Scheduled!</span></>
            ) : (
              <>Order <span className="font-serif-italic" style={{ fontSize: 46 }}>Confirmed!</span></>
            )}
          </h1>

          <p style={{ color: C.textMid, fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
            {isBooking 
              ? `Thank you! Mr. Abhay Kumar's team of certified plant specialists will visit your balcony on ${data.date} at ${data.time}.`
              : "Thank you Neha! Your scientific nursery package is being carefully prepared for shipment."}
          </p>

          <div style={{ background: C.pastels.yellow, padding: 24, borderRadius: 28, marginBottom: 32, textAlign: "left" }}>
            {[
              [isBooking ? "Reference ID" : "Order ID", isBooking ? "#APT-9042" : "#PLT-56879"],
              [isBooking ? "Service Type" : "Delivery Date", isBooking ? data.service?.name : "July 22, 2026"],
              ["Status", isBooking ? "Confirmed & Assigned" : "Paid & Processing"]
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontSize: 14 }}>
                <span style={{ color: C.textLight, fontWeight: 700 }}>{k}</span>
                <span style={{ fontWeight: 800, color: C.primary }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            <button className="pill-btn pill-btn-outline" style={{ flex: 1, padding: "14px", justifyContent: "center" }} onClick={() => navigate("store")}>
              Return to Store
            </button>
            <button className="pill-btn pill-btn-lime" style={{ flex: 1, padding: "14px", justifyContent: "center" }} onClick={() => navigate("dashboard")}>
              Go to Dashboard <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

