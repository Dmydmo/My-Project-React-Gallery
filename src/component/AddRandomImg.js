import Button from "./UI/Button";
import styles from "./UI/Button.module.css";

function AddRandonImg({ handleAddRandom }) {
  return (
    <Button className={styles.btnAddRandomImg} onClick={handleAddRandom}>
      Add rendom picture
    </Button>
  );
}
export default AddRandonImg;
