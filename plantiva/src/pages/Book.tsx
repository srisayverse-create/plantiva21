import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { C, styles } from '../constants/designSystem';
import { SERVICES } from '../constants/mockData';
import type { ServiceItem } from '../constants/mockData';

import { ClipboardList, ChevronLeft, ChevronRight, CheckCircle2, Calendar as CalIcon, Clock, MapPin, User, Phone } from 'lucide-react';
import ServiceIcon from '../components/ServiceIcon';

interface BookProps {
  navigate: (target: string, data?: any) => void;
  service?: ServiceItem;
}

export default function Book({ navigate, service }: BookProps) {
  const location = useLocation();
  const initialService = service || (location.state as ServiceItem);

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(initialService?.name || "Plant Wellness Visit");
  const [selectedDate, setSelectedDate] = useState(20);
  const [selectedTime, setSelectedTime] = useState("12:00 PM");
  const [details, setDetails] = useState({ name: "Mr. Abhay's Client", phone: "+91 98765 43210", address: "Flat 402, Green Balcony Towers, Gomti Nagar" });

  const times = ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calDates = Array.from({ length: 30 }, (_, i) => i + 1);

  const currentServiceObj = SERVICES.find(s => s.name === selectedService) || SERVICES[0];

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} />
      <div style={styles.container}>
        <div style={{ paddingTop: 40, paddingBottom: 80, maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span style={{
              background: C.accentLime,
              color: C.primary,
              borderRadius: 9999,
              padding: "6px 18px",
              fontSize: 12,
              fontWeight: 800,
              display: "inline-block",
              marginBottom: 12
            }}>
              📅 APPOINTMENT SCHEDULER
            </span>
            <h1 style={{ fontSize: 44, fontWeight: 800, color: C.primary, margin: "8px 0 0", letterSpacing: "-1px" }}>
              Book a <span className="font-serif-italic" style={{ fontSize: 52 }}>Soil & Plant Doctor</span> Visit
            </h1>
            <p style={{ color: C.textMid, marginTop: 6, fontSize: 15 }}>
              Expert soil analysis and balcony garden guidance at your home
            </p>
          </div>

          {/* Stepper Header */}
          <div style={{ background: C.pastels.mint, padding: "20px 30px", borderRadius: 28, marginBottom: 32, border: "1px solid rgba(18, 43, 30, 0.05)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {[["1", "Service"], ["2", "Date & Time"], ["3", "Details"], ["4", "Confirm"]].map(([num, label], i) => (
                <div key={num} style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ 
                      width: 40, 
                      height: 40, 
                      borderRadius: "50%", 
                      background: step >= parseInt(num) ? C.primary : "#FFFFFF", 
                      color: step >= parseInt(num) ? "#FFFFFF" : C.primary, 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "center", 
                      fontWeight: 800, 
                      fontSize: 14,
                      margin: "0 auto 6px",
                      transition: "all 0.3s ease"
                    }}>
                      {num}
                    </div>
                    <div style={{ fontSize: 11, color: step >= parseInt(num) ? C.primary : C.textLight, fontWeight: 800 }}>{label}</div>
                  </div>
                  {i < 3 && <div style={{ width: 44, height: 2, background: step > parseInt(num) ? C.primary : "rgba(18, 43, 30, 0.15)", margin: "0 10px 20px" }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Card Body */}
          <div style={{ background: "#FFFFFF", borderRadius: 32, padding: 40, border: "1px solid rgba(18, 43, 30, 0.06)", boxShadow: "0 12px 36px 0 rgba(18, 43, 30, 0.04)" }}>
            {/* STEP 1: Select Service */}
            {step === 1 && (
              <div>
                <h3 style={{ color: C.primary, fontWeight: 800, fontSize: 22, margin: "0 0 20px" }}>
                  Select Service Specification
                </h3>
                <div style={{ display: "grid", gap: 14 }}>
                  {SERVICES.map((s, idx) => {
                    const isSelected = selectedService === s.name;
                    return (
                      <div 
                        key={s.id} 
                        onClick={() => setSelectedService(s.name)}
                        style={{ 
                          borderRadius: 24, 
                          padding: "20px 24px", 
                          cursor: "pointer", 
                          display: "flex", 
                          justifyContent: "space-between", 
                          alignItems: "center", 
                          background: isSelected ? C.pastels.yellow : "#FAF8F5",
                          border: isSelected ? `2px solid ${C.primary}` : "1px solid rgba(18, 43, 30, 0.06)",
                          transition: "all 0.2s"
                        }}
                      >
                        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                          <div style={{ color: C.primary }}>
                            <ServiceIcon name={s.icon} size={28} />
                          </div>
                          <div>
                            <div style={{ fontWeight: 800, color: C.primary, fontSize: 16 }}>{s.name}</div>
                            <div style={{ fontSize: 12, color: C.textMid, marginTop: 2 }}>{s.duration} • {s.desc}</div>
                          </div>
                        </div>
                        <div style={{ fontWeight: 800, color: C.primary, fontSize: 18 }}>₹{s.price}</div>
                      </div>
                    );
                  })}
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 32 }}>
                  <button className="pill-btn pill-btn-lime" style={{ padding: "12px 32px" }} onClick={() => setStep(2)}>
                    Continue to Date & Time
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Select Date & Time */}
            {step === 2 && (
              <div>
                <h3 style={{ color: C.primary, fontWeight: 800, fontSize: 22, margin: "0 0 20px" }}>
                  Select Appointment Schedule
                </h3>

                {/* Calendar */}
                <div style={{ marginBottom: 32 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <span style={{ fontWeight: 800, color: C.primary, fontSize: 16, display: "flex", alignItems: "center", gap: 6 }}>
                      <CalIcon size={18} color={C.primary} /> July 2026
                    </span>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 8, textAlign: "center" }}>
                    {days.map(d => <div key={d} style={{ fontSize: 12, fontWeight: 800, color: C.textLight, padding: "4px 0" }}>{d}</div>)}
                    {calDates.map(d => {
                      const isSelected = d === selectedDate;
                      return (
                        <div 
                          key={d} 
                          onClick={() => setSelectedDate(d)}
                          style={{ 
                            padding: "10px 0", 
                            borderRadius: 9999, 
                            cursor: "pointer", 
                            fontWeight: isSelected ? 800 : 600, 
                            background: isSelected ? C.primary : "#FAF8F5", 
                            color: isSelected ? "#FFFFFF" : C.primary, 
                            fontSize: 14,
                            transition: "all 0.2s"
                          }}
                        >
                          {d}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Time Slots */}
                <h4 style={{ color: C.primary, fontWeight: 800, fontSize: 15, marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                  <Clock size={16} color={C.primary} /> Select Time Slot
                </h4>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                  {times.map(t => {
                    const isSelected = selectedTime === t;
                    return (
                      <button 
                        key={t} 
                        onClick={() => setSelectedTime(t)}
                        style={{
                          padding: "10px 20px",
                          borderRadius: 9999,
                          border: isSelected ? `2px solid ${C.primary}` : "1px solid rgba(18,43,30,0.08)",
                          background: isSelected ? C.accentLime : "#FAF8F5",
                          color: C.primary,
                          fontWeight: 800,
                          fontSize: 13,
                          cursor: "pointer",
                          transition: "all 0.2s"
                        }}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button className="pill-btn pill-btn-outline" onClick={() => setStep(1)}>Back</button>
                  <button className="pill-btn pill-btn-lime" style={{ padding: "12px 32px" }} onClick={() => setStep(3)}>
                    Continue to Details
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Enter Details */}
            {step === 3 && (
              <div>
                <h3 style={{ color: C.primary, fontWeight: 800, fontSize: 22, margin: "0 0 20px" }}>
                  Customer & Address Information
                </h3>
                <div style={{ display: "grid", gap: 18, marginBottom: 32 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 800, color: C.primary, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
                      <User size={14} /> Full Name
                    </label>
                    <input 
                      type="text" 
                      value={details.name} 
                      onChange={e => setDetails({ ...details, name: e.target.value })} 
                      style={styles.input} 
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 800, color: C.primary, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
                      <Phone size={14} /> Phone Number
                    </label>
                    <input 
                      type="text" 
                      value={details.phone} 
                      onChange={e => setDetails({ ...details, phone: e.target.value })} 
                      style={styles.input} 
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 800, color: C.primary, marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
                      <MapPin size={14} /> Balcony / House Address
                    </label>
                    <textarea 
                      rows={3} 
                      value={details.address} 
                      onChange={e => setDetails({ ...details, address: e.target.value })} 
                      style={{ ...styles.input, borderRadius: 20, resize: "none" }} 
                    />
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button className="pill-btn pill-btn-outline" onClick={() => setStep(2)}>Back</button>
                  <button className="pill-btn pill-btn-lime" style={{ padding: "12px 32px" }} onClick={() => setStep(4)}>
                    Review Confirmation
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: Confirm Booking */}
            {step === 4 && (
              <div>
                <h3 style={{ color: C.primary, fontWeight: 800, fontSize: 22, margin: "0 0 20px" }}>
                  Confirm Booking Summary
                </h3>

                <div style={{ background: C.pastels.yellow, padding: 28, borderRadius: 28, marginBottom: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", borderBottom: `1px solid rgba(18, 43, 30, 0.08)`, paddingBottom: 14, marginBottom: 14 }}>
                    <div>
                      <div style={{ fontSize: 12, color: C.textLight, fontWeight: 800 }}>SELECTED SERVICE</div>
                      <div style={{ fontWeight: 800, color: C.primary, fontSize: 16, marginTop: 2 }}>{currentServiceObj.name}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 12, color: C.textLight, fontWeight: 800 }}>FEE</div>
                      <div style={{ fontWeight: 800, color: C.primary, fontSize: 18 }}>₹{currentServiceObj.price}</div>
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: C.textLight, fontWeight: 800 }}>DATE & TIME</div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: C.primary, marginTop: 2 }}>July {selectedDate}, 2026 at {selectedTime}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: C.textLight, fontWeight: 800 }}>CONTACT</div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: C.primary, marginTop: 2 }}>{details.name} ({details.phone})</div>
                    </div>
                  </div>

                  <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid rgba(18, 43, 30, 0.08)` }}>
                    <div style={{ fontSize: 11, color: C.textLight, fontWeight: 800 }}>ADDRESS</div>
                    <div style={{ fontSize: 13, color: C.textMid, marginTop: 2 }}>{details.address}</div>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button className="pill-btn pill-btn-outline" onClick={() => setStep(3)}>Back</button>
                  <button 
                    className="pill-btn pill-btn-lime" 
                    style={{ padding: "14px 36px", fontSize: 15 }} 
                    onClick={() => navigate("order-confirm", { service: currentServiceObj, date: `July ${selectedDate}, 2026`, time: selectedTime, details })}
                  >
                    Confirm Appointment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

