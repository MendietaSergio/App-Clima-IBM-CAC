import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Animated } from "react-native";
import Home from "./pages/Home";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchWeather from "./pages/SearchWeather";
import AboutTeam from "./pages/AboutTeam";
import AboutApp from "./pages/AboutApp";
import ListWeather from "./pages/ListWeather";
import DetailWeather from "./pages/DetailWeather";
import Sol from "./assets/backgroundImages/sol.png";
import Nubes from "./assets/backgroundImages/nubes.png";
import { Easing } from "react-native-reanimated";
const Stack = createNativeStackNavigator();

export default function App() {
  const [animated, setAnimated] = useState(false);
  const [show] = useState(new Animated.Value(0));
  const [spinValue] = useState(new Animated.Value(0));
  const [position1] = useState(new Animated.Value(30));
  const [font] = useState(new Animated.Value(1));
  useEffect(() => {
    Animated.parallel([
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 5500,
        delay: 2500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(position1, {
        toValue: -60,
        duration: 5500,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.timing(show, {
        toValue: 1,
        duration: 5000,
        delay: 2500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start(() => setAnimated(true));
  }, []);
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  if (!animated) {
    return (
      <>
        <StatusBar
          animated={true}
          backgroundColor="#142950"
          barStyle="light-content"
        />
        <View style={styles.container}>
          <Animated.Image
            style={[styles.imageSol, { transform: [{ rotate: spin }] }]}
            source={Sol}
          />
          <Animated.Image
            style={[
              styles.imageNube1,
              { transform: [{ translateX: position1 }] },
            ]}
            source={Nubes}
          />
          <Animated.Image style={[styles.imageNube2]} source={Nubes} />
          <Animated.Text
            style={[
              styles.textInicio,
              { opacity: show},
            ]}
          >
            ClimAPP
          </Animated.Text>
        </View>
      </>
    );
  } else {
    return (
      <>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar
            animated={true}
            backgroundColor="#142950"
            barStyle="light-content"
          />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Inicio" }}
              />
              <Stack.Screen
                name="AboutTeam"
                component={AboutTeam}
                options={{ title: "Acerca de nosotros" }}
              />
              <Stack.Screen
                name="AboutApp"
                component={AboutApp}
                options={{ title: "Acerca de la App" }}
              />
              <Stack.Screen
                name="SearchWeather"
                component={SearchWeather}
                options={{ title: "Buscar Localidades" }}
                text={{ text: "prueba" }}
              />
              <Stack.Screen
                name="ListWeather"
                component={ListWeather}
                options={{ title: "Lista guardada" }}
              />
              <Stack.Screen
                name="DetailWeather"
                component={DetailWeather}
                options={{ title: "Detalle" }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5DADE2",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imageSol: {
    display: "flex",
    position: "absolute",
    top: 200,
    right: 45,
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  imageNube1: {
    display: "flex",
    position: "absolute",
    top: 230,
    right: 100,
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  imageNube2: {
    display: "flex",
    position: "absolute",
    top: 210,
    right: 100,
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  textInicio: {
    fontSize: 50,
    color: "#000",
    marginTop: 40,
    fontWeight:'bold'
  },
});
