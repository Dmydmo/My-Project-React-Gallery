import { RiCameraLine } from 'react-icons/ri';
import styles from './EmptyGelery.module.css';
function EmptyGellery() {
  return (
    <div className={styles.divEmpty}>
      <h3 className={styles.Title}>No images yet</h3>
      <RiCameraLine className={styles.Icon} />
    </div>
  );
}
export default EmptyGellery;
