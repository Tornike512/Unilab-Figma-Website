import { createContext } from "react";

export const GlobalContext = createContext({
  showSmallModal: false,
  setShowSmallModal: () => {},
});
