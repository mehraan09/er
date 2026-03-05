const HEARTS = ["❤️","💕","🌸","💗","✨","🌺","🌹","💫"];

export default function FloatingHearts({ count = 8 }: { count?: number }) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="petal absolute pointer-events-none select-none"
          style={{
            left: `${(i / count) * 100 + Math.random() * 8}%`,
            fontSize: `${12 + (i % 3) * 6}px`,
            animationDuration: `${7 + i * 0.8}s`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          {HEARTS[i % HEARTS.length]}
        </div>
      ))}
    </>
  );
}
