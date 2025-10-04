import styles from './Menu.module.css';
import Button from '../UI/Button';
function Menu({ onToggleMenu, onClear }) {
  const handleClear = () =>
    window.confirm('Are you sure you want to delete the entire gallery?')
      ? onClear()
      : null;

  const testFunction = () => {
    alert('click from menu');
  };

  return (
    <div className={styles.menuContainer} onClick={onToggleMenu}>
      <Button
        className={`${styles.btnMenu} ${styles.btn}`}
        onClick={handleClear}
      >
        Clear Gallery
      </Button>
      <Button
        className={`${styles.btnMenu} ${styles.btn}`}
        onClick={testFunction}
      >
        Second Btn
      </Button>
      <Button
        className={`${styles.btnMenu} ${styles.btn}`}
        onClick={testFunction}
      >
        Fierst Btn
      </Button>
    </div>
  );
}
export default Menu;
