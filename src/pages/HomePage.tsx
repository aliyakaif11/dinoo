import CategorySection from '../components/CategorySection';
import { categories } from '../data/videos';

const HomePage = () => (
  <div className="space-y-10 pb-20 md:pb-6">
    <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/40 to-slate-950 p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-brand-100">Video Feed</p>
      <h2 className="mt-2 text-2xl font-semibold text-white">Discover AI-powered creator tools</h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-400">
        Scroll by category, jump into full-screen playback, and dock the mini-player while you
        browse. Built with mobile-first interactions and smooth playback in mind.
      </p>
    </section>

    {categories.map((category) => (
      <CategorySection key={category.slug} category={category} />
    ))}
  </div>
);

export default HomePage;
