import React, { createContext, useContext, useMemo, useState } from 'react';
import { Video, allVideos } from '../data/videos';

export type PlayerState = {
  activeVideo: Video | null;
  isMini: boolean;
};

type PlayerContextValue = PlayerState & {
  setActiveVideo: (video: Video) => void;
  closePlayer: () => void;
  toggleMini: (value?: boolean) => void;
  findVideoById: (id: string) => Video | undefined;
};

const PlayerContext = createContext<PlayerContextValue | undefined>(undefined);

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeVideo, setActiveVideoState] = useState<Video | null>(null);
  const [isMini, setIsMini] = useState(false);

  const setActiveVideo = (video: Video) => {
    setActiveVideoState(video);
    setIsMini(false);
  };

  const closePlayer = () => {
    setActiveVideoState(null);
    setIsMini(false);
  };

  const toggleMini = (value?: boolean) => {
    setIsMini((prev) => (typeof value === 'boolean' ? value : !prev));
  };

  const findVideoById = (id: string) => allVideos.find((video) => video.id === id);

  const value = useMemo(
    () => ({
      activeVideo,
      isMini,
      setActiveVideo,
      closePlayer,
      toggleMini,
      findVideoById,
    }),
    [activeVideo, isMini],
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within PlayerProvider');
  }
  return context;
};
