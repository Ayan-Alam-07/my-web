import { createContext, useContext, useState } from "react";

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list] = useState([
    { id: 1, name: "Wallet" },
    { id: 2, name: "Giveaway Code" },
  ]);
  const [currentList, setCurrentList] = useState(list[0]);

  return (
    <ListContext.Provider value={{ list, currentList, setCurrentList }}>
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => useContext(ListContext);
