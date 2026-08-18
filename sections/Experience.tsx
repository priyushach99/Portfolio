"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { SiGitlab } from "react-icons/si";

const experiences = [
  {
    role: "AI Intern",
    company: "Balanx Bio",
    logo: "B",
    duration: "Present",
    points: [
      "Designed scalable data models for structured and semi-structured data, focusing on schema organization and efficient backend data workflows.",
      "Implemented GraphQL APIs to provide flexible, typed access to backend data models and application-facing queries.",
      "Contributed to AI-focused backend development across data modeling, API design, and system integration while working with proprietary systems.",
    ],
  },
  {
role:"Open Source Contributor",
company:"GitLab",
logo: "gitlab",
duration:"2026",
points:[
"Contributed a bug fix to GitLab’s open-source contributor-success platform (Issue #441, MR #2109), resolving GraphQL query timeouts that were silently returned in successful API responses; iterated through maintainer code review to scope the fix and added test coverage validated against recorded network responses."
]
},
  {
    role: "Software Engineer",
    company: "Bank of America",
    logo: "boa",
    duration: "2019 - 2024",
    points: [
      "Designed and implemented enterprise-scale ETL pipelines using PySpark, Snowflake, and PostgreSQL, orchestrated with Apache Airflow on AWS (S3, Lambda), processing 1M+ records daily across distributed banking data systems.",
      "Built and deployed Java-based backend microservices using object-oriented design and REST APIs on AWS Lambda, enabling downstream systems to consume database updates in near real-time instead of hourly batch- improving system responsiveness across a distributed service architecture.",
      "Designed and developed internal REST APIs (FastAPI) with full Pytest test coverage, exposing self-service programmatic access to other engineering teams and cutting integration turnaround from 3 days to under 1 hour.",
      "Engineered fault-tolerant, distributed data processing workflows (Apache Airflow, AWS S3/Lambda) handling 1M+ records daily, implementing automated retries, backfills, and SLA-based alerting to reduce incident resolution time by 20% and improve system reliability at scale.",
      "Optimized Snowflake data models and transformations (incremental loads, SCD Type-2), improving downstream query performance by 30% under high-concurrency workloads.",
      "Enforced AWS IAM and Snowflake RBAC access controls, including column-level masking for sensitive entity data, supporting regulatory compliance requirements across 2 financial reporting systems.",
      "Configured application-specific YAML deployment files and provisioned infrastructure via Terraform within Jenkins CI/CD pipelines across Dev, QA, and Prod for the Core entity database.",
      "Reviewed and provided feedback on code quality, design patterns, and testing practices within the team, while partnering with data governance, compliance, and QA teams to refine data contracts and operational documentation.",
    ],
  },
];

function CompanyLogo({ logo }: { logo: string }) {
  if (logo === "gitlab") {
    return (
      <SiGitlab
        size={32}
        className="text-orange-400"
      />
    );
  }
  
  if (logo === "B") {
    return (
      <div
        className="
          flex
          items-center
          justify-center
          w-8
          h-8
          rounded-lg
          bg-blue-500/20
          border
          border-blue-400/40
          text-blue-300
          text-lg
          font-bold
        "
      >
        B
      </div>
    );
  }

  if (logo === "boa") {
    return (
      <Image
        src="/BAC.svg"
        width={32}
        height={32}
        alt="Bank of America"
        className="scale-150"
      />
    );
  }

  return null;
}

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  const [timelineHeight, setTimelineHeight] = useState(0);

  useEffect(() => {
    if (timelineRef.current) {
      setTimelineHeight(
        timelineRef.current.scrollHeight
      );
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, timelineHeight - 40]
  );

  return (
    <section
      id="experience"
      className="
        px-6
        md:px-20
        py-16
      "
    >
      <h2
        className="
          text-4xl
          font-bold
          mb-8
          text-center
        "
      >
        Experience
      </h2>

      <div className="flex justify-center">

        <div
          ref={timelineRef}
          className="
            relative
            w-full
            max-w-4xl
          "
        >

          {/* Timeline Line */}
          <div
            className="
              absolute
              left-6
              top-0
              bottom-0
              w-px
              bg-white/20
            "
          />

          {/* Moving Briefcase */}
          <motion.div
            style={{ y }}
            className="
              absolute
              left-6
              -translate-x-1/2
              z-20
              w-10
              h-10
              rounded-full
              bg-blue-500/20
              border
              border-blue-400
              flex
              items-center
              justify-center
              shadow-[0_0_25px_rgba(59,130,246,0.9)]
            "
          >
            <BriefcaseBusiness
              size={20}
              className="text-blue-300"
            />
          </motion.div>

          {/* Experiences */}
          <div
            className="
              space-y-10
              pl-14
            "
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="
                  grid
                  grid-cols-[80px_1fr]
                  md:grid-cols-[80px_1fr]
                  items-start
                  gap-0
                "
              >

                {/* Company Logo */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <CompanyLogo logo={exp.logo} />
                </div>

                {/* Experience Content */}
                <div className="min-w-0">

                  <h3
                    className="
                      text-2xl
                      font-semibold
                    "
                  >
                    {exp.role}
                  </h3>

                  <p className="text-blue-400">
                    {exp.company}
                  </p>

                  <p
                    className="
                      text-gray-500
                      text-sm
                    "
                  >
                    {exp.duration}
                  </p>

                  <ul
                    className="
                      mt-5
                      space-y-3
                      text-gray-400
                      list-disc
                      ml-5
                    "
                  >
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="
                          text-justify
                          leading-relaxed
                        "
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}