import { HiOutlineMenu } from 'react-icons/hi';
import styles from './MenuIcon.module.css';
function MenuIcon({ onClick }) {
  return (
    <button type="button" className={styles.menuBtn} onClick={onClick}>
      <HiOutlineMenu className={styles.menuSvg} />
    </button>
  );
}
export default MenuIcon;
