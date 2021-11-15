import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Bienvenidos a la aplicación del clima
      </Text>
      <View>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnSearch}
            onPress={() => navigation.navigate("AboutTeam")}
          >
            <Text style={styles.btnText}>Acerca de nosotros</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.btnSearch}
            onPress={() => navigation.navigate("AboutApp")}
          >
            <Text style={styles.btnText}>Sobre la app</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerBtnSearch}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnSearch}
          onPress={() => navigation.navigate("SearchWeather")}
        >
          <Text style={styles.btnText}>
            Consultar Clima{" "}
            <FontAwesome name="search" size={20} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerBtnSearch}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnSearch}
          onPress={() => navigation.navigate("ListWeather")}
        >
          <Text style={styles.btnText}>
            Ver Lista
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
  btnSearch: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    backgroundColor: "#142950",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginBottom: 50,
    borderRadius: 10,
  },
  containerBtnSearch: {
    width: 200,
  },
  btnText: {
    display: "flex",
    textAlign: "left",
    fontSize: 15,
    color: "#FFF",
    fontWeight: "bold",
  },
});
