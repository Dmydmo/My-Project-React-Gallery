import styles from './Search.module.css';

function Search({ setQuery, query, changeFilterGallery }) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => e.key === 'Escape' && setQuery('')}
    />
  );
}
export default Search;
