import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity, TextInput, Input, AsyncStorage  } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, DrawerActions } from '@react-navigation/stack';
import beok from "../json/json.json"
import { setConfigurationAsync } from 'expo/build/AR';
import { StoreContext } from "../stores/Store.js";
const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";
const Stack = createStackNavigator();
const Redsave = ({ navigation }) => {
    console.log(navigation)
    const [count, setCount] = useState(0);
    const { meState } = useContext(StoreContext);
    const [me, setMe] = meState;

    const saveToAsyncStorage = () => {
        try {
            AsyncStorage.setItem(ME_PERSISTENCE_KEY, JSON.stringify(me));
            AsyncStorage.setItem(HAS_SET_KEY, JSON.stringify(true));
        } catch (error) {
            // Error saving data
        }
    };

    useEffect(() => {
        saveToAsyncStorage();
    }, [me]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.h1}>
                <View style={styles.line}></View>
                <View style={styles.date}>
                    <Text style={styles.wd}>DATE</Text>
                    <Text style={styles.wday}>2 0 2 0 . 0 5 . 0 5 </Text>
                </View>
            </View>
            <View style={styles.h1}>
                <View style={styles.line2}></View>
                <View style={styles.why}>
                    <Text style={styles.wd}>WHY</Text>
                </View>
            </View>
            <View style={styles.h3}>
                <View style={styles.t1}>
                    <TextInput
                        style={{ fontSize: 20, marginLeft: 30, width: 265, marginTop: 30 }}
                        placeholder="點擊以輸入文字"
                        placeholderTextColor="#fff"
                        color="#fff"
                        multiline="true"
                        onChangeText={(why1) => setMe({ ...me, why1 })}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Daily")}><Image style={styles.sbtn} source={{ url: beok[1].rsave }} /></TouchableOpacity>
            </View>

        </ScrollView>
    );

};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#05495D",
    },
    h1: {
        flexDirection: "row",
        marginLeft: 20,
        marginTop: 50
    },
    line: {
        width: 3,
        height: 80,
        backgroundColor: "#fff"
    },
    date: {
        marginLeft: 10,
        marginTop: 5
    },
    wd: {
        color: "#fff",
        fontWeight: "bold"
    },
    wday: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 30
    },
    line2: {
        width: 3,
        height: 40,
        backgroundColor: "#fff"
    },
    why: {
        marginLeft: 10,
        marginTop: 5
    },
    h3: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    t1: {
        width: 320,
        height: 340,
        backgroundColor: "#4E7E8C",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    sbtn: {
        width: 137,
        height: 45,
        marginTop: 28
    }
});

export default Redsave;