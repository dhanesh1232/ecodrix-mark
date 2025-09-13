"use client";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [isFilloutOpen, setIsFilloutOpen] = useState(false);

  return (
    <GlobalContext.Provider value={{ isFilloutOpen, setIsFilloutOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Custom hook
export const useGlobal = () => useContext(GlobalContext);
