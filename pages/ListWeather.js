import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ListData from "../components/ListData/ListData";

const ListWheater = ({ navigator }) => {
  const [dataItem, setDataItem] = useState([
    {
      id: "1",
      localidad: "Avellaneda",
      ciudad: "Buenos Aires",
      fecha: "12:05 PM",
      temMax: 23,
      temMin: 15,
    },
    {
      id: "2",
      localidad: "Avellaneda",
      ciudad: "Buenos Aires",
      fecha: "12:05 PM",
      temMax: 23,
      temMin: 15,
    },
    {
      id: "3",
      localidad: "Avellaneda",
      ciudad: "Buenos Aires",
      fecha: "12:05 PM",
      temMax: 23,
      temMin: 15,
    },
    {
      id: "4",
      localidad: "Avellaneda",
      ciudad: "Buenos Aires",
      fecha: "12:05 PM",
      temMax: 23,
      temMin: 15,
    },
    {
      id: "5",
      localidad: "Quilmes",
      ciudad: "Buenos Aires",
      fecha: "12:05 PM",
      temMax: 23,
      temMin: 15,
    },
  ]);
  const [showMaps, setShowMaps] = useState(false);
  console.log("data => ", dataItem);
  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
        <View>
          <TextInput
            style={styles.inputSearch}
            placeholder="Ingrese una localidades/ciudades"
          />
          <FontAwesome
            style={styles.iconSearch}
            name="search"
            size={20}
            color="black"
          />
        </View>
      </View>
      {dataItem.lenght > 0 ? (
        <Text>Usted no tiene guardado</Text>
      ) : (
        <>
          {showMaps ? (
            <>
              <View style={styles.containerList}>
                <Text>Mapa</Text>
              </View>
            </>
          ) : (
            <>
              <View style={styles.containerList}>
                <Text style={styles.textTitle}>
                  Lista de ubicaciones guardadas
                </Text>

                <FlatList
                  style={styles.list}
                  data={dataItem}
                  renderItem={({ item }) => <ListData item={item} />}
                  keyExtractor={(dataItem) => dataItem.id}
                />
              </View>
            </>
          )}
          <View style={styles.containerBtn}>
            <Button
              title={showMaps ? "Ver lista" : "Ver mapa"}
              onPress={() => setShowMaps(!showMaps)}
            />
          </View>
        </>
      )}
    </View>
  );
};
export default ListWheater;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  inputSearch: {
    height: 40,
    margin: 12,
    borderWidth: 0.6,
    borderRadius: 10,
    backgroundColor: "#EAEDED",
    padding: 10,
  },
  iconSearch: {
    display: "flex",
    position: "absolute",
    right: 30,
    marginVertical: 20,
  },
  list: {
    flex: 1,
    height: 150,
  },
  containerBtn: {
    marginVertical: 10,
  },
});
