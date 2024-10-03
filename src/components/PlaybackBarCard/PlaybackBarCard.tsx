import styles from "./PlaybackBarCard.module.css"
import Card from "../Card/Card"
import { Podcast } from "../../Types";

type Props = {
    currentPodcast: Podcast;
}

function PlaybackBarCard({currentPodcast}: Props) {

    return(
        <Card 
            title={currentPodcast.title} 
            subtitle={currentPodcast.description} 
            className={styles.playbackBarCard}>
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