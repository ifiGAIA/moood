import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity } from 'react-native';
import beok from "../json/json.json"
import { 
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const Home = ({navigation}) => {
  console.log(navigation)
  return (
    <ScrollView style={styles.container}>
      
        <View style={styles.ph}>
      <Image style={styles.iam} source={{url:beok[0].iam}}/>
      <View style={styles.line}></View>
      <Image style={styles.back} source={{url:beok[0].back}}/>
      <TouchableOpacity onPress={() => navigation.navigate("RedButton")}><Image style={styles.angry} source={{url:beok[0].angry}}/></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("YellowButton")}><Image style={styles.sad} source={{url:beok[0].sad}}/></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Happysave")}><Image style={styles.happy} source={{url:beok[0].happy}}/></TouchableOpacity>
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
  iam:{
      width:70,
      height:40,
      marginTop:50
  },
  line:{
    width:45,
    height:2,
    backgroundColor:"#fff"
  },
  back:{
    position:"absolute",
    width:"100%",
    height:410,
    marginTop:150
  },
  angry:{
      width:90,
      height:109.59,
      marginTop:70,
      marginLeft:40
  },
  sad:{
    width:90,
    height:111.14,
    marginTop:25,
    marginRight:45
  },
  happy:{
    width:90,
    height:110.51,
    marginTop:50,
    marginLeft:25
  },
  // setting:{
  //   width:30,
  //   height:30,
  //   left:8
  // },

    
    
});

export default Home;