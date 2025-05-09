import { createContext, useContext, useState, useEffect } from "react";

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list] = useState([
    { id: 1, name: "Wallet" },
    { id: 2, name: "Payout" },
    { id: 3, name: "Giveaway Code" },
  ]);

  const [currentList, setCurrentList] = useState(list[0]);

  const [locationData, setLocationData] = useState({
    loading: true,
    country: "",
    country_code: "",
    error: false,
  });

  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setLocationData({
          loading: false,
          country: data.country_name,
          country_code: data.country_code,
          error: false,
        });
      } catch (err) {
        console.error("Location fetch failed:", err);
        setLocationData({
          loading: false,
          country: "Unknown",
          country_code: "",
          error: true,
        });
      }
    };

    getLocation();
  }, []);

  return (
    <ListContext.Provider
      value={{
        list,
        currentList,
        setCurrentList,
        locationData,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => useContext(ListContext);
