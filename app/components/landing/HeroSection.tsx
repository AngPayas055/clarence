import Image from "next/image";

export default function HeroSection() {
  return (
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

        <div className="relative mx-auto flex w-full max-w-xl justify-center lg:justify-end">
          <div className="absolute bottom-10 right-6 h-72 w-72 rounded-full bg-[#b8872f]/20 blur-3xl" />

          <div className="relative h-130 w-full max-w-140">
            <Image
              src="/profile3.png"
              alt="Clarence Ray Carolino"
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}