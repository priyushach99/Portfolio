type Props = {
  role: string;
  company: string;
  points: string[];
};

export default function ExperienceCard({ role, company, points }: Props) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold">
        {role} @ {company}
      </h3>
      <ul className="mt-2 text-gray-400 list-disc ml-5">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}