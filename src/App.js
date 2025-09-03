import { useEffect, useState } from "react";
import "./App.css";
import ImageForm from "./component/ImageForm";
import Gallery from "./component/Gallery";
import AddRandonImg from "./component/AddRandomImg";

function App() {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    const saved = localStorage.getItem("gallery");
    if (saved) {
      setUrls(JSON.parse(saved));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("gallery", JSON.stringify(urls));
  }, [urls]);

  const handleAddRandom = async () => {
    try {
      const response = await fetch("https://picsum.photos/400/300");
      if (!response.ok) throw new Error("Network response was not ok");
      setUrls((prev) => [response.url, ...prev]);
    } catch (err) {
      console.error("Fetch random image failed:", err);
    }
  };

  const addImg = (text) => {
    setUrls([text, ...urls]);
  };
  const onDelete = (url) => {
    setUrls(urls.filter((ur) => ur !== url));
  };

  const clinGallery = () => {
    setUrls([]);
  };

  return (
    <div className="App">
      <h1> My Gelery</h1>
      <ImageForm addImg={addImg} />
      <AddRandonImg handleAddRandom={handleAddRandom} />
      <Gallery urls={urls} clin={clinGallery} onDelete={onDelete} />
    </div>
  );
}

export default App;
