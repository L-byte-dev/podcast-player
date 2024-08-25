import { Dispatch, useState } from "react";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import CreatePlaylistForm from "../CreatePlaylistForm/CreatePlaylistForm";
import styles from "./CreatePlaylist.module.css";
import Card from "../Card/Card";

type Props = {
    setIsFormVisible: Dispatch<React.SetStateAction<boolean>>;
};

function CreatePlaylist({ setIsFormVisible }: Props) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: ''
    });

    return (
        <section className={styles.section}>
            <div className={styles.categoryTitle}>
                <CategoryTitle title="Creá tu playlist" />
            </div>
            <div className={styles.content}>
                <div className={styles.formContainer}>
                    <CreatePlaylistForm 
                        formData={formData} 
                        setFormData={setFormData} 
                        setIsFormVisible={setIsFormVisible}
                    />
                </div>
                <div className={styles.cardContainer}>
                    <Card title={formData.title} subtitle={formData.description} className={styles.playlistCard}>
                        <img
                            className={styles.playlistPicture}
                            src={formData.imageUrl}
                            alt="Playlist"
                        />
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default CreatePlaylist;
