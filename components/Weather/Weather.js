import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground, Image } from "react-native";

import InputSearch from "../InputSearch/InputSearch";
import ListData from "../ListData/ListData";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import Maps from "../Maps/Maps";

const Weather = ({
  resultado,
  fetchClima,
  viewInputSearch = true,
  ListWeather,
  margin = false
}) => {
  const d = new Date();
  let hours = d.toLocaleTimeString();
  const {
    name,
    weather,
    main: { temp, temp_min, temp_max, humidity },
    wind: { speed },
  } = resultado;
  console.log("descripcion ", weather[0]);
  const kelvin = 273.15;
  const [textInfo, setTextInfo] = useState("");
  let marginProps = margin ? 10 : 40
  const WeatherIcon = weather => {
    if (weather[0].main == 'Sunny') {
      return <Fontisto name="day-sunny" size={50} color="black" />
    }
    if (weather[0].main == 'Rainy') {
      return <Ionicons name="rainy" size={50} color="black" />
    }
    if (weather[0].main== 'Clouds') {
      return <Ionicons name="ios-cloudy-outline" size={50} color="black" />
    }
    if (weather[0].main == 'Clear') {
      return <Fontisto name="night-clear" size={50} color="black" />
    } 
    if (weather[0].main == 'Snow') {
      return <Feather name="cloud-snow" size={50} color="black" />
    } 
  };
  return (
    <View>
      {viewInputSearch ? (
        <InputSearch fetchClima={fetchClima} ListWeather={ListWeather} />
      ) : null}
      <View style={{...styles.container, marginVertical: marginProps}}>
        <View style={{ ...styles.hourInfo }}>
          <Text>{hours}</Text>
        </View>
        <View style={styles.titleInfo}>
          <Text style={{ ...styles.titleInfo, fontSize: 18 }}>
            {name}
          </Text>
        </View>
        <View style={styles.extraInfo}>
          <Text style={{ ...styles.headerText, fontWeight: "bold" }}>
            {parseInt(temp - kelvin)}°
          </Text>
          <View style={styles.icon}>
            {WeatherIcon(weather)}
            <Text style={styles.headerDescrip}>{weather[0].description}</Text>
          </View>
        </View>
        <View style={styles.containerTemp}>
          <Text style={{ ...styles.headerText, fontSize: 18 }}>
            Min: {parseInt(temp_min - kelvin)}°
          </Text>
          <Text style={{ ...styles.headerText, fontSize: 18 }}>
            Max: {parseInt(temp_max - kelvin)}°
          </Text>
        </View>
        <View style={styles.containerButtom}>
          <View>
            <Maps />
          </View>
          <View style={styles.dividerHorizontal} />
          <View style={styles.containerInfo}>
            <View styles={{ alignItems: "center" }}>
              <Text style={styles.infoText}>Viento</Text>
              <Text style={styles.infoText}>{speed}</Text>
              <Text style={styles.infoText}>KM/H</Text>
              <View style={styles.infoBar}>
                <View
                  style={{
                    width: speed / 2,
                    height: 6,
                    backgroundColor: "#69F0AE",
                  }}
                />
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.infoText}>Humedad</Text>
              <Text style={styles.infoText}>{humidity}</Text>
              <Text style={styles.infoText}>%</Text>
              <View style={styles.infoBar}>
                <View
                  style={{
                    width: humidity / 2,
                    height: 6,
                    backgroundColor: "#69F0AE",
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    marginVertical: 40,
    marginHorizontal: 20,
  },
  hourInfo: {
    fontSize: 12,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  titleInfo: {
    marginTop: 10,
  },
  headerText: {
    fontSize: 80,
    marginTop: 5,
  },
  extraInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 10,
  },
  headerDescrip: {
    fontSize: 12,
  },
  icon: {
    marginTop: 40,
    marginRight: 30,
  },
  containerTemp: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  info: {
    width: Dimensions.get("screen").width / 2.5,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
  },
  imgIcon: {
    width: 50,
    height: 50,
  },
  dividerHorizontal: {
    marginHorizontal: 10,
    marginTop: 40,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  containerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  infoText: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  infoBar: {
    marginVertical: 10,
    width: 45,
    height: 5,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  containerButtom:{
    marginTop: 10
  }
});
