import { navItems } from "./data";

export default function Header() {
  return (
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
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-[#b8872f]"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}