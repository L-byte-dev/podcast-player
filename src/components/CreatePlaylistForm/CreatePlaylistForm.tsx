import { ChangeEvent, Dispatch, FormEvent } from "react";
import styles from "./CreatePlaylistForm.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

type Props = {
    formData: {
        title: string;
        description: string;
        imageUrl: string;
    };
    setFormData: Dispatch<React.SetStateAction<{
        title: string;
        description: string;
        imageUrl: string;
    }>>;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void; 
};

function CreatePlaylistForm({ formData, setFormData, handleSubmit }: Props) {

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const isFormComplete = formData.title && formData.description && formData.imageUrl;

    return (
        <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">

            <Input 
                label="Title" 
                name="title" 
                id="title" 
                type="text" 
                placeholder="Title" 
                value={formData.title} 
                onChange={handleChange}
                className={styles.input}
            />
            <Input 
                label="Description" 
                name="description" 
                id="description" 
                type="text" 
                placeholder="Description" 
                value={formData.description} 
                onChange={handleChange}
                className={styles.input}
            />
            <Input 
                label="Image (URL)" 
                name="imageUrl" 
                id="image" 
                type="text" 
                placeholder="Image (URL)" 
                value={formData.imageUrl} 
                onChange={handleChange}
                className={styles.input}
            />
            <Button type="submit" disabled={!isFormComplete} className={styles.button}>
                Add Playlist
            </Button>
        </form>
    );
}

export default CreatePlaylistForm;
