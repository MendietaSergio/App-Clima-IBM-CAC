import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Dimensions,
  Keyboard,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InputSearch = ({ fetchClima, ListWeather, colorText }) => {
  const [ciudad, setCiudad] = useState("");
  const consultarClima = () => {
    if (ciudad === "") {
      mostrarAlert();
      return;
    }
    ListWeather();
    fetchClima(ciudad);
    Keyboard.dismiss();
  };
  const mostrarAlert = () => {
    Alert.alert("Error", "Agrega una ciudad para la búsqueda", [
      { text: "Endendido" },
    ]);
  };

  return (
    <>
      <View style={styles.searchBar}>
        <TextInput
          placeholderTextColor="#000"
          value={ciudad}
          onChangeText={(text) => setCiudad(text)}
          placeholder="Ingrese una ciudad"
          onSubmitEditing={() => consultarClima()}
        />
        <FontAwesome
          name="search"
          size={20}
          color={colorText}
          onPress={() => consultarClima()}
        />
      </View>
    </>
  );
};

export default InputSearch;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 20,
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    color: "black",
    // backgroundColor: "rgba(21,211,211,0.2)",
    borderColor: "lightgray",
  },
});
