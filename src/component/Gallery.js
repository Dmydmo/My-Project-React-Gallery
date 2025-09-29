import { RiDeleteBin2Line, RiDownload2Line } from 'react-icons/ri';
import styles from './Gallery.module.css';
import ClearGalleryBtn from './ClearGalleryBtn';
import Title from './Title';

function Gallery({ cards, onDelete, onClear, changeTitle }) {
  const handleDownload = async (src, filename = 'image') => {
    try {
      const res = await fetch(src, { mode: 'cors' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = objectUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();

      URL.revokeObjectURL(objectUrl);
    } catch (err) {
      const a = document.createElement('a');
      a.href = src;
      a.target = '_blank';
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  };

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
              onClick={() => onDelete(card.id)}
            >
              <RiDeleteBin2Line aria-hidden="true" focusable="false" />
            </button>

            <button
              type="button"
              className={`${styles.btnIcon} ${styles.btnDownloadImg}`}
              aria-label="Download image"
              onClick={() => handleDownload(card.url, card.title || 'image')}
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
