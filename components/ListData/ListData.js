import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const ListData = ({ item }) => {
  const [showIconAction, setShowIconAction] = useState(false);
  console.log("item => ", item);
  const handleChangeIcon = () => {
    console.log("click");
    setShowIconAction(!showIconAction);
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
              name={showIconAction ? "closecircleo" : "pluscircleo"}
              size={24}
              color={showIconAction ? "red" : "green"}
            />
          </TouchableOpacity>
          <View style={styles.container}>
            <Text style={styles.text}>{item.localidad}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.textCity}>{item.ciudad}</Text>
            <Feather style={styles.icon} name="sun" size={24} color="black" />
          </View>
          <View style={styles.container}>
            <Text style={styles.textDate}>{item.fecha}</Text>
            <Text style={styles.textTem}>{item.temMax}°</Text>
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
  textCity: {
    fontSize: 14,
  },
  textDate: {
    fontSize: 10,
    margin: 0,
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
