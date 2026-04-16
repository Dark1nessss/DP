"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// --- Snowfall Effect ---
const SnowyBackground = () => {
  const [snow] = useState<Array<{ id: number; left: string; size: number; duration: number; opacity: number; swayAmount: number }>>(() => 
    Array.from({ length: 40 }).map((_, i) => ({
      id: i, left: `${Math.random() * 100}%`, size: 2 + Math.random() * 4, duration: 10 + Math.random() * 15, opacity: 0.2 + Math.random() * 0.6, swayAmount: Math.random() * 30 - 15
    }))
  );
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {snow.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute top-[-5%] bg-white rounded-full"
          style={{ left: flake.left, width: flake.size, height: flake.size, opacity: flake.opacity }}
          animate={{ y: ["0vh", "110vh"], x: [0, flake.swayAmount, 0] }}
          transition={{ duration: flake.duration, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
};

export default function Winter() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yBottle = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <main ref={containerRef} className="relative bg-[#0b131c] text-[#e0f2fe] min-h-[200vh]">
      <SnowyBackground />
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#1e40af]/30 blur-[150px]" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 9, repeat: Infinity }} style={{ willChange: "opacity" }} />
        <motion.div className="absolute bottom-[10%] right-[0%] w-[40vw] h-[40vw] rounded-full bg-[#38bdf8]/10 blur-[150px]" animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 7, repeat: Infinity }} style={{ willChange: "opacity" }} />
      </div>

      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.05 }} transition={{ duration: 2 }} className="absolute top-[20%] right-[5%] text-[30vw] font-serif leading-none pointer-events-none text-[#e0f2fe] select-none">
          Winter
        </motion.div>

        <motion.div style={{ y: yText }} className="z-10 flex flex-col items-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#38bdf8] tracking-[0.4em] uppercase text-xs mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#38bdf8]/50"></span>Black Forest Edition<span className="w-12 h-[1px] bg-[#38bdf8]/50"></span>
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-serif text-5xl md:text-8xl mb-6 leading-[1.1]">
            Silent Cold. <br /><span className="text-[#38bdf8] italic font-light">Endless Comfort.</span>
          </motion.h1>
        </motion.div>

        {/* Sharp, Crystalline Container for Germany */}
        <motion.div style={{ y: yBottle }} initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1.5 }} className="absolute bottom-[-5%] w-[350px] h-[500px] z-20">
          <div className="w-full h-full relative flex flex-col items-center justify-end">
            <div className="absolute inset-x-12 bottom-0 top-10 border border-[#38bdf8]/20 bg-gradient-to-t from-[#1e40af]/50 to-transparent flex items-center justify-center" style={{ clipPath: "polygon(50% 0%, 100% 15%, 100% 100%, 0 100%, 0 15%)" }}>
               <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <span className="text-[#e0f2fe]/70 font-serif tracking-widest uppercase text-xs text-center">[ Wood-Carved & <br/> Frosted Glass ]</span>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative min-h-screen flex flex-col items-center justify-center px-10 z-30">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 1 }} className="max-w-4xl text-center">
          <h2 className="font-serif text-4xl mb-8">German <span className="italic text-[#38bdf8]">Engineering</span> meets Woodworking</h2>
          <p className="text-xl font-light text-[#e0f2fe]/70 leading-relaxed mb-12">
            Wrapped in sustainably sourced dark walnut and etched frosted glass, the Winter collection operates in absolute silence. A masterpiece born from the traditions of the Black Forest.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
             <div className="p-8 border border-[#38bdf8]/20 bg-[#1e40af]/10 rounded-lg"><span className="text-[#38bdf8] block mb-2 font-bold font-serif text-2xl">0°C</span> Defrost Tech</div>
             <div className="p-8 border border-[#38bdf8]/20 bg-[#1e40af]/10 rounded-lg"><span className="text-[#38bdf8] block mb-2 font-bold font-serif text-2xl">Walnut</span> Exterior</div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}