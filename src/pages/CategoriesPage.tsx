import { Link } from 'react-router-dom';
import { categories } from '../data/videos';

const CategoriesPage = () => (
  <div className="space-y-6 pb-20 md:pb-6">
    <header className="space-y-2">
      <p className="text-xs uppercase tracking-[0.2em] text-brand-100">Browse</p>
      <h2 className="text-2xl font-semibold text-white">Categories</h2>
      <p className="text-sm text-slate-400">Jump to a curated set of AI video topics.</p>
    </header>

    <div className="grid gap-4 md:grid-cols-2">
      {categories.map((category) => (
        <div key={category.slug} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-center gap-3">
            <img src={category.iconUrl} alt={category.name} className="h-12 w-12 rounded-full" />
            <div>
              <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              <p className="text-xs text-slate-400">{category.videos.length} videos</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Featured tutorials and quick demos focused on {category.name} workflows.
          </p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-100"
          >
            View on home feed →
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default CategoriesPage;
