import AlbumCard from "./AlbumCard"
import styles from "./MainSection.module.css"
import SongCard from "./SongCard"

function MainSection() {
    return (
        <main className={styles.main}>
            <SongCard />
            <AlbumCard />
        </main>
    )
}

export default MainSection