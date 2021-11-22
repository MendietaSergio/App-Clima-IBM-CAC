import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Alert,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  
} from "react-native";
import { cloudy, rainy, snow, sunny } from "../assets/backgroundImages/Index";
import Weather from "../components/Weather/Weather";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const SearchWeather = ({ navigator }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [showIconAction, setShowIconAction] = useState(true);
  const [resultado, setResultado] = useState(null);
  const [sendData, setSendData] = useState({
    name: "",
    country: "",
    lat: "",
    lon: "",
    temp_max: "",
    temp_min: "",
    temp: "",
  });
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
      console.log("main name", resultado.name);
      ListWeather();

      setSendData({
        nameCity: resultado.name,
        country: resultado.sys.country,
        lat: resultado.coord.lat,
        lon: resultado.coord.lon,
        temp_max: resultado.main.temp_max,
        temp_min: resultado.main.temp_min,
        temp: resultado.main.temp,
      });

      formData.append("nameCity", resultado.name);
      formData.append("country", resultado.sys.country);
      formData.append("lat", resultado.coord.lat);
      formData.append("lon", resultado.coord.lon);
      formData.append("temp_max", resultado.main.temp_max);
      formData.append("temp_min", resultado.main.temp_min);
      formData.append("temp", resultado.main.temp);
      setBackgroundImage(getBackgroundImage(main));
    }
  }, [resultado]);
  useEffect(() => {
    fetchClima("Buenos Aires");
  }, []);
  const showAlert = () => {
    Alert.alert("Error", "No hay resultados, intenta con otra ciudad", [
      { text: "OK" },
    ]);
  };
  const config = {
    headaers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };
  const handleChangeIcon = async () => {
    console.log("resultado click name ", resultado.name);
    if (!showIconAction) {
      try {
        const { data } = await axios.post(
          "https://bd-app-clima.vercel.app/listweather",
          sendData
        );
        console.log("recibido");
        setShowIconAction(true);
        setSendData({});
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert("¡ATENCION!", "La ciudad ya está en su lista", [
        { text: "Endendido" },
      ]);
    }
  };
  const ListWeather = async () => {
    try {
      await axios
        .get("https://bd-app-clima.vercel.app/listweather")
        .then((respo) => {
          let found = respo.data.findIndex(
            (i) => i.nameCity === resultado.name
          );
          if (found === -1) {
            setShowIconAction(false);
          } else {
            setShowIconAction(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const getBackgroundImage = (weather) => {
    if (weather === "Snow") return snow;
    if (weather === "Clear") return sunny;
    if (weather === "Rain") return rainy;
    if (weather === "Clouds") return cloudy;
    return haze;
  };
  let colorText = backgroundImage !== sunny ? "white" : "black";
  console.log("color del texto ", colorText);

  return (
    <View style={styles.container}>
      {loaded ? (
        <View style={styles.containerLoaded}>
          <ActivityIndicator color="gray" size={36} />
        </View>
      ) : (
        <>
      <ScrollView>

          <ImageBackground
            source={backgroundImage}
            style={styles.backgroundImg}
            resizeMode="cover"
          >
            <View style={styles.containerSearch}>
              <Weather
                margin={true}
                ListWeather={ListWeather}
                fetchClima={fetchClima}
                resultado={resultado}
                colorText={colorText}
              />
            </View>
          </ImageBackground>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleChangeIcon()}
            style={styles.iconAction}
          >
            <AntDesign
              name={showIconAction ? "checkcircleo" : "pluscircleo"}
              size={24}
              color={showIconAction ? "green" : colorText}
            />
          </TouchableOpacity>
          </ScrollView>
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
  iconAction: {
    display: "flex",
    position: "absolute",
    right: 20,
    top: 125,
  },
});
const formData = new FormData();
