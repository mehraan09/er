export default function LoveLetter({ yourName, herName }: { yourName: string; herName: string }) {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-16">
        <p
          className="mb-3 text-[11px] font-medium tracking-[0.2em] uppercase"
          style={{ color: "#c9a96e", fontFamily: "'DM Sans'" }}
        >
          Written from the heart
        </p>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: "clamp(28px,5vw,52px)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#2d1b2e",
          }}
        >
          A Letter For You 💌
        </h2>
      </div>

      <div className="letter-paper rounded-sm px-14 py-14 max-sm:px-8 max-sm:py-10">
        <p
          className="text-right mb-7"
          style={{
            fontFamily: "'Dancing Script',cursive",
            fontSize: 15,
            color: "#c9a96e",
          }}
        >
          {today}
        </p>

        <p
          className="mb-5"
          style={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 26,
            fontStyle: "italic",
            fontWeight: 300,
            color: "#2d1b2e",
          }}
        >
          My dearest {herName},
        </p>

        <div
          style={{
            fontFamily: "'DM Sans'",
            fontSize: 15,
            fontWeight: 300,
            color: "#6b4468",
            lineHeight: 2,
            marginBottom: 32,
          }}
        >
          <p className="mb-5">
            I know I owe you an apology. Leaving without giving you a proper explanation
            was unfair, and I am truly sorry if it hurt you. That was never my intention.
          </p>

          <p className="mb-5">
            I am human, and like everyone else, I make mistakes. But what matters to me
            the most is being honest about them and asking for forgiveness with a sincere heart.
          </p>

          <p className="mb-5">
            I have always prayed that somehow things could find their way back between us.
            If life gives us another chance, I promise to give my whole heart this time.
          </p>

          <p>
            I understand that this may not be the right time or situation for you,
            and I will respect whatever you decide. But I wanted you to know how
            deeply I feel. If you return, this letter becomes a proposal.
            If not, then please accept it as a heartfelt apology.
          </p>
        </div>

        <p
          className="text-right"
          style={{
            fontFamily: "'Dancing Script',cursive",
            fontSize: 28,
            fontWeight: 700,
            color: "#e8446a",
          }}
        >
          Forever yours, {yourName} ❤️
        </p>
      </div>
    </div>
  );
}