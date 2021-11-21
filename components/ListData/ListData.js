import React, { useState } from "react";
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
const ListData = ({ item, deleteCity }) => {
  const { nameCity, country, temp_max, temp_min, temp, _id } = item;
  const [showIconAction, setShowIconAction] = useState(false);
  const handleChangeIcon = () => {
    setShowIconAction(!showIconAction);
    deleteCity(_id);
  };
  return (
    <>
      <TouchableNativeFeedback>
        <View style={styles.data}>
          <TouchableOpacity
            onPress={() => handleChangeIcon()}
            style={styles.iconAction}
          >
            <AntDesign
              name={showIconAction ? "pluscircleo" : "closecircleo"}
              size={24}
              color={showIconAction ? "green" : "red"}
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
              <Text style={styles.textTem}>Max. {temp_max}°</Text>
              <Text style={styles.textTem}>Min. {temp_min}°</Text>
            </View>
            <View style={styles.containerIcon}>
              <Feather style={styles.icon} name="sun" size={24} color="black" />
              <Text style={styles.textTem}>{temp}°</Text>
            </View>
          </View>
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
    marginVertical:2
  },
  textCity: {
    fontSize: 12,
  },
  textTem: {
    fontSize: 14,
    marginRight: 30,
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
