import { useState } from 'react';
import Header from './components/Header/Header.tsx';
import MainSection from './components/MainSection/MainSection.tsx';
import PlaybackBar from './components/PlaybackBar/PlaybackBar.tsx';
import Sidebar from './components/Sidebar/Sidebar.tsx';
import CreatePlaylist from './components/CreatePlaylist/CreatePlaylist.tsx';
import './index.css';
import styles from './App.module.css';
import { Playlist } from './Types.tsx';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [playlists, setPlaylists] = useState<Array<Playlist>>([]);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <div className={styles.mainLayout}>
        <Sidebar
          isOpen={isSidebarOpen}
          setIsFormVisible={setIsFormVisible}
          playlists={playlists}
        />
        {isFormVisible ? (
          <CreatePlaylist
            setIsFormVisible={setIsFormVisible}
            setPlaylists={setPlaylists}
            playlists={playlists}
          />
        ) : (
          <MainSection />
        )}
      </div>
      <PlaybackBar />
    </>
  );
}

export default App;
