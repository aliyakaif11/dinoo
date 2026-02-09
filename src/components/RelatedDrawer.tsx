import { useRef } from 'react';
import type React from 'react';
import RelatedVideoList from './RelatedVideoList';
import { Video } from '../data/videos';

const RelatedDrawer = ({
  videos,
  activeId,
  isOpen,
  onToggle,
}: {
  videos: Video[];
  activeId: string;
  isOpen: boolean;
  onToggle: (next: boolean) => void;
}) => {
  const touchStart = useRef<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStart.current = event.touches[0]?.clientY ?? null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStart.current === null) return;
    const delta = event.touches[0].clientY - touchStart.current;
    if (delta < -40) {
      onToggle(true);
      touchStart.current = null;
    }
    if (delta > 40) {
      onToggle(false);
      touchStart.current = null;
    }
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-3 lg:hidden">
      <button
        type="button"
        onClick={() => onToggle(!isOpen)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="flex w-full items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-left"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brand-100">Related</p>
          <p className="text-sm font-semibold text-white">Swipe up to reveal the list</p>
        </div>
        <span className="text-xs text-slate-400">{isOpen ? 'Hide' : 'Show'}</span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '60vh' : '0px' }}
      >
        <div className="mt-4 max-h-[55vh] overflow-y-auto pr-1">
          <RelatedVideoList videos={videos} activeId={activeId} />
        </div>
      </div>
    </div>
  );
};

export default RelatedDrawer;
