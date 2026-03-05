"use client";
import { motion } from "framer-motion";

type Item = {
  date: string;
  event: string;
  desc?: string;
};

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-16">
        <p className="mb-3 text-[11px] font-medium tracking-[0.2em] uppercase" style={{ color:"#c9a96e", fontFamily:"'DM Sans'" }}>The story of us</p>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(28px,5vw,52px)", fontWeight:300, fontStyle:"italic", color:"#2d1b2e" }}>
          Our Journey 💫
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute rounded-full" style={{ left:28, top:0, bottom:0, width:2, background:"linear-gradient(to bottom, #e8446a, #b565a7, #c9a96e)" }} />
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity:0, x:-24 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:"-50px" }}
            transition={{ delay: i*0.1, duration:0.6 }}
            className="flex gap-7 mb-12 pl-5"
          >
            <div className="flex-shrink-0 w-[22px] h-[22px] rounded-full mt-1 relative z-10"
              style={{ background:"linear-gradient(135deg,#e8446a,#b565a7)", boxShadow:"0 0 0 6px rgba(232,68,106,0.12)" }} />
            <div className="flex-1 rounded-[18px] p-5"
              style={{ background:"rgba(255,255,255,0.82)", border:"1px solid #f0bdd0", backdropFilter:"blur(10px)" }}>
              <div className="text-[11px] font-medium tracking-[0.18em] uppercase mb-1" style={{ color:"#c9a96e", fontFamily:"'DM Sans'" }}>{item.date}</div>
              <div className="mb-2" style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:19, fontWeight:600, color:"#2d1b2e" }}>{item.event}</div>
              <div style={{ fontSize:13, color:"#6b4468", lineHeight:1.65, fontFamily:"'DM Sans'", fontWeight:300 }}>{item.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
