import AlbumCard from "../AlbumCard/AlbumCard.tsx"
import SongCard from "../SongCard/SongCard.tsx"
import ArtistCard from "../ArtistCard/ArtistCard.tsx"
import ListenAgain from '../ListenAgain/ListenAgain.tsx'
import AvatarIcon from "../AvatarIcon/AvatarIcon.tsx"
import CategoryTitle from "../CategoryTitle/CategoryTitle.tsx"
import LeftRightIcon from "../LeftRightIcon/LeftRightIcon.tsx"
import Button from "../Button/Button.tsx"
import styles from "./MainSection.module.css"


function MainSection() {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={styles.categoryTitleGroup}>
                  <div className={styles.categoryTitle}>
                    <AvatarIcon />
                    <CategoryTitle 
                      title="Listen Again" subtitle="Sufyan Ali">
                    </CategoryTitle>
                  </div>
                  <div className={styles.buttonGroup}>
                    <LeftRightIcon />
                  </div>
                </div>  
                <ListenAgain />
            </section>
            <section className={styles.section}>
                <div className={styles.categoryTitleGroup}>
                  <div className={styles.categoryTitle}>
                    <AvatarIcon />
                    <CategoryTitle 
                      title="Kanye West" subtitle="SIMILAR TO">
                    </CategoryTitle>
                  </div>
                  <div className={styles.buttonGroup}>
                    <LeftRightIcon />
                  </div>
                </div>  
                <ArtistCard />
            </section>
            <section className={styles.section}>
                <div className={styles.categoryTitleGroup}>
                  <div className={styles.categoryTitle}>
                    <AvatarIcon />
                      <CategoryTitle 
                        title="Quick picks" subtitle="START RADIO FROM A SONG">
                      </CategoryTitle>
                    </div>
                    <div className={styles.buttonGroup}>
                      <Button content="Play all"/>
                      <LeftRightIcon />
                    </div>
                  </div> 
                <SongCard />
            </section>
            <section className={styles.section}>
                <div className={styles.categoryTitleGroup}>
                  <div className={styles.categoryTitle}>
                    <AvatarIcon />
                      <CategoryTitle 
                        title="Recommended albums">
                      </CategoryTitle>
                    </div>
                    <div className={styles.buttonGroup}>
                      <LeftRightIcon />
                    </div>
                  </div> 
                <AlbumCard />
            </section>
        </main>
    )
}

export default MainSection