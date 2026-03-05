interface Reason { icon: string; text: string; }

function OrnamentDivider() {
  return (
    <div className="flex items-center gap-3 w-full max-w-[380px] my-1">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d4a8c0]" />
      <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
        <path
          d="M14 1 C10 1, 1 9, 1 9 C1 9, 10 17, 14 17 C18 17, 27 9, 27 9 C27 9, 18 1, 14 1Z"
          stroke="#c9a96e"
          strokeWidth="0.8"
        />
        <circle cx="14" cy="9" r="2.2" fill="#e8446a" opacity="0.7" />
        <circle cx="7" cy="9" r="1" fill="#c9a96e" opacity="0.5" />
        <circle cx="21" cy="9" r="1" fill="#c9a96e" opacity="0.5" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d4a8c0]" />
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

export default function Reasons({ reasons }: { reasons: Reason[] }) {
  return (
    <div className="w-full max-w-3xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <p
          className="mb-3 text-[11px] font-medium tracking-[0.2em] uppercase"
          style={{ color:"#c9a96e", fontFamily:"'DM Sans'" }}
        >
          A few reasons among many
        </p>

        <h2
          style={{
            fontFamily:"'Cormorant Garamond',serif",
            fontSize:"clamp(28px,5vw,52px)",
            fontWeight:300,
            fontStyle:"italic",
            color:"#2d1b2e"
          }}
        >
          Why I Love You 💕
        </h2>
      </div>

      {/* Reasons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {reasons.map((r, i) => (
          <div
            key={i}
            className="rounded-[20px] p-7 text-center"
            style={{
              background:"rgba(255,255,255,0.85)",
              border:"1px solid #f0bdd0",
              backdropFilter:"blur(10px)",
              boxShadow:"0 4px 24px rgba(232,68,106,0.08)"
            }}
          >
            <div className="text-[34px] mb-3">{r.icon}</div>

            <p
              style={{
                fontFamily:"'Cormorant Garamond',serif",
                fontSize:16,
                fontStyle:"italic",
                fontWeight:300,
                color:"#2d1b2e",
                lineHeight:1.6
              }}
            >
              {r.text}
            </p>
          </div>
        ))}
      </div>

      {/* Shayari Card */}
      <div
        className="w-full max-w-[580px] mx-auto flex flex-col items-center"
        style={{
          background:"linear-gradient(160deg,#fffaf5 0%,#fff5f9 50%,#fdf8ff 100%)",
          border:"1px solid rgba(201,169,110,0.3)",
          borderRadius:24,
          padding:"48px 40px",
          position:"relative",
          boxShadow:"0 24px 64px rgba(232,68,106,0.1)"
        }}
      >
        <CornerFlourish pos="tl" />
        <CornerFlourish pos="tr" />
        <CornerFlourish pos="bl" />
        <CornerFlourish pos="br" />

        <div
          style={{
            fontSize:13,
            letterSpacing:"0.5em",
            color:"#c9a96e",
            opacity:0.65,
            marginBottom:28
          }}
        >
          ❧ ✦ ❧
        </div>

        <p
          dir="rtl"
          lang="ur"
          style={{
            fontFamily:"'Noto Nastaliq Urdu','Jameel Noori Nastaleeq',serif",
            fontSize:"clamp(22px,4vw,32px)",
            lineHeight:2.5,
            color:"#2d1b2e",
            textAlign:"center"
          }}
        >
          تیری صورت سے ہے عالم میں بہاروں کو ثبات
        </p>

        <OrnamentDivider />

        <p
          dir="rtl"
          lang="ur"
          style={{
            fontFamily:"'Noto Nastaliq Urdu','Jameel Noori Nastaleeq',serif",
            fontSize:"clamp(22px,4vw,32px)",
            lineHeight:2.5,
            color:"#2d1b2e",
            textAlign:"center"
          }}
        >
          تیری آنکھوں کے سوا دنیا میں رکھا کیا ہے
        </p>

        <div
          style={{
            fontSize:13,
            letterSpacing:"0.5em",
            color:"#c9a96e",
            opacity:0.65,
            marginTop:24,
            transform:"scaleX(-1)"
          }}
        >
          ❧ ✦ ❧
        </div>
      </div>

    </div>
  );
}