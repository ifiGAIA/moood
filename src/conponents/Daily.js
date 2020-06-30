import React, { useState }from 'react';
import { StyleSheet, Text, View,Image,ScrollView,Linking,TouchableOpacity,TextInput,Input} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator ,DrawerActions} from '@react-navigation/stack';
import beok from "../json/json.json"
import { setConfigurationAsync } from 'expo/build/AR';
import {Calendar, CalendarList, Agenda,LocaleConfig} from 'react-native-calendars';
import DatePicker from 'react-native-modern-datepicker';
const Stack = createStackNavigator();
const Daily = ({navigation}) => {
    console.log(navigation)
    const onDayPress = (day) => {
        // setSelected(day.dateString);
        navigation.navigate("Content")
      };
    return (
    <ScrollView style={styles.container}>
             <View style={styles.date}>
                 <Text style={styles.wday}>2020</Text>
             </View>
             <View style={styles.day}>
                 <Text style={styles.dayw}>7</Text>
             
             <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() => navigation.navigate("Content")}><Image style={styles.mood1} source={{url:beok[0].happy}}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() => navigation.navigate("Content")}><Image style={styles.mood2} source={{url:beok[0].happy}}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() => navigation.navigate("Content")}><Image style={styles.mood3} source={{url:beok[0].sad}}/></TouchableOpacity>
             </View>
             <View style={styles.dayform}>
             <Image style={styles.form} source={{url:beok[1].form}}/>
             </View>
             {/* <Calendar
             disableMonthChange={true}
            //  onDayPress={onDayPress}
             hideExtraDays={true}
            
              style={{
               width:340,
               height:380,
               backgroundColor:"#4E7E8C",
               marginTop:50,
               borderRadius:30,
               
              }}
              theme={{
                  backgroundColor:"#000",
                  calendarBackground:"#4E7E8C",
                  arrowColor: '#fff',
                  todayTextColor: '#fff',
                  
              }}
            /> */}
            {/* <DatePicker
            options={{
                backgroundColor:"#4E7E8C",
                textHeaderColor: '#fff',
                textSecondaryColor: '#fff',
                mainColor: '#fff',
                selectedTextColor: '#05495D',
                textDefaultColor: '#05495D',
               
            }}
            style={{
                width:340,
               height:380,
               marginTop:50,
               borderRadius:30,
            }}
            mode="calendar"
            /> */}
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
        marginTop:35,
        width:340,
        height:400,
        backgroundColor:"#4E7E8C",
        borderRadius:30,
        flexDirection:"row",
        justifyContent:"center",
    },
    form:{
        width:280,
        height:309,
        marginTop:30
    },
    moodbtn:{
    alignItems: 'center',
    zIndex:10,
    },
    mood1:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:90,
        right:118
    },
    mood2:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:90,
        right:73
    },
    mood3:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:90,
        right:30
    },
  });

export default Daily;