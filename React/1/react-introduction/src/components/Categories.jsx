import styles from './categories.module.css';

function Category({title, imageUrl}){
    return(
        <div className={styles["title"]}>
            <img src={imageUrl} alt="no" />
            <h3>{title}</h3>
        </div>
    )
}

export default Category;