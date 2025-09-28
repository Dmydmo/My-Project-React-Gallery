import Button from './UI/Button';
import styles from './UI/Button.module.css';

function AddRandomImg({ handleAddRandom }) {
  return (
    <Button className={styles.btnAddRandomImg} onClick={handleAddRandom}>
      Add random picture
    </Button>
  );
}
export default AddRandomImg;
