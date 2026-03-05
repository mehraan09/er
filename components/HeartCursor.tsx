"use client";
import { useEffect, useRef } from "react";

const HEARTS = ["❤️","💕","🌸","💗","✨","🌺"];

export default function HeartCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const lastTrail = useRef(0);
  const mx = useRef(0), my = useRef(0);
  const rx = useRef(0), ry = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX; my.current = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top  = e.clientY + "px";
      }
      const now = Date.now();
      if (now - lastTrail.current > 130) {
        lastTrail.current = now;
        const t = document.createElement("div");
        t.className = "heart-trail";
        t.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
        t.style.left = (e.clientX - 8) + "px";
        t.style.top  = (e.clientY - 8) + "px";
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 950);
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const animRing = () => {
      rx.current += (mx.current - rx.current) * 0.14;
      ry.current += (my.current - ry.current) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + "px";
        ringRef.current.style.top  = ry.current + "px";
      }
      raf = requestAnimationFrame(animRing);
    };
    animRing();
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div id="custom-cursor" ref={cursorRef} />
      <div id="cursor-ring"   ref={ringRef}   />
    </>
  );
}
