import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen(){
    return(
    <View style = {Styles.title}>
        <Text>ARTICS TECH</Text>
        <Text>Your Premier Digital Solution Platform For Architectural Solution </Text>
    </View>)
}

const Styles = StyleSheet.create ({
    title: {
       alignItems: 'center',
       flex: 200,
       justifyContent: 'center',
    }
})