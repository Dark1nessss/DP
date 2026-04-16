"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// --- Drifting Leaves Effect (Performance Optimized) ---
const DriftingLeaves = () => {
  const [leaves] = useState<Array<{ id: number; left: string; size: number; duration: number }>>(() =>
    Array.from({ length: 20 }).map((_, i) => ({
      id: i, left: `${Math.random() * 100}%`, size: 6 + Math.random() * 8, duration: 15 + Math.random() * 20
    }))
  );
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute top-[-5%] bg-[#d4af37]/40 rounded-tl-full rounded-br-full"
          style={{ left: leaf.left, width: leaf.size, height: leaf.size }}
          animate={{ y: ["0vh", "110vh"], x: [0, 50, -50, 0], rotate: [0, 180, 360] }}
          transition={{ duration: leaf.duration, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
};

export default function Autumn() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yBottle = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main ref={containerRef} className="relative bg-[#2e1823] text-[#f4ecd8] min-h-[200vh]">
      <DriftingLeaves />
      {/* Background Glows (No scale animations to prevent lag) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#d4af37]/10 blur-[150px]" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 8, repeat: Infinity }} style={{ willChange: "opacity" }} />
        <motion.div className="absolute bottom-[20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#1b3b5a]/30 blur-[150px]" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity }} style={{ willChange: "opacity" }} />
      </div>

      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.04 }} transition={{ duration: 2 }} className="absolute top-[10%] text-[40vw] font-serif leading-none pointer-events-none text-[#d4af37] select-none">
          Outono
        </motion.div>

        <motion.div style={{ y: yText }} className="z-10 flex flex-col items-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#d4af37] tracking-[0.4em] uppercase text-xs mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#d4af37]"></span>The Douro Collection<span className="w-12 h-[1px] bg-[#d4af37]"></span>
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-serif text-5xl md:text-8xl mb-6 leading-[1.1]">
            Golden Harvest. <br /><span className="text-[#d4af37] italic font-light drop-shadow-md">Pure Air.</span>
          </motion.h1>
        </motion.div>

        {/* Squircle Bottle Pedestal for Portugal (Evoking Azulejo Tiles) */}
        <motion.div style={{ y: yBottle }} initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1.5 }} className="absolute bottom-[-10%] w-[350px] h-[500px] z-20">
          <div className="w-full h-full relative flex flex-col items-center justify-end pb-20">
            <div className="absolute inset-x-10 bottom-0 top-20 border-[2px] border-[#d4af37]/30 rounded-3xl bg-gradient-to-t from-[#1b3b5a]/40 to-transparent flex items-center justify-center backdrop-blur-sm">
               <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                  <span className="text-[#f4ecd8]/80 font-serif tracking-widest uppercase text-xs">[ Azulejo & Cork Vessel ]</span>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center px-10 z-30">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl w-full">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 1 }} className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl mb-6">Heritage <span className="italic text-[#d4af37]">Crafted</span></h2>
            <p className="text-lg font-light text-[#f4ecd8]/70 mb-6 leading-relaxed">
              Sheltered in sustainable cork from the Alentejo region and accented with hand-painted ceramic tiles, the Autumn collection turns moisture reduction into a piece of Iberian history.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 1 }} className="w-full aspect-square border border-[#d4af37]/20 rounded-3xl flex flex-col items-center justify-center bg-[#1b3b5a]/20">
            <span className="text-sm tracking-widest text-[#d4af37]/50 uppercase">[ Cork Detail Image ]</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}