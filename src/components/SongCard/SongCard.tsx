import { AudioClip } from "../../Types";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./SongCard.module.css";

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

function SongCard({handleClick, filteredClips}: Props) {
     
  return (
    <div className={styles.songCardContainer}>
        {filteredClips.map((clips) => {
        const truncatedTitle = truncateText(clips.title, MAX_TITLE_LENGTH);
        const truncatedDescription = truncateText(clips.description, MAX_DESCRIPTION_LENGTH); 
        return (
          <Card key={clips.id} title={truncatedTitle} subtitle= {truncatedDescription} className={styles.songCard}>
            <Button className={styles.songPictureButton} onClick={() => handleClick(clips)}>  
              <img
                className={styles.songPicture}
                loading="lazy"
                src={clips.channel.urls.logo_image.original}
              />
            </Button>
          </Card>                            
        );
      })}
    </div>
  )
}

export default SongCard;