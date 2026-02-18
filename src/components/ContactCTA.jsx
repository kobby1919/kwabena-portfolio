import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="bg-zinc-900 py-16 px-6 flex justify-center">
      <div className="reveal-up flex flex-col sm:flex-row items-center gap-6 bg-zinc-800/30 backdrop-blur-xl border border-white/8 rounded-2xl px-8 py-6 max-w-xl w-full">
        
        {/* Left */}
        <div className="flex-1 text-center sm:text-left">
          <p className="text-white font-medium text-lg">Like what you see?</p>
          <p className="text-zinc-500 text-sm mt-0.5">Let's build something great together.</p>
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-sky-500/10 border border-sky-400/30 text-sky-300 hover:bg-sky-500/20 hover:border-sky-400/50 transition-all duration-300 text-sm font-medium whitespace-nowrap"
        >
          Let's Connect
          <span className="material-symbols-rounded text-[15px]">arrow_forward</span>
        </Link>

      </div>
    </section>
  );
}