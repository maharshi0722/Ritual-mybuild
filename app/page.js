"use client";

import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/600.css";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Globe,
  FolderGit2,
} from "lucide-react";

/* KEEP YOUR FULL PROJECTS ARRAY HERE */
const projects = [ { id: 1, title: "Ritual Quiz", url: "https://ritual-net.vercel.app/", desc: "Test your knowledge and challenge yourself with the interactive Ritual Quiz.", image: "/1.png" }, { id: 2, title: "Ritual Learning Hub", url: "https://rituallearninghub.vercel.app/", desc: "Your central educational platform for mastering the Ritual ecosystem.", image: "/2.png" }, { id: 3, title: "Ritual Hub", url: "https://ritualhub.vercel.app/", desc: "The core navigator and central dashboard for all things Ritual.", image: "/3.png" }, { id: 4, title: "Ritual Maps", url: "https://ritual-maps.vercel.app/", desc: "Explore and navigate the intricate landscape of the Ritual network.", image: "/4.png" }, { id: 5, title: "Ritual Marketplace", url: "https://ritual-prediction-market.vercel.app/", desc: "A decentralized prediction market powered by Ritual technology.", image: "/5.png" }, { id: 6, title: "Ritual RPS", url: "https://ritual-rps.vercel.app/", desc: "A fun, on-chain Rock, Paper, Scissors experience.", image: "/6.png" }, { id: 7, title: "Ritual Roles Stats", url: "https://ritual-role.vercel.app/", desc: "Track, analyze, and view live statistics for various Ritual roles.", image: "/7.png" }, { id: 8, title: "Ritual Cards", url: "https://ritual-cards-eight.vercel.app/", desc: "Discover and collect unique Ritual ecosystem cards.", image: "/8.png" }, { id: 9, title: "Ritual Certificate", url: "https://ritual-certificate.vercel.app/", desc: "Generate, verify, and showcase your Ritual certificates.", image: "/9.png" }, { id: 10, title: "Ritual Corridor", url: "https://ritual-road.vercel.app/", desc: "Navigate the pathways of the Ritual Teams.", image: "/10.png" }, { id: 11, title: "Ritual Siggy bot", url: "https://siggy-bot-yrtm.vercel.app/", desc: "Siggy awakens forge your digital destiny", image: "/11.png" }, { id: 12, title: "Ritual Infernet", url: "https://ritual-infernet.vercel.app/", desc: "Explore decentralized inference and compute layers powering Ritual.", image: "/12.png" }, { id: 13, title: "Ritual Scheduler", url: "https://ritual-scheduler.vercel.app/", desc: "Automate and manage on-chain tasks with smart scheduling tools.", image: "/13.png" }, { id: 14, title: "Ritual Vtune", url: "https://ritual-vtune.vercel.app/", desc: "Optimize and fine-tune performance across Ritual-based systems.", image: "/14.png" }, { id: 15, title: "Ritual Symphony", url: "https://ritual-symphony.vercel.app/", desc: "Coordinate multiple agents and workflows in a unified orchestration layer.", image: "/15.png" }, { id: 16, title: "Ritual Provers", url: "https://ritual-provers.vercel.app/", desc: "Dive into proof systems and verification mechanisms within Ritual.", image: "/16.png" }, { id: 17, title: "Ritual Resonance", url: "https://ritual-resonance.vercel.app/", desc: "Discover interactions and signal flows across the Ritual ecosystem.", image: "/17.png" }, { id: 18, title: "Ritual Onchain ID", url: "https://ritual-onchain-id.vercel.app/", desc: "Create and manage decentralized identities directly on-chain.", image: "/18.png" }, { id: 19, title: "Ritual Testnet Hub", url: "https://ritual-testnet-hub.vercel.app/", desc: "Access tools, dashboards, and resources for Ritual testnet builders.", image: "/19.png" }, { id: 20, title: "Ritual Recognition", url: "https://ritual-recognition.lovable.app/", desc: "Highlight and recognize contributions within the Ritual community.", image: "/20.png" }, { id: 21, title: "Ritual SocialFi", url: "https://ritual-socialfi.lovable.app/", desc: "A social + finance layer blending community and on-chain incentives.", image: "/21.png" }, { id: 22, title: "Ritual Builder Spotlight", url: "https://ritual-builder-spotlight.vercel.app/", desc: "Showcasing builders, projects, and innovations in the Ritual ecosystem.", image: "/22.png" }, { id: 23, title: "Ritual Rock onchain Game", url: "https://ritual-rock-game.vercel.app/", desc: "A fast-paced Ritual mini-game built for fun and interactive gameplay.", image: "/23.png" }, { id: 24, title: "Ritual Resource Hub", url: "https://ritual-resource-hub.vercel.app/", desc: "A curated hub of resources, tools, and guides for the Ritual ecosystem.", image: "/24.png" }, { id: 25, title: "Ritual Expense App", url: "https://ritual-share-app.lovable.app/", desc: "Share Ritual content, ideas, and ecosystem updates with the community.", image: "/25.png" }, { id: 26, title: "Ritualist Gallery", url: "http://ritualist-fams.vercel.app", desc: "A gallery showcasing Ritual creators, community art, stickers, memes, and ecosystem culture.", image: "/26.png" }, { id: 27, title: "Ritty Gallery", url: "https://rittyfams.netlify.app/", desc: "Explore Ritty-inspired creations, community collections, and Ritual ecosystem visuals.", image: "/27.png" }, { id: 28, title: "Ritual Artist Archive", url: "http://ritual-archives.lovable.app", desc: "A permanent archive preserving Ritual artists, stickers, GIFs, memes, collections, and creator history.", image: "/28.png" }, { id: 29, title: "All Ritual Fams Gallery", url: "https://ritualgallery.netlify.app/", desc: "A community gallery celebrating creations, memories, and contributions from the Ritual family.", image: "/29.png"}
  ,{id: 30,
  title: "Ritual Genesis Card",
  url: "https://ritual-genesis-card.lovable.app/",
  desc: "Pull, explore, and interact with Genesis Cards designed around Ritual culture, identity, and ecosystem experiences.",
  image: "/30.png"
}  ];


