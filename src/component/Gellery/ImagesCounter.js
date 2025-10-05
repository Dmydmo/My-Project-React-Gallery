import styles from './ImagesCounter.module.css';
function ImagesCounter({ counter }) {
  return <div className={styles.counter}>{counter}</div>;
}
export default ImagesCounter;
