import styles from './EmptyFilter.module.css';

function EmptyFilter({ query }) {
  return (
    <div className={styles.divEmpty}>
      <h3 className={styles.h3}>фото с названием {query} не найдены</h3>
    </div>
  );
}
export default EmptyFilter;
