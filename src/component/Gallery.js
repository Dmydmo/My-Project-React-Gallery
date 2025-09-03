import { RiDeleteBin2Line } from "react-icons/ri";
import styles from "./Gallery.module.css";
import BtnClinGallery from "./BtnClinGallery";

function Gallery({ urls, onDelete, clin }) {
  if (urls.length === 0) {
    return null;
  }
  return (
    <div>
      <BtnClinGallery clin={clin} />
      <div className={styles.galleryContainer}>
        {urls.map((url) => (
          <div className={styles.galleryItem} key={url}>
            <img className={styles.img} src={url} alt="user added" />
            <RiDeleteBin2Line
              className={styles.btnDelImg}
              title="Del img"
              onClick={() => onDelete(url)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Gallery;
