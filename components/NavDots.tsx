"use client";
import { useEffect, useState } from "react";

export default function NavDots({ sectionIds }: { sectionIds: string[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      sectionIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= window.innerHeight / 2 && r.bottom >= window.innerHeight / 2) setActive(i);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return (
    <div className="fixed right-[18px] top-1/2 -translate-y-1/2 flex flex-col gap-[10px] z-[200] max-md:hidden">
      {sectionIds.map((id, i) => (
        <button
          key={id}
          className={`nav-dot ${i === active ? "active" : ""}`}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
        />
      ))}
    </div>
  );
}
