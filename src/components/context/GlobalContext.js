import { createContext } from "react";
import lodgingData from "../../data/lodging.json";

export default createContext({
  data: lodgingData,
  setData: () => {},
  isLiked: [],
  setIsLiked: () => {},
  isLoginPanel: false,
  setIsLoginPanel: () => {},
  username: "",
  setUsername: () => {},
  filterIndex: 0,
  setFilterIndex: () => {},
});
