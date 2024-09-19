import { AudioClip, Podcast } from "../../Types";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./AlbumCard.module.css";

type Props = {
  handleClick: (clips: AudioClip) => void;
  filteredClips: AudioClip[];
};

const MAX_TITLE_LENGTH = 20; 
const MAX_DESCRIPTION_LENGTH = 20; 

function truncateText(text: string, maxLength: number) {
  if (text === undefined || text === null) {
    return ''; 
  }
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

function AlbumCard({handleClick, filteredClips}: Props) {

  return (
    <div className={styles.albumCardContainer}>
      {filteredClips.map((clips) => {
        const truncatedTitle = truncateText(clips.title, MAX_TITLE_LENGTH);
        const truncatedDescription = truncateText(clips.description, MAX_DESCRIPTION_LENGTH);     
        return (
          <Card key={clips.id} title={truncatedTitle} subtitle={truncatedDescription} className={styles.albumCard}>
            <Button className={styles.pictureContainer} onClick={() => handleClick(clips)}>
              <img
                  className={styles.albumPicture}
                  loading="lazy"
                  src={clips.channel.urls.logo_image.original}
              />
              <img
                  className={styles.moreIcon}
                  loading="lazy"
                  src="./more-vert-icon.svg"
                  />
              <img
                  className={styles.playIcon}
                  loading="lazy"
                  src="./playIcon.svg"
              />
            </Button>
          </Card>                            
        );
      })}
    </div>
  )
}

export default AlbumCard;