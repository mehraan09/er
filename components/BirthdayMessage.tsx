type BirthdayMessageProps = {
  herName: string;
};

function OrnamentDivider() {
  return (
    <div className="flex items-center gap-3 w-full max-w-[380px] my-1">
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #d4a8c0)" }} />
      <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
        <path d="M14 1 C10 1, 1 9, 1 9 C1 9, 10 17, 14 17 C18 17, 27 9, 27 9 C27 9, 18 1, 14 1Z"
          stroke="#c9a96e" strokeWidth="0.8" fill="none" />
        <circle cx="14" cy="9" r="2.2" fill="#e8446a" opacity="0.7" />
        <circle cx="7"  cy="9" r="1"   fill="#c9a96e" opacity="0.5" />
        <circle cx="21" cy="9" r="1"   fill="#c9a96e" opacity="0.5" />
      </svg>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #d4a8c0)" }} />
    </div>
  );
}

function CornerFlourish({ pos }: { pos: "tl"|"tr"|"bl"|"br" }) {
  const style: React.CSSProperties = {
    position: "absolute",
    fontSize: 16,
    opacity: 0.32,
    color: "#c9a96e",
    ...(pos === "tl" && { top: 14, left: 18 }),
    ...(pos === "tr" && { top: 14, right: 18 }),
    ...(pos === "bl" && { bottom: 14, left: 18 }),
    ...(pos === "br" && { bottom: 14, right: 18 }),
  };
  return <span style={style}>✦</span>;
}

export default function BirthdayMessage({ herName }: BirthdayMessageProps) {
  return (
    <section className="flex flex-col items-center text-center max-w-2xl px-4 w-full">

      {/* Cake */}
      <div className="text-[70px] mb-6" style={{ display:"inline-block", animation:"cakeBounce 3s ease-in-out infinite" }}>🎂</div>

      {/* Eyebrow */}
      <p
        style={{ fontFamily:"'DM Sans',system-ui,sans-serif", fontSize:11, fontWeight:500, letterSpacing:"0.25em", textTransform:"uppercase", color:"#c9a96e", marginBottom:14 }}
      >This day belongs to you.</p>

      <h1
        className="text-center mb-12"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: "clamp(32px,5vw,40px)",
          color: "#e8446a",
          textShadow: "0 10px 30px rgba(232,68,106,0.25)",
          lineHeight: 1.25,
        }}
      >
        Happy Birthday
        <br />
        <span className="text-black">My Majesty, My Lady, My Ma'am —</span>
        <span>{herName}❤️</span>
        
      </h1>
      <div
        className="w-full max-w-[580px] mb-10 flex flex-col items-center"
        style={{
          background:"linear-gradient(160deg,#fffaf5 0%,#fff5f9 50%,#fdf8ff 100%)",
          border:"1px solid rgba(201,169,110,0.3)",
          borderRadius:24,
          padding:"48px 40px 40px",
          position:"relative",
          boxShadow:"0 2px 0 rgba(201,169,110,0.18), 0 4px 0 rgba(255,255,255,0.8), 0 24px 64px rgba(232,68,106,0.1), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        <CornerFlourish pos="tl" /><CornerFlourish pos="tr" />
        <CornerFlourish pos="bl" /><CornerFlourish pos="br" />
        <div
          style={{ fontSize:13, letterSpacing:"0.5em", color:"#c9a96e", opacity:0.65, marginBottom:28 }}
        >❧ ✦ ❧</div>

        {/* Verse 1 — misra oolaa */}
        <p
          dir="rtl" lang="ur"
          style={{
            fontFamily:"'Noto Nastaliq Urdu','Jameel Noori Nastaleeq',serif",
            fontSize:"clamp(22px,4vw,32px)",
            lineHeight:2.5,
            color:"#2d1b2e",
            textAlign:"center",
            letterSpacing:0,
            wordSpacing:"0.08em",
            width:"100%",
          }}
        >تیری صورت سے ہے عالم میں بہاروں کو ثبات</p>

        {/* Ornament between verses */}
        <OrnamentDivider />

        {/* Verse 2 — misra saani */}
        <p
          dir="rtl" lang="ur"
          style={{
            fontFamily:"'Noto Nastaliq Urdu','Jameel Noori Nastaleeq',serif",
            fontSize:"clamp(22px,4vw,32px)",
            lineHeight:2.5,
            color:"#2d1b2e",
            textAlign:"center",
            letterSpacing:0,
            wordSpacing:"0.08em",
            width:"100%",
            marginBottom:24,
          }}
        >تیری آنکھوں کے سوا دنیا میں رکھا کیا ہے</p>

        {/* Bottom ornament */}
        <div
          style={{ fontSize:13, letterSpacing:"0.5em", color:"#c9a96e", opacity:0.65, marginTop:24, transform:"scaleX(-1)" }}
        >❧ ✦ ❧</div>

      </div>

      {/* Typewriter card */}
      <div
        className="rounded-[24px] px-10 py-7"
        style={{ background:"rgba(255,255,255,0.75)", border:"1px solid #f0bdd0", backdropFilter:"blur(12px)", boxShadow:"0 8px 48px rgba(232,68,106,0.1)", maxWidth:520 }}
      >
        <div className="typewriter"
          style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(17px,3vw,26px)", fontStyle:"italic", fontWeight:300, color:"#2d1b2e" }}
        >I wish you were mine to hold.</div>
      </div>

    </section>
  );
}
