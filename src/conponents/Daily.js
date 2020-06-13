import React, { useState }from 'react';
import { StyleSheet, Text, View,Image,ScrollView,Linking,TouchableOpacity,TextInput,Input} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator ,DrawerActions} from '@react-navigation/stack';
import beok from "../json/json.json"
import { setConfigurationAsync } from 'expo/build/AR';

const Stack = createStackNavigator();
const Daily = ({navigation}) => {
    console.log(navigation)

    return (
    <ScrollView style={styles.container}>
             <View style={styles.date}>
                 <Text style={styles.wday}>2020</Text>
             </View>
             <View style={styles.day}>
                 <Text style={styles.dayw}>5</Text>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() => navigation.navigate("Content")}><Image style={styles.angry} source={{url:beok[0].angry}}/></TouchableOpacity>
             </View>
             <View style={styles.dayform}>
                 <View style={styles.formb}>
             <Image style={styles.form} source={{url:beok[1].form}}/>
             </View>
             </View>
           
    </ScrollView>
    );

  };
  
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor:"#05495D",
    },
    date:{
        width:90,
        marginTop:50,
        backgroundColor:"#fff",
        height:30,
        alignItems: 'center',
        justifyContent:"center",
        borderTopRightRadius:999,
        borderBottomRightRadius:999
    },
    wday:{
        color:"#05495D",
        fontSize:16,
        fontWeight:"bold",
        letterSpacing:3,
        
    },
    day:{
        alignItems: 'center',
        marginTop:-10
    },
    dayw:{
        color:"#fff",
        fontSize:50,
        fontWeight:"bold",
    },
    dayform:{
        alignItems: 'center',
        marginTop:50
    },
    formb:{
        width:340,
        height:380,
        backgroundColor:"#4E7E8C",
        borderRadius:30,
        alignItems: 'center',
    },
    form:{
        width:280,
        height:345,
       marginTop:18
    },
    moodbtn:{
    alignItems: 'center',
    zIndex:3,
    },
    angry:{
        position:"absolute",
        width:30,
        height:36.53,
        // width:90,
        // height:109.59,
        marginTop:90,
        left:-15
    },
  });

export default Daily;