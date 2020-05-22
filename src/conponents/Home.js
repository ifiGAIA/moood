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
      <TouchableOpacity onPress={() => navigation.openDrawer()}><Image style={styles.setting} source={{url:beok[0].setting}}/></TouchableOpacity>
        <View style={styles.ph}>
      <Image style={styles.iam} source={{url:beok[0].iam}}/>
      <Image style={styles.back} source={{url:beok[0].back}}/>
      <TouchableOpacity onPress={() => navigation.navigate("RedButton")}><Image style={styles.angry} source={{url:beok[0].angry}}/></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("YellowButton")}><Image style={styles.sad} source={{url:beok[0].sad}}/></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Happysave")}><Image style={styles.happy} source={{url:beok[0].happy}}/></TouchableOpacity>
      </View>
    </ScrollView>
  
  );
};
// const Main = ({navigation}) => {
//   console.log(navigation)
//   return (
//     <ScrollView style={styles.container}>
//       <TouchableOpacity onPress={() => navigation.openDrawer()}><Image style={styles.setting} source={{url:beok[0].setting}}/></TouchableOpacity>
//         <View style={styles.ph}>
//       <Image style={styles.iam} source={{url:beok[0].iam}}/>
//       <TouchableOpacity onPress={() => navigation.navigate("RedButton")}><Image style={styles.angry} source={{url:beok[0].angry}}/></TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate("YellowButton")}><Image style={styles.sad} source={{url:beok[0].sad}}/></TouchableOpacity>
//       </View>
//     </ScrollView>
//     );
// }

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
   
 
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// }

// const Drawer = createDrawerNavigator();
// const Home = ({navigation}) => {
//   console.log(navigation)
//   return (
    
//     <Drawer.Navigator   drawerContent={props => <CustomDrawerContent {...props} />}
//     drawerContentOptions={{
//       activeTintColor:'#fff',
//       inactiveTintColor:'#5c5c5c',
//       activeBackgroundColor:'#BFDDE0',
//       itemStyle: { height: 60 ,width: 190,
//         marginLeft:0 ,marginBottom:0,
//         borderTopRightRadius:20, bottom:0,
//         borderBottomRightRadius:20,marginTop:165.8,
//         alignItems: 'center',
//         justifyContent: 'center'
//        },
//       labelStyle: { 
//         marginLeft:30,
//         fontSize:20
//     }
//     }}
//     drawerStyle={{
//       height:250,
//       width:190,
//       borderBottomRightRadius:20
//     }}
//      >
//     <Drawer.Screen name="Log out" component={Main}
//     options = {{
//       // drawerIcon : ({focused})=>(
//       //   focused
//       //   ? <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/touch/icon_drawer_home_pressed.png?raw=true" }} style={styles.bh}  />
//       //   : <Image source={{uri: "https://github.com/tsaiyuyes7/wk4_Zeplin_HW/blob/master/assets/icon/untouch/icon_drawer_home.png?raw=true"}} style={styles.bh}  /> 
//       // )
//     }}
//     />
   
//      </Drawer.Navigator>
//   );
// };


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
      marginTop:30
  },
  back:{
    position:"absolute",
    width:"100%",
    height:410,
    marginTop:100
  },
  angry:{
      width:90,
      height:109.59,
      marginTop:40,
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