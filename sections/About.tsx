export default function About() {
  return (
    <section
      id="about"
      className="
        px-6
        md:px-20
        py-16
      "
    >
      <h2 className="text-4xl font-bold mb-6 text-center">
        About Me
      </h2>

      <div className="max-w-3xl mx-auto">

        {/* Introduction */}
        <p
          className="
            text-gray-400
            leading-7
            text-left
            md:text-justify
          "
        >
          I’m a <strong>software engineer</strong> who enjoys turning complex
          data and backend problems into reliable, scalable systems. My
          experience spans <strong>backend development, data engineering,
          distributed systems</strong>, and increasingly,
          <strong> AI-powered applications</strong>.
        </p>


        {/* Industry Experience */}
        <p
          className="
            text-gray-400
            leading-7
            mt-4
            text-left
            md:text-justify
          "
        >
          I started my software engineering journey at{" "}
          <strong>Bank of America</strong> as a campus graduate, where I worked
          on production systems ranging from large-scale data pipelines and
          APIs to distributed workflows and cloud infrastructure. That
          experience taught me not only how to build systems, but also how to
          own features through production, collaborate across teams, and solve
          problems when things don’t go as planned.
        </p>


        {/* Technical Direction */}
        <p
          className="
            text-gray-400
            leading-7
            mt-4
            text-left
            md:text-justify
          "
        >
          Over time, I found myself especially drawn to{" "}
          <strong>
            backend engineering, data, and distributed systems
          </strong>
           - understanding how systems work under the hood and how to make them
          reliable at scale. That led me to pursue my{" "}
          <strong>MS in Information Studies</strong> at Trine University,
          where I’ve been strengthening my engineering foundation while
          exploring <strong>AI/ML and modern AI applications</strong>.
        </p>


        {/* Current Focus */}
        <p
          className="
            text-gray-400
            leading-7
            mt-4
            text-left
            md:text-justify
          "
        >
          Today, I’m particularly interested in the intersection of{" "}
          <strong>software engineering, data, and AI</strong> - building
          systems that are not only intelligent, but also reliable, scalable,
          and practical. I enjoy unfamiliar and challenging problems because
          they give me an opportunity to learn something new and turn that
          learning into something useful.
        </p>


        {/* Closing */}
        <p
          className="
            text-gray-400
            leading-7
            mt-4
            text-left
            md:text-justify
          "
        >
          I’m looking for opportunities where I can bring my{" "}
          <strong>industry experience and engineering foundation</strong>,
          continue learning from strong teams, and contribute to building
          systems that solve real problems.
        </p>

      </div>
    </section>
  );
}