import React, { useState,useEffect,useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView, AsyncStorage, ActivityIndicator } from 'react-native';
import beok from "../json/json.json";
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from "firebase";
import { StoreContext } from "../stores/Store.js";

const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

const USER_PERSISTENCE_KEY = "MAIL_PERSISTENCE_KEY";
const HAS_SET_KEY1 = "HAS_SET_KEY1";

const Login = ({ navigation }) => {
    // console.log(navigation)
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const { meState } = useContext(StoreContext);
    const [me, setMe] = meState;
    const { isLoginState } = useContext(StoreContext);
    const [isLogin, setIsLogin] = isLoginState;
    const [msg, setMsg] = useState(" ");
    const { userState } = useContext(StoreContext);
    const [user, setUser] = userState;
    // let db = firebase.firestore();
  
    const onSignIn = async () => {
      setMsg(" ");
      setLoading(true);
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        setIsLogin(true);
      } catch (err1) {
        setMsg("尚未註冊...");
      } finally {
          setLoading(false);
          setEmail("");
          setPassword("");
          setError("");
          
      }
    };
    const onSignUp = async () => {
      setLoading(true);
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        setIsLogin(true);
        setEmail("");
        setPassword("");
        setError("");
      } catch (err) {
        setError(err.message);
        setEmail("");
        setPassword("");
        setLoading(false);
      }
    };
    
    const renderButton = () => {
     if (loading) {
        return <ActivityIndicator size="large" style={{ marginTop: 30 }} />;
     }
     if(count==0)
     return (
      <TouchableOpacity onPress={onSignIn}><View style={styles.signinbbin}><Text style={styles.signinbbinw}>Sign in</Text></View></TouchableOpacity>
     );
     else
     return (
      <TouchableOpacity onPress={onSignUp}><View style={styles.signinbbin}><Text style={styles.signinbbinw}>Sign up</Text></View></TouchableOpacity>
     );
    };
  
    const onChangeText = (email) => {
     
      setEmail(email);
      
      setUser({ ...user, mail:email })
    }
  
    const saveToAsyncStorage = () => {
      try {
          AsyncStorage.setItem(USER_PERSISTENCE_KEY, JSON.stringify(user));
          AsyncStorage.setItem(HAS_SET_KEY1, JSON.stringify(true));
      } catch (error) {
          // Error saving data
      }
  };
  
  useEffect(() => {
      saveToAsyncStorage();
  }, [user]);
  
    if(count==0)
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Image style={styles.title} source={{ url: beok[0].title }} />
          <View style={styles.sign}>
            <TouchableOpacity onPress={()=>setCount(0)}><View style={styles.signinb}><Text style={styles.signinw}>Sign in</Text></View></TouchableOpacity>
            <Text style={styles.line}>/</Text>
            <TouchableOpacity onPress={()=>setCount(1)}><View style={styles.signupb}><Text style={styles.signupw}>Sign up</Text></View></TouchableOpacity>
          </View>
          <View style={styles.email}>
            <TextInput
              style={{ fontSize: 20, marginLeft: 20, width: 290 }}
              placeholder="Email"
              placeholderTextColor="#DBDBDB"
              autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            value={email}
            onChangeText={onChangeText}
          
            />
          </View>
          <View style={styles.password}>
            <TextInput
              style={{ fontSize: 20, marginLeft: 20, width: 290 }}
              placeholder="Password"
              placeholderTextColor="#DBDBDB"
              secureTextEntry
              autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View style={styles.rf}>
            <Image style={styles.rm} source={{ url: beok[0].remeberme }} />
            <Image style={styles.fp} source={{ url: beok[0].forgetpassword }} />
          </View>
         
          {renderButton()}
          <Text style={{ padding: 10, fontSize: 16, color: "white" }}>{msg}</Text>
        <View style={styles.b}>
          <View style={styles.or}>
            <View style={styles.orline}></View>
            <Text style={styles.orw}>or</Text>
            <View style={styles.orline}></View>
          </View>
          <View style={styles.media}>
            <TouchableOpacity><Image style={styles.fbgtw} source={{ url: beok[0].fb }} /></TouchableOpacity>
            <Image style={styles.fbgtw} source={{ url: beok[0].google }} />
            <Image style={styles.fbgtw} source={{ url: beok[0].twitter }} />
          </View>
          </View>
        </View>
      </View>
    );
    else
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Image style={styles.title} source={{ url: beok[0].title }} />
          <View style={styles.sign}>
            <TouchableOpacity onPress={()=>setCount(0)}><View style={styles.signinb2}><Text style={styles.signinw2}>Sign in</Text></View></TouchableOpacity>
            <Text style={styles.line}>/</Text>
            <TouchableOpacity onPress={()=>setCount(1)}><View style={styles.signupb2}><Text style={styles.signupw2}>Sign up</Text></View></TouchableOpacity>
          </View>
          <View style={styles.uesrname}>
            <TextInput
              style={{ fontSize: 20, marginLeft: 20, width: 290 }}
              placeholder="User name"
              placeholderTextColor="#DBDBDB"
              value={user.user}
          onChangeText={(user) => setUser({ ...user, user })}
              
            />
          </View>
          <View style={styles.email2}>
            <TextInput
              style={{ fontSize: 20, marginLeft: 20, width: 290 }}
              placeholder="Email"
              placeholderTextColor="#DBDBDB"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              value={email,user.mail}
              onChangeText={onChangeText}
              
            />
          </View>
          <View style={styles.password2}>
            <TextInput
              style={{ fontSize: 20, marginLeft: 20, width: 290 }}
              placeholder="Password"
              placeholderTextColor="#DBDBDB"
              secureTextEntry
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          
          {renderButton()}
          {/* <Text style={{ padding: 10, fontSize: 16, color: "red" }}>{error}</Text> */}
       
          <View style={styles.or2}>
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
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#05495D",
      height:"100%"
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
    signinb2: {
      backgroundColor: "#69929E",
      width: 100,
      height: 35,
      borderRadius: 999,
      justifyContent: 'center',
      alignItems: 'center'
    },
    signinw2: {
      color: "#fff",
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
    signupb2: {
      backgroundColor: "#fff",
      width: 100,
      height: 35,
      borderRadius: 999,
      justifyContent: 'center',
      alignItems: 'center'
    },
    signupw2: {
      color: "#05495D",
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
    email2: {
      width: 330,
      height: 60,
      backgroundColor: "#fff",
      borderRadius: 25,
      justifyContent: 'center',
      marginTop: 20
    },
    password: {
      width: 330,
      height: 60,
      backgroundColor: "#fff",
      borderRadius: 25,
      justifyContent: 'center',
      marginTop: 20
    },
    password2: {
      width: 330,
      height: 60,
      backgroundColor: "#fff",
      borderRadius: 25,
      justifyContent: 'center',
      marginTop: 20
    },
    uesrname: {
      width: 330,
      height: 60,
      backgroundColor: "#fff",
      borderRadius: 25,
      justifyContent: 'center',
      marginTop: 40
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
    },
    signinbbinw: {
      color: "#fff"
    },
    or: {
      flexDirection: "row",
      marginTop:50
    },
    or2: {
      flexDirection: "row",
      marginTop: 30
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
    b:{
      alignItems: 'center',
      bottom:25
    }
  });

  export default Login;