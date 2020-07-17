import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native';
import beok from "../json/json.json"

const Friends = ({navigation}) => {
    // console.log(navigation)
    return (
    <View style={styles.container}>
         <View style={styles.h1}>
             <View style={styles.line}></View>
             <View style={styles.date}>
                 <Text style={styles.wd}>DATE</Text>
                 <Text style={styles.wday}>2020.07.03</Text>
             </View>
         </View>
         <ScrollView contentContainerStyle={styles.h2}>
         <View style={styles.hline}></View>
         <View style={styles.f1}>
         <Image style={styles.f1ph} source={{url:beok[2].f1}}/>
         <Text style={styles.f1n}>熊熊</Text>
         <View style={styles.m1}>
         <Image style={styles.f1m} source={{url:beok[2].angry}}/>
         <Image style={styles.f1m} source={{url:beok[2].sad}}/>
         </View>
         </View>
         <View style={styles.hline}></View>
         <View style={styles.f1}>
         <Image style={styles.f1ph} source={{url:beok[2].f1}}/>
         <Text style={styles.f1n}>Hahapon07</Text>
         <View style={styles.m1}>
         {/* <Image style={styles.f1m} source={{url:beok[2].angry}}/> */}
         <Image style={styles.f1m} source={{url:beok[2].sad}}/>
         </View>
         </View>
         <View style={styles.hline}></View>
         <View style={styles.f1}>
         <Image style={styles.f1ph} source={{url:beok[2].f1}}/>
         <Text style={styles.f1n}>Hahapon07</Text>
         <View style={styles.m1}>
         {/* <Image style={styles.f1m} source={{url:beok[2].angry}}/> */}
         <Image style={styles.f1m} source={{url:beok[2].happy}}/>
         </View>
         </View>
         <View style={styles.hline}></View>
         <View style={styles.f1}>
         <Image style={styles.f1ph} source={{url:beok[2].f2}}/>
         <Text style={styles.f1n}>LILI4567</Text>
         <View style={styles.m1}>
         {/* <Image style={styles.f1m} source={{url:beok[2].angry}}/> */}
         <Image style={styles.f1m} source={{url:beok[2].happy}}/>
         </View>
         </View>
         <View style={styles.hline}></View>
         <View style={styles.f1}>
         <Image style={styles.f1ph} source={{url:beok[2].f2}}/>
         <Text style={styles.f1n}>Guoguo87</Text>
         <View style={styles.m1}>
         <Image style={styles.f1m} source={{url:beok[2].angry}}/>
         {/* <Image style={styles.f1m} source={{url:beok[2].sad}}/> */}
         </View>
         </View>
         <View style={styles.hline}></View>
         </ScrollView>
         <View style={styles.b}>
             
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
        flexDirection:"row",
        marginLeft:20,
        marginTop:70
    },
    line:{
        width:2,
        height:80,
        backgroundColor:"#fff"
    },
    date:{
        marginLeft:10,
        marginTop:5
    },
    wd:{
        color:"#fff",
        fontWeight:"bold"
    },
    wday:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold",
        marginTop:20,
        letterSpacing:5
    },
    h2:{
        alignItems: 'center',
        marginTop:50,
        height:100
    },
    hline:{
        backgroundColor:"#82A4AE",
        height:1,
        width:320,
        marginTop:8
    },
    f1:{
        flexDirection:"row",
        marginTop:10
    },
    f1ph:{
        width:24.54,
        height:30.09,
        
    },
    f1n:{
        color:"#fff",
        fontSize:15,
        margin:3,
        marginLeft:25,
        width:80
    },
    m1:{
        flexDirection:"row",
        marginLeft:100,
        width:60
    },
    f1m:{
        width:24.54,
        height:30.09,
        marginLeft:5
    },
    b:{
        marginTop:120,
        backgroundColor:"#fff"
    },
  });

export default Friends;