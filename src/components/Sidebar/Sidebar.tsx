import styles from "./Sidebar.module.css";

type Props = {
    isOpen: boolean;
};

function Sidebar({ isOpen }: Props) {
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
                            alt="Home icon"
                            src="./home-icon.svg"
                            />
                            <div className={styles.homeParent}>
                                <a className={styles.home}>Home</a>
                            </div>
                        </div>
                    </div>
                        {isOpen && (
                            <div className={styles.playlistItems}>
                                <button className={styles.button}>
                                    <img
                                        className={styles.iconForMenu}
                                        loading="lazy"
                                        alt="Home icon"
                                        src="./home-icon.svg"
                                    />
                                        New playlist
                                </button>
                            </div>
                        )}
                </div>
            </div>
        </section>
    )
}

export default Sidebar
