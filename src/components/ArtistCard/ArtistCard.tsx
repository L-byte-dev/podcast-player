import { AudioClip, Podcast } from "../../Types";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ArtistCard.module.css"

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
      
function ArtistCard({handleClick, filteredClips}: Props) {

  return (
    <div className={styles.artistCardConainter}>
        {filteredClips.map((clips) => {
          const truncatedTitle = truncateText(clips.title, MAX_TITLE_LENGTH);
          const truncatedDescription = truncateText(clips.description, MAX_DESCRIPTION_LENGTH); 
          return (
            <Card key={clips.id} title={truncatedTitle} subtitle= {truncatedDescription} className={styles.artistCard} centeredText={true}>
              <Button className={styles.pictureContainer} onClick={() => handleClick(clips)}>
                <img
                    className={styles.artistPicture}
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

export default ArtistCard;