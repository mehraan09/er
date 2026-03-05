"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DEFAULT_WISHES = [
  "I wish for endless joy ✨",
  "I wish for adventures together 🌍",
  "I wish for your happiness always 💕",
];

export default function WishStars() {
  const [stars, setStars] = useState<{ id:number; size:number; x:number; y:number; dur:number; delay:number }[]>([]);
  const [wishes, setWishes] = useState<string[]>(DEFAULT_WISHES);
  const [input, setInput] = useState("");

  useEffect(() => {
    setStars([...Array(90)].map((_, i) => ({
      id: i, size: Math.random()*2.5+0.5,
      x: Math.random()*100, y: Math.random()*100,
      dur: 2+Math.random()*4, delay: Math.random()*5,
    })));
  }, []);

function sendWish() {
  const v = input.trim();
  if (!v) return;

  setWishes(prev => [v, ...prev].slice(0, 6));
  setInput("");

  const number = "919103597816"; // your WhatsApp number
  const msg = encodeURIComponent(`🌠 Birthday Wish:\n\n${v}`);

  window.open(`https://wa.me/${number}?text=${msg}`, "_blank");

  // shooting star effect
  const el = document.createElement("div");
  el.style.cssText = `position:fixed;pointer-events:none;z-index:499;width:120px;height:1.5px;
  background:linear-gradient(90deg,rgba(255,255,255,0),#fff,rgba(255,255,255,0));
  border-radius:2px;animation:shoot .8s ease forwards;
  left:${Math.random()*60}%;top:${Math.random()*50+20}%;
  --ang:${-35+Math.random()*20}deg`;

  document.body.appendChild(el);
  setTimeout(() => el.remove(), 900);
}

  return (
    <div className="w-full max-w-xl mx-auto text-center relative z-10">
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex:0 }}>
        {stars.map(s => (
          <div key={s.id} className="star absolute" style={{ width:s.size, height:s.size, left:`${s.x}%`, top:`${s.y}%`, animationDuration:`${s.dur}s`, animationDelay:`${s.delay}s` }} />
        ))}
      </div>

      <p className="mb-4 text-[11px] font-medium tracking-[0.2em] uppercase" style={{ color:"#c9a96e", fontFamily:"'DM Sans'" }}>Make a wish</p>
      <h2 className="mb-4" style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(32px,6vw,64px)", fontWeight:300, fontStyle:"italic", color:"#fff" }}>
        Birthday Wishes 🌠
      </h2>
      <p className="mb-12" style={{ fontFamily:"'Dancing Script',cursive", fontSize:20, color:"rgba(255,255,255,0.65)" }}>
        Write a wish — watch it fly into the stars
      </p>

      <div className="flex flex-col items-center gap-4 mb-10">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key==="Enter" && sendWish()}
          placeholder="I wish for…"
          maxLength={60}
          className="outline-none"
          style={{
            width:"min(380px,90vw)", padding:"15px 28px",
            borderRadius:100, border:"1px solid rgba(255,255,255,0.2)",
            background:"rgba(255,255,255,0.08)", backdropFilter:"blur(12px)",
            color:"#fff", fontFamily:"'DM Sans'", fontSize:16,
            textAlign:"center", cursor:"none",
          }}
          // inline placeholder style via CSS is set in globals, handled via inline
        />
        <button
          onClick={sendWish}
          style={{
            padding:"14px 44px", borderRadius:100, border:"none",
            background:"linear-gradient(135deg,#e8446a,#b565a7)",
            color:"#fff", fontFamily:"'DM Sans'", fontWeight:500,
            fontSize:15, cursor:"none",
            boxShadow:"0 8px 32px rgba(232,68,106,0.35)",
          }}
        >Send to the stars ✨</button>
      </div>

      <div className="flex flex-col gap-3" style={{ maxHeight:260, overflow:"hidden" }}>
        {wishes.map((w, i) => (
          <motion.div
            key={`${w}-${i}`}
            initial={{ opacity:0, y:14 }}
            animate={{ opacity:1, y:0 }}
            className="rounded-full px-6 py-3 text-center"
            style={{
              background:"rgba(255,255,255,0.08)",
              border:"1px solid rgba(255,255,255,0.12)",
              fontFamily:"'Dancing Script',cursive",
              fontSize:16, color:"rgba(255,255,255,0.8)",
            }}
          >{w}</motion.div>
        ))}
      </div>
    </div>
  );
}
