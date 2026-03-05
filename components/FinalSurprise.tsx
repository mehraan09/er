"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import confetti from "canvas-confetti";

const COLS = ["#e8446a","#b565a7","#c9a96e","#ffd6e0","#f0d6f5","#fff"];

function fireConfetti() {
  const b = { particleCount:70, spread:65, startVelocity:28, ticks:55, colors:COLS };
  confetti({ ...b, origin:{ x:.2, y:.65 } });
  setTimeout(() => confetti({ ...b, origin:{ x:.8, y:.65 } }), 280);
  setTimeout(() => confetti({ particleCount:45, spread:100, origin:{ x:.5, y:.45 }, colors:COLS }), 560);
}

const PETALS = ["💫","⭐","✨","🌟","💕"];

export default function FinalSurprise({ herName, onReplay }: { herName:string; onReplay:()=>void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-100px" });
  const firedRef = useRef(false);
  const [celebrating, setCelebrating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (inView && !firedRef.current) { firedRef.current = true; setTimeout(fireConfetti, 700); }
  }, [inView]);

  function handleCelebrate() {
    setCelebrating(true);
    fireConfetti();
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(fireConfetti, 2200);
    setTimeout(() => { if (intervalRef.current) clearInterval(intervalRef.current); setCelebrating(false); }, 12000);
  }

  return (
    <div ref={ref} className="flex flex-col items-center text-center z-10 relative w-full max-w-xl mx-auto">
      {/* Background aura */}
      <div className="absolute inset-0 pointer-events-none" style={{ background:"radial-gradient(ellipse at 50% 50%,rgba(232,68,106,0.1) 0%,transparent 65%)", animation:"auraPulse 4s ease-in-out infinite" }} />

      {/* Floating petals */}
      {PETALS.map((p,i) => (
        <div key={i} className="petal absolute" style={{ left:`${15+i*16}%`, fontSize:`${14+i*2}px`, animationDuration:`${9+i}s`, animationDelay:`${i*0.7}s`, opacity:.4 }}>{p}</div>
      ))}

      <motion.div
        initial={{ opacity:0, scale:0.7 }}
        animate={inView ? { opacity:1, scale:1 } : {}}
        transition={{ type:"spring", bounce:.4, duration:1 }}
        style={{
          fontFamily:"'Cormorant Garamond',serif",
          fontSize:"clamp(64px,16vw,140px)",
          fontWeight:300, fontStyle:"italic",
          background:"linear-gradient(135deg,#ffecd6,#ffb3c1,#fff)",
          WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
          lineHeight:1, marginBottom:18,
          animation:"lovePulse 2.5s ease-in-out infinite",
          position:"relative", zIndex:2,
        }}
      >
        You are Beautiful ❤️
      </motion.div>

      <motion.p
        initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ delay:.4 }}
        className="mb-14" style={{ fontFamily:"'Dancing Script',cursive", fontSize:"clamp(20px,4vw,34px)", color:"rgba(255,255,255,0.85)", position:"relative", zIndex:2 }}
      >
        Happy Birthday, {herName} 🌹
      </motion.p>

      <motion.div
        initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}} transition={{ delay:.7 }}
        className="flex gap-4 flex-wrap justify-center"
        style={{ position:"relative", zIndex:2 }}
      >
        <button
          onClick={handleCelebrate}
          style={{
            padding:"15px 34px", borderRadius:100, border:"none",
            background:"linear-gradient(135deg,#e8446a,#b565a7)",
            color:"#fff", fontFamily:"'DM Sans'", fontWeight:500, fontSize:14,
            letterSpacing:".06em", cursor:"none",
            boxShadow:"0 8px 32px rgba(232,68,106,0.35)",
            animation: celebrating ? "musicPulse 1.5s ease-in-out infinite" : "none",
          }}
        >🎊 Celebrate!</button>

        <button
          onClick={onReplay}
          style={{
            padding:"15px 34px", borderRadius:100,
            background:"rgba(255,255,255,0.1)",
            border:"1.5px solid rgba(255,255,255,0.3)",
            color:"#fff", fontFamily:"'DM Sans'", fontWeight:500, fontSize:14,
            letterSpacing:".06em", cursor:"none", backdropFilter:"blur(10px)",
          }}
        >💌 Replay Surprise</button>
      </motion.div>
    </div>
  );
}
