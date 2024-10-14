import React, { createContext, useContext, useState, ReactNode } from "react";
import List from "./Array/FilterList";
import CardList from "./Array/CardList";

interface ContextType {}

const Context = createContext<ContextType | undefined>(undefined);

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filterList] = useState(List);
  const [cardList] = useState(CardList);

  const value = { filterList, cardList };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

// Custom hook per accedere facilmente al contesto
const useContextApp = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      "useContextApp deve essere usato all'interno di ContextProvider"
    );
  }
  return context;
};

export { ContextProvider, useContextApp };
