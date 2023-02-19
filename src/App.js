import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Lodging from "./components/pages/lodging/Lodging";
import Error from "./components/pages/error/Error";
import GlobalContext from "./components/context/GlobalContext";
import { useState } from "react";
import lodgingData from "./data/lodging.json";

function App() {
  const [data, setData] = useState(lodgingData);
  const [isLiked, setIsLiked] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [filterIndex, setFilterIndex] = useState(1);

  const globalContextValue = {
    data,
    setData,

    isLiked,
    setIsLiked,

    currentUser,
    setCurrentUser,

    filterIndex,
    setFilterIndex,
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={globalContextValue}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logements/:id" element={<Lodging />} />
          <Route path="*" element={<Error />} />
          <Route path="/logements/*" element={<Error />} />
        </Routes>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
