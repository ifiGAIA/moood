import React, { useState }from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity,LayoutAnimation, Button} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator ,DrawerActions} from '@react-navigation/stack';
import beok from "../json/json.json"
import { setConfigurationAsync } from 'expo/build/AR';

const Stack = createStackNavigator();
const RedButton = ({navigation}) => {
    console.log(navigation)
    const [count, setCount] = useState(0);
    if(count<=60)
    return (
        <ScrollView style={styles.container}>
          <Image style={styles.bp} source={{url:beok[0].backgr}}/>
        <View style={styles.ph}>
        <Text style={styles.w}>{count}</Text>
      <TouchableOpacity onPress={()=>setCount((count+1))}><Image style={styles.rbtn} source={{url:beok[0].rbtn}}/></TouchableOpacity>
      </View>
      <View style={styles.bottombtn}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}><Image style={styles.backbtn} source={{url:beok[0].backbtn}}/></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Redsave")}><Image style={styles.okbtn} source={{url:beok[0].okbtn}}/></TouchableOpacity>
      </View>
    </ScrollView>
    );
      else
      return (
        <ScrollView style={styles.container}>
          <Image style={styles.bp} source={{url:beok[0].backgr}}/>
        <View style={styles.ph}>
        <Text style={styles.w}>{count}</Text>
      <TouchableOpacity onPress={()=>setCount((count+1))}><Image style={styles.rbtn} source={{url:beok[0].rbtn2}}/></TouchableOpacity>
      </View>
      <View style={styles.bottombtn}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}><Image style={styles.backbtn} source={{url:beok[0].backbtn}}/></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Redsave")}><Image style={styles.okbtn} source={{url:beok[0].okbtn}}/></TouchableOpacity>
      </View>
    </ScrollView>
    );
  };
  
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor:"#05495D",
      
    },
    ph:{
        alignItems: 'center'
      },
    rbtn:{
        width:219,
        height:247,
        marginTop:180
    },
    w:{
        color:"#fff",
        fontSize:100,
        fontWeight:"bold",
        opacity:0.5,
        marginTop:35
    },
    btn:{
      // position:"absolute",
      width:200,
      height:226,
      marginRight:100
    },
    bp:{
      position:"absolute",
      width:"100%",
      height:640,
    },
    bottombtn:{
      flexDirection:"row",
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:20
    },
    backbtn:{
      width:50,
      height:50,
    },
    okbtn:{
      width:50,
      height:50,
      marginLeft:240
    },
  });

export default RedButton;