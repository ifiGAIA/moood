import React, { useState,useContext }from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity,TextInput,Input,Button} from 'react-native';
import beok from "../json/json.json"
import Swiper from 'react-native-swiper'
import {StoreContext} from "../stores/Store";

const Daily = ({navigation}) => {

    let hh={url:beok[0].happy};
    let aa={url:beok[0].angry};
    let ss={url:beok[0].sad};
    
    const { chartState } = useContext(StoreContext);
    const [chart, setChart] = chartState;

    //  console.log(chart);
    
    return (
    <ScrollView style={styles.container}>
             <View style={styles.date}>
                 <Text style={styles.wday}>2020</Text>
             </View>
             <Swiper style={styles.wrapper}  dotStyle={styles.dotStyle} 
             activeDotStyle={styles.activeDotStyle} horizontal={true} loop={false} index={1}>
             <View style={styles.day}>
                 <Text style={styles.dayw}>6</Text>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood1_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood2_6} source={ss}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood3_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood4_6} source={aa}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood5_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood6_6} source={ss}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood7_6} source={aa}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood8_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood9_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood10_6} source={ss}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood11_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood12_6} source={aa}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood13_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.dayform}>
             <Image style={styles.form} source={{url:beok[1].form2}}/>
             </View>
            </View>
            <View style={styles.day}>
                 <Text style={styles.dayw}>7</Text>
             <View style={styles.moodbtn}>
             <TouchableOpacity ><Image style={styles.mood1_7} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() =>navigation.navigate("Content")}><Image style={styles.mood2_7} source={hh}/></TouchableOpacity>
             </View>
             {/* <Button onPress={() => setChart({...chart, a:[]})} title="delete" /> */}
             {chart.a.map(c1 => ( <View style={styles.moodbtn} key={c1}>
             <TouchableOpacity onPress={() =>navigation.navigate("Content")}><Image style={styles.mood3_7} source={{url:c1}}/></TouchableOpacity>
             
             </View>))}
             {/* {chart.s.map(c2 => ( <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() =>navigation.navigate("Content")}><Image style={styles.mood3_7} source={{url:c2}}/></TouchableOpacity>
             </View>))}
             {chart.h.map(c3 => ( <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() =>navigation.navigate("Content")}><Image style={styles.mood3_7} source={{url:c3}}/></TouchableOpacity>
             </View>))} */}
             {/* <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() =>navigation.navigate("Content")}><Image style={styles.mood3_7} source={{url:chart.a}}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() => navigation.navigate("Content")}><Image style={styles.mood4_7} source={{url:chart.s}}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() => navigation.navigate("Content")}><Image style={styles.mood5_7} source={{url:chart.h}}/></TouchableOpacity>
             </View> */}
             <View style={styles.dayform}>
             <Image style={styles.form} source={{url:beok[1].form}}/>
             </View>
            </View>
            <View style={styles.day}>
                 <Text style={styles.dayw}>8</Text>
             {/* <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() => navigation.navigate("Content")}><Image style={styles.mood1} source={{url:beok[0].happy}}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() => navigation.navigate("Content")}><Image style={styles.mood2} source={{url:beok[0].happy}}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() => navigation.navigate("Content")}><Image style={styles.mood3} source={{url:beok[0].sad}}/></TouchableOpacity>
             </View> */}
             <View style={styles.dayform}>
             <Image style={styles.form} source={{url:beok[1].form}}/>
             </View>
            </View>
            </Swiper>
    </ScrollView>
    );

  };
  
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor:"#05495D",
    },
    wrapper:{
        height:540,
        
    },
    dotStyle:{
        width:10,
        height:10,
        borderRadius:999,
       backgroundColor:"#69929E"
    },
    activeDotStyle:{
        width:10,
        height:10,
        borderRadius:999,
        backgroundColor:"#fff"
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
    mood1_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:90,
        right:118,
    },
    mood2_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:90,
        right:74
    },
    mood3_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:90,
        right:30
    },
    mood4_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:90,
        left:30
    },
    mood5_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:163,
        left:-15
    },
    mood6_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:236,
        right:118,
    },
    mood7_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:236,
        left:74
    },
    mood8_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:236,
        left:30
    },
    mood9_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:309,
        right:74,
    },
    mood10_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:309,
        left:30
    },
    mood11_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:309,
        left:118
    },
    mood12_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:382,
        right:118,
    },
    mood13_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:382,
        right:74
    },
    mood1_7:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:90,
        right:118,
    },
    mood2_7:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:90,
        right:73
    },
    mood3_7:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:90,
        right:30
    },
    mood4_7:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:90,
        right:25
    },
    mood5_7:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:90,
        right:20
    },
  });

export default Daily;