import Button from "./UI/Button.js";
import styles from "./UI/Button.module.css";
const btnClin = { display: "block", margin: "5px auto" };
function BtnClinGallery({ clin }) {
  const handelClin = () =>
    window.confirm("Are you sure you want to delete the entire gallery?")
      ? clin()
      : null;
  return (
    <Button className={styles.btnClinGalery} onClick={handelClin}>
      Clin Gellery
    </Button>
  );
}
export default BtnClinGallery;
