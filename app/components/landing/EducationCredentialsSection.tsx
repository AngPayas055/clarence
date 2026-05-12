export default function EducationCredentialsSection() {
  return (
    <section
      id="education"
      className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-2"
    >
      <div className="rounded-3xl bg-white p-8 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b8872f]">
          Education
        </p>

        <h2 className="mt-3 font-serif text-3xl font-bold">
          Doctor of Law (J.D.)
        </h2>

        <p className="mt-3 font-medium">
          Dr. V. Orestes Romualdez Educational Foundation College of Law
        </p>

        <p className="mt-2 text-[#b8872f]">2016 – 2021</p>
      </div>

      <div id="credentials" className="rounded-3xl bg-white p-8 shadow-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b8872f]">
          Licenses & Certifications
        </p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-[#d6a547]/30 p-6">
            <div className="mb-4 text-4xl">⚖</div>

            <h3 className="font-serif text-xl font-bold">Lawyer</h3>

            <p className="mt-2 text-sm text-slate-600">
              Integrated Bar of the Philippines
            </p>
          </div>

          <div className="rounded-2xl border border-[#d6a547]/30 p-6">
            <div className="mb-4 text-4xl">🎓</div>

            <h3 className="font-serif text-xl font-bold">Teacher</h3>

            <p className="mt-2 text-sm text-slate-600">
              Professional Regulation Commission
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}