import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/HomeScreen";
import ServiceScreen from "./pages/ServiceScreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Artics Tech" component={HomeScreen}/>
      <Stack.Screen name="Services" component={ServiceScreen}/>
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
};

export default App;