import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ImageForm from './component/ImageForm';
import Gallery from './component/Gellery/Gallery';
import AddRandomImg from './component/AddRandomImg';
import Header from './component/Header/Header';

function App() {
  const [cards, setcards] = useState([]);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isLoadingRandom, setIsLoadingRandom] = useState(false);
  // const [isLoadingAll, setIsLoadingAll] = useState(false);

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
      setIsLoadingRandom(true);
      const response = await fetch('https://picsum.photos/1920/1080');
      if (!response.ok) throw new Error('Network response was not ok');
      addImg(response.url);
    } catch (err) {
      console.error('Fetch random image failed:', err);
    } finally {
      setIsLoadingRandom(false);
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
    const hasDavid = cards.some((card) => card.url === url);
    !hasDavid && setcards([newUriObj, ...cards]);
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
      <AddRandomImg
        isLoading={isLoadingRandom}
        handleAddRandom={handleAddRandom}
      />
      <Gallery
        // isLoading={isLoadingAll}
        changeTitle={changeTitleInGallery}
        cards={cards}
        onDelete={onDelete}
      />
    </div>
  );
}

export default App;
