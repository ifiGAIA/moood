import React, { createContext, useState, useEffect } from "react";
// import albumData from "../json/albums.json";
import meJson from "../json/me.json";
import userJson from "../json/uesr.json";
import { AsyncStorage } from "react-native";

const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

export const StoreContext = createContext();

// Make a Provider
export const StoreProvider = ({ children }) => {  
  const [isLogin, setIsLogin] = useState(false);
  const [me, setMe] = useState(meJson);
  // const [use,setUse] = useState(userJson);
  const store = {
    isLoginState: [isLogin, setIsLogin],
    meState: [me, setMe],
    // userState: [use, setUse]
  };

const restoreState = async () => {
    try {
      const hasSetString = await AsyncStorage.getItem(HAS_SET_KEY);
      const hasSet = JSON.parse(hasSetString);
      if (true) {
        const meString = await AsyncStorage.getItem(ME_PERSISTENCE_KEY);
        const state_me = JSON.parse(meString);
        setMe(state_me);
      }
    } catch (e) {}
  };

  useEffect(() => {
    restoreState();
  }, []);

  return (
   <StoreContext.Provider value={store}>
      {children}
   </StoreContext.Provider>
  );
};