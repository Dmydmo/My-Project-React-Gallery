import { useState } from "react";
import styles from "./ImageForm.module.css";
import Button from "./UI/Button";

function ImageForm({ addImg }) {
  const [datas, setDatas] = useState({ url: "", title: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDatas((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addImg(datas.url, datas.title);
    setDatas({ url: "", title: "" });
  };
  return (
    <div className={styles.formContainer}>
      <form className=" form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="url"
          value={datas.url}
          onChange={handleChange}
          placeholder="Enter  url of image"
        />
        <input
          type="text"
          name="title"
          value={datas.title}
          onChange={handleChange}
          placeholder="Enter name of image"
        />
        <Button className={styles.btnAddForm} type="submit">
          Add imag
        </Button>
      </form>
    </div>
  );
}
export default ImageForm;
