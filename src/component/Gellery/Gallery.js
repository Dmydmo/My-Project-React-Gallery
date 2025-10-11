import { RiDeleteBin2Line, RiDownload2Line } from 'react-icons/ri';
import styles from './Gallery.module.css';
import Title from './Title';
import IconButton from '../UI/IconnButton';
import EmptyGallery from './EmptyGallery';
import ToolBar from './ToolBar/ToolBar';
import EmptyFilter from './EmptyFilter';

function Gallery({
  toRender,
  onDelete,
  changeTitle,
  clickLightBox,
  changeFilterGallery,
  query,
  setQuery,
}) {
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

  if (toRender.length === 0 && query !== '') {
    return (
      <div>
        <ToolBar
          changeFilterGallery={changeFilterGallery}
          toRender={toRender}
          setQuery={setQuery}
          query={query}
        />
        <EmptyFilter query={query} />
      </div>
    );
  }

  return (
    <div>
      {toRender.length > 0 ? (
        <ToolBar
          changeFilterGallery={changeFilterGallery}
          setQuery={setQuery}
          toRender={toRender}
          query={query}
        />
      ) : (
        <EmptyGallery />
      )}

      <div className={styles.galleryContainer}>
        {toRender.map((card) => (
          <div className={styles.galleryItem} key={card.id}>
            <img
              onClick={() => clickLightBox(card.id)}
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
