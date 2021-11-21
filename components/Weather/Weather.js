import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";

import InputSearch from "../InputSearch/InputSearch";
import ListData from "../ListData/ListData";
import { Feather } from "@expo/vector-icons";

const Weather = ({
  resultado,
  fetchClima,
  textColor,
  viewInputSearch = true,
  ListWeather
}) => {
  const d = new Date();
  let hours = d.toLocaleTimeString();
  const {
    name,
    weather,
    main: { temp, temp_min, temp_max, humidity },
  } = resultado;
  const kelvin = 273.15;
  const [textInfo, setTextInfo] = useState("");

  return (
    <View>
      {viewInputSearch ? <InputSearch fetchClima={fetchClima} ListWeather={ListWeather} /> : null}
      <View style={styles.container}>
        <View style={styles.extraInfo}>
          <Text style={{ ...styles.headerText, textColor, fontSize: 18 }}>
            {name}
          </Text>
          <Text style={{ ...styles.headerText, textColor, fontSize: 18 }}>
            {hours}
          </Text>
        </View>
        <View style={styles.extraInfo}>
          <Text style={{ ...styles.headerText, textColor, fontWeight: "bold" }}>
            {parseInt(temp - kelvin)}°
          </Text>
          {/* <Feather style={styles.icon} name="sun" size={50} color="black" /> */}
          <Text>{weather[0].icon}.png</Text>
          <Image
            style={styles.imgIcon}
            source={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          />
        </View>
        <Text style={{ ...styles.headerText, textColor, fontSize: 18 }}>
          Min.{parseInt(temp_min - kelvin)}°
        </Text>
        <Text style={{ ...styles.headerText, textColor, fontSize: 18 }}>
          Max.{parseInt(temp_max - kelvin)}°
        </Text>
      </View>
      {/* <ListData resultado={resultado}/> */}
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    // alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 20,
  },

  headerText: {
    fontSize: 80,
    marginTop: 10,
  },
  extraInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    marginTop: 40,
    marginRight: 30,
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
});
