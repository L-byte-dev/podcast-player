import { Dispatch, FormEvent, useState } from "react";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import CreatePlaylistForm from "../CreatePlaylistForm/CreatePlaylistForm";
import styles from "./CreatePlaylist.module.css";
import Card from "../Card/Card";
import { Playlist } from "../../Types.tsx"

type Props = {
    setIsFormVisible: Dispatch<React.SetStateAction<boolean>>;
    setPlaylists: Dispatch<React.SetStateAction<any[]>>; 
    playlists: Playlist[]; 
};

function CreatePlaylist({ setIsFormVisible, setPlaylists, playlists }: Props) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: ''
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setPlaylists([...playlists, formData]);
        setIsFormVisible(false); 
    }

    return (
        <section className={styles.section}>
            <div className={styles.categoryTitle}>
                <CategoryTitle title="Create your playlist" />
            </div>
            <div className={styles.content}>
                <div className={styles.formContainer}>
                    <CreatePlaylistForm 
                        formData={formData} 
                        setFormData={setFormData} 
                        handleSubmit={handleSubmit}
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
