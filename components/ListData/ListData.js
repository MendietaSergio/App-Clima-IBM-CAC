import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const ListData = ({ navigation, item, deleteCity }) => {
  const { nameCity, country, temp_max, temp_min, temp, _id } = item;
  const [resultado, setResultado] = useState(null);

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
        console.log("resultado ", resultado);
      } else {
        showAlert();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const d = new Date();
  let hours = d.toLocaleTimeString();
  useEffect(() => {
    fetchClima(nameCity);
  }, [nameCity]);
  const handleChangeIcon = () => {
    deleteCity(_id);
  };
  const kelvin = 273.15;
  return (
    <>
      <TouchableNativeFeedback
        onPress={() => navigation.navigate("DetailWeather", nameCity)}
      >
        <View style={styles.data}>
          <TouchableOpacity
            onPress={() => handleChangeIcon()}
            style={styles.iconAction}
          >
            <AntDesign
              name="closecircleo"
              size={24}
              color="red"
            />
          </TouchableOpacity>
          <View style={styles.container}>
            <Text style={styles.text}>
              {nameCity}
              <Text style={styles.textCity}>, {country}.</Text>
            </Text>
          </View>
          <View style={styles.container}>
            <View style={styles.containerTemp}>
              <Text style={styles.textTem}>
                Max. {parseInt(temp_max - kelvin)}°
              </Text>
              <Text style={styles.textTem}>
                Min. {parseInt(temp_min - kelvin)}°
              </Text>
            </View>
            <View style={styles.containerIcon}>
              <Feather style={styles.icon} name="sun" size={24} color="black" />
              <Text style={styles.textTem}>{parseInt(temp - kelvin)}°</Text>
            </View>
          </View>
            <Text style={styles.textHours}>Ultima actualización: {hours}</Text>
        </View>
      </TouchableNativeFeedback>
    </>
  );
};

export default ListData;

const styles = StyleSheet.create({
  data: {
    backgroundColor: "#FFF",
    borderBottomColor: "#e1e1e1",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRadius: 10,
    paddingVertical: 6, //esto agrega el padding arriba y abajo
    paddingHorizontal: 10, //esto le agrega el padding a los lados
    marginVertical: 6,
    marginHorizontal: 8,
    // cursor: "pointer",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerIcon: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  containerTemp: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 2,
  },
  textCity: {
    fontSize: 12,
  },
  textTem: {
    fontSize: 14,
    marginRight: 30,
  },
  textHours: {
    textAlign: "left",
    fontSize: 10,
    marginRight: 30,
    // marginVertical: 10,
  },
  icon: {
    marginRight: 30,
  },
  iconAction: {
    display: "flex",
    position: "absolute",
    right: 10,
    marginTop: 10,
  },
});
