import { useState, useContext } from "react";
import AlbumCard from "../AlbumCard/AlbumCard.tsx";
import SongCard from "../SongCard/SongCard.tsx";
import ArtistCard from "../ArtistCard/ArtistCard.tsx";
import ListenAgain from '../ListenAgain/ListenAgain.tsx';
import AvatarIcon from "../AvatarIcon/AvatarIcon.tsx";
import CategoryTitle from "../CategoryTitle/CategoryTitle.tsx";
import LeftRightIcon from "../LeftRightIcon/LeftRightIcon.tsx";
import Button from "../Button/Button.tsx";
import styles from "./MainSection.module.css";
import { AudioClip } from "../../Types.tsx";
import useFetchData from "../../hooks/useFetchData.tsx";
import Loading from "../Loading/Loading.tsx";
import { PodcastContext } from "../../context/PlayPodcastProvider.tsx";

const API_URL = 'https://api.audioboom.com/audio_clips';

function MainSection() {
  const { data: audioClips, isLoading } = useFetchData(API_URL);
  const podcastContext = useContext(PodcastContext);
  
  const [currentListenAgain, setCurrentListenAgain] = useState(0);
  const [currentArtist, setCurrentArtist] = useState(0);
  const [currentQuickPicks, setCurrentQuickPicks] = useState(0);
  const [currentRecommended, setCurrentRecommended] = useState(0);
  
  const itemsPerPage = {
    listenAgain: 5,
    artist: 5,
    quickPicks: 16,
    recommended: 5
  };
  
  const totalPages = {
    listenAgain: Math.ceil(10 / itemsPerPage.listenAgain),
    artist: Math.ceil(10 / itemsPerPage.artist),
    quickPicks: Math.ceil(32 / itemsPerPage.quickPicks),
    recommended: Math.ceil(10 / itemsPerPage.recommended)
  };

  const handlePagination = (
    total: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    direction: 'next' | 'prev'
  ) => {
    setter((prevIndex) => {
      if (direction === 'next') {
        if (prevIndex + 1 < total) {
          return prevIndex + 1;
        }
        return prevIndex; 
      } else {
        if (prevIndex - 1 >= 0) {
          return prevIndex - 1;
        }
        return prevIndex; 
      }
    });
  };  

  const getPageIndices = (current: number, itemsPerPage: number, offset: number = 0) => {
    const start = current * itemsPerPage + offset;
    const end = start + itemsPerPage;
    return { start, end };
  };

  function handleClick(clips: AudioClip) {
    podcastContext?.playPodcast({
      title: clips.title,
      description: clips.description,
      photo: clips.channel.urls.logo_image.original,
      audio: clips.urls.high_mp3,
    });
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
      <main className={styles.main}>
          <section className={styles.section}>
              <div className={styles.categoryTitleGroup}>
                <div className={styles.categoryTitle}>
                  <AvatarIcon />
                  <CategoryTitle title="Listen Again" subtitle="Sufyan Ali" />
                </div>
                <div className={styles.buttonGroup}>
                  <LeftRightIcon 
                    onNext={() => handlePagination(totalPages.listenAgain, setCurrentListenAgain, 'next')} 
                    onPrev={() => handlePagination(totalPages.listenAgain, setCurrentListenAgain, 'prev')} 
                  />
                </div>
              </div>
              <ListenAgain 
                handleClick={handleClick} 
                filteredClips={audioClips.slice(...Object.values(getPageIndices(currentListenAgain, itemsPerPage.listenAgain)))} 
              />
          </section>

          <section className={styles.section}>
              <div className={styles.categoryTitleGroup}>
                <div className={styles.categoryTitle}>
                  <AvatarIcon />
                  <CategoryTitle title="The Ben Davis & Kelly K Show" subtitle="SIMILAR TO" />
                </div>
                <div className={styles.buttonGroup}>
                  <LeftRightIcon 
                    onNext={() => handlePagination(totalPages.artist, setCurrentArtist, 'next')} 
                    onPrev={() => handlePagination(totalPages.artist, setCurrentArtist, 'prev')} 
                  />
                </div>
              </div>
              <ArtistCard 
                handleClick={handleClick} 
                filteredClips={audioClips.slice(...Object.values(getPageIndices(currentArtist, itemsPerPage.artist, 10)))} 
              />
          </section>

          <section className={styles.section}>
              <div className={styles.categoryTitleGroup}>
                <div className={styles.categoryTitle}>
                  <AvatarIcon />
                  <CategoryTitle title="Quick picks" />
                </div>
                <div className={styles.buttonGroup}>
                  <Button className={styles.button}>Play all</Button>
                  <LeftRightIcon 
                    onNext={() => handlePagination(totalPages.quickPicks, setCurrentQuickPicks, 'next')} 
                    onPrev={() => handlePagination(totalPages.quickPicks, setCurrentQuickPicks, 'prev')} 
                  />
                </div>
              </div>
              <SongCard 
                handleClick={handleClick} 
                filteredClips={audioClips.slice(...Object.values(getPageIndices(currentQuickPicks, itemsPerPage.quickPicks, 20)))} 
              />
          </section>

          <section className={styles.section}>
              <div className={styles.categoryTitleGroup}>
                <div className={styles.categoryTitle}>
                  <AvatarIcon />
                  <CategoryTitle title="Recommended podcasts" />
                </div>
                <div className={styles.buttonGroup}>
                  <LeftRightIcon 
                    onNext={() => handlePagination(totalPages.recommended, setCurrentRecommended, 'next')} 
                    onPrev={() => handlePagination(totalPages.recommended, setCurrentRecommended, 'prev')} 
                  />
                </div>
              </div>
              <AlbumCard 
                handleClick={handleClick} 
                filteredClips={audioClips.slice(...Object.values(getPageIndices(currentRecommended, itemsPerPage.recommended, 52)))} 
              />
          </section>
      </main>
  );
}

export default MainSection;
