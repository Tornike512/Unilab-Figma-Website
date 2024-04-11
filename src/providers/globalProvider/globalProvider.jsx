import { globalContext } from "./globalContext";

export function globalProvider({ children }) {
  return <globalContext.Provider value={{}}>{children}</globalContext.Provider>;
}
