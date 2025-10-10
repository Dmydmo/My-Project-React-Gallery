import { useState } from 'react';
import styles from './Search.module.css';

function Search({ changeFilterGallery }) {
  const [searchTerm, setSearchTerm] = useState('');

  const getSearch = (e) => setSearchTerm(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      changeFilterGallery(searchTerm);
    } else if (e.key === 'Escape') {
      setSearchTerm('');
      changeFilterGallery('');
    }
  };
  const clearInput = () => {
    setSearchTerm('');
    changeFilterGallery('');
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={getSearch}
      onKeyDown={handleKeyDown}
      onBlur={clearInput}
    />
  );
}
export default Search;
