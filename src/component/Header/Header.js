import IconBtn from '../UI/IconBtn';
import './Header.module.css';

function Header({ onToggle }) {
  return (
    <header>
      <div className="divMenu">
        <IconBtn
          icon="menu" // или "menu"
          title="Menu"
          classKey="headerMenu"
          onClick={onToggle}
        />
      </div>
      <h1> My Gallery</h1>
    </header>
  );
}
export default Header;
