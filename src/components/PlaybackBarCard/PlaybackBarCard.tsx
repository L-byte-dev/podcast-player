import styles from "./PlaybackBarCard.module.css"
import Card from "../Card/Card"
import { Podcast } from "../../Types";

type Props = {
    currentPodcast: Podcast;
}

const MAX_TITLE_LENGTH = 40; 
const MAX_DESCRIPTION_LENGTH = 40; 

function truncateText(text: string, maxLength: number) {
    if (text === undefined || text === null) {
        return ''; 
      }
      return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;}

function PlaybackBarCard({currentPodcast}: Props) {
    const truncatedTitle = truncateText(currentPodcast.title, MAX_TITLE_LENGTH);
    const truncatedDescription = truncateText(currentPodcast.description, MAX_DESCRIPTION_LENGTH);     
    return(
        <Card title={truncatedTitle} subtitle={truncatedDescription} className={styles.playbackBarCard}>
            <img
                className={styles.songPicture}
                loading="lazy"
                alt="Podcast cover"
                src={currentPodcast.photo}
            />
        </Card>
    )
}

export default PlaybackBarCard