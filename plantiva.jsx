import { useState } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────
const C = {
  primary: "#1B4332",
  primaryLight: "#2D6A4F",
  primaryMid: "#40916C",
  accent: "#52B788",
  accentLight: "#B7E4C7",
  accentPale: "#D8F3DC",
  bg: "#F8FAF8",
  white: "#FFFFFF",
  text: "#1A1A1A",
  textMid: "#4A5568",
  textLight: "#718096",
  border: "#E2EBE4",
  gold: "#E9A800",
  danger: "#E53E3E",
  success: "#38A169",
};

const styles = {
  btn: {
    background: C.primary,
    color: C.white,
    border: "none",
    borderRadius: 8,
    padding: "10px 22px",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
    transition: "background 0.2s",
    fontFamily: "inherit",
  },
  btnOutline: {
    background: "transparent",
    color: C.primary,
    border: `1.5px solid ${C.primary}`,
    borderRadius: 8,
    padding: "10px 22px",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  btnSm: {
    background: C.primary,
    color: C.white,
    border: "none",
    borderRadius: 6,
    padding: "8px 16px",
    fontWeight: 600,
    fontSize: 13,
    cursor: "pointer",
    fontFamily: "inherit",
  },
  card: {
    background: C.white,
    borderRadius: 14,
    border: `1px solid ${C.border}`,
    padding: 20,
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  },
  input: {
    width: "100%",
    padding: "10px 14px",
    border: `1.5px solid ${C.border}`,
    borderRadius: 8,
    fontSize: 14,
    fontFamily: "inherit",
    color: C.text,
    background: C.white,
    boxSizing: "border-box",
    outline: "none",
  },
  badge: {
    background: C.accentPale,
    color: C.primaryLight,
    borderRadius: 20,
    padding: "3px 12px",
    fontSize: 12,
    fontWeight: 600,
    display: "inline-block",
  },
  section: { padding: "60px 0" },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 24px" },
  tag: {
    background: C.accentPale,
    color: C.primaryMid,
    borderRadius: 4,
    padding: "3px 10px",
    fontSize: 11,
    fontWeight: 600,
  },
};

// ─── MOCK DATA ───────────────────────────────────────────────────
const SERVICES = [
  { id: 1, name: "Plant Wellness Visit", desc: "Comprehensive health check & personalized care plan", price: 299, duration: "45–60 mins", icon: "🌿", includes: ["Plant health check", "Soil condition check", "Watering & nutrition advice", "Pest & disease inspection", "Placement guidance"] },
  { id: 2, name: "Plant Spa", desc: "Deep cleaning, pruning, pot cleaning & grooming", price: 399, duration: "60–90 mins", icon: "🪴", includes: ["Full plant cleaning", "Leaf shine treatment", "Pot & soil refresh", "Pruning & shaping"] },
  { id: 3, name: "Leaf Cleaning", desc: "Remove dust, clean leaves and improve photosynthesis", price: 199, duration: "30–45 mins", icon: "🍃", includes: ["Leaf dusting", "Leaf shine spray", "Basic health check"] },
  { id: 4, name: "Holiday Care", desc: "We take care of your plants while you're away", price: 499, duration: "Per visit", icon: "✈️", includes: ["Watering schedule", "Health monitoring", "Emergency care", "Photo updates"] },
  { id: 5, name: "Plant Revival", desc: "Special care for sick or nearly dead plants", price: 599, duration: "90–120 mins", icon: "💚", includes: ["Root inspection", "Soil replacement", "Nutrient treatment", "Recovery plan"] },
  { id: 6, name: "Consultation", desc: "Expert advice for your indoor garden", price: 149, duration: "30 mins", icon: "💬", includes: ["Expert Q&A", "Plant recommendations", "Care calendar", "Written tips"] },
];

const PLANTS = [
  { id: 1, name: "Areca Palm", price: 499, originalPrice: 699, category: "Indoor Plants", light: "Bright Light", tags: ["Air Purifying", "Low Maintenance", "Pet Friendly"], rating: 4.7, reviews: 59, stock: true },
  { id: 2, name: "Snake Plant", price: 399, originalPrice: 499, category: "Indoor Plants", light: "Low Light", tags: ["Air Purifying", "Low Maintenance"], rating: 4.5, reviews: 112, stock: true },
  { id: 3, name: "Peace Lily", price: 499, originalPrice: 599, category: "Indoor Plants", light: "Low Light", tags: ["Air Purifying", "Flowering"], rating: 4.3, reviews: 78, stock: true },
  { id: 4, name: "ZZ Plant", price: 449, originalPrice: 549, category: "Indoor Plants", light: "Low Light", tags: ["Low Maintenance", "Succulent"], rating: 4.6, reviews: 45, stock: true },
  { id: 5, name: "Rubber Plant", price: 599, originalPrice: 799, category: "Balcony Plants", light: "Bright Light", tags: ["Air Purifying", "Large"], rating: 4.4, reviews: 33, stock: false },
  { id: 6, name: "Money Plant", price: 109, originalPrice: 149, category: "Indoor Plants", light: "Medium Light", tags: ["Easy Care", "Trailing"], rating: 4.8, reviews: 200, stock: true },
];

const PLANS = [
  { id: 1, name: "Green Basic", price: 599, visits: 2, features: ["2 Visits / Month", "Basic Benefits", "Email Support"], popular: false, color: C.accentPale },
  { id: 2, name: "Green Plus", price: 999, visits: 4, features: ["4 Visits / Month", "All Basic Benefits", "Leaf Cleaning", "10% Off on Store", "WhatsApp Support"], popular: true, color: C.primary },
  { id: 3, name: "Green Premium", price: 1499, visits: 4, features: ["4 Visits / Month", "All Premium Benefits", "Priority Support", "Advanced Care", "Free Plant Monthly"], popular: false, color: C.accentPale },
];

// ─── SHARED COMPONENTS ───────────────────────────────────────────
const PlantIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="20" fill={C.accentPale} />
    <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="20">🌿</text>
  </svg>
);

const Star = ({ filled }) => <span style={{ color: filled ? C.gold : "#D1D5DB", fontSize: 14 }}>★</span>;

const Rating = ({ value, count }) => (
  <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
    {[1,2,3,4,5].map(i => <Star key={i} filled={i <= Math.round(value)} />)}
    <span style={{ color: C.textLight, fontSize: 13 }}>{value} ({count})</span>
  </span>
);

const PlantEmoji = ({ name, size = 80 }) => {
  const emojis = { "Areca Palm": "🌴", "Snake Plant": "🪴", "Peace Lily": "💐", "ZZ Plant": "🌱", "Rubber Plant": "🌳", "Money Plant": "🍀" };
  return (
    <div style={{ width: size, height: size, background: C.accentPale, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.5 }}>
      {emojis[name] || "🌿"}
    </div>
  );
};

