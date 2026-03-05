"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SPARKS = ["✨","⭐","💫","🌟"];

function Letter({ ch, delay, triggered }: { ch:string; delay:number; triggered:boolean }) {
  const [shown, setShown] = useState(false);
  const [sparks, setSparks] = useState<{id:number;tx:number;ty:number;e:string}[]>([]);
  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => {
      setShown(true);
      setSparks([...Array(5)].map((_,id) => ({
        id, e: SPARKS[Math.floor(Math.random()*4)],
        tx: (Math.random()-.5)*70, ty: (Math.random()-.5)*70,
      })));
      setTimeout(() => setSparks([]), 800);
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [triggered, delay]);

  return (
    <motion.div
      className="relative select-none"
      initial={{ opacity:0, y:28, scale:.85 }}
      animate={shown ? { opacity:1, y:0, scale:1 } : {}}
      transition={{ type:"spring", bounce:.5, duration:.5 }}
      style={{
        fontFamily:"'Cormorant Garamond',serif",
        fontSize:"clamp(52px,10vw,96px)",
        fontWeight:300, fontStyle:"italic",
        ...(shown ? {
          background:"linear-gradient(135deg,#e8446a,#b565a7,#c9a96e)",
          backgroundSize:"200%",
          WebkitBackgroundClip:"text",
          WebkitTextFillColor:"transparent",
          backgroundClip:"text",
          animation:"gradSlide 4s ease infinite",
          filter:"drop-shadow(0 0 12px rgba(232,68,106,0.25))",
        } : {
          color:"transparent",
          WebkitTextStroke:"1.5px #b565a7",
        }),
      }}
    >
      {ch === " " ? "\u00A0" : ch}
      {sparks.map(s => (
        <span key={s.id} className="sparkle absolute pointer-events-none" style={{
          left:`${Math.random()*90}%`, top:`${Math.random()*90}%`,
          ["--tx" as string]: s.tx+"px", ["--ty" as string]: s.ty+"px",
          fontSize:15,
        }}>{s.e}</span>
      ))}
    </motion.div>
  );
}

export default function NameReveal({ name }:{ name:string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-100px" });
  const letters = name.toUpperCase().split("");
  const [tagVisible, setTagVisible] = useState(false);
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setTagVisible(true), letters.length * 200 + 600);
    return () => clearTimeout(t);
  }, [inView, letters.length]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <p className="mb-11" style={{ fontFamily:"'Dancing Script',cursive", fontSize:20, color:"#6b4468" }}>
        For the most wonderful person in my world…
      </p>
      <div className="flex gap-[6px] justify-center flex-wrap mb-11">
        {letters.map((ch,i) => <Letter key={i} ch={ch} delay={i*0.2} triggered={inView} />)}
      </div>
      <motion.p
        initial={{ opacity:0 }} animate={tagVisible ? { opacity:1 } : {}} transition={{ duration:1.2 }}
        style={{ fontFamily:"'Dancing Script',cursive", fontSize:"clamp(17px,3vw,24px)", color:"#6b4468" }}
      >
        ✨ The most beautiful name in my world. ✨
      </motion.p>
    </div>
  );
}
