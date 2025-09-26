import { useState } from 'react';
import styles from './ImageForm.module.css';
import Button from './UI/Button';

function ImageForm({ addImg }) {
  const [datas, setDatas] = useState({ url: '', title: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatas((d) => ({ ...d, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addImg(datas.url, datas.title);
    setDatas({ url: '', title: '' });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.cardTitle}>Add image</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="url"
          value={datas.url}
          onChange={handleChange}
          placeholder="Enter URL of image"
        />
        <input
          className={styles.input}
          type="text"
          name="title"
          value={datas.title}
          onChange={handleChange}
          placeholder="Enter image title"
        />
        <Button className={styles.btnAddForm} type="submit">
          Add image
        </Button>
      </form>
    </div>
  );
}

export default ImageForm;
