import { createContext, useContext, useState } from "react";

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list] = useState(["Wallet", "Giveaway Code"]);

  return (
    <ListContext.Provider value={{ list }}>{children}</ListContext.Provider>
  );
};

export const useList = () => useContext(ListContext);
