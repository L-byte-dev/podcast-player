import AlbumCard from "../AlbumCard/AlbumCard.tsx"
import SongCard from "../SongCard/SongCard.tsx"
import ArtistCard from "../ArtistCard/ArtistCard.tsx"
import ListenAgain from '../ListenAgain/ListenAgain.tsx'
import AvatarIcon from "../AvatarIcon/AvatarIcon.tsx"
import CategoryTitle from "../CategoryTitle/CategoryTitle.tsx"
import LeftRightIcon from "../LeftRightIcon/LeftRightIcon.tsx"
import Button from "../Button/Button.tsx"
import styles from "./MainSection.module.css"
import { AudioClip, Podcast } from "../../Types.tsx"
import useFetchData from "../../hooks/useFetchData.tsx"
import Loading from "../Loading/Loading.tsx"

type Props = {
  playPodcast: (podcast: Podcast) => void;
};

const API_URL = 'https://api.audioboom.com/audio_clips';

function MainSection({playPodcast}: Props) {
  const { data: audioClips, isLoading } = useFetchData(API_URL, 5);

  function handleClick(clips: AudioClip) {
    playPodcast({
        title: clips.title,
        description: clips.description,
        photo: clips.channel.urls.logo_image.original,
        audio: clips.urls.high_mp3,
    })
  }

  const filteredClips = audioClips.filter(clip => clip.description && clip.channel.urls.logo_image.original);

  const uniqueChannelIds = new Set();
  const uniqueClips: AudioClip[] = [];
  
  filteredClips.forEach(clip => {
    if (!uniqueChannelIds.has(clip.channel.id)) {
      uniqueChannelIds.add(clip.channel.id);
      uniqueClips.push(clip);
    }
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
      <main className={styles.main}>
          <section className={styles.section}>
              <div className={styles.categoryTitleGroup}>
                <div className={styles.categoryTitle}>
                  <AvatarIcon />
                  <CategoryTitle 
                    title="Listen Again" subtitle="Sufyan Ali">
                  </CategoryTitle>
                </div>
                <div className={styles.buttonGroup}>
                  <LeftRightIcon />
                </div>
              </div>  
              <ListenAgain handleClick={handleClick} filteredClips={uniqueClips.slice(0,5)} />
          </section>
          <section className={styles.section}>
              <div className={styles.categoryTitleGroup}>
                <div className={styles.categoryTitle}>
                  <AvatarIcon />
                  <CategoryTitle 
                    title="The Ben Davis & Kelly K Show" subtitle="SIMILAR TO">
                  </CategoryTitle>
                </div>
                <div className={styles.buttonGroup}>
                  <LeftRightIcon />
                </div>
              </div>  
              <ArtistCard handleClick={handleClick} filteredClips={uniqueClips.slice(5,10)}/>
          </section>
          <section className={styles.section}>
              <div className={styles.categoryTitleGroup}>
                <div className={styles.categoryTitle}>
                  <AvatarIcon />
                    <CategoryTitle 
                      title="Quick picks">
                    </CategoryTitle>
                  </div>
                  <div className={styles.buttonGroup}>
                    <Button className={styles.button}>
                      Play all
                    </Button>
                    <LeftRightIcon />
                  </div>
                </div> 
              <SongCard handleClick={handleClick} filteredClips={uniqueClips.slice(10,26)}/>
          </section>
          <section className={styles.section}>
              <div className={styles.categoryTitleGroup}>
                <div className={styles.categoryTitle}>
                  <AvatarIcon />
                    <CategoryTitle 
                      title="Recommended podcasts">
                    </CategoryTitle>
                  </div>
                  <div className={styles.buttonGroup}>
                    <LeftRightIcon />
                  </div>
                </div> 
              <AlbumCard handleClick={handleClick} filteredClips={uniqueClips.slice(26,31)}/>
          </section>
      </main>
  )
}

export default MainSection