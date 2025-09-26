import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ImageForm from './component/ImageForm';
import Gallery from './component/Gallery';
import AddRandonImg from './component/AddRandomImg';
import Header from './component/Header/Header';

function App() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('gallery');
    if (saved) {
      setUrls(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('gallery', JSON.stringify(urls));
  }, [urls]);

  const handleAddRandom = async () => {
    try {
      const response = await fetch('https://picsum.photos/400/300');
      if (!response.ok) throw new Error('Network response was not ok');

      addImg(response.url);
    } catch (err) {
      console.error('Fetch random image failed:', err);
    }
  };

  const changeTitleInGallery = (id, draft) => {
    setUrls((urls) =>
      urls.map((url) => (url.id === id ? { ...url, title: draft } : url))
    );
  };

  const addImg = (url, title = '') => {
    const newUriObj = {
      url,
      id: uuidv4(),
      title,
    };
    setUrls([newUriObj, ...urls]);
  };

  const onDelete = (id) => {
    setUrls(urls.filter((url) => url.id !== id));
  };

  const clinGallery = () => {
    setUrls([]);
  };

  const onToggle = () => {
    alert('opan menu');
  };

  return (
    <div className="App">
      <Header onToggle={onToggle} />

      <ImageForm addImg={addImg} />
      <AddRandonImg handleAddRandom={handleAddRandom} />
      <Gallery
        changeTitle={changeTitleInGallery}
        urls={urls}
        clin={clinGallery}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
