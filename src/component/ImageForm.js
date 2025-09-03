import { useState } from "react";
import styles from "./ImageForm.module.css";
import Button from "./UI/Button";

function ImageForm({ addImg }) {
  const [text, settext] = useState("");

  const handleChange = (event) => settext(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    addImg(text);
    settext("");
  };
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter yous url"
        />
        <Button className={styles.btnAddForm} type="submit">
          Add imag
        </Button>
      </form>
    </div>
  );
}
export default ImageForm;
