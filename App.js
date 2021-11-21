import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import  Home  from "./pages/Home";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchWeather from "./pages/SearchWeather";
import AboutTeam from "./pages/AboutTeam";
import AboutApp from "./pages/AboutApp";
import ListWeather from "./pages/ListWeather";
import DetailWeather from "./pages/DetailWeather";
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
            <Stack.Screen name="SearchWeather" component={SearchWeather} options={{title:"Buscar Localidades"}} text={{text:"prueba"}}/>
            <Stack.Screen name="ListWeather" component={ListWeather} options={{title:"Resultado"}}/>
            <Stack.Screen name="DetailWeather" component={DetailWeather} options={{title:"Detalle"}}/>
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
