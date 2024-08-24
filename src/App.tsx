import { useState } from 'react';
import Header from './components/Header/Header.tsx';
import MainSection from './components/MainSection/MainSection.tsx'
import PlaybackBar from './components/PlaybackBar/PlaybackBar.tsx'
import Sidebar from './components/Sidebar/Sidebar.tsx';
import "./index.css";
import styles from "./App.module.css"; 

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <>
      <Header toggleSidebar={toggleSidebar}/>
      <div className={styles.mainLayout}>
        <Sidebar isOpen={isSidebarOpen}/>
        <MainSection />
      </div>
      <PlaybackBar />
    </>
  )
}

export default App
