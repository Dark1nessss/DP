"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { path: "/", id: "spring", label: "Spring", color: "#f9aeb7" },
  { path: "/summer", id: "summer", label: "Summer", color: "#d97757" },
  { path: "/autumn", id: "autumn", label: "Autumn", color: "#d4af37" },
  { path: "/winter", id: "winter", label: "Winter", color: "#aee2ff" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 w-full z-50 flex justify-between items-center p-8 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"
    >
      <div className="text-2xl font-serif font-bold tracking-widest pointer-events-auto text-white drop-shadow-lg">
        <Link href="/">AURA & ART</Link>
      </div>

      <ul className="relative flex space-x-2 text-xs md:text-sm uppercase tracking-widest backdrop-blur-md bg-white/5 p-1.5 rounded-full border border-white/10 pointer-events-auto shadow-2xl">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link key={link.id} href={link.path} scroll={false}>
              <li className="relative px-6 py-2 cursor-pointer transition-colors z-10 font-medium">
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: link.color, opacity: 0.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-20" style={{ color: isActive ? link.color : "rgba(255,255,255,0.6)" }}>
                  {link.label}
                </span>
              </li>
            </Link>
          );
        })}
      </ul>
    </motion.nav>
  );
}