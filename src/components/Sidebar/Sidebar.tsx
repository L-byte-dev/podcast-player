import { Dispatch } from "react";
import styles from "./Sidebar.module.css";
import Button from "../Button/Button";
import { Playlist } from "../../Types";
import PlaylistCard from "../PlaylistCard/PlaylistCard";

type Props = {
    isOpen: boolean | undefined;
    setIsFormVisible: Dispatch<React.SetStateAction<boolean>>;
    playlists: Playlist[];
};

function Sidebar({ isOpen, setIsFormVisible, playlists }: Props) {

    function handleClick() {
        setIsFormVisible(true);
    }
    
    return (
        <section className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
            <div className={styles.sidebarExpandedAndCollapsed}>
                <div className={styles.sidebarContent}>
                    <div className={styles.menuItems}>
                        <div className={styles.item}>
                            <img
                            className={styles.iconForMenu}
                            loading="lazy"
                            alt="Home icon"
                            src="./home-icon.svg"
                            />
                            <div className={styles.homeParent}>
                                <a className={styles.home}>Home</a>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img
                            className={styles.iconForMenu}
                            loading="lazy"
                            alt="Explore icon"
                            src="./explore-icon.svg"
                            />
                            <div className={styles.homeParent}>
                                <a className={styles.home}>Explore</a>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <img
                            className={styles.iconForMenu}
                            loading="lazy"
                            alt="Library icon"
                            src="./library-icon.svg"
                            />
                            <div className={styles.homeParent}>
                                <a className={styles.home}>Library</a>
                            </div>
                        </div>
                    </div>
                        {isOpen && (
                            <div className={styles.playlistItems}>
                                <div className={styles.buttonContainer}>
                                    <Button onClick={handleClick} className={styles.button}>
                                        <img
                                            className={styles.iconForMenu}
                                            loading="lazy"
                                            alt="New playlist icon"
                                            src="./new-playlist-icon.svg"
                                        />
                                        New playlist
                                    </Button>   
                                </div>
                                <div className={styles.playlistScrollContainer}>
                                    <PlaylistCard playlists={playlists} />
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </section>
    )
}

export default Sidebar
