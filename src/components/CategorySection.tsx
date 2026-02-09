import { Category } from '../data/videos';
import VideoCard from './VideoCard';

const CategorySection = ({ category }: { category: Category }) => (
  <section className="space-y-4">
    <div className="flex items-center gap-3">
      <img src={category.iconUrl} alt="" className="h-10 w-10 rounded-full" />
      <div>
        <h2 className="text-lg font-semibold text-white">{category.name}</h2>
        <p className="text-xs text-slate-400">{category.videos.length} videos</p>
      </div>
    </div>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {category.videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  </section>
);

export default CategorySection;
