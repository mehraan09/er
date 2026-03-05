interface Reason { icon: string; text: string; }

export default function Reasons({ reasons }: { reasons: Reason[] }) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div 
      className="text-center mb-16">
        <p className="mb-3 text-[11px] font-medium tracking-[0.2em] uppercase" style={{ color:"#c9a96e", fontFamily:"'DM Sans'" }}>A few reasons among many</p>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(28px,5vw,52px)", fontWeight:300, fontStyle:"italic", color:"#2d1b2e" }}>Why I Love You 💕</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="rounded-[20px] p-7 text-center"
            style={{ background:"rgba(255,255,255,0.85)", border:"1px solid #f0bdd0", backdropFilter:"blur(10px)", boxShadow:"0 4px 24px rgba(232,68,106,0.08)" }}
          >
            <div className="text-[34px] mb-3">{r.icon}</div>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:16, fontStyle:"italic", fontWeight:300, color:"#2d1b2e", lineHeight:1.6 }}>
              {r.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
