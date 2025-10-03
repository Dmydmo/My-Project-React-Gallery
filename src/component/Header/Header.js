import { useEffect, useRef } from 'react';
import Menu from '../Menu';
import styles from './Header.module.css';
import MenuIcon from './MenuIcon';

function Header({ onToggleMenu, isOpenMenu, onClear }) {
  const menuRef = useRef(null);
  useEffect(() => {
    if (!isOpenMenu) return;
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onToggleMenu();
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [isOpenMenu, onToggleMenu]);

  return (
    <header>
      <div className={styles.divMenu} ref={menuRef}>
        {!isOpenMenu ? (
          <MenuIcon onClick={onToggleMenu} />
        ) : (
          <Menu onToggleMenu={onToggleMenu} onClear={onClear} />
        )}
      </div>
      <h1> My Gallery</h1>
    </header>
  );
}
export default Header;
