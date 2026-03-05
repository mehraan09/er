export default function Footer({ yourName }: { yourName: string }) {
  return (
    <footer
      className="w-full py-10 px-6 text-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #fdf0f4 0%, #f5e6f7 50%, #fdf5e6 100%)" }}
    >
      {/* Decorative lines */}
      <div className="flex items-center gap-4 max-w-xs mx-auto mb-6">
        <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #f0bdd0)" }} />
        <span style={{ fontSize: 18 }}>🌹</span>
        <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #f0bdd0)" }} />
      </div>

      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(14px, 2.5vw, 17px)",
        fontWeight: 300,
        fontStyle: "italic",
        color: "#6b4468",
        marginBottom: 8,
        letterSpacing: "0.02em",
      }}>
        "Every love story is beautiful, but ours is my favourite."
      </p>

      <div className="flex items-center justify-center gap-2 mt-4">
        <span style={{ fontFamily: "'DM Sans'", fontSize: 12, fontWeight: 300, color: "#b565a7", letterSpacing: "0.05em" }}>
          Made with
        </span>
        <span
          style={{ fontSize: 16 }}
        >❤️</span>
        <span style={{ fontFamily: "'DM Sans'", fontSize: 12, fontWeight: 300, color: "#b565a7", letterSpacing: "0.05em" }}>
          by
        </span>
        <span style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 18,
          fontWeight: 700,
          background: "linear-gradient(135deg, #e8446a, #b565a7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          {yourName}
        </span>
      </div>

      <p style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#c9a96e", marginTop: 8, letterSpacing: "0.1em" }}>
        © {new Date().getFullYear()} · All love reserved 💕
      </p>
    </footer>
  );
}
