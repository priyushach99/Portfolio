"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        px-6
        md:px-16
        lg:px-24
        py-24
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-10
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-blue-500/20
          rounded-full
          blur-[120px]
          pointer-events-none
        "
      />

      {/* Main Hero Container */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          mx-auto
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-12
        "
      >

        {/* ================================================= */}
        {/* LEFT — HERO CONTENT */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            order-1
            md:w-[65%]
            text-center
            md:text-left
          "
        >

          {/* Greeting */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              text-gray-400
              text-lg
              mb-4
            "
          >
            Hello, I'm
          </motion.p>


          {/* Name */}
          <h1
            className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              tracking-tight
            "
          >
            Priyusha Chinta
          </h1>


          {/* Animated Role */}
          <div
            className="
              mt-5
              text-2xl
              md:text-3xl
              lg:text-4xl
              font-semibold
            "
          >
            <span
              className="
                bg-gradient-to-r
                from-blue-400
                via-purple-400
                to-pink-400
                bg-clip-text
                text-transparent
              "
            >
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,

                  "Data & Distributed Systems Engineer",
                  2000,

                  "AI Application Developer",
                  2000,

                  "Backend Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>


          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
            }}
            className="
              mt-6
              text-gray-400
              text-lg
              leading-relaxed
              max-w-2xl
              mx-auto
              md:mx-0
            "
          >
            Software engineer building production-grade data platforms,
            distributed systems, and AI applications - backed by 1M+ daily
            records, real-time APIs, and ML-powered systems.
          </motion.p>


          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
            }}
            className="
              flex
              flex-wrap
              justify-center
              md:justify-start
              gap-4
              mt-10
            "
          >

            {/* Projects */}
            <a
              href="#projects"
              className="
                rounded-full
                bg-white
                text-black
                px-7
                py-3
                font-medium
                hover:scale-105
                transition
              "
            >
              View Projects
            </a>


            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                px-7
                py-3
                hover:bg-white/10
                transition
              "
            >
              <FileText size={18} />
              Resume
            </a>

          </motion.div>


          {/* ================================================= */}
{/* CONNECT WITH ME */}
{/* ================================================= */}

<motion.div
  initial={{
    opacity: 0,
  }}
  animate={{
    opacity: 1,
  }}
  transition={{
    delay: 1.2,
  }}
  className="
    flex
    items-center
    justify-center
    md:justify-start
    gap-5
    mt-8
  "
>

  {/* Label */}
  <span
    className="
      text-base
      md:text-lg
      font-semibold
      text-gray-300
      whitespace-nowrap
      tracking-wide
    "
  >
    Let's Connect
  </span>


  {/* Divider */}
  <span
    className="
      h-6
      w-px
      bg-white/20
    "
  />


  {/* GitHub */}
  <a
    href="https://github.com/priyushach99/priyusha-ch"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
    className="
      text-gray-400
      hover:text-white
      hover:scale-110
      transition-all
      duration-200
    "
  >
    <FaGithub size={24} />
  </a>


  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/priyusha24"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="
      text-gray-400
      hover:text-white
      hover:scale-110
      transition-all
      duration-200
    "
  >
    <FaLinkedin size={24} />
  </a>


  {/* Email */}
  <a
    href="mailto:priyusha.ch99@gmail.com"
    aria-label="Email"
    className="
      text-gray-400
      hover:text-white
      hover:scale-110
      transition-all
      duration-200
    "
  >
    <Mail size={24} />
  </a>

</motion.div>

        </motion.div>


        {/* ================================================= */}
        {/* RIGHT — CUTE ILLUSTRATION */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            order-2
            w-full
            md:w-[35%]
            flex
            flex-col
            items-center
            justify-center
            mt-8
            md:mt-0
          "
        >

          {/* Illustration Area */}
          <div
            className="
              relative
              flex
              items-center
              justify-center
              w-[180px]
              h-[180px]
              sm:w-[220px]
              sm:h-[220px]
              md:w-[260px]
              md:h-[260px]
              lg:w-[300px]
              lg:h-[300px]
            "
          >

            {/* Illustration Glow */}
            <div
              className="
                absolute
                inset-4
                sm:inset-3
                md:inset-0
                bg-purple-500/10
                rounded-full
                blur-3xl
              "
            />


            {/* Cute Character */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                text-[85px]
                sm:text-[105px]
                md:text-[135px]
                lg:text-[165px]
                xl:text-[190px]
                select-none
                drop-shadow-[0_0_25px_rgba(96,165,250,0.35)]
              "
            >
              👩🏻‍💻
            </motion.div>


            {/* One-time waving hand */}
            <motion.div
              initial={{
                rotate: 0,
              }}
              animate={{
                rotate: [0, 20, -15, 20, -10, 0],
              }}
              transition={{
                duration: 1.2,
                delay: 1,
                repeat: 0,
              }}
              className="
                absolute
                z-20
                text-[32px]
                sm:text-[38px]
                md:text-[48px]
                lg:text-[55px]
                translate-x-[55px]
                -translate-y-[45px]
                sm:translate-x-[65px]
                sm:-translate-y-[50px]
                md:translate-x-[80px]
                md:-translate-y-[65px]
                lg:translate-x-[100px]
                lg:-translate-y-[75px]
              "
            >
              👋
            </motion.div>

          </div>


          {/* Small Caption */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
            }}
            className="
              relative
              z-10
              mt-2
              sm:mt-3
              md:mt-1
              text-xs
              sm:text-sm
              text-gray-500
              text-center
            "
          >
            Always curious. Always asking Why ✨
          </motion.p>

        </motion.div>

      </div>


      {/* Scroll Animation */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
        "
      >
        <ArrowDown className="text-gray-400" />
      </motion.div>

    </section>
  );
}