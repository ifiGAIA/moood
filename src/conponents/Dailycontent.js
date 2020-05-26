import React, { useState,useContext }from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity,TextInput, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import beok from "../json/json.json";
import {StoreContext} from "../stores/Store";
const Dailycontent = ({navigation}) => {
    console.log(navigation)
    const [count, setCount] = useState(0);
    const {meState} = useContext(StoreContext);
    const [me, setMe] = meState;
    if(count==0)
    return (
        <ScrollView style={styles.container}>
           <View style={styles.h1}>
             <View style={styles.line}></View>
             <View style={styles.mood}>
                 <Text style={styles.wm}>MOOD</Text>
             </View>
             <TouchableOpacity onPress={()=>setCount(0)}><Image style={styles.angry} source={{url:beok[1].sangry1}}/></TouchableOpacity>
             <TouchableOpacity onPress={()=>setCount(1)}><Image style={styles.sad} source={{url:beok[1].ssad2}}/></TouchableOpacity>
             <TouchableOpacity onPress={()=>setCount(2)}><Image style={styles.happy} source={{url:beok[1].shappy2}}/></TouchableOpacity>
         </View>
         <View style={styles.h1}>
         <View style={styles.line2}></View>
             <View style={styles.mood}>
                 <Text style={styles.wm}>DATE</Text>
                 <Text style={styles.wm2}>2020.05.11</Text>
             </View>
         </View>
         <View style={styles.h2}>
         <View style={styles.line}></View>
             <View style={styles.why}>
                 <Text style={styles.wd}>WHY</Text>
         </View>
         </View>
         <View style={styles.h3}> 
         <View style={styles.t1}>
           <Text style={styles.whyw}>{me.why1}</Text>
           {/* <Button onPress={() => setMe({})} title="delete" /> */}
         </View>
         </View>
       
      </ScrollView>
    );
    else if(count==1) return(
      <ScrollView style={styles.container}>
      <View style={styles.h1}>
        <View style={styles.line}></View>
        <View style={styles.mood}>
            <Text style={styles.wm}>MOOD</Text>
        </View>
        <TouchableOpacity onPress={()=>setCount(0)}><Image style={styles.angry} source={{url:beok[1].sangry2}}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>setCount(1)}><Image style={styles.sad} source={{url:beok[1].ssad1}}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>setCount(2)}><Image style={styles.happy} source={{url:beok[1].shappy2}}/></TouchableOpacity>
    </View>
    <View style={styles.h1}>
             <View style={styles.line2}></View>
             <View style={styles.mood}>
                 <Text style={styles.wm}>DATE</Text>
                 <Text style={styles.wm2}>2020.05.11</Text>
             </View>
         </View>
         <View style={styles.h2}>
         <View style={styles.line}></View>
             <View style={styles.why}>
                 <Text style={styles.wd}>WHY</Text>
         </View>
         </View>
         <View style={styles.h3}> 
         <View style={styles.t1}>
         <Text style={styles.whyw}>{me.why2}</Text>
           {/* <Button onPress={() => setMe({})} title="delete" /> */}
         </View>
         </View>
  
 </ScrollView>
    );
  
 else  return(
    <ScrollView style={styles.container}>
    <View style={styles.h1}>
      <View style={styles.line}></View>
      <View style={styles.mood}>
          <Text style={styles.wm}>MOOD</Text>
      </View>
      <TouchableOpacity onPress={()=>setCount(0)}><Image style={styles.angry} source={{url:beok[1].sangry2}}/></TouchableOpacity>
      <TouchableOpacity onPress={()=>setCount(1)}><Image style={styles.sad} source={{url:beok[1].ssad2}}/></TouchableOpacity>
      <TouchableOpacity onPress={()=>setCount(2)}><Image style={styles.happy} source={{url:beok[1].shappy1}}/></TouchableOpacity>
  </View>
  <View style={styles.h1}>
           <View style={styles.line2}></View>
           <View style={styles.mood}>
               <Text style={styles.wm}>DATE</Text>
               <Text style={styles.wm2}>2020.05.11</Text>
           </View>
       </View>
       <View style={styles.h2}>
       <View style={styles.line}></View>
           <View style={styles.why}>
               <Text style={styles.wd}>WHY</Text>
       </View>
       </View>
       <View style={styles.h3}> 
       <View style={styles.t1}>
       <Text style={styles.whyw}>{me.why3}</Text>
           {/* <Button onPress={() => setMe({})} title="delete" /> */}
       </View>
       </View>

</ScrollView>
  );
  
};
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor:"#05495D",
        
    },
    h1:{
      flexDirection:"row",
      marginLeft:20,
      marginTop:20
  },
  h2:{
    flexDirection:"row",
    marginLeft:20,
    marginTop:40
},
  line:{
      width:3,
      height:40,
      backgroundColor:"#fff"
  },
  line2:{
    width:3,
    height:60,
    backgroundColor:"#fff"
},
  mood:{
      marginLeft:10,
      marginTop:5
  },
  wm:{
      color:"#fff",
      fontWeight:"bold"
  },
  wm2:{
    color:"#fff",
    fontWeight:"bold",
    marginTop:10,
    fontSize:20,
    letterSpacing:2,
},
  angry:{
    width:70,
    height:70,
   marginLeft:10
},
sad:{
  width:70,
  height:70,
  marginLeft:10
},
happy:{
  width:70,
  height:70,
  marginLeft:10
},
wd:{
  color:"#fff",
  fontWeight:"bold"
},
why:{
  marginLeft:10,
  marginTop:5
},
h3:{
  alignItems: 'center',
  justifyContent: 'center',
  marginTop:10
},
t1:{
  width:320,
  height:250,
  backgroundColor:"#A0C8CD",
  borderRadius:30
},
whyw:{
  color:"#fff",
  fontSize:20,
  marginLeft:30,
  width:265,
  marginTop:30
}
  });

export default Dailycontent;