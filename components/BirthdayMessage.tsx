type BirthdayMessageProps = {
  herName: string;
};


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
          fontSize: "clamp(32px,9vw,40px)",
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
