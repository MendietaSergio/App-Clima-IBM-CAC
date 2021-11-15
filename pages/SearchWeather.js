import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Alert,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import InputSearch from "../components/InputSearch/InputSearch";
import ListData from "../components/ListData/ListData";
import Maps from "../components/Maps/Maps";
import { haze, rainy, snow, sunny } from "../assets/backgroundImages/Index";
import Weather from "../components/Weather/Weather";

const SearchWeather = ({ navigator }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);

  const [resultado, setResultado] = useState(null);
  const [loaded, setLoaded] = useState(true);

  const fetchClima = async (ciudad) => {
    const apiID = "8eaae482f433816013eb58a3b326c92d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiID}`;
    console.log(url);
    try {
      const resp = await fetch(url);
      if (resp.status == 200) {
        const data = await resp.json();
        console.log("data =>", data);
        setResultado(data);
        setLoaded(false);
      } else {
        setResultado(null);
        showAlert();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (resultado !== null) {
      const { weather } = resultado;
      const [{ main }] = weather;
      console.log("main ", main);
      setBackgroundImage(getBackgroundImage(main));
    }
  }, [resultado]);
  useEffect(() => {
    fetchClima("mendoza");
  }, []);
  const showAlert = () => {
    Alert.alert("Error", "No hay resultados, intenta con otra ciudad", [
      { text: "OK" },
    ]);
  };

  const getBackgroundImage = (weather) => {
    if (weather === "Snow") return snow;
    if (weather === "Clear") return sunny;
    if (weather === "Rain") return rainy;
    if (weather === "Haze") return haze;
    if (weather === "Clouds") return haze;
    return haze;
  };
  let textColor = backgroundImage !== sunny ? "white" : "black";
  return (
    <View style={styles.container}>
      {loaded ? (
        <View style={styles.containerLoaded}>
          <ActivityIndicator color="gray" size={36} />
        </View>
      ) : (
        <>
          <ImageBackground
            source={backgroundImage}
            style={styles.backgroundImg}
            resizeMode="cover"
          >
            <View style={styles.containerSearch}>
              <Weather
                fetchClima={fetchClima}
                resultado={resultado}
                textColor={textColor}
              />
            </View>
          </ImageBackground>
        </>
      )}
    </View>
  );
};
export default SearchWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    flex: 1,
    backgroundColor: "red",
    width: Dimensions.get("screen").width,
  },
  containerLoaded: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  containerSearch: {
    marginTop: 20,
  },
  containerList: {
    flex: 1,
    marginHorizontal: 2.5,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 20,
  },
  list: {
    flex: 1,
    height: 150,
  },
  containerBtn: {
    marginVertical: 10,
  },
});