import Button from './UI/Button.js';
import styles from './UI/Button.module.css';
function ClearGalleryBtn({ onClear }) {
  const handleClear = () =>
    window.confirm('Are you sure you want to delete the entire gallery?')
      ? onClear()
      : null;
  return (
    <Button className={styles.btnClearGallery} onClick={handleClear}>
      Clear Gallery
    </Button>
  );
}
export default ClearGalleryBtn;
