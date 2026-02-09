import { allVideos } from '../data/videos';
import VideoCard from '../components/VideoCard';

const LibraryPage = () => (
  <div className="space-y-6 pb-20 md:pb-6">
    <header className="space-y-2">
      <p className="text-xs uppercase tracking-[0.2em] text-brand-100">Library</p>
      <h2 className="text-2xl font-semibold text-white">Recently added</h2>
      <p className="text-sm text-slate-400">
        A consolidated view of the latest tutorials across all categories.
      </p>
    </header>

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {allVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  </div>
);

export default LibraryPage;
