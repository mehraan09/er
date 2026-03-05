# 💕 Birthday Surprise App — Next.js 14

A cinematic romantic birthday surprise website built with **Next.js 14**, **Framer Motion**, **TypeScript**, and **TailwindCSS**.

Made with ❤️ by Akash.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

---

## ✏️ Personalise (2 minutes)

Open **`config.ts`** in the root and edit the `CONFIG` object:

```ts
export const CONFIG = {
  password:   "baby",           // ← nickname she types to unlock
  herName:    "Sophia",         // ← her name (replace [INSERT NAME])
  yourName:   "Akash",          // ← your name (footer + letter sign-off)
  startDate:  "2024-02-14",     // ← anniversary date YYYY-MM-DD

  timeline: [ ... ],            // ← your real milestones
  memories: [ ... ],            // ← add real photos (see below)
  reasons:  [ ... ],            // ← your personal "Why I Love You" cards
  secretMessage: `...`,         // ← the secret modal message
};
```

---

## 🖼️ Adding Real Photos

1. Drop your photos into `public/images/` (e.g. `photo1.jpg`)
2. In `CONFIG.memories`, add `imageSrc: "/images/photo1.jpg"`:

```ts
memories: [
  {
    emoji: "📸",
    caption: "The day you made my life better ❤️",
    date: "February 2024",
    mood: "joyful",
    imageSrc: "/images/photo1.jpg",   // ← add this
  },
  ...
]
```

**Available moods** (controls the colour tag):
`joyful` · `adventurous` · `dreamy` · `celebratory` · `cozy` · `romantic` · `intimate` · `together`

---

## 🎵 Music

The app generates romantic ambient music using the **Web Audio API** — no files needed.

- Music **starts muted** by default (the `🔇` button in the bottom-right)
- She taps it to unmute → `🎵` + floating music notes appear
- The chord progression: **Cmaj7 → Am7 → Fmaj7 → G7sus4** (endlessly looping)

---

## 📋 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | Password Gate | Animated unlock with floating petals |
| 2 | Envelope | 3D Framer Motion flip animation |
| 3 | Birthday Message | Gradient heading + typewriter |
| 4 | **Memories Gallery** | Masonry polaroid grid, mood tags, hover overlays, lightbox |
| 5 | Timeline | Scroll-animated milestone cards |
| 6 | Name Reveal | Letter-by-letter with sparkles |
| 7 | Love Letter | Handwritten paper with stacked shadow |
| 8 | Why I Love You | Animated hover cards |
| 9 | **Relationship Counter** | Live years/months + ticking days/hours/mins/secs + milestone badge |
| 10 | Wish Stars | Dark starfield + interactive wish bubbles |
| 11 | Final Surprise | Confetti explosion + "I Love You" glow |
| + | Secret Modal | 💌 floating button → glowing modal |
| + | Music Player | 🎵 Web Audio ambient romance |
| + | Heart Cursor | Custom cursor + trailing hearts |
| + | **Footer** | "Made with ❤️ by Akash" |

---

## 🏗️ File Structure

```
birthday-surprise/
├── config.ts                    ← ALL customisation here
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 ← main orchestrator
│   └── globals.css              ← all animations & tokens
├── components/
│   ├── HeartCursor.tsx
│   ├── MusicPlayer.tsx          ← Web Audio engine
│   ├── ProgressBar.tsx
│   ├── NavDots.tsx
│   ├── PasswordGate.tsx
│   ├── Envelope.tsx
│   ├── BirthdayMessage.tsx
│   ├── MemoriesGallery.tsx      ← masonry + lightbox
│   ├── Timeline.tsx
│   ├── NameReveal.tsx
│   ├── LoveLetter.tsx
│   ├── Reasons.tsx
│   ├── RelationshipCounter.tsx  ← live counter + milestones
│   ├── WishStars.tsx
│   ├── SecretMessage.tsx
│   ├── FinalSurprise.tsx
│   ├── FloatingHearts.tsx
│   └── Footer.tsx               ← "Made with ❤️ by Akash"
└── public/
    ├── images/                  ← drop photos here
    └── music/                   ← optional: birthday.mp3
```

---

## 🚢 Deploy

```bash
# Vercel (recommended — free)
npm i -g vercel
vercel

# Or build for any host
npm run build
npm start
```

---

Made with ❤️ by **Akash**