export default function Home() {
  return (
    <main
      className="
      min-h-screen
      overflow-hidden
      bg-[#f8f9fc]
      dark:bg-[#0b0b0f]
      text-slate-900
      dark:text-white
      transition-colors
      "
    >

      {/* Background */}

      <div className="fixed inset-0 -z-10">

        <div
          className="
          absolute inset-0
          bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),
          linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
          bg-[size:28px_28px]"
        />

        <div
          className="
          absolute top-0 left-0
          w-[500px]
          h-[500px]
          bg-purple-500/10
          blur-[120px]
          rounded-full"
        />
      </div>

      {/* NAVBAR */}

      <nav
        className="
        sticky top-0 z-50
        bg-white/70
        dark:bg-[#111]/80
        backdrop-blur-xl
        border-b
        border-slate-200
        dark:border-slate-800"
      >

        <div
          className="
          max-w-7xl mx-auto
          px-4 md:px-6 py-4
          flex flex-col sm:flex-row
          justify-between
          items-center
          gap-4"
        >

          <div className="flex gap-3 items-center">

            <img
              src="/logo.png"
              className="w-10 h-10 md:w-12 md:h-12"
            />

            <div>

              <h1 className="font-bold text-lg md:text-xl">
                Ritual MyBuilds
              </h1>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Builder Portfolio
              </p>

            </div>

          </div>

          <div
            className="
            bg-white
            dark:bg-slate-900
            px-4 py-2
            rounded-full
            shadow"
          >

            {projects.length} Projects

          </div>

        </div>

      </nav>


      {/* HERO */}

      <section
        className="
        max-w-6xl
        mx-auto
        text-center
        px-4 md:px-6
        pt-20
        pb-16"
      >

        <div
          className="
          inline-flex
          px-5 py-2
          rounded-full
          border
          bg-white
          dark:bg-slate-900
          dark:border-slate-800"
        >

          Ritual Ecosystem Builder

        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
          mt-8
          font-bold
          leading-tight
          text-4xl
          sm:text-5xl
          md:text-7xl
          lg:text-8xl"
        >

          Building Tools,
          Games &

          <span
            className="
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-purple-600
            to-indigo-600"
          >

            {" "}Ritual Culture

          </span>

        </motion.h1>

        <p
          className="
          mt-8
          text-base
          md:text-lg
          max-w-2xl
          mx-auto
          text-slate-600
          dark:text-slate-300"
        >

          Collection of games,
          galleries, dashboards,
          archives and ecosystem
          applications built for Ritual.

        </p>

      </section>


      {/* SEARCH */}

      <div className="max-w-5xl mx-auto px-4 md:px-6 mb-12">

        <div
          className="
          bg-white
          dark:bg-slate-900
          border
          dark:border-slate-800
          rounded-3xl
          flex
          items-center
          gap-4
          px-5 py-4"
        >

          <Search size={18} />

          <input
            placeholder="Search Ritual builds..."
            className="
            flex-1
            bg-transparent
            outline-none
            text-slate-900
            dark:text-white
            placeholder:text-slate-400"
          />

        </div>

      </div>


      {/* PROJECTS */}

      <div
        className="
        max-w-7xl
        mx-auto
        px-4 md:px-6
        pb-24
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-8"
      >

        {projects.map((project) => (

          <motion.a
            key={project.id}
            href={project.url}
            whileHover={{ y: -8 }}
            className="
            bg-white/80
            dark:bg-slate-900
            dark:border
            dark:border-slate-800
            rounded-3xl
            overflow-hidden
            hover:shadow-xl
            transition"
          >

            <img
              src={project.image}
              className="
              w-full
              h-44
              sm:h-52
              md:h-56
              object-cover
              hover:scale-105
              duration-500"
            />

            <div className="p-6">

              <div className="flex justify-between">

                <span className="text-xs text-slate-400">
                  #{project.id}
                </span>

                {project.id >= 26 && (

                  <span
                    className="
                    text-xs
                    px-3 py-1
                    rounded-full
                    bg-purple-100
                    text-purple-700"
                  >

                    NEW

                  </span>

                )}

              </div>

              <h2
                className="
                mt-3
                text-2xl
                md:text-3xl
                font-bold"
              >

                {project.title}

              </h2>

              <p
                className="
                mt-4
                text-sm
                leading-7
                text-slate-600
                dark:text-slate-300"
              >

                {project.desc}

              </p>

              <div
                className="
                mt-8
                flex
                justify-between
                items-center"
              >

                <div className="flex gap-2 text-slate-500">

                  <Globe size={18} />

                  Visit

                </div>

                <ArrowRight className="text-purple-600" />

              </div>

            </div>

          </motion.a>

        ))}

      </div>


      {/* FOOTER */}

      <footer
        className="
        border-t
        dark:border-slate-800
        py-12"
      >

        <div
          className="
          max-w-7xl
          mx-auto
          px-4 md:px-6
          flex
          flex-col
          md:flex-row
          justify-between
          gap-6"
        >

          <div>

            <h1 className="text-3xl font-bold">

              Maharshi

            </h1>

            <p className="text-slate-500 dark:text-slate-400">

              Building Ritual ecosystem tools.

            </p>

          </div>

          <div
            className="
            flex gap-2
            items-center
            text-slate-500"
          >

            <FolderGit2 size={18} />

            {projects.length} Ritual Projects

          </div>

        </div>

      </footer>

    </main>
  );
}