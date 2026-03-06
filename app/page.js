"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Code2, Globe } from "lucide-react";

const projects = [
  { id: 1, title: "Ritual Quiz", url: "https://ritual-net.vercel.app/", desc: "Test your knowledge and challenge yourself with the interactive Ritual Quiz.", image: "/1.png" },
  { id: 2, title: "Ritual Learning Hub", url: "https://rituallearninghub.vercel.app/", desc: "Your central educational platform for mastering the Ritual ecosystem.", image: "/2.png" },
  { id: 3, title: "Ritual Hub", url: "https://ritualhub.vercel.app/", desc: "The core navigator and central dashboard for all things Ritual.", image: "/3.png" },
  { id: 4, title: "Ritual Maps", url: "https://ritual-maps.vercel.app/", desc: "Explore and navigate the intricate landscape of the Ritual network.", image: "/4.png" },
  { id: 5, title: "Ritual Marketplace", url: "https://ritual-prediction-market.vercel.app/", desc: "A decentralized prediction market powered by Ritual technology.", image: "/5.png" },
  { id: 6, title: "Ritual RPS", url: "https://ritual-rps.vercel.app/", desc: "A fun, on-chain Rock, Paper, Scissors experience.", image: "/6.png" },
  { id: 7, title: "Ritual Roles Stats", url: "https://ritual-role.vercel.app/", desc: "Track, analyze, and view live statistics for various Ritual roles.", image: "/7.png" },
  { id: 8, title: "Ritual Cards", url: "https://ritual-cards-eight.vercel.app/", desc: "Discover and collect unique Ritual ecosystem cards.", image: "/8.png" },
  { id: 9, title: "Ritual Certificate", url: "https://ritual-certificate.vercel.app/", desc: "Generate, verify, and showcase your official Ritual certificates.", image: "/9.png" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900 selection:bg-[#5b3cff]/20 relative overflow-hidden">
      
      {/* --- BANGER BACKGROUND --- */}
      <div className="fixed inset-0 z-[-1] bg-[#f8f9fc]">
        {/* Subtle Developer Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Animated Glowing Mesh Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-[#5b3cff]/20 to-purple-400/20 blur-[100px] animate-[pulse_8s_ease-in-out_infinite] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-indigo-400/20 to-blue-400/20 blur-[100px] animate-[pulse_10s_ease-in-out_infinite_reverse] mix-blend-multiply" />
        <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-[#5b3cff]/10 blur-[80px] animate-[ping_12s_ease-in-out_infinite] mix-blend-multiply" />
      </div>

      {/* --- HERO SECTION --- */}
      {/* 
        FIXED: Changed pt-20 sm:pt-28 to pt-10 sm:pt-14 
        This drastically cuts down the huge white space at the top of the screen!
      */}
      <div className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Logo Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="mb-4" /* <-- Reduced from mb-6 */
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white/70 backdrop-blur-xl border border-white/80 shadow-xl shadow-[#5b3cff]/10 flex items-center justify-center overflow-hidden group hover:scale-105 transition-transform duration-300 ">
              <img 
                src="/logo.png" 
                alt="Ritual Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop";
                }}
              />
            </div>
          </motion.div>

          {/* Pill */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 text-[#5b3cff] mb-4 shadow-sm shadow-[#5b3cff]/5" /* <-- Tightened */
          >
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">Ritual Net</span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5b3cff] via-indigo-500 to-purple-600 drop-shadow-sm px-2"
          >
            My Build Collection
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base md:text-lg text-slate-600/90 max-w-2xl mx-auto font-medium leading-relaxed px-4"
          >
            A curated portfolio of high-performance applications built by <span className="text-[#5b3cff] font-bold bg-[#5b3cff]/10 px-2 py-0.5 rounded-md whitespace-nowrap">Maharshi</span>.
          </motion.p>
        </div>
      </div>

      {/* --- PROJECTS GRID --- */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pb-20 sm:pb-32 z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
        >
          {projects.map((project) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-6 sm:p-7 lg:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(91,60,255,0.12)] hover:border-[#5b3cff]/30 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Top Header Row */}
              <div className="relative flex items-center justify-between mb-6 sm:mb-8 z-10">
                <div className=" bg-[#f0f0ff] text-[#5b3cff] shadow-sm">
                
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#5b3cff] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-md shadow-[#5b3cff]/30">
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
              
              {/* Main Content & Side Image */}
              <div className="flex gap-4 sm:gap-5 flex-grow z-10">
                {/* Text Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#5b3cff] mb-2 sm:mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] text-slate-600 font-medium leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                
                {/* Little Aside Image */}
                <div className="w-20 h-20 sm:w-[88px] sm:h-[88px] shrink-0 rounded-xl sm:rounded-2xl overflow-hidden bg-white border-2 border-white shadow-md group-hover:shadow-xl transition-shadow duration-500 relative">
                  <div className="absolute inset-0 bg-[#5b3cff]/5 mix-blend-overlay z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop";
                    }}
                  />
                </div>
              </div>

              {/* Bottom Footer Link */}
              <div className="relative mt-6 sm:mt-8 pt-5 border-t border-slate-200/60 flex items-center gap-2 text-[14px] sm:text-[15px] font-bold text-[#5b3cff] z-10 group-hover:translate-x-1 transition-transform duration-300">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Visit Application</span>
              </div>

              {/* Subtle hover gradient overlay on the card itself */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 rounded-[2rem] sm:rounded-[2.5rem]" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </main>
  );
}