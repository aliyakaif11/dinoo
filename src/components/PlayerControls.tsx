import { useMemo } from 'react';

const formatTime = (value: number) => {
  if (!Number.isFinite(value)) return '0:00';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

type PlayerControlsProps = {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onTogglePlay: () => void;
  onSeek: (next: number) => void;
  onSkip: (delta: number) => void;
};

const PlayerControls = ({
  isPlaying,
  currentTime,
  duration,
  onTogglePlay,
  onSeek,
  onSkip,
}: PlayerControlsProps) => {
  const progress = useMemo(() => (duration ? (currentTime / duration) * 100 : 0), [currentTime, duration]);

  return (
    <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
      <input
        type="range"
        min={0}
        max={duration || 0}
        value={currentTime}
        onChange={(event) => onSeek(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-800"
        style={{
          background: `linear-gradient(90deg, #3b82f6 ${progress}%, #1e293b ${progress}%)`,
        }}
      />
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => onSkip(-10)}
          className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-brand-500 hover:text-white"
        >
          -10s
        </button>
        <button
          type="button"
          onClick={onTogglePlay}
          className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          type="button"
          onClick={() => onSkip(10)}
          className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-brand-500 hover:text-white"
        >
          +10s
        </button>
      </div>
    </div>
  );
};

export default PlayerControls;
