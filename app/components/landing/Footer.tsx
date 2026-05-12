export default function Footer() {
  return (
    <footer id="contact" className="bg-[#071b38] py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl font-bold">
            Clarence Ray Carolino
          </h3>

          <p className="mt-3 text-sm text-white/60">
            Lawyer | BJMP Regional Bureau Prosecutor |
            Licensed Professional Teacher
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

          <p className="text-sm text-white/60">
            Tacloban, Eastern Visayas, Philippines
          </p>

          <p className="mt-2 text-sm text-white/60">
            LinkedIn Profile
          </p>

          <p className="mt-2 text-sm text-white/60">
            clarence@example.com
          </p>
        </div>
      </div>
    </footer>
  );
}