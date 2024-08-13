import styles from "./PlaybackBarCard.module.css"
import Card from "../Card/Card"

function PlaybackBarCard() {
    return(
        <Card title="Like a Rolling Stone" subtitle="Bob Dylan • 47M views • 306K likes" className={styles.playbackBarCard}>
            <img
                className={styles.songPicture}
                loading="lazy"
                alt=""
                src="https://lh3.googleusercontent.com/TL2EK5rqsv4nf2Fe3keiVfvTALiMJmPmTjhtfPH_6P511Lan2gTIBNCwGv1B0jFuC6omHpPaKtd_F2A=w544-h544-l90-rj"
            />
        </Card>
    )
}

export default PlaybackBarCard