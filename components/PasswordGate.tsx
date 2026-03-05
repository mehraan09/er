"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const PETALS = ["🌸","❤️","🌺","💕","🌸","💗","✨","💖"];

export default function PasswordGate({ password, onUnlock }: { password: string; onUnlock: () => void }) {
  const [input, setInput]   = useState("");
  const [error, setError]   = useState("");
  const [shaking, setShake] = useState(false);

  function tryUnlock() {
    if (input.trim().toLowerCase() === password.toLowerCase()) {
      onUnlock();
    } else {
      setError("That's not it… but you're still adorable ❤️");
      setShake(true);
      setInput("");
      setTimeout(() => { setError(""); setShake(false); }, 3000);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6"
      style={{ background: "linear-gradient(150deg, #fdf0f4 0%, #f5e6f7 50%, #fdf5e6 100%)" }}>

      {PETALS.map((p, i) => (
        <div key={i} className="petal absolute" style={{
          left: `${(i / PETALS.length) * 100 + 5}%`,
          fontSize: `${13 + (i % 3) * 5}px`,
          animationDuration: `${6.5 + i * 0.6}s`,
          animationDelay: `${i * 0.4}s`,
        }}>{p}</div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center z-10"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1], filter: ["drop-shadow(0 0 0 transparent)", "drop-shadow(0 4px 24px rgba(232,68,106,0.35))", "drop-shadow(0 0 0 transparent)"] }}
          transition={{ repeat: Infinity, duration: 2.4 }}
          className="text-[64px] mb-6"
        >🌹</motion.div>

        <p className="text-[11px] font-medium tracking-[0.2em] uppercase mb-3" style={{ color: "#c9a96e", fontFamily: "'DM Sans'" }}>
          A surprise awaits
        </p>

        <h1 className="mb-2 text-center" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(28px, 5.5vw, 52px)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "#2d1b2e",
          lineHeight: 1.2,
        }}>
          Someone left something<br />beautiful here for you
        </h1>

        <p className="mb-10" style={{ fontFamily: "'Dancing Script', cursive", fontSize: 18, color: "#6b4468" }}>
          Enter password to begin ✨
        </p>

        <motion.input
          animate={shaking ? { x: [-10, 10, -10, 10, -6, 6, 0] } : {}}
          transition={{ duration: 0.45 }}
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && tryUnlock()}
          placeholder="your nickname"
          className="mb-4 text-center outline-none transition-all"
          style={{
            width: 300, padding: "15px 28px",
            border: "1.5px solid #e8c8d4", borderRadius: 100,
            fontFamily: "'DM Sans'", fontSize: 17,
            background: "rgba(255,255,255,0.85)",
            color: "#2d1b2e", letterSpacing: "4px",
            cursor: "none",
          }}
          onFocus={e => { e.target.style.borderColor = "#e8446a"; e.target.style.boxShadow = "0 0 0 4px rgba(232,68,106,0.1)"; }}
          onBlur={e  => { e.target.style.borderColor = "#e8c8d4"; e.target.style.boxShadow = "none"; }}
        />

        <motion.button
          whileHover={{ y: -2, boxShadow: "0 14px 40px rgba(232,68,106,0.38)" }}
          whileTap={{ scale: 0.97 }}
          onClick={tryUnlock}
          style={{
            padding: "15px 52px", borderRadius: 100, border: "none",
            background: "linear-gradient(135deg, #e8446a, #b565a7)",
            color: "#fff", fontFamily: "'DM Sans'", fontWeight: 500,
            fontSize: 15, letterSpacing: "0.08em",
            boxShadow: "0 8px 32px rgba(232,68,106,0.28)",
            cursor: "none",
          }}
        >
          Open the surprise ❤️
        </motion.button>

        <p className="mt-4 h-6 text-center" style={{ fontFamily: "'Dancing Script', cursive", fontSize: 16, color: "#e8446a" }}>
          {error}
        </p>
      </motion.div>
    </div>
  );
}
