import { RiDeleteBin2Line } from "react-icons/ri";

import styles from "./Gallery.module.css";
import ClearGalleryBtn from "./ClearGalleryBtn";
import Title from "./UI/Title";

function Gallery({ urls, onDelete, clin, changeTitle }) {
  if (urls.length === 0) {
    return null;
  }
  return (
    <div>
      <ClearGalleryBtn clin={clin} />
      <div className={styles.galleryContainer}>
        {urls.map((url) => (
          <div className={styles.galleryItem} key={url.id}>
            <img className={styles.img} src={url.url} alt="user added" />
            <Title
              onSubmit={(draft) => changeTitle(url.id, draft)}
              value={url.title}
              title="Chenge title"
            />

            <RiDeleteBin2Line
              className={styles.btnDelImg}
              title="Del img"
              onClick={() => onDelete(url.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Gallery;
