import { highlights } from "./data";

export default function StatsSection() {
  return (
    <section className="bg-[#071b38] py-8 text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-4">
        {highlights.map(([icon, title, desc]) => (
          <div
            key={title}
            className="flex items-center gap-4 border-white/10 md:border-r last:border-0"
          >
            <div className="text-3xl text-[#d6a547]">{icon}</div>

            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-white/60">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}