import styles from './Menu.module.css';
function Menu({ onToggleMenu }) {
  return (
    <div className={styles.menuContainer} onClick={onToggleMenu}>
      <ul>
        <li>Download all (ZIP)</li>
        <li className={styles.inProject}>Select images</li>
        <li className={styles.inProject}>Filters</li>
      </ul>
    </div>
  );
}
export default Menu;
