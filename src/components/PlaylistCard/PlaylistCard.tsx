import styles from "./PlaylistCard.module.css";
import Card from "../Card/Card";
import { Playlist } from "../../Types";

type Props = {
    playlists: Playlist[];
};

function PlaylistCard({ playlists }: Props) {
    return (
        <>
            {playlists.map((playlist) => (
                <Card 
                    key={`${playlist.title}-${playlist.description}`} 
                    title={playlist.title} 
                    subtitle={playlist.description} 
                    className={styles.playlistCard}
                >
                    <img 
                        className={styles.playlistPicture} 
                        loading="lazy" 
                        alt="Playlist picture" 
                        src={playlist.imageUrl} 
                    />
                </Card>   
            ))}
        </>
    );
}

export default PlaylistCard;
