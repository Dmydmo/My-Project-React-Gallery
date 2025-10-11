import BtnDownloadAll from './BtnDownloadAll';
import ImagesCounter from './ImagesCounter';
import Search from './Search';
import styles from './ToolBar.module.css';

function ToolBar({ toRender, setQuery, query, changeFilterGallery }) {
  return (
    <div className={styles.topBar}>
      <BtnDownloadAll cards={toRender} />
      <ImagesCounter counter={toRender.length} />
      <Search
        setQuery={setQuery}
        query={query}
        changeFilterGallery={changeFilterGallery}
      />
    </div>
  );
}
export default ToolBar;
