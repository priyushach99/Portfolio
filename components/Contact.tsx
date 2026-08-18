"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        px-6
        md:px-20
        py-20
      "
    >
      <div
        className="
          max-w-3xl
          mx-auto
          text-center
        "
      >

        {/* Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            text-4xl
            md:text-5xl
            font-bold
          "
        >
          Let's Connect
        </motion.h2>


        {/* Short message */}
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="
            mt-5
            text-gray-400
            text-lg
            leading-relaxed
          "
        >
          Interested in working together, discussing an opportunity,
          or just talking about technology? I'd love to hear from you.
        </motion.p>


        {/* Contact Links */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-5
          "
        >

          {/* Email */}
          <a
            href="mailto:priyusha.ch99@gmail.com"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-6
              py-4
              text-gray-300
              transition-all
              duration-300
              hover:border-blue-400
              hover:bg-white/10
              hover:text-white
              hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
            "
          >
            <Mail
              size={22}
              className="text-blue-400"
            />

            <span>
              Mail Me
            </span>
          </a>


          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/priyusha24"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-6
              py-4
              text-gray-300
              transition-all
              duration-300
              hover:border-blue-400
              hover:bg-white/10
              hover:text-white
              hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
            "
          >
            <FaLinkedin
              size={22}
              className="text-blue-400"
            />

            <span>
              LinkedIn
            </span>
          </a>

        </motion.div>

      </div>
    </section>
  );
}