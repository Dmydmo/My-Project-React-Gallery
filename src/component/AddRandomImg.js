import Button from './UI/Button';
import styles from './AddRandomImg.module.css';
function AddRandomImg({ isLoading, handleAddRandom }) {
  return (
    <Button
      className={styles.btnAddRandomImg}
      onClick={handleAddRandom}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className={styles.spinner}></span>
      ) : (
        'Add random picture'
      )}
    </Button>
  );
}
export default AddRandomImg;
