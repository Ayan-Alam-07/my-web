import { createContext, useContext, useState, useEffect } from "react";

const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list] = useState([
    { id: 1, name: "Wallet" },
    { id: 2, name: "Payout" },
    { id: 3, name: "Giveaway Code" },
    { id: 4, name: "Captcha Entry	" },
    { id: 5, name: "taskOptionChecker" },
    { id: 6, name: "Exchange Center" },
    { id: 7, name: "Watch-Ad Bonus" },
    { id: 8, name: "Login / Signup" },
  ]);

  const [currentList, setCurrentList] = useState(list[0]);

  const [arrowState, setArrowState] = useState(false);

  const [locationData, setLocationData] = useState({
    loading: true,
    country: "",
    country_code: "",
    error: false,
  });

  useEffect(() => {
    const getLocation = async () => {
      try {
        const [response] = await Promise.all([
          fetch("https://ipinfo.io/json?token=8ba1d0c5238794"),
          new Promise((resolve) => setTimeout(resolve, 1900)), // 2-second minimum loader
        ]);
        const data = await response.json();

        // FIXME: 8ba1d0c5238794

        setLocationData({
          loading: false,
          country: data.country || "Unknown",
          country_code: data.country || "",
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
        arrowState,
        setArrowState,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => useContext(ListContext);
