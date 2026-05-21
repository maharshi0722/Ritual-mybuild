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
  Sparkles,
  FolderGit2
} from "lucide-react";

/* KEEP YOUR FULL PROJECTS ARRAY HERE */
const projects = [ { id: 1, title: "Ritual Quiz", url: "https://ritual-net.vercel.app/", desc: "Test your knowledge and challenge yourself with the interactive Ritual Quiz.", image: "/1.png" }, { id: 2, title: "Ritual Learning Hub", url: "https://rituallearninghub.vercel.app/", desc: "Your central educational platform for mastering the Ritual ecosystem.", image: "/2.png" }, { id: 3, title: "Ritual Hub", url: "https://ritualhub.vercel.app/", desc: "The core navigator and central dashboard for all things Ritual.", image: "/3.png" }, { id: 4, title: "Ritual Maps", url: "https://ritual-maps.vercel.app/", desc: "Explore and navigate the intricate landscape of the Ritual network.", image: "/4.png" }, { id: 5, title: "Ritual Marketplace", url: "https://ritual-prediction-market.vercel.app/", desc: "A decentralized prediction market powered by Ritual technology.", image: "/5.png" }, { id: 6, title: "Ritual RPS", url: "https://ritual-rps.vercel.app/", desc: "A fun, on-chain Rock, Paper, Scissors experience.", image: "/6.png" }, { id: 7, title: "Ritual Roles Stats", url: "https://ritual-role.vercel.app/", desc: "Track, analyze, and view live statistics for various Ritual roles.", image: "/7.png" }, { id: 8, title: "Ritual Cards", url: "https://ritual-cards-eight.vercel.app/", desc: "Discover and collect unique Ritual ecosystem cards.", image: "/8.png" }, { id: 9, title: "Ritual Certificate", url: "https://ritual-certificate.vercel.app/", desc: "Generate, verify, and showcase your Ritual certificates.", image: "/9.png" }, { id: 10, title: "Ritual Corridor", url: "https://ritual-road.vercel.app/", desc: "Navigate the pathways of the Ritual Teams.", image: "/10.png" }, { id: 11, title: "Ritual Siggy bot", url: "https://siggy-bot-yrtm.vercel.app/", desc: "Siggy awakens forge your digital destiny", image: "/11.png" }, { id: 12, title: "Ritual Infernet", url: "https://ritual-infernet.vercel.app/", desc: "Explore decentralized inference and compute layers powering Ritual.", image: "/12.png" }, { id: 13, title: "Ritual Scheduler", url: "https://ritual-scheduler.vercel.app/", desc: "Automate and manage on-chain tasks with smart scheduling tools.", image: "/13.png" }, { id: 14, title: "Ritual Vtune", url: "https://ritual-vtune.vercel.app/", desc: "Optimize and fine-tune performance across Ritual-based systems.", image: "/14.png" }, { id: 15, title: "Ritual Symphony", url: "https://ritual-symphony.vercel.app/", desc: "Coordinate multiple agents and workflows in a unified orchestration layer.", image: "/15.png" }, { id: 16, title: "Ritual Provers", url: "https://ritual-provers.vercel.app/", desc: "Dive into proof systems and verification mechanisms within Ritual.", image: "/16.png" }, { id: 17, title: "Ritual Resonance", url: "https://ritual-resonance.vercel.app/", desc: "Discover interactions and signal flows across the Ritual ecosystem.", image: "/17.png" }, { id: 18, title: "Ritual Onchain ID", url: "https://ritual-onchain-id.vercel.app/", desc: "Create and manage decentralized identities directly on-chain.", image: "/18.png" }, { id: 19, title: "Ritual Testnet Hub", url: "https://ritual-testnet-hub.vercel.app/", desc: "Access tools, dashboards, and resources for Ritual testnet builders.", image: "/19.png" }, { id: 20, title: "Ritual Recognition", url: "https://ritual-recognition.lovable.app/", desc: "Highlight and recognize contributions within the Ritual community.", image: "/20.png" }, { id: 21, title: "Ritual SocialFi", url: "https://ritual-socialfi.lovable.app/", desc: "A social + finance layer blending community and on-chain incentives.", image: "/21.png" }, { id: 22, title: "Ritual Builder Spotlight", url: "https://ritual-builder-spotlight.vercel.app/", desc: "Showcasing builders, projects, and innovations in the Ritual ecosystem.", image: "/22.png" }, { id: 23, title: "Ritual Rock onchain Game", url: "https://ritual-rock-game.vercel.app/", desc: "A fast-paced Ritual mini-game built for fun and interactive gameplay.", image: "/23.png" }, { id: 24, title: "Ritual Resource Hub", url: "https://ritual-resource-hub.vercel.app/", desc: "A curated hub of resources, tools, and guides for the Ritual ecosystem.", image: "/24.png" }, { id: 25, title: "Ritual Expense App", url: "https://ritual-share-app.lovable.app/", desc: "Share Ritual content, ideas, and ecosystem updates with the community.", image: "/25.png" }, { id: 26, title: "Ritualist Gallery", url: "http://ritualist-fams.vercel.app", desc: "A gallery showcasing Ritual creators, community art, stickers, memes, and ecosystem culture.", image: "/26.png" }, { id: 27, title: "Ritty Gallery", url: "https://rittyfams.netlify.app/", desc: "Explore Ritty-inspired creations, community collections, and Ritual ecosystem visuals.", image: "/27.png" }, { id: 28, title: "Ritual Artist Archive", url: "http://ritual-archives.lovable.app", desc: "A permanent archive preserving Ritual artists, stickers, GIFs, memes, collections, and creator history.", image: "/28.png" }, { id: 29, title: "All Ritual Fams Gallery", url: "https://rittyfams.netlify.app/", desc: "A community gallery celebrating creations, memories, and contributions from the Ritual family.", image: "/29.png" } ];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] overflow-hidden font-['Inter']">

      {/* BG */}

      <div className="fixed inset-0 -z-10">

        <div className="
        absolute inset-0
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),
        linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
        bg-[size:28px_28px]
        "/>

        <div className="
        absolute top-0 left-0
        w-[500px]
        h-[500px]
        bg-purple-500/10
        blur-[120px]
        rounded-full"/>

      </div>



      {/* NAVBAR */}

      <nav className="
      sticky top-0
      z-50
      bg-white/70
      backdrop-blur-xl
      border-b">

        <div className="
        max-w-7xl mx-auto
        px-6 py-5
        flex justify-between">

          <div className="flex gap-3 items-center">

            <img
            src="/logo.png"
            className="w-11 h-11"/>

            <div>

              <h1 className="
              font-['Space_Grotesk']
              text-xl
              font-bold">

                Ritual MyBuilds

              </h1>

              <p className="
              text-xs text-slate-500">

                Builder Portfolio

              </p>

            </div>

          </div>



          <div className="
          bg-white
          px-4 py-2
          rounded-full
          shadow
          font-['JetBrains_Mono']">

            {projects.length} Projects

          </div>

        </div>

      </nav>





      {/* HERO */}

      <section className="
      max-w-6xl
      mx-auto
      text-center
      px-6
      pt-24
      pb-20">

        <div className="
        inline-flex
        bg-white
        px-5 py-2
        rounded-full
        border">

          Ritual Ecosystem Builder

        </div>


        <motion.h1

        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}

        className="
        font-['Space_Grotesk']
        text-6xl
        md:text-8xl
        font-bold
        tracking-[-0.06em]
        leading-[0.95]
        mt-8">

          Building Tools,
          Games &

          <span className="
          text-transparent
          bg-clip-text
          bg-gradient-to-r
          from-purple-600
          to-indigo-600">

            {" "}Ritual Culture

          </span>

        </motion.h1>



        <p className="
        mt-8
        text-lg
        text-slate-500
        max-w-2xl
        mx-auto
        leading-8">

          Collection of games,
          galleries, dashboards,
          archives and ecosystem
          applications built for Ritual.

        </p>




        {/* STATS */}

        <div className="
        mt-14
        flex
        flex-wrap
        justify-center
        gap-5">

          {((s)=>(

            <div
            key={s[1]}
            className="
            bg-white
            rounded-3xl
            px-8 py-6
            shadow">

              <h2 className="
              font-['JetBrains_Mono']
              text-3xl
              font-bold">

                {s[0]}

              </h2>

              <p className="
              text-slate-500
              mt-1">

                {s[1]}

              </p>

            </div>

          ))}

        </div>

      </section>





      {/* SEARCH */}

      <div className="
      max-w-5xl
      mx-auto
      px-6
      mb-14">

        <div className="
        bg-white
        rounded-3xl
        flex
        items-center
        gap-4
        px-6 py-5
        shadow">

          <Search size={18}/>

          <input
          placeholder="Search Ritual builds..."
          className="
          flex-1
          outline-none
          bg-transparent"/>

        </div>

      </div>





      {/* PROJECTS */}

      <div className="
      max-w-7xl
      mx-auto
      px-6
      pb-32

      grid
      md:grid-cols-2
      lg:grid-cols-3
      gap-8">

        {projects.map(project=>(

          <motion.a

          whileHover={{y:-8}}

          href={project.url}
          key={project.id}

          className="
          bg-white/80
          rounded-[32px]
          overflow-hidden
          backdrop-blur-xl
          hover:shadow-2xl
          transition">

            <img

            src={project.image}

            className="
            h-56
            w-full
            object-cover
            hover:scale-110
            duration-700"/>



            <div className="p-7">

              <div className="
              flex
              justify-between">

                <span className="
                font-['JetBrains_Mono']
                text-xs
                text-slate-400">

                  #{project.id}

                </span>

                {project.id >=26 && (

                  <span className="
                  text-xs
                  bg-purple-100
                  px-3 py-1
                  rounded-full
                  text-purple-700">

                    NEW

                  </span>

                )}

              </div>



              <h2 className="
              font-['Space_Grotesk']
              text-3xl
              font-semibold
              mt-3
              tracking-tight">

                {project.title}

              </h2>



              <p className="
              mt-4
              text-[15px]
              leading-7
              text-slate-500">

                {project.desc}

              </p>



              <div className="
              mt-8
              flex
              justify-between
              items-center">

                <div className="
                flex gap-2
                text-slate-500">

                  <Globe size={18}/>
                  Visit

                </div>


                <ArrowRight
                className="
                text-purple-600"/>

              </div>

            </div>

          </motion.a>

        ))}

      </div>





      {/* FOOTER */}

      <footer className="
      border-t
      py-16">

        <div className="
        max-w-7xl
        mx-auto
        px-6
        flex
        justify-between
        flex-wrap">

          <div>

            <h1 className="
            font-['Space_Grotesk']
            text-3xl
            font-semibold">

              Maharshi

            </h1>

            <p className="
            text-slate-500">

              Building Ritual ecosystem tools.

            </p>

          </div>



          <div className="
          flex
          gap-3
          items-center
          font-['JetBrains_Mono']
          text-slate-500">

            <FolderGit2 size={18}/>

            {projects.length} Ritual Projects

          </div>

        </div>

      </footer>

    </main>
  );
}