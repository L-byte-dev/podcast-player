import { createContext, useState } from 'react';
import { Podcast } from '../Types';

type PodcastContextType = {
  currentPodcast: Podcast | null;
  setCurrentPodcast: React.Dispatch<React.SetStateAction<Podcast | null>>;
  isPlaying: boolean;
  playPodcast: (podcast: Podcast) => void;
  togglePlayPause: () => void;
};

export const PodcastContext = createContext<PodcastContextType | null>(null);

export function PlayPodcastProvider({children}: {children : React.ReactNode}) {
  const [currentPodcast, setCurrentPodcast] = useState<Podcast | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function playPodcast(podcast: Podcast) {
    setCurrentPodcast(podcast);
    setIsPlaying(true);
  };

  function togglePlayPause() {
    setIsPlaying(!isPlaying);
  };

  return (
    <PodcastContext.Provider value={{ currentPodcast, setCurrentPodcast, isPlaying, playPodcast, togglePlayPause }}>
      {children}
    </PodcastContext.Provider>
  );
};

export default PlayPodcastProvider;