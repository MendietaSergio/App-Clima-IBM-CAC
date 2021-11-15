import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import ListData from "../components/ListData/ListData";
const ListWeather = ({ navigator }) => {
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

  return (
    <>
      {dataItem.lenght > 0 ? (
        <Text>Usted no tiene guardado</Text>
      ) : (
        <>
          {showMaps ? (
            <>
              <View style={styles.containerList}>
                <Maps />
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
    </>
  );
};

export default ListWeather;

const styles = StyleSheet.create({
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
});
