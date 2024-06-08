import { useState } from "react";
import { globalContext } from "./globalContext";

export function globalProvider({ children }) {
  const [apartmentId, setApartmentId] = useState("");

  return (
    <globalContext.Provider value={{ apartmentId, setApartmentId }}>
      {children}
    </globalContext.Provider>
  );
}
