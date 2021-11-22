import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Weather from "../components/Weather/Weather";

const DetailWeather = ({ route }) => {
  const item = route.params;
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
    if (item) {
      fetchClima(item);
    }
  }, [item]);
  return (
    <View style={styles.container}>
      {loaded ? (
        <View style={styles.containerLoaded}>
          <ActivityIndicator color="gray" size={36} />
        </View>
      ) : (
        <View>
          <Weather viewInputSearch={false} resultado={resultado} />
        </View>
      )}
    </View>
  );
};

export default DetailWeather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    containerLoaded: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
})