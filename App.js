import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedbac, TouchableOpacity, Linking, ScrollView, AsyncStorage } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, DrawerActions } from '@react-navigation/stack';
import { Input } from 'react-native-elements';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { navigationRef } from './RootNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from "./src/screens/HomeStack";
import Home from "./src/conponents/Home";
import DailyStack from "./src/screens/DailyStack";
import FriendStack from "./src/screens/FriendStack";
import RedButton from "./src/conponents/RedButton";
import YellowButton from "./src/conponents/YellowButton";
import Redsave from "./src/conponents/Redsave";
import Yellowsave from "./src/conponents/Yellowsave";
import Happysave from "./src/conponents/Happysave"
import Setting from "./src/conponents/Setting"
import beok from "./src/json/json.json";
import { TextInput } from 'react-native-gesture-handler';
import { StoreProvider } from "./src/stores/Store.js"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MyTab = () => {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'HOME') {
            iconName = focused
              ? require("./src/img/home1.png")
              : require("./src/img/home2.png")
          }
          else if (route.name === 'Daily') {
            iconName = focused
              ? require("./src/img/daily1.png")
              : require("./src/img/daily2.png")
          }
          else if (route.name === 'FRIENDS') {
            iconName = focused
              ? require("./src/img/friends1.png")
              : require("./src/img/friends2.png")
          }
          return <Image source={iconName} style={{ width: 40, height: 40 }} />;

        },
      })}
      tabBarOptions={{
        activeBackgroundColor: '#fff',
        inactiveTintColor: '#838383',
        activeTintColor: '#05495D',
        style: { height: 60 },
        labelStyle: {
          bottom: 2,
        }

      }}>
      <Tab.Screen name="HOME" component={HomeStack} />
      <Tab.Screen name="Daily" component={DailyStack} options={{ title: "DAILY" }} />
      <Tab.Screen name="FRIENDS" component={FriendStack} />
    </Tab.Navigator>

  );
};
const Login = ({ navigation }) => {
  console.log(navigation)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Image style={styles.title} source={{ url: beok[0].title }} />
        <View style={styles.sign}>
          <TouchableOpacity><View style={styles.signinb}><Text style={styles.signinw}>Sign in</Text></View></TouchableOpacity>
          <Text style={styles.line}>/</Text>
          <TouchableOpacity><View style={styles.signupb}><Text style={styles.signupw}>Sign up</Text></View></TouchableOpacity>
        </View>
        <View style={styles.email}>
          <TextInput
            style={{ fontSize: 20, marginLeft: 20, width: 290 }}
            placeholder="Email"
            placeholderTextColor="#DBDBDB"
          />
        </View>
        <View style={styles.password}>
          <TextInput
            style={{ fontSize: 20, marginLeft: 20, width: 290 }}
            placeholder="Password"
            placeholderTextColor="#DBDBDB"
            secureTextEntry="true"
          />
        </View>
        <View style={styles.rf}>
          <Image style={styles.rm} source={{ url: beok[0].remeberme }} />
          <Image style={styles.fp} source={{ url: beok[0].forgetpassword }} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}><View style={styles.signinbbin}><Text style={styles.signinbbinw}>Sign in</Text></View></TouchableOpacity>
        <View style={styles.or}>
          <View style={styles.orline}></View>
          <Text style={styles.orw}>or</Text>
          <View style={styles.orline}></View>
        </View>
        <View style={styles.media}>
          <Image style={styles.fbgtw} source={{ url: beok[0].fb }} />
          <Image style={styles.fbgtw} source={{ url: beok[0].google }} />
          <Image style={styles.fbgtw} source={{ url: beok[0].twitter }} />
        </View>
      </View>
    </ScrollView>
  );
};
const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";
const App = () => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {

        console.warn(e);
      } finally {
        setLoadingComplete(true);

      }
    }
    loadResourcesAndDataAsync();
  }, []);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer
        ref={navigationRef}
        initialState={initialNavigationState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}
            options={{
              headerShown: false
            }} />
          <Stack.Screen name="Home" component={MyTab}
            options={{
              headerRight: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate('Setting')}>
                <Image style={styles.setting} source={{ uri: beok[0].setting }} />
              </TouchableOpacity>,
              title: "H O M E",
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerShown: false,
              headerBackTitleVisible: false,

            }}
          />
          <Stack.Screen name="RedButton" component={RedButton}
            options={{
              headerRight: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate('Setting')}>
                <Image style={styles.setting} source={{ uri: beok[0].setting }} />
              </TouchableOpacity>,
              title: false,
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerBackTitleVisible: false,
              headerLeft: false,
              headerShown: false
            }}
          />
          <Stack.Screen name="YellowButton" component={YellowButton}
            options={{
              headerRight: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate('Setting')}>
                <Image style={styles.setting} source={{ uri: beok[0].setting }} />
              </TouchableOpacity>,
              title: false,
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerBackTitleVisible: false,
              headerLeft: false,
              headerShown: false
            }}
          />
          <Stack.Screen name="Redsave" component={Redsave}
            options={{
              headerRight: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate('Setting')}>
                <Image style={styles.setting} source={{ uri: beok[0].setting }} />
              </TouchableOpacity>,
              title: false,
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerBackTitleVisible: false,
              headerLeft: false,
              headerShown: false
            }}
          />
          <Stack.Screen name="Yellowsave" component={Yellowsave}
            options={{
              headerRight: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate('Setting')}>
                <Image style={styles.setting} source={{ uri: beok[0].setting }} />
              </TouchableOpacity>,
              title: false,
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerBackTitleVisible: false,
              headerLeft: false,
              headerShown: false
            }}
          />
          <Stack.Screen name="Happysave" component={Happysave}
            options={{
              headerRight: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate('Setting')}>
                <Image style={styles.setting} source={{ uri: beok[0].setting }} />
              </TouchableOpacity>,
              title: false,
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerBackTitleVisible: false,
              headerLeft: false,
              headerShown: false
            }}
          />
          <Stack.Screen name="Setting" component={Setting}
            options={{
              title: 'S E T T I N G',
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#05495D"
  },
  setting: {
    width: 30,
    height: 30,
    right: 8
  },
  main: {
    alignItems: 'center'
  },
  title: {
    width: 146,
    height: 50,
    marginTop: 50
  },
  sign: {
    flexDirection: "row",
    marginTop: 45
  },
  signinb: {
    backgroundColor: "#fff",
    width: 100,
    height: 35,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signinw: {
    color: "#05495D",
    fontSize: 15
  },
  line: {
    color: "#fff",
    fontSize: 25,
    opacity: 0.5,
    marginRight: 30,
    marginLeft: 30
  },
  signupb: {
    backgroundColor: "#69929E",
    width: 100,
    height: 35,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signupw: {
    color: "#fff",
    fontSize: 15
  },
  email: {
    width: 330,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 60
  },
  emailw: {
    color: "#DBDBDB",
    fontSize: 20,
    marginLeft: 20
  },
  password: {
    width: 330,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 30
  },
  passwordw: {
    color: "#DBDBDB",
    fontSize: 20,
    marginLeft: 20
  },
  rf: {
    flexDirection: "row",
    marginTop: 10
  },
  rm: {
    width: 105,
    height: 15
  },
  fp: {
    width: 105,
    height: 15,
    marginLeft: 90
  },
  signinbbin: {
    backgroundColor: "#FF7C85",
    width: 105,
    height: 40,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    // shadowColor:"#fff",
    // shadowOffset:{width:-2,height:-2},
    // shadowOpacity:1,
  },
  signinbbinw: {
    color: "#fff"
  },
  or: {
    flexDirection: "row",
    marginTop: 40
  },
  orline: {
    width: 130,
    height: 1,
    backgroundColor: "#fff"
  },
  orw: {
    color: "#fff",
    bottom: 9,
    marginLeft: 30,
    marginRight: 30
  },
  media: {
    flexDirection: "row",
    marginTop: 10
  },
  fbgtw: {
    width: 40,
    height: 40,
    marginLeft: 22,
    marginRight: 22
  },

});
// export default App;
export default () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>// user變成全域變數
  )
}