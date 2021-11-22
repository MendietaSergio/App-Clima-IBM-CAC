import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const Home = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textTitle}>Bienvenidos a ClimAPP</Text>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.textSubTitle}>Descripción de la app</Text>
            <View style={styles.containerInfo}>
              <Text style={styles.textContent}>
                Aplicación para estar informado sobre el clima en cada ciudad
                que quieras, te da la posibilidad de poder tener una lista
                personalizada de ciudades con ina breve y detallada información
                de cómo va a estar el día a día.
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 0 }}>
            <Text style={styles.textSubTitle}>Uso</Text>
            <View style={{ padding: 10 }}>
              <Text style={styles.textList}>Home:</Text>
              <Text style={styles.textListContent}>
                {" "}
                Información sobre la aplicación, manera de uso, flujo de pila.
              </Text>
              <Text style={styles.textList}>Search:</Text>
              <Text style={styles.textListContent}>
                {" "}
                Buscador, en el cual vas a poder ver en primera instancia tu
                ubicación actual y en la barra de busqueda vas a poder tipear y
                buscar la ciudad que deseas saber su clima, en la misma pantalla
                se puede visualizar los datos obtenidos y te da la opción de
                agregarlo a tu lista de ciudades en el caso de que no lo tengas
                guardado, si ya lo tenes te aparecerá un alerta de que ya lo
                tenes en tu lista.
              </Text>
              <Text style={styles.textList}>List:</Text>
              <Text style={styles.textListContent}>
                {" "}
                En esta sección vas a poder ver la lista de ciudades que tengas
                guardada y también eliminar alguna de la lista, en caso de que
                no tengas ninguna, te aparecerá que no tienes ninguna ciudad en
                la lista y te da la opción de ir al buscador, en caso de que
                tengas ciudades guardadas se van a poder ver reflejadas en la
                misma pantalla con los datos actualizados. En el caso de que
                quieras ver más detalles, al hacerle click a alguna ciudad de la
                lista, la misma te llevará a la pantalla donde se ve la ciduad
                seleccionada con mas información y te da la posibilidad de ver
                en que parte del mapa esta ubicado.
              </Text>
            </View>
          </View>
          <View style={styles.containerTeam}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnTeam}
              onPress={() => navigation.navigate("AboutTeam")}
            >
              <Text style={(styles.textTeam, { color: "black" })}>
                Acerca de nosotros
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {/* MENU */}
      <View>
        <View style={styles.containerMenuHorizontal}>
          <View style={styles.containerBtnMenu}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnMenu}
              onPress={() => navigation.navigate("ListWeather")}
            >
              <Entypo name="list" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.containerBtnMenu}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnMenu}
              onPress={() => navigation.navigate("Home")}
            >
              <AntDesign name="home" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.containerBtnMenu}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.btnMenu}
              onPress={() => navigation.navigate("SearchWeather")}
            >
              <FontAwesome name="search" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
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
    color: "#000099",
  },
  containerInfo: {
    backgroundColor: "rgba(158, 158, 158,0.2)",
    borderBottomColor: "#e1e1e1",
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderRadius: 10,
    marginVertical: 6,
    marginHorizontal: 8,
  },
  containerMenuHorizontal: {
    height: 50,
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-around",
    display: "flex",
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width,
  },
  containerTeam: {
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: 60,
  },
  btnTeam: {
    backgroundColor: "#4DD0E1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 180,
    borderRadius: 50,
    fontSize: 10,
  },
  textTeam: {
    alignItems: "center",
    textAlignVertical: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
  btnMenu: {
    backgroundColor: "#f4f4f4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    // backgroundColor: "#B0BEC5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginBottom: 50,
    borderRadius: 50,
  },
  containerBtnMenu: {
    width: 50,
  },
  textList: {
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 10,
  },
  textContent: {
    fontWeight: "normal",
    textAlign: "justify",
    fontSize: 16,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  textListContent: {
    textAlign: "justify",
  },
  textSubTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  btnText: {
    display: "flex",
    textAlign: "left",
    fontSize: 15,
    color: "#FFF",
    fontWeight: "bold",
  },
});
