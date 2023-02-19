import { createContext } from "react";
import lodgingData from "../../data/lodging.json";

export default createContext({
  data: lodgingData,
  setData: () => {},

  isLiked: [],
  setIsLiked: () => {},

  currentUser: {},
  setCurrentUser: () => {},

  filterIndex: 0,
  setFilterIndex: () => {},
});
