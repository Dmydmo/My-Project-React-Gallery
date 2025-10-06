import { RiDeleteBin2Line, RiDownload2Line } from 'react-icons/ri';
import styles from './Gallery.module.css';
import BtnDownloadAll from './BtnDownloadAll';
import Title from './Title';
import IconButton from '../UI/IconnButton';
import EmptyGallery from './EmptyGallery';
import SowerCountImage from './ImagesCounter';

function Gallery({ cards, isLoading, onDelete, changeTitle }) {
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
      {cards.length > 0 ? (
        <div className={styles.topBar}>
          <BtnDownloadAll cards={cards} />
          <SowerCountImage counter={cards.length} />
        </div>
      ) : (
        <EmptyGallery />
      )}

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

            <IconButton
              icon={<RiDeleteBin2Line aria-hidden="true" focusable="false" />}
              onClick={() => onDelete(card.id)}
              aria-label="Delete image"
              className={`${styles.actionBtn} ${styles.btnDelImg}`}
            />
            <IconButton
              aria-hidden="true"
              focusable="false"
              icon={<RiDownload2Line />}
              className={`${styles.actionBtn} ${styles.btnDownloadImg}`}
              aria-label="Download image"
              onClick={() =>
                handleDownload(card.url, (card.title || 'image') + '.jpg')
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Gallery;
