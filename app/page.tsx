import Image from "next/image";

const skills = [
  "Legal Counseling",
  "Drafting Affidavits",
  "Legal Writing",
  "Legal Advice",
  "Legal Assistance",
  "Legal Research",
  "Legal Document Preparation",
  "Case Analysis",
  "Policy Implementation",
  "Ethical Leadership",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f3ea] text-[#071b38]">
      <header className="fixed top-0 z-50 w-full border-b border-[#071b38]/10 bg-[#f8f3ea]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-[#b8872f] text-[#b8872f]">
              ⚖
            </div>
            <div className="font-serif text-lg font-bold leading-tight">
              CLARENCE <br /> RAY CAROLINO
            </div>
          </div>

          <nav className="hidden gap-8 text-sm font-medium lg:flex">
            {["Home", "About", "Experience", "Education", "Credentials", "Skills", "Advocacy", "Contact"].map(
              (item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#b8872f]">
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="h-full w-full bg-[url('/images/court-bg.jpg')] bg-cover bg-center" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-16 pt-10 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#b8872f]">
              Lawyer · BJMP Regional Bureau Prosecutor
            </p>

            <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight text-[#071b38] md:text-7xl">
              CLARENCE <br /> RAY CAROLINO
            </h1>

            <p className="mt-6 text-xl text-[#b8872f]">
              Promoting Law, Justice, and Human Dignity
            </p>

            <p className="mt-6 max-w-xl leading-8 text-slate-700">
              A lawyer and public servant committed to upholding justice,
              integrity, accountability, and human dignity in service to the
              Filipino people.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#credentials"
                className="rounded-md bg-[#071b38] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#0d2a54]"
              >
                View Credentials
              </a>

              <a
                href="#contact"
                className="rounded-md border border-[#071b38] px-6 py-3 text-sm font-semibold transition hover:bg-[#071b38] hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute right-0 top-10 h-72 w-72 rounded-3xl bg-[#071b38]" />

            <div className="relative z-10 mx-auto h-[520px] w-[420px] overflow-hidden rounded-t-full border-[3px] border-[#b8872f] bg-white shadow-2xl">
              <Image
                src="/images/clarence.jpg"
                alt="Clarence Ray Carolino"
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            <div className="absolute right-2 top-32 z-20 hidden rounded-xl bg-[#071b38] p-6 text-white shadow-xl md:block">
              <div className="mb-4 text-3xl text-[#d6a547]">⚖</div>
              <p className="text-xs font-bold uppercase tracking-widest">
                Justice
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest">
                Integrity
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest">
                Accountability
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest">
                Human Dignity
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071b38] py-8 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">
          {[
            ["⚜", "Licensed Lawyer", "IBP Member"],
            ["🏛", "Public Servant", "BJMP Prosecutor"],
            ["📖", "Legal Researcher", "Specialist"],
            ["🎓", "Licensed Teacher", "PRC Certified"],
          ].map(([icon, title, desc]) => (
            <div key={title} className="flex items-center gap-4 border-white/10 md:border-r last:border-0">
              <div className="text-3xl text-[#d6a547]">{icon}</div>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-white/60">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
              Applies legal expertise in due process, legal counseling, case
              analysis, policy implementation, and public accountability within
              the correctional service.
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

      <section id="education" className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-2">
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

          <ul className="mt-6 space-y-2 text-sm text-slate-700">
            <li>• Integrated Bar of the Philippines</li>
            <li>• Knights of Rizal</li>
            <li>• Eagles</li>
          </ul>
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
              <p className="mt-5 rounded-full bg-[#f2e4c8] px-4 py-2 text-center text-xs font-semibold text-[#8a5d13]">
                Issued January 2025
              </p>
            </div>

            <div className="rounded-2xl border border-[#d6a547]/30 p-6">
              <div className="mb-4 text-4xl">🎓</div>
              <h3 className="font-serif text-xl font-bold">Teacher</h3>
              <p className="mt-2 text-sm text-slate-600">
                Professional Regulation Commission
              </p>
              <p className="mt-5 rounded-full bg-[#f2e4c8] px-4 py-2 text-center text-xs font-semibold text-[#8a5d13]">
                Issued January 2017
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <section id="advocacy" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-white p-10 text-center shadow-xl md:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b8872f]">
            Advocacy
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold">
            Justice With Human Dignity
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-700">
            Driven by purpose and guided by principle, Clarence Ray Carolino
            strives to contribute to a justice system that not only enforces the
            law but also fosters human dignity, rehabilitation, and genuine
            reform.
          </p>
        </div>
      </section>

      <footer id="contact" className="bg-[#071b38] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
          <div>
            <h3 className="font-serif text-2xl font-bold">
              Clarence Ray Carolino
            </h3>
            <p className="mt-3 text-sm text-white/60">
              Lawyer | BJMP Regional Bureau Prosecutor | Licensed Professional
              Teacher
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <div className="grid gap-2 text-sm text-white/60">
              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#credentials">Credentials</a>
              <a href="#skills">Skills</a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Get In Touch</h4>
            <p className="text-sm text-white/60">Tacloban, Eastern Visayas, Philippines</p>
            <p className="mt-2 text-sm text-white/60">LinkedIn Profile</p>
            <p className="mt-2 text-sm text-white/60">clarence@example.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}