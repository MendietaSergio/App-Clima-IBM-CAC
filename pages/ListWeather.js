import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ActivityIndicator,
} from "react-native";
import ListData from "../components/ListData/ListData";
import axios from "axios";

const ListWeather = ({ navigation }) => {
  const [showMaps, setShowMaps] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [loaded, setLoaded] = useState(true);
  const getListWeather = async () => {
    try {
      const { data } = await axios.get(
        "https://bd-app-clima.vercel.app/listweather"
      );
      setResultado(data);
    } catch (error) {
      console.log(error);
    }
  };
  const config = {
    headaers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };
  const deleteCity = async (id) =>{
    console.log("eliminado id => ", id);
    try {
      await axios.delete(
        `https://bd-app-clima.vercel.app/delete/${id}`
      )
      .then(resp =>{
        console.log("data => ", resp.data.message);
        getListWeather()
      })
    } catch (error) {
      console.log(error);
    } 
  }
  useEffect(() => {
    if (resultado != null) {
      setLoaded(false);
    }
  }, [resultado]);
  useEffect(() => {
    getListWeather();
  }, []);
  return (
    <>
      {loaded ? (
        <View style={styles.containerLoaded}>
          <ActivityIndicator color="gray" size={36} />
        </View>
      ) : (
        <>
          {resultado != null ? (
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
                    <FlatList
                      style={styles.list}
                      data={resultado}
                      renderItem={({ item }) => (
                        <ListData item={item} deleteCity={deleteCity} navigation={navigation} />
                      )}
                      keyExtractor={(item) => item._id}
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
          ) : (
            <View style={styles.containerInfo}>
              <Text>No hay ninguno guardado</Text>
              <View style={styles.btnRedireccion}>
                <Button
                  title={"Buscar"}
                  onPress={() => navigation.navigate("SearchWeather")}
                />
              </View>
            </View>
          )}
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
  containerInfo: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  btnRedireccion: {
    marginVertical: 40,
  },
  containerLoaded: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
