import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ImageForm from './component/ImageForm';
import Gallery from './component/Gellery/Gallery';
import AddRandomImg from './component/AddRandomImg';
import Header from './component/Header/Header';
import LightBox from './component/LightBox/LightBox';

function App() {
  const [cards, setcards] = useState([]);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isLoadingRandom, setIsLoadingRandom] = useState(false);
  const [islightboxOpen, setislightboxOpen] = useState(false);
  const [lightboxIndex, setlightboxIndex] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('gallery');
    if (saved) {
      setcards(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('gallery', JSON.stringify(cards));
  }, [cards]);
  let toRender;

  const changeFilterGallery = (word) => setQuery(word);

  if (query === '') {
    toRender = cards;
  } else {
    toRender = cards.filter((card) =>
      card.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  console.log(toRender);
  const onToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

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
    !cards.some((card) => card.url === url) && setcards([newUriObj, ...cards]);
  };

  const onDelete = (id) => {
    setcards(cards.filter((card) => card.id !== id));
  };

  const clearGallery = () => {
    setcards([]);
  };

  const chengIndexLightBox = (index) => {
    setlightboxIndex(index);
  };

  const clickLightBox = (id) => {
    let ind = cards.findIndex((card) => card.id === id);
    setlightboxIndex(ind);
    setislightboxOpen(true);
  };

  const clooseLightBox = () => {
    setislightboxOpen(false);
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
        setQuery={setQuery}
        query={query}
        clickLightBox={clickLightBox}
        changeTitle={changeTitleInGallery}
        changeFilterGallery={changeFilterGallery}
        toRender={toRender}
        onDelete={onDelete}
      />
      {islightboxOpen && (
        <LightBox
          changeIndex={chengIndexLightBox}
          cards={toRender}
          lightboxIndex={lightboxIndex}
          clooseLightBox={clooseLightBox}
        />
      )}
    </div>
  );
}
export default App;
