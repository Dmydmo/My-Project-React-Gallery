import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ImageForm from './component/ImageForm';
import Gallery from './component/Gallery';
import AddRandomImg from './component/AddRandomImg';
import Header from './component/Header/Header';

function App() {
  const [cards, setcards] = useState([]);
  const [isOpenMenu, setOpenMenu] = useState(false);

  const onToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  useEffect(() => {
    const saved = localStorage.getItem('gallery');
    if (saved) {
      setcards(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('gallery', JSON.stringify(cards));
  }, [cards]);

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
    setcards((cards) =>
      cards.map((card) => (card.id === id ? { ...card, title: draft } : card))
    );
  };

  const addImg = (url, title = '') => {
    const newUriObj = {
      url,
      id: uuidv4(),
      title,
    };
    setcards([newUriObj, ...cards]);
  };

  const onDelete = (id) => {
    setcards(cards.filter((card) => card.id !== id));
  };

  const clearGallery = () => {
    setcards([]);
  };

  return (
    <div className="App">
      <Header
        onToggleMenu={onToggleMenu}
        isOpenMenu={isOpenMenu}
        onClear={clearGallery}
      />

      <ImageForm addImg={addImg} />
      <AddRandomImg handleAddRandom={handleAddRandom} />
      <Gallery
        changeTitle={changeTitleInGallery}
        cards={cards}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
