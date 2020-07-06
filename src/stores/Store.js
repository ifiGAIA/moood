import React, { createContext, useState, useEffect } from "react";
// import albumData from "../json/albums.json";
import meJson from "../json/me.json";
import userJson from "../json/uesr.json";
import { AsyncStorage } from "react-native";

const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

const USER_PERSISTENCE_KEY = "MAIL_PERSISTENCE_KEY";
const HAS_SET_KEY1 = "HAS_SET_KEY1";

export const StoreContext = createContext();

// Make a Provider
export const StoreProvider = ({ children }) => {  
  const [isLogin, setIsLogin] = useState(false);
  const [me, setMe] = useState(meJson);
  const [user,setUser] = useState(userJson);
  const store = {
    isLoginState: [isLogin, setIsLogin],
    meState: [me, setMe],
    userState: [user, setUser]
  };

const restoreState = async () => {
    try {
      const hasSetString = await AsyncStorage.getItem(HAS_SET_KEY);
      const hasSet = JSON.parse(hasSetString);
      const userSetString = await AsyncStorage.getItem(HAS_SET_KEY1);
      const userSet = JSON.parse(userSetString);
      if (true) {
        const meString = await AsyncStorage.getItem(ME_PERSISTENCE_KEY);
        const state_me = JSON.parse(meString);
        const userString = await AsyncStorage.getItem(USER_PERSISTENCE_KEY);
        const state_user = JSON.parse(userString);
        // console.log(state_me);
        setMe(state_me);
        setUse(state_user);
      }
    } catch (e) {}
  };

  const adjustState = async () =>{
    await AsyncStorage.setItem(ME_PERSISTENCE_KEY, JSON.stringify(meJson));
  }

  useEffect(() => {
    restoreState();
    // adjustState();
  }, []);

  return (
   <StoreContext.Provider value={store}>
      {children}
   </StoreContext.Provider>
  );
};