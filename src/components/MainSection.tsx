import AlbumCard from "./AlbumCard"
import SongCard from "./SongCard"
import ArtistCard from "./ArtistCard"
import styles from "./MainSection.module.css"


function MainSection() {
    return (
        <main className={styles.main}>
            <ArtistCard />
            <SongCard />
            <AlbumCard />
        </main>
    )
}

export default MainSection