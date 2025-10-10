import BtnDownloadAll from './BtnDownloadAll';
import ImagesCounter from './ImagesCounter';
import Search from './Search';
import styles from './ToolBar.module.css';

function ToolBar({ toRender, changeFilterGallery }) {
  return (
    <div className={styles.topBar}>
      <BtnDownloadAll cards={toRender} />
      <ImagesCounter counter={toRender.length} />
      <Search changeFilterGallery={changeFilterGallery} />
    </div>
  );
}
export default ToolBar;
