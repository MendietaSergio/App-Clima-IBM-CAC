import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import  Home  from "./pages/Home";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListWeather from "./pages/ListWeather";
import AboutTeam from "./pages/AboutTeam";
import AboutApp from "./pages/AboutApp";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={{flex:1}}>
        <StatusBar
          animated={true}
          backgroundColor="#142950"
          barStyle="light-content"
        />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{title:"Inicio"}} />
            <Stack.Screen name="AboutTeam" component={AboutTeam} options={{title:"Acerca de nosotros"}}/>
            <Stack.Screen name="AboutApp" component={AboutApp} options={{title:"Acerca de la App"}}/>
            <Stack.Screen name="ListWeather" component={ListWeather} options={{title:"Buscar Localidades"}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
