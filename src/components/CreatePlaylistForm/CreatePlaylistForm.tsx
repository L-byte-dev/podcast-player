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
    setIsFormVisible: Dispatch<React.SetStateAction<boolean>>;
};

function CreatePlaylistForm({ formData, setFormData, setIsFormVisible }: Props) {

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsFormVisible(false); 
    }

    const isFormComplete = formData.title && formData.description && formData.imageUrl;

    return (
        <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">

            <Input 
                label="Título" 
                name="title" 
                id="title" 
                type="text" 
                placeholder="Título" 
                value={formData.title} 
                onChange={handleChange}
                className={styles.input}
            />
            <Input 
                label="Descripción" 
                name="description" 
                id="description" 
                type="text" 
                placeholder="Descripción" 
                value={formData.description} 
                onChange={handleChange}
                className={styles.input}
            />
            <Input 
                label="Imagen (URL)" 
                name="imageUrl" 
                id="image" 
                type="text" 
                placeholder="Imagen (URL)" 
                value={formData.imageUrl} 
                onChange={handleChange}
                className={styles.input}
            />
            <Button content="Agregar Playlist" type="submit" disabled={!isFormComplete} className={styles.button}/>
        </form>
    );
}

export default CreatePlaylistForm;
