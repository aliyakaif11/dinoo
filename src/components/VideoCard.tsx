import { Link } from 'react-router-dom';
import { Video } from '../data/videos';
import { usePlayer } from '../context/PlayerContext';

const VideoCard = ({ video }: { video: Video }) => {
  const { setActiveVideo } = usePlayer();

  return (
    <Link
      to={`/player/${video.id}`}
      onClick={() => setActiveVideo(video)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition hover:border-brand-500/60"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-white">
          {video.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 py-4">
        <h3 className="text-sm font-semibold text-white line-clamp-2">{video.title}</h3>
        <p className="text-xs text-slate-400 line-clamp-2">{video.description}</p>
        <span className="mt-auto w-fit rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-wide text-slate-200">
          {video.category}
        </span>
      </div>
    </Link>
  );
};

export default VideoCard;
