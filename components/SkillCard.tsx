"use client";

import { motion } from "framer-motion";

import {
  FaPython,
  FaJava,
  FaJs,
  FaAws,
  FaDocker,
  FaLinux,
  FaGitAlt,
  FaReact,
  FaAngular,
  FaTerminal,
  FaRobot,
} from "react-icons/fa";

import {
  SiPostgresql,
  SiRedis,
  SiApachekafka,
  SiPytorch,
  SiJenkins,
  SiApacheairflow,
  SiFastapi,
  SiGraphql,
  SiSnowflake,
  SiTypescript,
  SiTailwindcss,
  SiGithubactions,
} from "react-icons/si";


// =====================================================
// COLORFUL TECHNOLOGY ICONS
// =====================================================

const icons: any = {
  Python: <FaPython className="text-yellow-400" />,
  Java: <FaJava className="text-red-500" />,
  JavaScript: <FaJs className="text-yellow-300" />,
  Bash: <FaTerminal className="text-green-400" />,

  FastAPI: <SiFastapi className="text-green-400" />,
  GraphQL: <SiGraphql className="text-pink-500" />,
  "REST APIs": <FaTerminal className="text-blue-400" />,
  Microservices: <FaTerminal className="text-purple-400" />,

  PostgreSQL: <SiPostgresql className="text-blue-400" />,
  Redis: <SiRedis className="text-red-400" />,
  "Apache Kafka": <SiApachekafka className="text-white" />,
  Snowflake: <SiSnowflake className="text-cyan-300" />,
  Airflow: <SiApacheairflow className="text-red-500" />,

  AWS: <FaAws className="text-orange-400" />,
  Docker: <FaDocker className="text-blue-400" />,
  Jenkins: <SiJenkins className="text-gray-300" />,
  Linux: <FaLinux className="text-yellow-500" />,
  "CI/CD": <SiGithubactions className="text-blue-500" />,

  PyTorch: <SiPytorch className="text-orange-500" />,
  "GPT-4o": <FaRobot className="text-purple-400" />,
  LangChain: <FaRobot className="text-green-400" />,
  RAG: <FaRobot className="text-pink-400" />,
  "Prompt Engineering": <FaRobot className="text-indigo-400" />,

  React: <FaReact className="text-cyan-400" />,
  Angular: <FaAngular className="text-red-500" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Tailwind: <SiTailwindcss className="text-cyan-300" />,

  Git: <FaGitAlt className="text-orange-500" />,
  "GitHub Copilot": <FaRobot className="text-green-300" />,
  Claude: <FaRobot className="text-purple-300" />,
};


// =====================================================
// SKILL CARD
// =====================================================

export default function SkillCard({
  title,
  skills,
}: {
  title: string;
  icon: string;
  skills: {
    name: string;
    icon: string;
  }[];
}) {

  return (

    <motion.div
      className="
        relative
        group
        w-full
        rounded-2xl
      "
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
    >

      {/* ================================================= */}
      {/* LARGE GLOW BEHIND CARD */}
      {/* ================================================= */}

      <div
        className="
          absolute
          -inset-5
          rounded-[28px]
          bg-blue-500
          opacity-0
          blur-3xl
          transition-opacity
          duration-500
          group-hover:opacity-40
          pointer-events-none
        "
      />


      {/* ================================================= */}
      {/* SECOND GLOW */}
      {/* ================================================= */}

      <div
        className="
          absolute
          -inset-2
          rounded-[24px]
          bg-purple-500
          opacity-0
          blur-xl
          transition-opacity
          duration-500
          group-hover:opacity-30
          pointer-events-none
        "
      />


      {/* ================================================= */}
      {/* ACTUAL CARD */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          rounded-2xl
          border
          border-white/10
          bg-[#111111]/90
          p-6
          backdrop-blur-md

          transition-all
          duration-500

          group-hover:border-blue-400
          group-hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]
        "
      >

        {/* ================================================= */}
        {/* CATEGORY TITLE */}
        {/* ================================================= */}

        <h3
          className="
            mb-5
            text-xl
            font-semibold
            transition-all
            duration-300
            group-hover:text-blue-300
            group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]
          "
        >
          {title}
        </h3>


        {/* ================================================= */}
        {/* SKILLS */}
        {/* ================================================= */}

        <div
          className="
            flex
            flex-wrap
            gap-3
          "
        >

          {skills.map((skill) => (

            <motion.div
              key={skill.name}
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.15,
              }}
              className="
                flex
                items-center
                gap-2

                rounded-xl

                border
                border-white/10

                bg-white/5

                px-3
                py-2

                text-sm

                transition-all
                duration-300

                hover:border-blue-400
                hover:bg-white/10
                hover:shadow-[0_0_12px_rgba(59,130,246,0.35)]
              "
            >

              {/* Technology icon */}

              <span className="text-lg">
                {icons[skill.name] || "✨"}
              </span>


              {/* Technology name */}

              <span>
                {skill.name}
              </span>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.div>
  );
}