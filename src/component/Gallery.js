import { RiDeleteBin2Line, RiDownload2Line } from 'react-icons/ri';
import styles from './Gallery.module.css';
import ClearGalleryBtn from './ClearGalleryBtn';
import Title from './Title';

function Gallery({ cards, onDelete, onClear, changeTitle }) {
  const { url, title } = cards;
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

            <button
              type="button"
              className={`${styles.btnIcon} ${styles.btnDelImg}`}
              aria-label="Delete image"
              onClick={onDelete}
            >
              <RiDeleteBin2Line aria-hidden="true" focusable="false" />
            </button>

            <button
              type="button"
              className={`${styles.btnIcon} ${styles.btnDownloadImg}`}
              aria-label="Download image"
              onClick={() => handleDownload(url, title)}
            >
              <RiDownload2Line aria-hidden="true" focusable="false" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Gallery;
