import { Component } from "react";
import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
    render() {
        return (
            <li className={styles.ImageGalleryItem}>
                <img src="" alt="" />
            </li>
        )
    }
}

export default ImageGalleryItem;