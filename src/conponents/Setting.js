import React, { useState }from 'react';
import { StyleSheet, Text, View,Image,ScrollView,Linking,TouchableOpacity} from 'react-native';
import { Input } from 'react-native-elements';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator ,DrawerActions} from '@react-navigation/stack';
import beok from "../json/json.json"
import { setConfigurationAsync } from 'expo/build/AR';
import { TextInput } from 'react-native-gesture-handler';
import * as firebase from "firebase";
const Stack = createStackNavigator();
const Setting = ({navigation}) => {
    console.log(navigation)
    
    const onSignOut = () => {
        firebase.auth().signOut();
        navigation.navigate("Login");
      };
    return (
    <View style={styles.container}>
        <View style={styles.h1}>
            <Text style={styles.account}>Account</Text>
        <View style={styles.line}></View>
        </View>
        <View style={styles.user}>
        <Image style={styles.username} source={{url:beok[2].user}}/>
        <View style={styles.usern}>
        <Text style={styles.usernamew}>Username</Text>
        <TextInput
        placeholder="yiiii_6262"
        placeholderTextColor="#fff"
        letterSpacing="2"
        color="#fff"
        />
        </View>
        </View>
        <View style={styles.email}>
        <Image style={styles.mail} source={{url:beok[2].email}}/>
        <View style={styles.emailn}>
        <Text style={styles.emailw}>Email</Text>
        <TextInput
        placeholder="s110619022@stu.ntue.edu.tw"
        placeholderTextColor="#fff"
        letterSpacing="2"
        color="#fff"
        />
        </View>
        </View>
        <View style={styles.c}>
        <Image style={styles.cc} source={{url:beok[2].c}}/>
        <View style={styles.cn}>
        <Text style={styles.cw}>帳號連結設定</Text>
        </View>
        </View>
        <View style={styles.h2}>
            <Text style={styles.about}>About us</Text>
        <View style={styles.line}></View>
        </View>
        <View style={styles.f}>
        <Image style={styles.fb} source={{url:beok[2].fb}}/>
        <View style={styles.fbn}>
        <Text style={styles.fbw}>MoodPixie</Text>
        </View>
        </View>
        <View style={styles.bottom}>
        <TouchableOpacity onPress={onSignOut}><View style={styles.logoutbbin}><Text style={styles.logoutw}>Log out</Text></View></TouchableOpacity>
        <Image style={styles.sb} source={{url:beok[2].sb}}/>
        </View>
    </View>
    );

  };
  
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor:"#05495D",
        height:"100%"
    },
    h1:{
        alignItems:"center",
        marginTop:30
    },
    account:{
        color:"#fff",
        fontSize:18,
        marginRight:230,
        letterSpacing:3
    },
    h2:{
        alignItems:"center",
        marginTop:40
    },
    about:{
        color:"#fff",
        fontSize:18,
        marginRight:220,
        letterSpacing:3
    },
   line:{
       backgroundColor:"#fff",
       height:2,
       width:320,
       marginTop:15
   },
   bottom:{
    alignItems:"center"
   },
   sb:{
    width:195,
    height:65,
    marginTop:20
   },
   logoutbbin:{
    backgroundColor:"#05495D",
    borderColor:"#fff",
    borderWidth:3,
    width:250,
    height:60,
    borderRadius:999,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop:60,
  },
  logoutw:{
      color:"#fff",
      fontSize:25,
      letterSpacing:2
  },
   user:{
    marginLeft:30,
    marginTop:30,
    flexDirection:"row"
   },
   username:{
       width:35,
       height:35
   },
   usern:{
    marginLeft:20
   },
   usernamew:{
   color:"#82A4AE",
   letterSpacing:3
},
email:{
    marginLeft:30,
    marginTop:30,
    flexDirection:"row",
   },
   mail:{
       width:35,
       height:26.25
   },
   emailn:{
    marginLeft:20,
    bottom:2
   },
   emailw:{
   color:"#82A4AE",
   letterSpacing:3
},
c:{
    marginLeft:30,
    marginTop:28,
    flexDirection:"row",
   },
   cc:{
       width:35,
       height:19
   },
   cn:{
    marginLeft:20,
    bottom:2
   },
   cw:{
   color:"#82A4AE",
   letterSpacing:3,
   marginTop:5
},
f:{
    marginLeft:30,
    marginTop:28,
    flexDirection:"row",
   },
   fb:{
       width:35,
       height:35
   },
   fbn:{
    marginLeft:20,
    bottom:2
   },
   fbw:{
   color:"#82A4AE",
   letterSpacing:3,
   marginTop:10
},
  });

export default Setting;