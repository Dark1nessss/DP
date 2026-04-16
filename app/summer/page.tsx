"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// --- Floating Spice / Dust Embers ---
const SpiceDust = () => {
  const [spices] = useState<Array<{ id: number; left: string; duration: number; size: number; delay: number; xOffset: number }>>(() =>
    Array.from({ length: 40 }).map((_, i) => ({
      id: i, left: `${Math.random() * 100}%`, duration: 8 + Math.random() * 10, size: 2 + Math.random() * 4, delay: Math.random() * 5, xOffset: Math.random() * 50 - 25
    }))
  );

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {spices.map((spice) => (
        <motion.div
          key={spice.id}
          className="absolute bottom-[-5%] rounded-full bg-[#d97757]"
          style={{ left: spice.left, width: spice.size, height: spice.size, boxShadow: `0 0 10px 2px rgba(217, 119, 87, 0.6)`, willChange: "transform, opacity" }}
          animate={{ y: ["110vh", "-10vh"], x: [0, spice.xOffset, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: spice.duration, delay: spice.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
};

export default function Summer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yBottle = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main ref={containerRef} className="relative bg-[#0a192f] text-[#e6eca0] min-h-[200vh]">
      <SpiceDust />
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#d97757]/15 blur-[150px]" animate={{ opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} style={{ willChange: "opacity" }} />
        <motion.div className="absolute bottom-[20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#1e3a8a]/20 blur-[150px]" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity }} style={{ willChange: "opacity" }} />
      </div>

      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.03 }} transition={{ duration: 2 }} className="absolute top-[10%] left-[-5%] text-[50vw] font-serif leading-none pointer-events-none select-none text-[#d97757]">
          صيف
        </motion.div>

        <motion.div style={{ y: yText }} className="z-10 flex flex-col items-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#d97757] tracking-[0.4em] uppercase text-xs md:text-sm mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#d97757]"></span>Tunisian Medina Collection<span className="w-12 h-[1px] bg-[#d97757]"></span>
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-serif text-5xl md:text-8xl mb-6 leading-[1.1]">
            Warmth Captured. <br /><span className="text-[#d97757] italic font-light drop-shadow-lg">Moisture Tamed.</span>
          </motion.h1>
        </motion.div>

        {/* SMOOTH BREATHING TUNISIAN VASE */}
        <motion.div style={{ y: yBottle }} initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1.5 }} className="absolute bottom-[-5%] w-[350px] h-[500px] md:w-[500px] md:h-[550px] z-20 group">
          <div className="w-full h-full relative flex flex-col items-center justify-end pb-20">
            <div className="absolute inset-x-8 bottom-0 top-16 border-[3px] border-[#d97757]/20 rounded-t-full bg-gradient-to-b from-[#1e3a8a]/40 to-transparent flex items-center justify-center backdrop-blur-sm">
               {/* Breathe animation safely on transform */}
               <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} style={{ willChange: "transform" }}>
                  <span className="text-[#e6eca0]/80 font-serif tracking-widest uppercase text-sm mt-32 text-center block">
                    [ Terracotta & <br/> Majolica Vase ]
                  </span>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Summer Content Section */}
      <section className="relative min-h-screen flex items-center justify-center px-10 z-30 pt-20">
        <div className="grid md:grid-cols-2 gap-20 max-w-6xl w-full">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 1 }} className="w-full aspect-[4/5] border border-[#d97757]/40 rounded-t-full p-2 bg-[#d97757]/5">
            <div className="w-full h-full rounded-t-full bg-gradient-to-br from-[#1e3a8a]/40 to-transparent flex items-center justify-center border-dashed border border-[#d97757]/20">
              <span className="text-sm tracking-widest text-[#d97757]/70 uppercase">[ Clay Textures View ]</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 1, delay: 0.2 }} className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-[#e6eca0]">Artisanal Clay & <br/><span className="italic text-[#d97757]">Solar Winds</span></h2>
            <p className="text-lg font-light leading-relaxed text-[#e6eca0]/80 mb-8">
              Inspired by the sun-baked earthen walls of historic Sidi Bou Said, this collection harnesses the natural thermal properties of Terracotta. It effortlessly regulates your home&apos;s microclimate while sitting beautifully as an artifact of North African design.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#d97757]/20">
              <div>
                <h4 className="text-[#d97757] font-serif text-2xl">Eco-Breeze</h4>
                <p className="text-sm font-light text-[#e6eca0]/60 mt-2">Zero-compressor design for natural airflow.</p>
              </div>
              <div>
                <h4 className="text-[#d97757] font-serif text-2xl">Aroma Core</h4>
                <p className="text-sm font-light text-[#e6eca0]/60 mt-2">Built-in essential oil diffusers (Saffron & Amber).</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}