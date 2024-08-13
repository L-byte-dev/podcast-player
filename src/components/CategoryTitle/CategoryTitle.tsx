import styles from "./CategoryTitle.module.css";

type Props = {
    title: string;
    subtitle?: string;
};
  
function CategoryTitle({ title, subtitle}: Props) {
    return (
        <div className={styles.categoryTitleInner}>
            <div className={styles.container}>
                <div className={styles.subtitle}>
                    {subtitle}
                </div>
                <h1 className={styles.title}>
                    {title}
                </h1>
            </div>
        </div>
    );
}

export default CategoryTitle;