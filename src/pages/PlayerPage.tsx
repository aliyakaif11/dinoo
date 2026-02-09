import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PlayerControls from '../components/PlayerControls';
import RelatedVideoList from '../components/RelatedVideoList';
import { usePlayer } from '../context/PlayerContext';
import { categories } from '../data/videos';

const PlayerPage = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { activeVideo, setActiveVideo, toggleMini, findVideoById } = usePlayer();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);

  useEffect(() => {
    if (!videoId) return;
    const video = findVideoById(videoId);
    if (video) {
      setActiveVideo(video);
      setCurrentTime(0);
    }
  }, [videoId, findVideoById, setActiveVideo]);

  useEffect(() => {
    if (activeVideo && videoRef.current) {
      videoRef.current.play().catch(() => undefined);
      setIsPlaying(true);
    }
  }, [activeVideo]);

  if (!activeVideo) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-center">
        <h2 className="text-xl font-semibold text-white">Video not found</h2>
        <p className="mt-2 text-sm text-slate-400">Return to the home feed to pick another video.</p>
        <button
          type="button"
          onClick={() => navigate('/')}
          className="mt-4 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const relatedVideos = useMemo(() => {
    const category = categories.find((entry) => entry.name === activeVideo.category);
    return category?.videos ?? [];
  }, [activeVideo]);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => undefined);
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (nextTime: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleSkip = (delta: number) => {
    if (!videoRef.current) return;
    const nextTime = Math.max(0, Math.min(duration, videoRef.current.currentTime + delta));
    videoRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setDragStart(event.clientY);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStart === null) return;
    const delta = event.clientY - dragStart;
    if (delta > 120) {
      toggleMini(true);
      setDragStart(null);
    }
  };

  const handlePointerUp = () => {
    setDragStart(null);
  };

  return (
    <div className="space-y-6 pb-20 md:pb-6">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1 space-y-4">
          <div
            className="overflow-hidden rounded-3xl border border-slate-800 bg-black"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brand-100">Now Playing</p>
                <h2 className="text-base font-semibold text-white">{activeVideo.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => toggleMini(true)}
                className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200"
              >
                Minimize
              </button>
            </div>
            <video
              ref={videoRef}
              src={activeVideo.mediaUrl}
              poster={activeVideo.thumbnailUrl}
              className="aspect-video w-full bg-black"
              playsInline
              onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
              onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
            />
          </div>
          <PlayerControls
            isPlaying={isPlaying}
            currentTime={currentTime}
            duration={duration}
            onTogglePlay={handleTogglePlay}
            onSeek={handleSeek}
            onSkip={handleSkip}
          />
        </div>

        <aside className="w-full space-y-4 lg:w-[320px]">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-100">Gesture Tip</p>
            <p className="mt-2 text-sm text-slate-300">
              Drag the player downward to dock it into the mini-player. The docked player persists
              while you browse other pages.
            </p>
          </div>
          <RelatedVideoList videos={relatedVideos} activeId={activeVideo.id} />
        </aside>
      </div>
    </div>
  );
};

export default PlayerPage;
