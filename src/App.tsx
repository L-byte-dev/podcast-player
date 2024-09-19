import { useState } from 'react';
import Header from './components/Header/Header.tsx';
import MainSection from './components/MainSection/MainSection.tsx';
import PlaybackBar from './components/PlaybackBar/PlaybackBar.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import CreatePlaylist from './components/CreatePlaylist/CreatePlaylist.tsx';
import './index.css';
import styles from './App.module.css';
import { Playlist, Podcast } from './Types.tsx';
import useToggle from './hooks/useToggle.tsx';

function App() {
  const {value: isSidebarOpen, toggle: toggleSidebar} = useToggle(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [playlists, setPlaylists] = useState<Array<Playlist>>([]);
  const [currentPodcast, setCurrentPodcast] = useState<Podcast | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playPodcast = (podcast: Podcast) => {
    setCurrentPodcast(podcast);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className={styles.mainLayout}>
        <div className={`${styles.sidebar} ${!isSidebarOpen ? styles.collapsed : ''}`}>
          <Sidebar
            isOpen={isSidebarOpen}
            setIsFormVisible={setIsFormVisible}
            playlists={playlists}
          />
        </div>
        <div className={`${styles.content} ${!isSidebarOpen ? styles.shifted : styles.full}`}> 
          {isFormVisible ? (
            <CreatePlaylist
              setIsFormVisible={setIsFormVisible}
              setPlaylists={setPlaylists}
              playlists={playlists}
            />
          ) : (
            <MainSection playPodcast={playPodcast}/>
          )}
        </div>
      </div>
      {currentPodcast && (
        <PlaybackBar 
          currentPodcast={currentPodcast}
          isPlaying={isPlaying}
          togglePlayPause={togglePlayPause}
        /> 
      )}
    </>
  );
}

export default App;
