import { useContext } from 'react';
import { AudioClip } from '../../Types';
import Card from '../Card/Card';
import styles from './AlbumCard.module.css';
import { PodcastContext } from '../../context/PlayPodcastProvider';

type Props = {
  handleClick: (clips: AudioClip) => void;
  filteredClips: AudioClip[];
};

function AlbumCard({ handleClick, filteredClips }: Props) {
  const podcastContext = useContext(PodcastContext);

  return (
    <div className={styles.albumCardContainer}>
      {filteredClips.map((clips) => {
        const isCurrentPodcast =
        podcastContext?.currentPodcast?.audio === clips.urls.high_mp3;

        return (
          <Card
            key={clips.id}
            title={clips.title}
            subtitle={clips.description}
            className={styles.albumCard}
          >
            <div
              className={styles.pictureContainer}
            >
              <img
                className={styles.albumPicture}
                onClick={() => handleClick(clips)}
                loading="lazy"
                src={clips.channel.urls.logo_image.original}
                role="button"
              />
              <img
                className={styles.playIcon}
                onClick={() => {
                  if (isCurrentPodcast) {
                    podcastContext?.togglePlayPause();
                  } else {
                    handleClick(clips);
                  }
                }}
                loading="lazy"
                alt={
                  isCurrentPodcast && podcastContext?.isPlaying
                    ? 'Pause'
                    : 'Play'
                }
                src={
                  isCurrentPodcast && podcastContext?.isPlaying
                    ? './pause-icon.svg'
                    : './play-icon.svg'
                }
                role="button"
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default AlbumCard;