const Navbar = ({ navigate, cartCount = 0 }) => (
  <nav style={{ background: C.white, borderBottom: `1px solid ${C.border}`, position: "sticky", top: 0, zIndex: 100 }}>
    <div style={{ ...styles.container, display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
      <div onClick={() => navigate("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 22 }}>🌿</span>
        <span style={{ fontWeight: 800, fontSize: 20, color: C.primary, letterSpacing: "-0.5px" }}>PLANTIVA</span>
      </div>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {[["Home","home"],["Services","services"],["Store","store"],["Membership","membership"],["About Us","about"]].map(([label, page]) => (
          <span key={page} onClick={() => navigate(page)} style={{ cursor: "pointer", fontSize: 14, color: C.textMid, fontWeight: 500, transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = C.primary} onMouseLeave={e => e.target.style.color = C.textMid}>{label}</span>
        ))}
        <span onClick={() => navigate("cart")} style={{ cursor: "pointer", position: "relative", fontSize: 20 }}>
          🛒
          {cartCount > 0 && <span style={{ position: "absolute", top: -6, right: -8, background: C.primary, color: C.white, borderRadius: "50%", width: 16, height: 16, fontSize: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>{cartCount}</span>}
        </span>
        <button style={styles.btn} onClick={() => navigate("book")}>Book a Visit</button>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer style={{ background: C.primary, color: C.white, padding: "40px 0 20px" }}>
    <div style={{ ...styles.container, display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <span style={{ fontSize: 22 }}>🌿</span>
          <span style={{ fontWeight: 800, fontSize: 18 }}>PLANTIVA</span>
        </div>
        <p style={{ color: C.accentLight, fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>Making every home and workspace greener, one plant at a time.</p>
      </div>
      {[["Services", ["Plant Wellness", "Plant Spa", "Leaf Cleaning", "Holiday Care"]], ["Store", ["Indoor Plants", "Balcony Plants", "Air Purifying", "Succulents"]], ["Company", ["About Us", "Membership", "Contact", "Privacy Policy"]]].map(([title, links]) => (
        <div key={title}>
          <div style={{ fontWeight: 700, marginBottom: 12, color: C.accentLight }}>{title}</div>
          {links.map(l => <div key={l} style={{ color: "#A0AEC0", fontSize: 13, marginBottom: 8, cursor: "pointer" }}>{l}</div>)}
        </div>
      ))}
    </div>
    <div style={{ ...styles.container, borderTop: `1px solid rgba(255,255,255,0.1)`, marginTop: 32, paddingTop: 20, textAlign: "center", color: "#A0AEC0", fontSize: 13 }}>
      © 2024 Plantiva. All rights reserved.
    </div>
  </footer>
);

// ─── PAGE 1: HOME ────────────────────────────────────────────────
const HomePage = ({ navigate }) => (
  <div>
    <Navbar navigate={navigate} />
    {/* Hero */}
    <section style={{ background: `linear-gradient(135deg, ${C.accentPale} 0%, ${C.white} 60%)`, padding: "80px 0 60px" }}>
      <div style={{ ...styles.container, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <div>
          <span style={styles.badge}>🌱 India's #1 Plant Care Service</span>
          <h1 style={{ fontSize: 52, fontWeight: 800, color: C.primary, lineHeight: 1.15, margin: "16px 0 20px", letterSpacing: "-1px" }}>
            Premium Plant<br />Wellness for<br /><span style={{ color: C.primaryMid }}>Modern Living</span>
          </h1>
          <p style={{ color: C.textMid, fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>We care for your plants, so you can enjoy the green. Expert plant doctors at your doorstep.</p>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ ...styles.btn, fontSize: 16, padding: "14px 28px" }} onClick={() => navigate("book")}>Book a Visit</button>
            <button style={{ ...styles.btnOutline, fontSize: 16, padding: "14px 28px" }} onClick={() => navigate("services")}>Explore Services</button>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: 360, height: 360, background: C.accentPale, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 160 }}>🪴</div>
        </div>
      </div>
    </section>

    {/* Trust badges */}
    <section style={{ background: C.white, padding: "32px 0", borderBottom: `1px solid ${C.border}` }}>
      <div style={{ ...styles.container, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
        {[["🏆", "Expert Care", "Trained plant experts"], ["✅", "Trusted Professionals", "Background verified"], ["🎯", "Personalized Service", "Tailored for your plants"], ["😌", "Hassle Free", "We take care of everything"]].map(([icon, title, desc]) => (
          <div key={title} style={{ textAlign: "center", padding: "12px 8px" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
            <div style={{ fontWeight: 700, color: C.primary, fontSize: 14, marginBottom: 4 }}>{title}</div>
            <div style={{ color: C.textLight, fontSize: 12 }}>{desc}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Popular Services */}
    <section style={{ ...styles.section, background: C.bg }}>
      <div style={styles.container}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 800, color: C.primary, margin: 0 }}>Our Popular Services</h2>
            <p style={{ color: C.textLight, marginTop: 6 }}>Professional care for every plant need</p>
          </div>
          <button style={styles.btnOutline} onClick={() => navigate("services")}>View All →</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {SERVICES.slice(0,4).map(s => (
            <div key={s.id} style={{ ...styles.card, cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
              onClick={() => navigate("service-detail", s)}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)"; }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{s.icon}</div>
              <div style={{ fontWeight: 700, color: C.primary, marginBottom: 6 }}>{s.name}</div>
              <div style={{ color: C.textLight, fontSize: 13, lineHeight: 1.5, marginBottom: 12 }}>{s.desc}</div>
              <div style={{ color: C.primaryMid, fontWeight: 700, fontSize: 16 }}>₹{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section style={{ background: C.primary, padding: "60px 0" }}>
      <div style={{ ...styles.container, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" }}>
        {[["5+", "Years Experience"], ["10K+", "Happy Customers"], ["50K+", "Plants Cared For"], ["20+", "Expert Plant Doctors"]].map(([num, label]) => (
          <div key={label}>
            <div style={{ fontSize: 40, fontWeight: 800, color: C.accentLight }}>{num}</div>
            <div style={{ color: "#A0AEC0", fontSize: 14, marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Banner */}
    <section style={{ background: C.accentPale, padding: "60px 0" }}>
      <div style={{ ...styles.container, textAlign: "center" }}>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: C.primary, marginBottom: 12 }}>Ready to give your plants the care they deserve?</h2>
        <p style={{ color: C.textMid, marginBottom: 28, fontSize: 16 }}>Book a visit today and let our experts handle the rest.</p>
        <button style={{ ...styles.btn, fontSize: 16, padding: "14px 32px" }} onClick={() => navigate("book")}>Book a Visit Now</button>
      </div>
    </section>
    <Footer />
  </div>
);

// ─── PAGE 2: SERVICES ────────────────────────────────────────────
const ServicesPage = ({ navigate }) => (
  <div style={{ background: C.bg, minHeight: "100vh" }}>
    <Navbar navigate={navigate} />
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1 style={{ fontSize: 40, fontWeight: 800, color: C.primary, margin: 0 }}>Our Services</h1>
          <p style={{ color: C.textLight, marginTop: 8, fontSize: 16 }}>Complete care for your plants</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {SERVICES.map(s => (
            <div key={s.id} style={{ ...styles.card, cursor: "pointer" }}
              onClick={() => navigate("service-detail", s)}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>{s.icon}</div>
              <div style={{ fontWeight: 700, color: C.primary, fontSize: 18, marginBottom: 8 }}>{s.name}</div>
              <div style={{ color: C.textMid, fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ color: C.primaryMid, fontWeight: 700, fontSize: 18 }}>₹{s.price}</div>
                <div style={{ color: C.textLight, fontSize: 12 }}>{s.duration}</div>
              </div>
              <button style={{ ...styles.btnSm, width: "100%", marginTop: 16 }}>Know More →</button>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div style={{ background: C.primary, borderRadius: 16, padding: "32px 40px", marginTop: 48, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ color: C.white, fontWeight: 700, fontSize: 20, marginBottom: 6 }}>Not sure which service your plants need?</div>
            <div style={{ color: C.accentLight, fontSize: 14 }}>Get a free consultation from our experts.</div>
          </div>
          <button style={{ ...styles.btn, background: C.accent, fontSize: 15, padding: "13px 28px" }} onClick={() => navigate("book")}>Book a Consultation</button>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

// ─── PAGE 3: SERVICE DETAIL ───────────────────────────────────────
const ServiceDetailPage = ({ navigate, service }) => {
  const s = service || SERVICES[0];
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} />
      <div style={styles.container}>
        <div style={{ padding: "20px 0", color: C.textLight, fontSize: 13 }}>
          <span onClick={() => navigate("home")} style={{ cursor: "pointer" }}>Home</span> &gt; <span onClick={() => navigate("services")} style={{ cursor: "pointer" }}>Services</span> &gt; <span style={{ color: C.primary }}>{s.name}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, paddingBottom: 60 }}>
          {/* Left */}
          <div>
            <div style={{ background: C.accentPale, borderRadius: 16, height: 320, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 100, marginBottom: 16 }}>{s.icon}</div>
            <div style={{ display: "flex", gap: 10 }}>
              {[...Array(4)].map((_,i) => (
                <div key={i} style={{ background: C.accentPale, borderRadius: 8, width: 70, height: 70, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, cursor: "pointer", border: i === 0 ? `2px solid ${C.primary}` : "2px solid transparent" }}>{s.icon}</div>
              ))}
            </div>

            <div style={{ ...styles.card, marginTop: 24 }}>
              <div style={{ fontWeight: 700, color: C.primary, marginBottom: 16 }}>Why Choose Plantiva?</div>
              {[["👨‍⚕️", "Expert Plant Doctors"], ["🌿", "Safe & Organic Care"], ["🎯", "Personalized Solutions"], ["✅", "Satisfaction Guaranteed"]].map(([icon, label]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span>{icon}</span><span style={{ fontSize: 14, color: C.textMid }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: C.primary, marginBottom: 8 }}>{s.name}</h1>
            <Rating value={4.0} count={120} />
            <p style={{ color: C.textMid, fontSize: 15, lineHeight: 1.7, marginTop: 16, marginBottom: 24 }}>A complete health check for your plants to ensure they thrive and stay healthy.</p>

            <div style={styles.card}>
              <div style={{ fontWeight: 700, color: C.primary, marginBottom: 14 }}>What's Included</div>
              {s.includes.map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ color: C.success, fontWeight: 700 }}>✓</span>
                  <span style={{ fontSize: 14, color: C.textMid }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "24px 0" }}>
              <div>
                <div style={{ color: C.textLight, fontSize: 13 }}>Duration</div>
                <div style={{ fontWeight: 700, color: C.text }}>{s.duration}</div>
              </div>
              <div>
                <div style={{ color: C.textLight, fontSize: 13 }}>Price</div>
                <div style={{ fontWeight: 800, fontSize: 28, color: C.primary }}>₹{s.price}</div>
              </div>
            </div>

            <button style={{ ...styles.btn, width: "100%", fontSize: 16, padding: "15px" }} onClick={() => navigate("book", s)}>Book Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ─── PAGE 4: BOOK A SERVICE ───────────────────────────────────────
const BookPage = ({ navigate, service }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(service?.name || "Plant Wellness Visit");
  const [selectedDate, setSelectedDate] = useState(20);
  const [selectedTime, setSelectedTime] = useState("12:00 PM");
  const [details, setDetails] = useState({ name: "", phone: "", address: "" });

  const times = ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"];
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const calDates = Array.from({length: 30}, (_,i) => i+1);

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} />
      <div style={styles.container}>
        <div style={{ paddingTop: 40, paddingBottom: 60, maxWidth: 700, margin: "0 auto" }}>
          <h1 style={{ textAlign: "center", fontSize: 32, fontWeight: 800, color: C.primary, marginBottom: 8 }}>Book a Visit</h1>
          <p style={{ textAlign: "center", color: C.textLight, marginBottom: 36 }}>Schedule your plant care appointment</p>

          {/* Stepper */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 40, justifyContent: "center" }}>
            {[["1","Service"],["2","Date & Time"],["3","Details"],["4","Confirm"]].map(([num, label], i) => (
              <div key={num} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: step >= parseInt(num) ? C.primary : C.border, color: step >= parseInt(num) ? C.white : C.textLight, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, margin: "0 auto 4px" }}>{num}</div>
                  <div style={{ fontSize: 11, color: step >= parseInt(num) ? C.primary : C.textLight, fontWeight: 600 }}>{label}</div>
                </div>
                {i < 3 && <div style={{ width: 60, height: 2, background: step > parseInt(num) ? C.primary : C.border, margin: "0 8px 20px" }} />}
              </div>
            ))}
          </div>

          <div style={styles.card}>
            {step === 1 && (
              <div>
                <h3 style={{ color: C.primary, fontWeight: 700, marginBottom: 20 }}>Select Service</h3>
                <div style={{ display: "grid", gap: 12 }}>
                  {SERVICES.map(s => (
                    <div key={s.id} onClick={() => setSelectedService(s.name)}
                      style={{ border: `2px solid ${selectedService === s.name ? C.primary : C.border}`, borderRadius: 10, padding: "14px 16px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", background: selectedService === s.name ? C.accentPale : C.white }}>
                      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                        <span style={{ fontSize: 24 }}>{s.icon}</span>
                        <div>
                          <div style={{ fontWeight: 600, color: C.primary }}>{s.name}</div>
                          <div style={{ fontSize: 12, color: C.textLight }}>{s.duration}</div>
                        </div>
                      </div>
                      <div style={{ fontWeight: 700, color: C.primary }}>₹{s.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 style={{ color: C.primary, fontWeight: 700, marginBottom: 20 }}>Select Date</h3>
                <div style={{ marginBottom: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <span style={{ fontWeight: 700, color: C.text }}>June 2024</span>
                    <div style={{ display: "flex", gap: 8 }}><button style={styles.btnSm}>‹</button><button style={styles.btnSm}>›</button></div>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, textAlign: "center" }}>
                    {days.map(d => <div key={d} style={{ fontSize: 12, fontWeight: 600, color: C.textLight, padding: "6px 0" }}>{d}</div>)}
                    {calDates.map(d => (
                      <div key={d} onClick={() => setSelectedDate(d)}
                        style={{ padding: "8px 4px", borderRadius: 8, cursor: "pointer", fontWeight: d === selectedDate ? 700 : 400, background: d === selectedDate ? C.primary : "transparent", color: d === selectedDate ? C.white : C.text, fontSize: 14 }}>{d}</div>
                    ))}
                  </div>
                </div>
                <h3 style={{ color: C.primary, fontWeight: 700, marginBottom: 14 }}>Select Time</h3>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {times.map(t => (
                    <button key={t} onClick={() => setSelectedTime(t)}
                      style={{ border: `2px solid ${selectedTime === t ? C.primary : C.border}`, background: selectedTime === t ? C.primary : C.white, color: selectedTime === t ? C.white : C.text, borderRadius: 8, padding: "10px 20px", cursor: "pointer", fontWeight: 600, fontSize: 14 }}>{t}</button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 style={{ color: C.primary, fontWeight: 700, marginBottom: 20 }}>Your Details</h3>
                {[["Full Name", "name", "text", "Neha Sharma"], ["Phone Number", "phone", "tel", "9876543210"], ["Address", "address", "text", "A-1204, Galaxy North Avenue, Noida"]].map(([label, field, type, placeholder]) => (
                  <div key={field} style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: C.text, marginBottom: 6 }}>{label}</label>
                    <input type={type} placeholder={placeholder} value={details[field]} onChange={e => setDetails({...details, [field]: e.target.value})} style={styles.input} />
                  </div>
                ))}
              </div>
            )}

            {step === 4 && (
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 60, marginBottom: 16 }}>📋</div>
                <h3 style={{ color: C.primary, fontWeight: 800, fontSize: 24, marginBottom: 20 }}>Confirm Booking</h3>
                {[["Service", selectedService], ["Date", `${selectedDate} June 2024`], ["Time", selectedTime], ["Name", details.name || "Neha Sharma"], ["Phone", details.phone || "9876543210"]].map(([k, v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: `1px solid ${C.border}` }}>
                    <span style={{ color: C.textLight, fontSize: 14 }}>{k}</span>
                    <span style={{ fontWeight: 600, color: C.text, fontSize: 14 }}>{v}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", marginTop: 4 }}>
                  <span style={{ fontWeight: 700, color: C.primary }}>Total</span>
                  <span style={{ fontWeight: 800, fontSize: 20, color: C.primary }}>₹{SERVICES.find(s => s.name === selectedService)?.price || 299}</span>
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              {step > 1 && <button style={{ ...styles.btnOutline, flex: 1 }} onClick={() => setStep(step-1)}>← Back</button>}
              <button style={{ ...styles.btn, flex: 2 }} onClick={() => {
                if (step < 4) setStep(step+1);
                else navigate("dashboard");
              }}>
                {step === 4 ? "Confirm Booking ✓" : "Next →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── PAGE 5: ABOUT ────────────────────────────────────────────────
const AboutPage = ({ navigate }) => (
  <div style={{ background: C.bg, minHeight: "100vh" }}>
    <Navbar navigate={navigate} />
    <section style={{ background: `linear-gradient(135deg, ${C.accentPale} 0%, ${C.white} 60%)`, padding: "80px 0" }}>
      <div style={{ ...styles.container, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        <div>
          <span style={styles.badge}>🌿 Our Story</span>
          <h1 style={{ fontSize: 42, fontWeight: 800, color: C.primary, margin: "16px 0 20px", lineHeight: 1.2 }}>About Plantiva</h1>
          <p style={{ color: C.textMid, fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>We are on a mission to make every home and workspace greener and healthier.</p>
          <p style={{ color: C.textMid, fontSize: 15, lineHeight: 1.8 }}>Our expert team provides professional plant care services with love, dedication and deep plant knowledge. From health assessments to full care routines, we treat every plant like our own.</p>
        </div>
        <div style={{ fontSize: 120, textAlign: "center" }}>🌳</div>
      </div>
    </section>

    <section style={styles.section}>
      <div style={styles.container}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 60 }}>
          {[["5+", "Years Experience"], ["10K+", "Happy Customers"], ["50K+", "Plants Cared For"], ["20+", "Expert Plant Doctors"]].map(([num, label]) => (
            <div key={label} style={{ ...styles.card, textAlign: "center" }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: C.primary }}>{num}</div>
              <div style={{ color: C.textLight, fontSize: 14, marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div style={styles.card}>
            <h3 style={{ color: C.primary, fontWeight: 800, fontSize: 22, marginBottom: 20 }}>Our Promise</h3>
            {["We treat your plants like our own.", "We use safe, organic & eco-friendly products.", "We ensure 100% customer satisfaction.", "We arrive on time, every time.", "We provide detailed care reports after every visit."].map(p => (
              <div key={p} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 14 }}>
                <span style={{ color: C.success, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 14, color: C.textMid, lineHeight: 1.5 }}>{p}</span>
              </div>
            ))}
          </div>
          <div style={styles.card}>
            <h3 style={{ color: C.primary, fontWeight: 800, fontSize: 22, marginBottom: 20 }}>Our Team</h3>
            {[["👨‍🌾", "Rohit Verma", "Senior Plant Doctor", "8+ years"], ["👩‍🌾", "Priya Singh", "Plant Wellness Expert", "5+ years"], ["👨‍🌾", "Aman Gupta", "Soil Specialist", "6+ years"]].map(([icon, name, role, exp]) => (
              <div key={name} style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 16 }}>
                <div style={{ fontSize: 36 }}>{icon}</div>
                <div>
                  <div style={{ fontWeight: 700, color: C.text }}>{name}</div>
                  <div style={{ fontSize: 13, color: C.textLight }}>{role} · {exp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

// ─── PAGE 6: STORE CATEGORY ───────────────────────────────────────
const StorePage = ({ navigate }) => {
  const [activeCategory, setActiveCategory] = useState("Indoor Plants");
  const categories = ["Indoor Plants", "Balcony Plants", "Wellness Plants", "Succulents & Cactus", "Air Purifying Plants", "Flowering Plants", "All Plants"];
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} cartCount={2} />
      <div style={styles.container}>
        <div style={{ padding: "30px 0 20px" }}>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: C.primary, margin: 0 }}>Shop Plants</h1>
          <input type="text" placeholder="Search for plants…" style={{ ...styles.input, maxWidth: 360, marginTop: 16 }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 32, paddingBottom: 60 }}>
          {/* Sidebar */}
          <div>
            <div style={{ fontWeight: 700, color: C.primary, marginBottom: 12, fontSize: 15 }}>Categories</div>
            {categories.map(cat => (
              <div key={cat} onClick={() => setActiveCategory(cat)} style={{ padding: "10px 14px", borderRadius: 8, cursor: "pointer", marginBottom: 4, background: activeCategory === cat ? C.accentPale : "transparent", color: activeCategory === cat ? C.primary : C.textMid, fontWeight: activeCategory === cat ? 700 : 400, fontSize: 14 }}>{cat}</div>
            ))}
          </div>
          {/* Main */}
          <div>
            {/* Featured Banner */}
            <div style={{ background: `linear-gradient(135deg, ${C.primary}, ${C.primaryMid})`, borderRadius: 14, padding: "32px 40px", marginBottom: 28, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ color: C.accentLight, fontWeight: 800, fontSize: 28, marginBottom: 8 }}>Indoor Plants</div>
                <div style={{ color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>Bring Nature Indoors</div>
                <button style={{ ...styles.btn, background: C.white, color: C.primary }} onClick={() => navigate("product-list")}>Shop Now →</button>
              </div>
              <div style={{ fontSize: 80 }}>🌿</div>
            </div>
            {/* Trust strip */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 28 }}>
              {[["🔄", "Easy Returns"], ["🔒", "Secure Payment"], ["🚚", "Free Delivery above ₹599"], ["💬", "Care Support"]].map(([icon, label]) => (
                <div key={label} style={{ textAlign: "center", padding: 14, background: C.white, borderRadius: 10, border: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 24 }}>{icon}</div>
                  <div style={{ fontSize: 12, color: C.textMid, marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
            <button style={{ ...styles.btn, width: "100%" }} onClick={() => navigate("product-list")}>Browse All Plants →</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ─── PAGE 7: PRODUCT LIST ─────────────────────────────────────────
const ProductListPage = ({ navigate }) => {
  const [priceMax, setPriceMax] = useState(1000);
  const [selectedLight, setSelectedLight] = useState([]);
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} cartCount={2} />
      <div style={styles.container}>
        <div style={{ padding: "24px 0 20px", color: C.textLight, fontSize: 13 }}>
          <span onClick={() => navigate("store")} style={{ cursor: "pointer" }}>Store</span> &gt; <span style={{ color: C.primary }}>All Plants</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 32, paddingBottom: 60 }}>
          {/* Filters */}
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, color: C.primary, marginBottom: 20 }}>Filters</div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontWeight: 600, color: C.text, fontSize: 14, marginBottom: 12 }}>Price</div>
              <input type="range" min={0} max={1000} value={priceMax} onChange={e => setPriceMax(e.target.value)} style={{ width: "100%" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: C.textLight }}>
                <span>₹0</span><span>₹{priceMax}</span>
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontWeight: 600, color: C.text, fontSize: 14, marginBottom: 12 }}>Light Requirement</div>
              {["Low Light", "Medium Light", "Bright Light"].map(l => (
                <label key={l} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, cursor: "pointer", fontSize: 14, color: C.textMid }}>
                  <input type="checkbox" checked={selectedLight.includes(l)} onChange={() => setSelectedLight(prev => prev.includes(l) ? prev.filter(x => x !== l) : [...prev, l])} />
                  {l}
                </label>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 600, color: C.text, fontSize: 14, marginBottom: 12 }}>Sort By</div>
              <select style={{ ...styles.input }}>
                <option>Popularity</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Newest</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {PLANTS.map(p => (
              <div key={p.id} style={{ ...styles.card, cursor: "pointer", position: "relative" }}
                onClick={() => navigate("product-detail", p)}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}>
                <div style={{ position: "absolute", top: 12, right: 12, fontSize: 20, cursor: "pointer" }}>♡</div>
                {!p.stock && <div style={{ position: "absolute", top: 12, left: 12, background: C.danger, color: C.white, borderRadius: 4, padding: "2px 8px", fontSize: 11, fontWeight: 700 }}>Out of Stock</div>}
                <PlantEmoji name={p.name} size={100} />
                <div style={{ marginTop: 12 }}>
                  <div style={{ fontWeight: 700, color: C.text, fontSize: 15 }}>{p.name}</div>
                  <Rating value={p.rating} count={p.reviews} />
                  <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                    {p.tags.slice(0,2).map(t => <span key={t} style={styles.tag}>{t}</span>)}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
                    <div>
                      <span style={{ fontWeight: 800, color: C.primary, fontSize: 18 }}>₹{p.price}</span>
                      <span style={{ color: C.textLight, fontSize: 13, textDecoration: "line-through", marginLeft: 6 }}>₹{p.originalPrice}</span>
                    </div>
                  </div>
                  <button style={{ ...styles.btnSm, width: "100%", marginTop: 12, opacity: p.stock ? 1 : 0.5 }} disabled={!p.stock}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ─── PAGE 8: PRODUCT DETAIL ───────────────────────────────────────
const ProductDetailPage = ({ navigate, product }) => {
  const p = product || PLANTS[0];
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} cartCount={2} />
      <div style={styles.container}>
        <div style={{ padding: "20px 0", color: C.textLight, fontSize: 13 }}>
          <span onClick={() => navigate("store")} style={{ cursor: "pointer" }}>Home</span> &gt; <span onClick={() => navigate("product-list")} style={{ cursor: "pointer" }}>Store</span> &gt; <span onClick={() => navigate("store")} style={{ cursor: "pointer" }}>Indoor Plants</span> &gt; <span style={{ color: C.primary }}>{p.name}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, paddingBottom: 60 }}>
          <div>
            <div style={{ background: C.accentPale, borderRadius: 16, height: 340, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
              <PlantEmoji name={p.name} size={180} />
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {[...Array(4)].map((_,i) => (
                <div key={i} onClick={() => setActiveImg(i)} style={{ width: 72, height: 72, background: C.accentPale, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: activeImg === i ? `2px solid ${C.primary}` : "2px solid transparent" }}>
                  <PlantEmoji name={p.name} size={50} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 style={{ fontSize: 30, fontWeight: 800, color: C.primary, marginBottom: 8 }}>{p.name}</h1>
            <Rating value={p.rating} count={p.reviews} />
            <div style={{ display: "flex", gap: 12, alignItems: "center", margin: "16px 0" }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: C.primary }}>₹{p.price}</span>
              <span style={{ fontSize: 16, color: C.textLight, textDecoration: "line-through" }}>₹{p.originalPrice}</span>
              <span style={{ ...styles.badge, background: "#FEF9C3", color: "#92400E" }}>Save ₹{p.originalPrice - p.price}</span>
            </div>
            <span style={{ ...styles.badge, background: p.stock ? "#D1FAE5" : "#FEE2E2", color: p.stock ? "#065F46" : C.danger }}>
              {p.stock ? "✓ In Stock" : "Out of Stock"}
            </span>
            <p style={{ color: C.textMid, fontSize: 14, lineHeight: 1.7, margin: "16px 0" }}>Air purifying plant that adds natural greenery to your space. Low maintenance and ideal for homes and offices.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
              {p.tags.map(t => <span key={t} style={{ ...styles.badge, background: C.accentPale, color: C.primaryMid }}>✓ {t}</span>)}
            </div>
            <div style={styles.card}>
              <div style={{ fontWeight: 700, color: C.text, marginBottom: 12 }}>Product Details</div>
              {[["Light Requirement", p.light], ["Watering", "2–3 times a week"], ["Maintenance", "Low"], ["Best For", "Home / Office"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${C.border}`, fontSize: 14 }}>
                  <span style={{ color: C.textLight }}>{k}</span><span style={{ color: C.text, fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, margin: "20px 0" }}>
              <div style={{ display: "flex", alignItems: "center", border: `1.5px solid ${C.border}`, borderRadius: 8, overflow: "hidden" }}>
                <button onClick={() => setQty(Math.max(1, qty-1))} style={{ border: "none", background: C.white, padding: "10px 16px", cursor: "pointer", fontSize: 18, fontWeight: 700, color: C.primary }}>−</button>
                <span style={{ padding: "10px 20px", fontWeight: 700, fontSize: 16 }}>{qty}</span>
                <button onClick={() => setQty(qty+1)} style={{ border: "none", background: C.white, padding: "10px 16px", cursor: "pointer", fontSize: 18, fontWeight: 700, color: C.primary }}>+</button>
              </div>
            </div>
            <button style={{ ...styles.btn, width: "100%", fontSize: 16, padding: "15px", opacity: p.stock ? 1 : 0.5 }} onClick={() => navigate("cart")} disabled={!p.stock}>
              Add to Cart 🛒
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ─── PAGE 9: CART ─────────────────────────────────────────────────
const CartPage = ({ navigate }) => {
  const [items, setItems] = useState([
    { id: 1, name: "Areca Palm", price: 499, qty: 1 },
    { id: 2, name: "Snake Plant", price: 399, qty: 1 },
  ]);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const delivery = 50, discount = 50;
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} cartCount={items.length} />
      <div style={styles.container}>
        <div style={{ padding: "40px 0 60px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 32 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: C.primary, marginBottom: 24 }}>My Cart ({items.length} items)</h1>
            {items.map(item => (
              <div key={item.id} style={{ ...styles.card, display: "flex", gap: 20, alignItems: "center", marginBottom: 16 }}>
                <PlantEmoji name={item.name} size={80} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: C.text, fontSize: 16, marginBottom: 4 }}>{item.name}</div>
                  <div style={{ fontWeight: 800, color: C.primary, fontSize: 18 }}>₹{item.price}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", border: `1.5px solid ${C.border}`, borderRadius: 8 }}>
                  <button onClick={() => setItems(items.map(i => i.id === item.id ? {...i, qty: Math.max(1, i.qty-1)} : i))} style={{ border: "none", background: "transparent", padding: "8px 14px", cursor: "pointer", fontSize: 16, fontWeight: 700 }}>−</button>
                  <span style={{ padding: "0 12px", fontWeight: 700 }}>{item.qty}</span>
                  <button onClick={() => setItems(items.map(i => i.id === item.id ? {...i, qty: i.qty+1} : i))} style={{ border: "none", background: "transparent", padding: "8px 14px", cursor: "pointer", fontSize: 16, fontWeight: 700 }}>+</button>
                </div>
                <button onClick={() => setItems(items.filter(i => i.id !== item.id))} style={{ border: "none", background: "#FEE2E2", color: C.danger, borderRadius: 8, padding: "8px 12px", cursor: "pointer", fontSize: 16 }}>🗑</button>
              </div>
            ))}
            {items.length === 0 && <div style={{ ...styles.card, textAlign: "center", padding: 60 }}>
              <div style={{ fontSize: 60 }}>🛒</div>
              <div style={{ fontWeight: 700, color: C.textMid, marginTop: 16 }}>Your cart is empty</div>
              <button style={{ ...styles.btn, marginTop: 16 }} onClick={() => navigate("product-list")}>Shop Plants</button>
            </div>}
          </div>

          <div style={styles.card}>
            <h3 style={{ fontWeight: 800, color: C.primary, marginBottom: 20 }}>Price Details</h3>
            {[["Subtotal", `₹${subtotal}`], ["Delivery Charges", `₹${delivery}`], ["Discount", `-₹${discount}`]].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, fontSize: 14, color: C.textMid }}>
                <span>{k}</span><span>{v}</span>
              </div>
            ))}
            <div style={{ borderTop: `2px solid ${C.border}`, paddingTop: 14, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 800, color: C.text, fontSize: 16 }}>Total Amount</span>
              <span style={{ fontWeight: 800, color: C.primary, fontSize: 20 }}>₹{subtotal + delivery - discount}</span>
            </div>
            <button style={{ ...styles.btn, width: "100%", marginTop: 24, fontSize: 15, padding: "14px" }} onClick={() => navigate("checkout")}>Proceed to Checkout →</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ─── PAGE 10: CHECKOUT ────────────────────────────────────────────
const CheckoutPage = ({ navigate }) => {
  const [payment, setPayment] = useState("UPI / QR");
  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} cartCount={2} />
      <div style={styles.container}>
        <div style={{ padding: "40px 0 60px", display: "grid", gridTemplateColumns: "1fr 360px", gap: 32 }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: C.primary, marginBottom: 24 }}>Checkout</h1>
            <div style={styles.card}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ margin: 0, fontWeight: 700, color: C.primary }}>Delivery Details</h3>
                <button style={styles.btnSm}>Change</button>
              </div>
              <div style={{ background: C.bg, borderRadius: 8, padding: 16, fontSize: 14, color: C.textMid, lineHeight: 1.7 }}>
                <div style={{ fontWeight: 700, color: C.text }}>Neha Sharma</div>
                <div>9876543210</div>
                <div>A-1204, Galaxy North Avenue, Noida Extension, UP - 201301</div>
              </div>
            </div>

            <div style={{ ...styles.card, marginTop: 20 }}>
              <h3 style={{ margin: "0 0 20px", fontWeight: 700, color: C.primary }}>Payment Method</h3>
              {["UPI / QR", "Credit / Debit Card", "Net Banking", "Cash on Delivery"].map(method => (
                <label key={method} onClick={() => setPayment(method)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", marginBottom: 8, borderRadius: 8, border: `2px solid ${payment === method ? C.primary : C.border}`, cursor: "pointer", background: payment === method ? C.accentPale : C.white }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", border: `2px solid ${payment === method ? C.primary : C.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {payment === method && <div style={{ width: 8, height: 8, background: C.primary, borderRadius: "50%" }} />}
                  </div>
                  <span style={{ fontSize: 14, fontWeight: payment === method ? 700 : 400, color: payment === method ? C.primary : C.text }}>{method}</span>
                </label>
              ))}
              <div style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 12, color: C.textLight, fontSize: 12 }}>
                <span>🔒</span><span>Your details are 100% secure</span>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h3 style={{ margin: "0 0 20px", fontWeight: 800, color: C.primary }}>Order Summary</h3>
            {[["Areca Palm", "₹499"], ["Snake Plant", "₹399"]].map(([name, price]) => (
              <div key={name} style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontSize: 14 }}>
                <span style={{ color: C.textMid }}>{name}</span><span style={{ fontWeight: 600 }}>{price}</span>
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 12, marginTop: 4 }}>
              {[["Delivery", "₹50"], ["Discount", "-₹50"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 13, color: C.textLight }}><span>{k}</span><span>{v}</span></div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 800, fontSize: 18, color: C.primary, marginTop: 8 }}>
                <span>Total</span><span>₹998</span>
              </div>
            </div>
            <button style={{ ...styles.btn, width: "100%", marginTop: 24, fontSize: 15, padding: "14px" }} onClick={() => navigate("order-confirm")}>Place Order 🎉</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ─── PAGE 11: ORDER CONFIRMATION ──────────────────────────────────
const OrderConfirmPage = ({ navigate }) => (
  <div style={{ background: C.bg, minHeight: "100vh" }}>
    <Navbar navigate={navigate} />
    <div style={{ ...styles.container, display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <div style={{ ...styles.card, textAlign: "center", maxWidth: 480, padding: 48 }}>
        <div style={{ width: 80, height: 80, background: "#D1FAE5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 36 }}>✅</div>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: C.primary, marginBottom: 8 }}>Order Confirmed!</h1>
        <p style={{ color: C.textMid, fontSize: 15, marginBottom: 28 }}>Thank you Neha! Your order has been placed successfully.</p>
        <div style={{ background: C.bg, borderRadius: 10, padding: 20, marginBottom: 24 }}>
          {[["Order ID", "#PLT56879"], ["Estimated Delivery", "22 June 2024"], ["Delivery Address", "A-1204, Galaxy North Avenue, Noida Extension, UP"]].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontSize: 14 }}>
              <span style={{ color: C.textLight }}>{k}</span><span style={{ fontWeight: 600, color: C.text, textAlign: "right", maxWidth: 200 }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button style={{ ...styles.btnOutline, flex: 1 }} onClick={() => navigate("product-list")}>Continue Shopping</button>
          <button style={{ ...styles.btn, flex: 1 }} onClick={() => navigate("dashboard")}>View My Orders</button>
        </div>
      </div>
    </div>
  </div>
);

// ─── PAGE 12: CUSTOMER DASHBOARD ─────────────────────────────────
const DashboardPage = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const navItems = [["📊","Dashboard"],["📅","My Visits"],["🪴","My Plants"],["📦","Orders"],["⭐","Membership"],["👤","Profile"],["⚙️","Settings"],["🚪","Logout"]];

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <Navbar navigate={navigate} />
      <div style={{ ...styles.container, display: "grid", gridTemplateColumns: "220px 1fr", gap: 28, padding: "32px 24px", maxWidth: 1100, margin: "0 auto" }}>
        {/* Sidebar */}
        <div style={{ ...styles.card, padding: 0, overflow: "hidden", alignSelf: "start" }}>
          <div style={{ background: C.primary, padding: "24px 20px", textAlign: "center" }}>
            <div style={{ fontSize: 48 }}>👩</div>
            <div style={{ color: C.white, fontWeight: 700, marginTop: 8 }}>Neha Sharma</div>
            <div style={{ color: C.accentLight, fontSize: 12 }}>neha.sharma@email.com</div>
          </div>
          {navItems.map(([icon, label]) => (
            <div key={label} onClick={() => { setActiveTab(label); if (label === "Logout") navigate("home"); if (label === "My Visits") navigate("visit-report"); if (label === "Membership") navigate("membership"); if (label === "Profile") navigate("profile"); }}
              style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 20px", cursor: "pointer", background: activeTab === label ? C.accentPale : "transparent", color: activeTab === label ? C.primary : C.textMid, fontWeight: activeTab === label ? 700 : 400, fontSize: 14, borderLeft: activeTab === label ? `3px solid ${C.primary}` : "3px solid transparent" }}>
              <span>{icon}</span><span>{label}</span>
            </div>
          ))}
        </div>

        {/* Main */}
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
            {[["14", "🌱", "Total Plants"], ["⭐", "💎", "Green Plus Member"], ["10 Jul", "📅", "Next Visit"], ["12", "⏰", "Days Left"]].map(([val, icon, label]) => (
              <div key={label} style={{ ...styles.card, textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 4 }}>{icon}</div>
                <div style={{ fontWeight: 800, color: C.primary, fontSize: 20 }}>{val}</div>
                <div style={{ color: C.textLight, fontSize: 12, marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div style={styles.card}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ margin: 0, fontWeight: 700, color: C.primary }}>Recent Visit</h3>
                <button style={styles.btnSm} onClick={() => navigate("visit-report")}>View Report</button>
              </div>
              <div style={{ background: C.bg, borderRadius: 10, padding: 16 }}>
                <div style={{ fontWeight: 600, color: C.text, fontSize: 14 }}>20 June 2024</div>
                <div style={{ color: C.textLight, fontSize: 13, marginTop: 2 }}>Plant Wellness Visit</div>
                <div style={{ ...styles.badge, background: "#D1FAE5", color: "#065F46", marginTop: 8 }}>✓ Completed</div>
              </div>
            </div>

            <div style={styles.card}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ margin: 0, fontWeight: 700, color: C.primary }}>My Plants</h3>
                <button style={styles.btnSm} onClick={() => navigate("product-list")}>View All →</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                {PLANTS.slice(0,3).map(p => (
                  <div key={p.id} style={{ textAlign: "center" }}>
                    <PlantEmoji name={p.name} size={60} />
                    <div style={{ fontSize: 11, color: C.textLight, marginTop: 4 }}>{p.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ ...styles.card, gridColumn: "span 2" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h3 style={{ margin: 0, fontWeight: 700, color: C.primary }}>Recent Orders</h3>
                <button style={styles.btnSm}>View All →</button>
              </div>
              {[["#PLT56879", "Areca Palm", "22 Jun 2024", "₹499", "Delivered"], ["#PLT56878", "Snake Plant", "15 Jun 2024", "₹399", "Processing"]].map(([id, item, date, price, status]) => (
                <div key={id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: `1px solid ${C.border}`, fontSize: 14 }}>
                  <span style={{ color: C.textLight, fontFamily: "monospace" }}>{id}</span>
                  <span style={{ fontWeight: 600 }}>{item}</span>
                  <span style={{ color: C.textLight }}>{date}</span>
                  <span style={{ fontWeight: 700, color: C.primary }}>{price}</span>
                  <span style={{ ...styles.badge, background: status === "Delivered" ? "#D1FAE5" : "#FEF9C3", color: status === "Delivered" ? "#065F46" : "#92400E" }}>{status}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            <button style={{ ...styles.btn, flex: 1 }} onClick={() => navigate("book")}>Book a Visit</button>
            <button style={{ ...styles.btnOutline, flex: 1 }} onClick={() => navigate("membership")}>View Membership</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── PAGE 13: VISIT REPORT ────────────────────────────────────────
const VisitReportPage = ({ navigate }) => (
  <div style={{ background: C.bg, minHeight: "100vh" }}>
    <Navbar navigate={navigate} />
    <div style={styles.container}>
      <div style={{ padding: "20px 0", color: C.textLight, fontSize: 13 }}>
        <span onClick={() => navigate("dashboard")} style={{ cursor: "pointer" }}>My Visits</span> &gt; <span style={{ color: C.primary }}>Visit Report</span>
      </div>
      <div style={{ maxWidth: 720, paddingBottom: 60 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: C.primary, marginBottom: 4 }}>Visit Report</h1>
        <div style={{ color: C.textLight, fontSize: 14, marginBottom: 28 }}>📅 20 June 2024 · 10:30 AM</div>

        {/* Before / After */}
        <div style={styles.card}>
          <h3 style={{ margin: "0 0 20px", fontWeight: 700, color: C.primary }}>Before & After</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {["Before", "After"].map((label, i) => (
              <div key={label}>
                <div style={{ fontWeight: 600, color: C.textMid, marginBottom: 8, textAlign: "center" }}>{label}</div>
                <div style={{ background: i === 0 ? "#FEF3C7" : C.accentPale, borderRadius: 12, height: 180, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 70 }}>
                  {i === 0 ? "🥀" : "🌿"}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...styles.card, marginTop: 20 }}>
          <h3 style={{ margin: "0 0 16px", fontWeight: 700, color: C.primary }}>Services Completed</h3>
          {["Plant Spa", "Wellness Check", "Leaf Cleaning", "Placement Guidance"].map(item => (
            <div key={item} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
              <span style={{ color: C.success, fontWeight: 700, fontSize: 16 }}>✓</span>
              <span style={{ fontSize: 14, color: C.text }}>{item}</span>
            </div>
          ))}
        </div>

        <div style={{ ...styles.card, marginTop: 20 }}>
          <h3 style={{ margin: "0 0 12px", fontWeight: 700, color: C.primary }}>Expert Notes</h3>
          <p style={{ color: C.textMid, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>Balcony plants need more sunlight. Watering is good. Overall plants are healthy and responding well to treatment.</p>
          <div style={{ display: "flex", gap: 12, alignItems: "center", background: C.bg, borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 36 }}>👨‍🌾</div>
            <div>
              <div style={{ fontWeight: 700, color: C.text }}>Rohit Verma</div>
              <div style={{ fontSize: 12, color: C.textLight }}>Senior Plant Doctor · 8 years experience</div>
            </div>
          </div>
        </div>

        <button style={{ ...styles.btn, marginTop: 24, width: "100%", fontSize: 15, padding: "14px" }}>
          ⬇ Download Report
        </button>
      </div>
    </div>
  </div>
);

// ─── PAGE 14: MEMBERSHIP ──────────────────────────────────────────
const MembershipPage = ({ navigate }) => (
  <div style={{ background: C.bg, minHeight: "100vh" }}>
    <Navbar navigate={navigate} />
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1 style={{ fontSize: 40, fontWeight: 800, color: C.primary, margin: 0 }}>Choose a Plan that suits you</h1>
          <p style={{ color: C.textLight, marginTop: 8, fontSize: 16 }}>Consistent care for thriving plants</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {PLANS.map(plan => (
            <div key={plan.id} style={{ ...styles.card, background: plan.popular ? C.primary : C.white, color: plan.popular ? C.white : C.text, position: "relative", transform: plan.popular ? "scale(1.04)" : "scale(1)", border: plan.popular ? "none" : `1px solid ${C.border}` }}>
              {plan.popular && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: C.accent, color: C.white, borderRadius: 20, padding: "4px 16px", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>⭐ Most Popular</div>}
              <div style={{ fontWeight: 800, fontSize: 22, color: plan.popular ? C.white : C.primary, marginBottom: 8 }}>{plan.name}</div>
              <div style={{ fontSize: 36, fontWeight: 800, color: plan.popular ? C.accentLight : C.primary, marginBottom: 4 }}>₹{plan.price}<span style={{ fontSize: 14, fontWeight: 400, color: plan.popular ? "#A0AEC0" : C.textLight }}>/month</span></div>
              <div style={{ fontSize: 13, color: plan.popular ? C.accentLight : C.textLight, marginBottom: 20 }}>{plan.visits} Visits / Month</div>
              <div style={{ borderTop: `1px solid ${plan.popular ? "rgba(255,255,255,0.2)" : C.border}`, paddingTop: 20, marginBottom: 24 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                    <span style={{ color: plan.popular ? C.accentLight : C.success }}>✓</span>
                    <span style={{ fontSize: 13, color: plan.popular ? "#E2E8F0" : C.textMid }}>{f}</span>
                  </div>
                ))}
              </div>
              <button style={{ ...styles.btn, width: "100%", background: plan.popular ? C.accent : C.primary, fontSize: 15, padding: "13px" }} onClick={() => navigate("dashboard")}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        {/* Help strip */}
        <div style={{ background: C.white, borderRadius: 14, padding: "24px 32px", marginTop: 40, display: "flex", justifyContent: "space-between", alignItems: "center", border: `1px solid ${C.border}` }}>
          <div>
            <div style={{ fontWeight: 700, color: C.text, marginBottom: 4 }}>Need help choosing a plan?</div>
            <div style={{ color: C.textLight, fontSize: 14 }}>Talk to our plant experts.</div>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={styles.btnOutline} onClick={() => navigate("book")}>Talk to Expert</button>
            <button style={{ ...styles.btn, background: "#25D366" }}>💬 WhatsApp</button>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

// ─── PAGE 15: PROFILE ─────────────────────────────────────────────
const ProfilePage = ({ navigate }) => (
  <div style={{ background: C.bg, minHeight: "100vh" }}>
    <Navbar navigate={navigate} />
    <div style={{ ...styles.container, display: "grid", gridTemplateColumns: "220px 1fr", gap: 28, padding: "32px 24px", maxWidth: 1100, margin: "0 auto" }}>
      {/* Sidebar */}
      <div style={{ ...styles.card, padding: 0, overflow: "hidden", alignSelf: "start" }}>
        <div style={{ background: C.primary, padding: "24px 20px", textAlign: "center" }}>
          <div style={{ fontSize: 48 }}>👩</div>
          <div style={{ color: C.white, fontWeight: 700, marginTop: 8 }}>Neha Sharma</div>
        </div>
        {[["📊","Dashboard"],["📅","My Visits"],["🪴","My Plants"],["📦","Orders"],["⭐","Membership"],["👤","Profile"],["⚙️","Settings"],["🚪","Logout"]].map(([icon, label]) => (
          <div key={label} onClick={() => { if (label === "Dashboard") navigate("dashboard"); if (label === "My Visits") navigate("visit-report"); if (label === "Membership") navigate("membership"); }}
            style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 20px", cursor: "pointer", background: label === "Profile" ? C.accentPale : "transparent", color: label === "Profile" ? C.primary : C.textMid, fontWeight: label === "Profile" ? 700 : 400, fontSize: 14, borderLeft: label === "Profile" ? `3px solid ${C.primary}` : "3px solid transparent" }}>
            <span>{icon}</span><span>{label}</span>
          </div>
        ))}
      </div>

      {/* Main */}
      <div style={{ display: "grid", gap: 20 }}>
        <div style={styles.card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <h3 style={{ margin: 0, fontWeight: 700, color: C.primary }}>Profile</h3>
            <button style={styles.btnSm}>Edit Profile</button>
          </div>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <div style={{ width: 64, height: 64, background: C.accentPale, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>👩</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: C.text }}>Neha Sharma</div>
              <div style={{ color: C.textLight, fontSize: 14 }}>neha.sharma@email.com</div>
              <div style={{ color: C.textLight, fontSize: 14 }}>9876543210</div>
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h3 style={{ margin: 0, fontWeight: 700, color: C.primary }}>Address</h3>
            <button style={styles.btnSm}>Change</button>
          </div>
          <p style={{ color: C.textMid, fontSize: 14, lineHeight: 1.7, margin: 0 }}>A-1204, Galaxy North Avenue, Noida Extension, UP - 201301</p>
        </div>

        <div style={styles.card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h3 style={{ margin: 0, fontWeight: 700, color: C.primary }}>Membership</h3>
            <button style={styles.btnSm} onClick={() => navigate("membership")}>View Details</button>
          </div>
          <div style={{ ...styles.badge, marginBottom: 8 }}>⭐ Green Plus</div>
          <div style={{ fontSize: 13, color: C.textLight }}>Valid till 10 Aug 2024</div>
        </div>

        <div style={styles.card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h3 style={{ margin: 0, fontWeight: 700, color: C.primary }}>Payment Methods</h3>
            <button style={styles.btnSm}>Manage</button>
          </div>
          <div style={{ display: "flex", gap: 12, alignItems: "center", background: C.bg, borderRadius: 8, padding: 14 }}>
            <span style={{ fontSize: 24 }}>💳</span>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>•••• •••• •••• 4242</div>
              <div style={{ fontSize: 12, color: C.textLight }}>Expires 01/28</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── PAGE 16: ADMIN DASHBOARD ─────────────────────────────────────
const AdminPage = ({ navigate }) => {
  const [activeNav, setActiveNav] = useState("Dashboard");
  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex" }}>
      {/* Admin Sidebar */}
      <div style={{ width: 220, background: C.primary, minHeight: "100vh", flexShrink: 0 }}>
        <div style={{ padding: "24px 20px", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 20 }}>🌿</span>
            <span style={{ color: C.white, fontWeight: 800, fontSize: 16 }}>PLANTIVA</span>
          </div>
          <div style={{ color: C.accentLight, fontSize: 11, marginTop: 4 }}>Admin Dashboard</div>
        </div>
        {[["📊","Dashboard"],["👥","Customers"],["📅","Visits"],["📦","Orders"],["⭐","Memberships"],["🌱","Products"],["📈","Reports"],["⚙️","Settings"],["🚪","Logout"]].map(([icon, label]) => (
          <div key={label} onClick={() => { setActiveNav(label); if (label === "Logout") navigate("home"); }}
            style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 20px", cursor: "pointer", background: activeNav === label ? "rgba(255,255,255,0.1)" : "transparent", color: activeNav === label ? C.white : C.accentLight, fontWeight: activeNav === label ? 700 : 400, fontSize: 14, borderLeft: activeNav === label ? `3px solid ${C.accent}` : "3px solid transparent" }}>
            <span>{icon}</span><span>{label}</span>
          </div>
        ))}
      </div>

      {/* Admin Main */}
      <div style={{ flex: 1, padding: 28, overflow: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
          <h1 style={{ fontSize: 24, fontWeight: 800, color: C.primary, margin: 0 }}>Admin Dashboard</h1>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <span style={{ color: C.textLight, fontSize: 14 }}>28 June 2024</span>
            <div style={{ width: 36, height: 36, background: C.accentPale, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>👤</div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
          {[["1,268", "Total Customers", "👥", "#DBEAFE"], ["18", "Upcoming Visits", "📅", "#D1FAE5"], ["24", "Today's Orders", "📦", "#FEF3C7"], ["12", "Renewals Due", "⭐", "#FCE7F3"]].map(([num, label, icon, bg]) => (
            <div key={label} style={{ ...styles.card, background: bg, border: "none" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 28, color: C.text }}>{num}</div>
                  <div style={{ color: C.textMid, fontSize: 13, marginTop: 2 }}>{label}</div>
                </div>
                <div style={{ fontSize: 28 }}>{icon}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* Upcoming Visits */}
          <div style={styles.card}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ margin: 0, fontWeight: 700, color: C.primary }}>Upcoming Visits</h3>
              <button style={styles.btnSm}>View All →</button>
            </div>
            {[["Neha Sharma", "Plant Wellness", "30 Jun · 10 AM"], ["Rahul Verma", "Plant Spa", "30 Jun · 12 PM"], ["Anjali Mehta", "Leaf Cleaning", "30 Jun · 04 PM"]].map(([name, service, time]) => (
              <div key={name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: `1px solid ${C.border}` }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14, color: C.text }}>{name}</div>
                  <div style={{ fontSize: 12, color: C.textLight }}>{service}</div>
                </div>
                <div style={{ fontSize: 12, color: C.textMid }}>{time}</div>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div style={styles.card}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h3 style={{ margin: 0, fontWeight: 700, color: C.primary }}>Recent Orders</h3>
              <button style={styles.btnSm}>View All →</button>
            </div>
            {[["#PLT56879", "Neha S.", "Areca Palm", "₹499"], ["#PLT56878", "Rahul V.", "Snake Plant", "₹399"], ["#PLT56877", "Anjali M.", "Leaf Cleaning", "₹199"]].map(([id, name, item, price]) => (
              <div key={id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: `1px solid ${C.border}` }}>
                <span style={{ fontSize: 11, color: C.textLight, fontFamily: "monospace" }}>{id}</span>
                <span style={{ fontSize: 13, color: C.text }}>{name}</span>
                <span style={{ fontSize: 12, color: C.textMid }}>{item}</span>
                <span style={{ fontWeight: 700, color: C.primary, fontSize: 14 }}>{price}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 20, textAlign: "right" }}>
          <button style={{ ...styles.btnOutline }} onClick={() => navigate("home")}>← Back to Website</button>
        </div>
      </div>
    </div>
  );
};

// ─── APP ROUTER ───────────────────────────────────────────────────
export default function PlantiveApp() {
  const [page, setPage] = useState("home");
  const [pageData, setPageData] = useState(null);

  const navigate = (target, data = null) => {
    setPage(target);
    setPageData(data);
    window.scrollTo(0, 0);
  };

  const props = { navigate, service: pageData, product: pageData };

  const pages = {
    home: <HomePage {...props} />,
    services: <ServicesPage {...props} />,
    "service-detail": <ServiceDetailPage {...props} />,
    book: <BookPage {...props} />,
    about: <AboutPage {...props} />,
    store: <StorePage {...props} />,
    "product-list": <ProductListPage {...props} />,
    "product-detail": <ProductDetailPage {...props} />,
    cart: <CartPage {...props} />,
    checkout: <CheckoutPage {...props} />,
    "order-confirm": <OrderConfirmPage {...props} />,
    dashboard: <DashboardPage {...props} />,
    "visit-report": <VisitReportPage {...props} />,
    membership: <MembershipPage {...props} />,
    profile: <ProfilePage {...props} />,
    admin: <AdminPage {...props} />,
  };

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", color: C.text, lineHeight: 1.5 }}>
      {/* Quick nav for demo */}
      <div style={{ background: C.primary, padding: "8px 24px", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ color: C.accentLight, fontSize: 11, fontWeight: 700, marginRight: 4 }}>DEMO:</span>
        {Object.keys(pages).map(p => (
          <button key={p} onClick={() => navigate(p)} style={{ background: page === p ? C.accent : "rgba(255,255,255,0.15)", color: C.white, border: "none", borderRadius: 4, padding: "3px 10px", fontSize: 11, cursor: "pointer", fontWeight: page === p ? 700 : 400 }}>{p}</button>
        ))}
      </div>
      {pages[page] || pages.home}
    </div>
  );
}
