import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePlayer } from '../context/PlayerContext';

const MiniPlayer = () => {
  const { activeVideo, isMini, toggleMini, closePlayer } = usePlayer();
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMini && videoRef.current) {
      videoRef.current.play().catch(() => undefined);
      setIsPlaying(true);
    }
  }, [isMini, activeVideo]);

  if (!activeVideo || !isMini) return null;

  const handleToggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => undefined);
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-16 right-4 z-40 w-[min(360px,90vw)] rounded-2xl border border-slate-800 bg-slate-950/95 p-3 shadow-xl shadow-slate-950/40 md:bottom-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => {
            toggleMini(false);
            navigate(`/player/${activeVideo.id}`);
          }}
          className="relative h-16 w-28 overflow-hidden rounded-xl"
        >
          <video
            ref={videoRef}
            src={activeVideo.mediaUrl}
            className="h-full w-full object-cover"
            muted
            playsInline
            loop
          />
        </button>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white line-clamp-2">{activeVideo.title}</p>
          <p className="text-xs text-slate-400">{activeVideo.category}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggle}
            className="rounded-full border border-slate-700 px-3 py-2 text-xs text-slate-200"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            type="button"
            onClick={() => {
              closePlayer();
              setIsPlaying(false);
            }}
            className="rounded-full border border-slate-700 px-3 py-2 text-xs text-slate-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniPlayer;
