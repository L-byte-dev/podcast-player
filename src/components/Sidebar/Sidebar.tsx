import { Dispatch } from "react";
import styles from "./Sidebar.module.css";
import Button from "../Button/Button";

type Props = {
    isOpen: boolean;
    setIsFormVisible: Dispatch<React.SetStateAction<boolean>>;
};

function Sidebar({ isOpen, setIsFormVisible }: Props) {

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
                                <Button 
                                    content="New playlist" 
                                    icon={
                                        <img
                                            className={styles.iconForMenu}
                                            loading="lazy"
                                            alt="Home icon"
                                            src="./home-icon.svg"
                                        />
                                    } 
                                    onClick={handleClick}
                                    className={styles.button}
                                />
                            </div>
                        )}
                </div>
            </div>
        </section>
    )
}

export default Sidebar
