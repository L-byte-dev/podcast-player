import { AudioClip } from "../../Types";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ListenAgain.module.css";

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

function ListenAgain({handleClick, filteredClips}: Props) {

  return (
    <div className={styles.listenAgainContainer}>
        {filteredClips.map((clips) => {
            const truncatedTitle = truncateText(clips.title, MAX_TITLE_LENGTH);
            const truncatedDescription = truncateText(clips.description, MAX_DESCRIPTION_LENGTH);     
            return (
                <Card key={clips.id} title={truncatedTitle} subtitle={truncatedDescription} className={styles.listenAgainCard}>
                    <Button className={styles.playlistPicture} onClick={() => handleClick(clips)}>  
                      <img
                          className={styles.picture}
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

export default ListenAgain;