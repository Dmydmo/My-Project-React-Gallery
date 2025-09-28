import { useEffect, useRef } from 'react';
import Menu from '../Menu';
import IconBtn from '../UI/IconBtn';
import styles from './Header.module.css';

function Header({ onToggleMenu, isOpenMenu }) {
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
          <IconBtn
            icon="menu"
            title="Menu"
            classKey="headerMenu"
            onClick={onToggleMenu}
          />
        ) : (
          <Menu onToggleMenu={onToggleMenu} />
        )}
      </div>
      <h1> My Gallery</h1>
    </header>
  );
}
export default Header;
