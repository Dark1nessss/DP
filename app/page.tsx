"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// --- Custom SVG Sakura Petals ---
const SpringBlossoms = () => {
  const [petals] = useState<Array<{ id: number; left: string; duration: number; delay: number; size: number }>>(() =>
    Array.from({ length: 25 }).map((_, i) => ({
      id: i, left: `${Math.random() * 100}%`, duration: 12 + Math.random() * 15, delay: Math.random() * 5, size: 10 + Math.random() * 15
    }))
  );

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute top-[-5%]"
          style={{ left: petal.left, width: petal.size, height: petal.size }}
          animate={{ y: ["0vh", "110vh"], x: [0, 40, -40, 0], rotate: [0, 180, 360] }}
          transition={{ duration: petal.duration, delay: petal.delay, repeat: Infinity, ease: "linear" }}
        >
          {/* Detailed Sakura SVG */}
          <svg viewBox="0 0 100 100" fill="#f9aeb7" className="w-full h-full drop-shadow-md opacity-80">
            <path d="M50 0 C60 30, 90 20, 100 40 C80 50, 90 80, 50 100 C10 80, 20 50, 0 40 C10 20, 40 30, 50 0 Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yBottle = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <main ref={containerRef} className="relative bg-[#0b2e22] text-[#e6eca0] min-h-[200vh]">
      <SpringBlossoms />
      
      {/* Background Glows (Opacity only, no scale to prevent lag) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#4db394]/20 blur-[130px]" animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity }} style={{ willChange: "opacity" }} />
        <motion.div className="absolute bottom-[10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#f9aeb7]/15 blur-[150px]" animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 10, repeat: Infinity }} style={{ willChange: "opacity" }} />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.03 }} transition={{ duration: 2, delay: 1 }} className="absolute top-1/4 right-[0%] text-[40vw] font-serif leading-none pointer-events-none text-[#e6eca0] select-none">
          春
        </motion.div>

        <motion.div style={{ y: yText }} className="z-10 flex flex-col items-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#f9aeb7] tracking-[0.4em] uppercase text-xs md:text-sm mb-6 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#f9aeb7]"></span>Edo Period Collection<span className="w-12 h-[1px] bg-[#f9aeb7]"></span>
          </motion.span>
          
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-serif text-5xl md:text-8xl mb-6 leading-[1.1]">
            Breathe Elegance. <br /><span className="text-[#f9aeb7] italic font-light drop-shadow-lg">Embrace Tradition.</span>
          </motion.h1>
          
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="max-w-xl text-[#4db394] font-light leading-relaxed mb-12">
            A sanctuary of pure air enclosed in the artistry of 18th-century Japan.
          </motion.p>
        </motion.div>

        {/* PERFECTLY SMOOTH BREATHING BOTTLE */}
        <motion.div style={{ y: yBottle }} initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 1.8, type: "spring" }} className="absolute bottom-0 w-[350px] h-[450px] md:w-[450px] md:h-[550px] z-20 group">
          <div className="w-full h-full relative flex flex-col items-center justify-end pb-12">
            {/* The base shadow */}
            <div className="w-2/3 h-[2px] bg-gradient-to-r from-transparent via-[#f9aeb7]/80 to-transparent shadow-[0_0_20px_rgba(249,174,183,1)] mb-4"></div>
            
            <div className="absolute inset-0 border-x border-t border-[#f9aeb7]/20 rounded-t-full shadow-[inset_0_40px_100px_rgba(249,174,183,0.05)] bg-gradient-to-t from-[#0b2e22] to-transparent flex items-center justify-center">
              {/* Smooth breathing container */}
              <motion.div 
                 animate={{ y: [0, -15, 0] }} 
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
                 style={{ willChange: "transform" }}
              >
                  <span className="text-[#e6eca0]/60 font-serif tracking-widest uppercase text-sm mt-20">
                    [ 3D Kimono Porcelain Bottle ]
                  </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Spring Detailed Content Section */}
      <section className="relative min-h-screen flex items-center justify-center px-10 z-30 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-20 max-w-6xl w-full items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 1 }} className="flex flex-col justify-center">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 text-[#e6eca0]">The <span className="italic text-[#f9aeb7]">Sakura</span> Whisper</h2>
            <p className="text-lg font-light leading-relaxed text-[#e6eca0]/80 mb-8">
              Crafted in the spirit of the Edo period (1603-1867), our Spring collection weaves the visual poetry of silk kimonos into hand-painted porcelain. Beneath the delicate cherry blossom motifs lies state-of-the-art moisture extraction technology.
            </p>
            <div className="space-y-6">
               <div className="flex flex-col border-l hover:border-[#f9aeb7] border-[#4db394]/30 pl-4 transition-colors">
                  <span className="block text-[#f9aeb7] font-serif italic text-xl mb-1">Whisper-Quiet 28dB</span>
                  <span className="text-sm font-light text-[#e6eca0]/60 uppercase tracking-widest">Silent as falling petals</span>
               </div>
               <div className="flex flex-col border-l hover:border-[#f9aeb7] border-[#4db394]/30 pl-4 transition-colors">
                  <span className="block text-[#f9aeb7] font-serif italic text-xl mb-1">Hand-Glazed Ceramic</span>
                  <span className="text-sm font-light text-[#e6eca0]/60 uppercase tracking-widest">Kiln-fired durability</span>
               </div>
               <div className="flex flex-col border-l hover:border-[#f9aeb7] border-[#4db394]/30 pl-4 transition-colors">
                  <span className="block text-[#f9aeb7] font-serif italic text-xl mb-1">4L Moisture Capacity</span>
                  <span className="text-sm font-light text-[#e6eca0]/60 uppercase tracking-widest">Ideal for wide living spaces</span>
               </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 1 }} className="w-full aspect-[3/4] border-[1px] border-[#f9aeb7]/30 rounded-t-full bg-gradient-to-bl from-[#4db394]/10 to-transparent flex items-center justify-center p-4">
             <div className="w-full h-full border border-[#f9aeb7]/10 rounded-t-full flex items-center justify-center border-dashed">
                <span className="text-[#f9aeb7]/40 tracking-widest text-xs uppercase">[ Material View ]</span>
             </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}