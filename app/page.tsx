"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONFIG } from "@/config";

import MusicPlayer from "@/components/MusicPlayer";
import SecretMessage from "@/components/SecretMessage";
import ProgressBar from "@/components/ProgressBar";
import NavDots from "@/components/NavDots";

import PasswordGate from "@/components/PasswordGate";
import BirthdayMessage from "@/components/BirthdayMessage";
import MemoriesGallery from "@/components/MemoriesGallery";
import Timeline from "@/components/Timeline";
import NameReveal from "@/components/NameReveal";
import LoveLetter from "@/components/LoveLetter";
import Reasons from "@/components/Reasons";
import RelationshipCounter from "@/components/RelationshipCounter";
import WishStars from "@/components/WishStars";
import FinalSurprise from "@/components/FinalSurprise";
import Footer from "@/components/Footer";

const SECTION_IDS = [
  "envelope","birthday","memories","timeline",
  "name-reveal","love-letter","reasons","counter",
  "wish-stars","final",
];

export default function Home() {
  const [unlocked, setUnlocked] = useState(false);
  const [showSecret, setShowSecret] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!unlocked && (
          <motion.div
            key="gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.85 }}
            className="fixed inset-0 z-50"
          >
            <PasswordGate password={CONFIG.password} onUnlock={() => setUnlocked(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {unlocked && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {/* Persistent UI */}
          <ProgressBar sectionIds={SECTION_IDS} />
          <NavDots sectionIds={SECTION_IDS} />
          <MusicPlayer />

          <button
            className="fixed bottom-[26px] left-[26px] text-3xl z-50 bg-transparent border-none"
            style={{ cursor: "none", animation: "floatBtn 3.2s ease-in-out infinite", filter: "drop-shadow(0 4px 10px rgba(232,68,106,0.35))" }}
            onClick={() => setShowSecret(true)}
          >
            💌
          </button>

          <AnimatePresence>
            {showSecret && <SecretMessage message={CONFIG.secretMessage} onClose={() => setShowSecret(false)} />}
          </AnimatePresence>

          {/* ── Sections ── */}

          <section id="birthday" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-20"
            style={{ background: "linear-gradient(155deg, #fff5f7 0%, #f7eeff 55%, #fffaf0 100%)" }}>
            <BirthdayMessage herName={CONFIG.herName} />
          </section>

          <section id="memories" className="relative overflow-hidden px-6 py-24"
            style={{ background: "linear-gradient(145deg, #fdf2f8 0%, #f3e8ff 100%)" }}>
            <MemoriesGallery memories={CONFIG.memories} />
          </section>

          <section id="timeline" className="relative overflow-hidden px-6 py-24"
            style={{ background: "linear-gradient(155deg, #fff8f0 0%, #f5e8ff 100%)" }}>
            <Timeline items={CONFIG.timeline} />
          </section>

          <section id="name-reveal" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-20"
            style={{ background: "linear-gradient(145deg, #fdf2f8, #eee4ff 55%, #fdf2f8)" }}>
            <NameReveal name={CONFIG.herName} />
          </section>

          <section id="love-letter" className="relative overflow-hidden px-6 py-24"
            style={{ background: "linear-gradient(160deg, #fff8f2 0%, #f9eeff 100%)" }}>
            <LoveLetter yourName={CONFIG.yourName} herName={CONFIG.herName} />
          </section>

          <section id="reasons" className="relative overflow-hidden px-6 py-24"
            style={{ background: "linear-gradient(135deg, #fdf0f4 0%, #f0e8ff 100%)" }}>
            <Reasons reasons={CONFIG.reasons} />
          </section>

          <section id="counter" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-20"
            style={{ background: "linear-gradient(150deg, #fff5f7 0%, #f3e8ff 50%, #fffaf0 100%)" }}>
            <RelationshipCounter startDate={CONFIG.startDate} herName={CONFIG.herName} />
          </section>

          <section id="wish-stars" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-20"
            style={{ background: "radial-gradient(ellipse at center, #1a0a2e 0%, #0d0518 100%)" }}>
            <WishStars />
          </section>

          <section id="final" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 py-20"
            style={{ background: "linear-gradient(145deg, #1a0020 0%, #3d0030 30%, #1a0a2e 70%, #0d1a40 100%)" }}>
            <FinalSurprise herName={CONFIG.herName} onReplay={() => setUnlocked(false)} />
          </section>

          <Footer yourName={CONFIG.yourName} />
        </motion.div>
      )}
    </>
  );
}
