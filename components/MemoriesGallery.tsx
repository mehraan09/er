"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Memory {
  emoji: string;
  caption: string;
  date: string;
  mood: string;
  imageSrc?: string;
}

const ROTATIONS = [-2.5, 1.8, -4, 3.2, -1.5, 2.8, -3.5, 1.2];
const SIZES = ["tall", "normal", "normal", "tall", "normal", "normal", "tall", "normal"] as const;

const MOOD_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  joyful:       { bg: "rgba(255,200,80,0.15)",  text: "#b07000", dot: "#fbbf24" },
  adventurous:  { bg: "rgba(52,211,153,0.15)",  text: "#065f46", dot: "#34d399" },
  dreamy:       { bg: "rgba(167,139,250,0.15)", text: "#4c1d95", dot: "#a78bfa" },
  celebratory:  { bg: "rgba(251,113,133,0.15)", text: "#9f1239", dot: "#fb7185" },
  cozy:         { bg: "rgba(251,146,60,0.15)",  text: "#7c2d12", dot: "#fb923c" },
  romantic:     { bg: "rgba(244,114,182,0.15)", text: "#831843", dot: "#f472b6" },
  intimate:     { bg: "rgba(147,197,253,0.15)", text: "#1e3a5f", dot: "#93c5fd" },
  together:     { bg: "rgba(167,243,208,0.15)", text: "#064e3b", dot: "#6ee7b7" },
};

export default function MemoriesGallery({ memories }: { memories: Memory[] }) {
  const [lightbox, setLightbox] = useState<Memory | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="mb-3 text-[11px] font-medium tracking-[0.2em] uppercase" style={{ color: "#c9a96e", fontFamily: "'DM Sans'" }}>
          Captured in light
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(28px, 5vw, 52px)",
          fontWeight: 300, fontStyle: "italic",
          color: "#2d1b2e",
        }}>
          Our Beautiful Memories 📸
        </h2>
        <p className="mt-3" style={{ fontFamily: "'DM Sans'", fontSize: 14, color: "#b565a7", fontWeight: 300 }}>
          Every moment with you is worth keeping forever
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <div className="gallery-masonry">
        {memories.map((mem, i) => {
          const rot = ROTATIONS[i % ROTATIONS.length];
          const isTall = SIZES[i % SIZES.length] === "tall";
          const moodStyle = MOOD_COLORS[mem.mood] || MOOD_COLORS["romantic"];

          return (
            <motion.div
              key={i}
              className="gallery-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div
                className="photo-frame"
                style={{
                  transform: `rotate(${rot}deg)`,
                  padding: "12px 12px 52px",
                  boxShadow: "0 6px 32px rgba(181,101,167,0.15), 0 2px 6px rgba(0,0,0,0.07)",
                  borderRadius: 2,
                }}
                onClick={() => setLightbox(mem)}
              >
                {/* Photo area */}
                {mem.imageSrc ? (
                  <img
                    src={mem.imageSrc}
                    alt={mem.caption}
                    className="w-full object-cover block"
                    style={{ aspectRatio: isTall ? "3/4" : "1/1" }}
                  />
                ) : (
                  <div
                    className="w-full flex flex-col items-center justify-center gap-2"
                    style={{
                      aspectRatio: isTall ? "3/4" : "1/1",
                      background: `linear-gradient(135deg, #fce7f3, #ede9fe)`,
                      fontSize: isTall ? 64 : 52,
                    }}
                  >
                    <span>{mem.emoji}</span>
                    {isTall && (
                      <span style={{ fontFamily: "'Dancing Script'", fontSize: 14, color: "#b565a7", textAlign: "center", padding: "0 16px" }}>
                        {mem.date}
                      </span>
                    )}
                  </div>
                )}

                {/* Hover overlay */}
                <div className="overlay rounded-[1px]">
                  <span style={{ fontFamily: "'Dancing Script', cursive", fontSize: 13, color: "rgba(255,255,255,0.9)" }}>
                    {mem.date}
                  </span>
                </div>

                {/* Caption strip */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 12px 12px" }}>
                  <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: 12, color: "#6b4468", textAlign: "center", lineHeight: 1.3, marginBottom: 6 }}>
                    {mem.caption}
                  </p>
                  {/* Mood tag */}
                  <div className="flex justify-center">
                    <span style={{
                      background: moodStyle.bg,
                      color: moodStyle.text,
                      fontFamily: "'DM Sans'",
                      fontSize: 9,
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "2px 8px",
                      borderRadius: 100,
                      display: "flex", alignItems: "center", gap: 4,
                    }}>
                      <span style={{ width: 5, height: 5, background: moodStyle.dot, borderRadius: "50%", display: "inline-block" }} />
                      {mem.mood}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9000] flex items-center justify-center p-6"
            style={{ background: "rgba(45,27,46,0.85)", backdropFilter: "blur(16px)", cursor: "none" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative max-w-md w-full"
              style={{ background: "#fff", padding: "16px 16px 56px", boxShadow: "0 40px 100px rgba(0,0,0,0.5)" }}
              onClick={e => e.stopPropagation()}
            >
              {lightbox.imageSrc ? (
                <img src={lightbox.imageSrc} alt={lightbox.caption} className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
              ) : (
                <div className="w-full flex items-center justify-center" style={{ aspectRatio: "4/3", background: "linear-gradient(135deg, #fce7f3, #ede9fe)", fontSize: 80 }}>
                  {lightbox.emoji}
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: 15, color: "#6b4468", marginBottom: 4 }}>
                  {lightbox.caption}
                </p>
                <p style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#b565a7", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {lightbox.date}
                </p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: "rgba(45,27,46,0.6)", color: "#fff", border: "none", fontSize: 14, cursor: "none" }}
              >✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
