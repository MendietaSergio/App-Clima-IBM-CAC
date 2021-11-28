import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  Text,
  Dimensions,
} from "react-native";
import Weather from "../components/Weather/Weather";
import {
  cloudy,
  rainy,
  snow,
  sunny,
  haze,
} from "../assets/backgroundImages/Index";
import { color } from "react-native-reanimated";

const DetailWeather = ({ route }) => {
  const item = route.params;
  const [resultado, setResultado] = useState(null);
  const [loaded, setLoaded] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const fetchClima = async (ciudad) => {
    const apiID = "8eaae482f433816013eb58a3b326c92d";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiID}`;
    try {
      const resp = await fetch(url);
      if (resp.status == 200) {
        const data = await resp.json();
        setResultado(data);
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
      const [{ main }] = resultado.weather;
      setBackgroundImage(getBackgroundImage(main));
      setLoaded(false);
    }
  }, [resultado]);
  const getBackgroundImage = (weather) => {
    if (weather === "Snow") return snow;
    if (weather === "Clear") return sunny;
    if (weather === "Rain") return rainy;
    if (weather === "Haze") return haze;
    if (weather === "Clouds") return cloudy;
  };
  useEffect(() => {
    if (item) {
      fetchClima(item);
    }
  }, [item]);
  let colorText = (backgroundImage !== rainy ?(backgroundImage !== sunny ? "white" : "black"): "black");
  return (
    <View style={styles.container}>
      {loaded ? (
        <View style={styles.containerLoaded}>
          <ActivityIndicator color="gray" size={36} />
        </View>
      ) : (
        <>
          <ImageBackground
            style={styles.backgroundImg}
            source={backgroundImage}
            resizeMode="cover"
          >
            <View>
              <Weather
                viewInputSearch={false}
                resultado={resultado}
                colorText={colorText}
              />
            </View>
          </ImageBackground>
        </>
      )}
    </View>
  );
};

export default DetailWeather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  data: {
    flex: 1,
    marginVertical: 10,
  },
  containerLoaded: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get("screen").width,
  },
});
