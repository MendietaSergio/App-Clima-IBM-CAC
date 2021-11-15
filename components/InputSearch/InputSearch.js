import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Dimensions
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InputSearch = ({fetchClima }) => {
  const [ciudad, setCiudad] = useState("");
  const consultarClima = () => {
    if (ciudad === "") {
      mostrarAlert();
      return;
    }
    fetchClima(ciudad)
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
          value={ciudad}
          onChangeText={(text) => setCiudad(text)}
          placeholder="Ingrese una ciudad"
        />
        <FontAwesome
          style={styles.iconSearch}
          name="search"
          size={20}
          color="black"
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
    backgroundColor: "lightgray",
    borderColor: "lightgray",
  },
});
