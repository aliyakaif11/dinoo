import { Link } from 'react-router-dom';
import { Video } from '../data/videos';
import { usePlayer } from '../context/PlayerContext';

const RelatedVideoList = ({ videos, activeId }: { videos: Video[]; activeId: string }) => {
  const { setActiveVideo } = usePlayer();

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-slate-200">Up next in this category</h3>
      <div className="space-y-2">
        {videos.map((video) => (
          <Link
            key={video.id}
            to={`/player/${video.id}`}
            onClick={() => setActiveVideo(video)}
            className={`flex items-center gap-3 rounded-xl border px-3 py-2 transition ${
              video.id === activeId
                ? 'border-brand-500/60 bg-brand-500/10'
                : 'border-slate-800 bg-slate-900/60 hover:border-brand-500/40'
            }`}
          >
            <img src={video.thumbnailUrl} alt={video.title} className="h-16 w-28 rounded-lg object-cover" />
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-sm font-medium text-white line-clamp-2">{video.title}</p>
              <span className="text-xs text-slate-400">{video.duration}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedVideoList;
