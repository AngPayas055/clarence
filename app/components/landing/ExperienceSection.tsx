export default function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b8872f]">
        Experience
      </p>

      <h2 className="mt-2 font-serif text-4xl font-bold">
        Professional Experience
      </h2>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <div className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-[#071b38] text-2xl text-[#d6a547]">
            💼
          </div>

          <h3 className="font-serif text-2xl font-bold">
            Regional Bureau Prosecutor
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Bureau of Jail Management and Penology (BJMP)
          </p>

          <p className="mt-1 text-sm font-semibold text-[#b8872f]">
            Full-time · Present
          </p>

          <p className="mt-6 leading-8 text-slate-700">
            Applies legal expertise in due process, legal counseling,
            case analysis, policy implementation, and public accountability.
          </p>
        </div>

        <div className="grid gap-4 rounded-3xl bg-white p-8 shadow-xl sm:grid-cols-2">
          {[
            "Legal Counseling",
            "Drafting Affidavits",
            "Legal Writing",
            "Legal Advice",
            "Legal Assistance",
            "Legal Research",
            "Legal Document Preparation",
            "Case Analysis",
            "Policy Implementation",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm">
              <span className="text-[#b8872f]">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}