import { RiDeleteBin2Line, RiDownload2Line } from 'react-icons/ri';
import styles from './Gallery.module.css';
import ClearGalleryBtn from './ClearGalleryBtn';
import Title from './Title';

function Gallery({ cards, onDelete, onClear, changeTitle }) {
  const handleDownload = (src, filename = 'image') => {
    const a = document.createElement('a');
    a.href = src;
    a.download = filename; // браузер попытается скачать
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  if (cards.length === 0) {
    return null;
  }
  return (
    <div>
      <ClearGalleryBtn onClear={onClear} />
      <div className={styles.galleryContainer}>
        {cards.map((card) => (
          <div className={styles.galleryItem} key={card.id}>
            <img
              alt={card.title || 'Gallery image'}
              className={styles.img}
              src={card.url}
            />
            <Title
              onSubmit={(draft) => changeTitle(card.id, draft)}
              value={card.title}
              title="Change title"
            />

            <RiDeleteBin2Line
              className={`${styles.btnIcon} ${styles.btnDelImg}`}
              title="Delete img"
              onClick={() => onDelete(card.id)}
            />
            <RiDownload2Line
              onClick={() => handleDownload(card.url)}
              className={`${styles.btnIcon} ${styles.btnDownloadImg}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Gallery;
