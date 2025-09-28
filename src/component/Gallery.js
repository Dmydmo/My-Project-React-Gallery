import { RiDeleteBin2Line, RiDownload2Line } from 'react-icons/ri';
import styles from './Gallery.module.css';
import ClearGalleryBtn from './ClearGalleryBtn';
import Title from './Title';

function Gallery({ urls, onDelete, onClear, changeTitle }) {
  if (urls.length === 0) {
    return null;
  }
  return (
    <div>
      <ClearGalleryBtn onClear={onClear} />
      <div className={styles.galleryContainer}>
        {urls.map((url) => (
          <div className={styles.galleryItem} key={url.id}>
            <img className={styles.img} src={url.url} alt="user added" />
            <Title
              onSubmit={(draft) => changeTitle(url.id, draft)}
              value={url.title}
              title="Change title"
            />

            <RiDeleteBin2Line
              className={styles.btnDelImg}
              title="Delete img"
              onClick={() => onDelete(url.id)}
            />
            <RiDownload2Line className={styles.btnDownloudImg} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Gallery;
