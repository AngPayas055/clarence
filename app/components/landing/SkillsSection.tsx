import { skills } from "./data";

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-[#071b38] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d6a547]">
          Skills
        </p>

        <h2 className="mt-2 font-serif text-3xl font-bold">
          Core Competencies
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm text-white/90"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}