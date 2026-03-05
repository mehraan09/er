"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeData {
  years: number; months: number; weeks: number;
  days: number; hours: number; minutes: number; seconds: number;
  totalDays: number;
}

function getTime(startDate: string): TimeData {
  const start = new Date(startDate);
  const now   = new Date();
  const diff  = now.getTime() - start.getTime();
  const totalDays = Math.floor(diff / 86400000);
  const years  = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const weeks  = Math.floor(totalDays / 7);
  const days   = Math.floor(diff / 86400000);
  const hours  = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { years, months, weeks, days, hours, minutes, seconds, totalDays };
}

function CounterCard({ value, label, accent = false }: { value: string | number; label: string; accent?: boolean }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 20px 56px rgba(232,68,106,0.2)" }}
      className="rounded-[24px] flex flex-col items-center justify-center"
      style={{
        background: accent
          ? "linear-gradient(135deg, rgba(232,68,106,0.08), rgba(181,101,167,0.08))"
          : "rgba(255,255,255,0.9)",
        border: `1.5px solid ${accent ? "#f0bdd0" : "#f0e4e9"}`,
        padding: "28px 20px",
        minWidth: 120,
        boxShadow: "0 8px 36px rgba(232,68,106,0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="counter-digit" style={{ fontSize: "clamp(38px,7vw,58px)", lineHeight: 1, marginBottom: 8 }}>
        {value}
      </div>
      <div style={{
        fontFamily: "'DM Sans'",
        fontSize: 10,
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "#c9a96e",
      }}>
        {label}
      </div>
    </motion.div>
  );
}

function HeartPulse() {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, #f0bdd0)" }} />
      <span style={{ fontSize: 28, animation: "heartbeat 1.4s ease-in-out infinite" }}>❤️</span>
      <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, #f0bdd0)" }} />
    </div>
  );
}

export default function RelationshipCounter({ startDate, herName }: { startDate: string; herName: string }) {
  const [time, setTime] = useState<TimeData>(getTime(startDate));

  useEffect(() => {
    const interval = setInterval(() => setTime(getTime(startDate)), 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  // Milestone messages
    const milestones = [
      { check: time.totalDays >= 365, msg: `Over a year of missing you 💔` },
      { check: time.totalDays >= 100, msg: `${time.totalDays} days of thinking about you` },
      { check: time.totalDays >= 30,  msg: `${time.weeks} weeks without hearing your voice` },
    ];
  const milestone = milestones.find(m => m.check);

  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
          <p className="mb-3 text-[11px] font-medium tracking-[0.2em] uppercase">
            Every second feels heavier
          </p>

          <h2>
            Since we stopped talking
          </h2>
      </motion.div>

      <HeartPulse />

      {/* Big summary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="rounded-[28px] p-8 mb-8"
        style={{
          background: "rgba(255,255,255,0.85)",
          border: "1.5px solid #f0bdd0",
          backdropFilter: "blur(10px)",
          boxShadow: "0 12px 56px rgba(232,68,106,0.12)",
        }}
      >
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 300, fontStyle: "italic", color: "#2d1b2e", marginBottom: 16 }}>
        This is how long I've been missing you
        </p>
        <div className="flex items-baseline justify-center gap-3 flex-wrap">
          {time.years > 0 && (
            <div>
              <span className="counter-digit" style={{ fontSize: "clamp(48px, 10vw, 80px)", lineHeight: 1 }}>{time.years}</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#b565a7", fontStyle: "italic", marginLeft: 6 }}>
                {time.years === 1 ? "year" : "years"},
              </span>
            </div>
          )}
          {time.months > 0 && (
            <div>
              <span className="counter-digit" style={{ fontSize: "clamp(48px, 10vw, 80px)", lineHeight: 1 }}>{time.months}</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#b565a7", fontStyle: "italic", marginLeft: 6 }}>
                {time.months === 1 ? "month" : "months"}
              </span>
            </div>
          )}
          {time.years === 0 && time.months === 0 && (
            <div>
              <span className="counter-digit" style={{ fontSize: "clamp(48px, 10vw, 80px)", lineHeight: 1 }}>{time.totalDays}</span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#b565a7", fontStyle: "italic", marginLeft: 6 }}>days</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Live ticking grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex gap-3 justify-center flex-wrap mb-8"
      >
        <CounterCard value={time.days.toLocaleString()} label="Total Days" accent />
        <CounterCard value={time.hours} label="Hours" />
        <CounterCard value={time.minutes} label="Minutes" />
        <CounterCard value={time.seconds} label="Seconds" accent />
      </motion.div>

      {/* Milestone badge */}
      {milestone && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
          style={{ background: "rgba(232,68,106,0.08)", border: "1px solid #f0bdd0" }}
        >
          <span style={{ fontSize: 16 }}>🏆</span>
          <span style={{ fontFamily: "'Dancing Script', cursive", fontSize: 16, color: "#6b4468" }}>
            {milestone.msg}
          </span>
        </motion.div>
      )}

      <p className="mt-6 text-sm italic text-[#6b4468]">
        And yet, not a single day has passed where I didn’t think about you.
      </p>
    </div>
  );
}
