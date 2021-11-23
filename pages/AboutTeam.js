import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  ScrollView,
  Linking,
} from "react-native";
import Avatar from "../assets/backgroundImages/avatar.jpg";
const AboutTeam = ({ navigator }) => {
  const [showAvatar1, setShowAvatar1] = useState(false);
  const [showAvatar2, setShowAvatar2] = useState(false);
  const [showAvatar3, setShowAvatar3] = useState(false);
  const handleShow = (select) => {
    if (select === "one") {
      console.log("one");
      setShowAvatar3(false);
      setShowAvatar1(true);
      setShowAvatar2(false);
    } else if (select === "two") {
      setShowAvatar3(false);
      setShowAvatar1(false);
      setShowAvatar2(true);
    } else {
      setShowAvatar3(true);
      setShowAvatar1(false);
      setShowAvatar2(false);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textTitle}>Nuestro equipo </Text>
        <View style={styles.containerAvatar}>
          <TouchableNativeFeedback
            // opacity={0.6}

            onPress={() => handleShow("one")}
          >
            <View style={styles.avatar}>
              <Image
                source={Avatar}
                style={styles.backgroundImg}
                resizeMode="cover"
              />
              <View style={styles.containerName}>
                <Text style={styles.textName}>Nombre</Text>
                <Text style={styles.textName}>Apellido</Text>
                <Text style={styles.textCargo}>Cargo</Text>
              </View>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => handleShow("two")}>
            <View style={styles.avatar}>
              <Image
                source={Avatar}
                style={styles.backgroundImg}
                resizeMode="cover"
              />
              <View style={styles.containerName}>
                <Text style={styles.textName}>Nombre</Text>
                <Text style={styles.textName}>Apellido</Text>
                <Text style={styles.textCargo}>Cargo</Text>
              </View>
            </View>
          </TouchableNativeFeedback>
          <View>
            <TouchableNativeFeedback onPress={() => handleShow("three")}>
              <View style={styles.avatar}>
                <Image
                  source={Avatar}
                  style={styles.backgroundImg}
                  resizeMode="cover"
                />
                <View style={styles.containerName}>
                  <Text style={styles.textName}>Johana</Text>
                  <Text style={styles.textName}>Torres</Text>
                  <Text style={styles.textCargo}>Investigacion</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View style={styles.containerAbout}>
          <Text style={styles.textTitle}>Misión</Text>
          <Text style={styles.containerText}>
            Somos un grupo de personas que se preocupan por brindar un servicio
            de calidad con enfasis en la usabilidad y focalizados en las
            necesidades de nuestros clientes.
          </Text>
        </View>

        <View style={styles.containerTool}>
          <Text style={styles.textSubTitle}>
            Las herramientas utilizadas para este proyecto fueron:
          </Text>
          <View>
            <Text style={styles.listTool}>○ React Native</Text>
            <Text style={styles.listTool}>○ Expo Cli</Text>
            <Text style={styles.listTool}>○ Node JS</Text>
            <Text style={styles.listTool}>○ MongoDB</Text>
            <Text style={styles.listTool}>○ API OpenWeatherMap</Text>
            <Text style={styles.listTool}>○ Trello</Text>
            <Text style={styles.listTool}>○ Canva</Text>
            <Text style={styles.listTool}>○ Github</Text>
          </View>
          <View style={styles.dividerHorizontal} />

          <Text style={styles.textRepo}>
            Toda la documentación se puede encontrar en nuestro repositorio de
            <Text
              style={{ color: "blue", fontWeight: "bold" }}
              onPress={() =>
                Linking.openURL(
                  "https://github.com/MendietaSergio/App-Clima-IBM-CAC"
                )
              }
            >
              {" "}
              Github
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default AboutTeam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerText: {
    marginVertical: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  containerAvatar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  containerAbout: {
    marginHorizontal: 12,
    marginTop: 60,
    padding: 2,
    shadowColor: "#FFF",
  },
  avatar: {
    width: 100,
    height: 100,
  },
  backgroundImg: {
    width: 100,
    borderRadius: 50,
    borderColor: "#5DADE2",
    borderWidth: 6,
    height: 100,
  },
  containerName: {
    flexDirection: "column",
    marginVertical: 15,
  },
  textName: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  textCargo: {
    textAlign: "center",
    fontSize: 12,
  },
  textTitle: {
    fontSize: 20,
    marginHorizontal: 20,
    fontWeight: "bold",
    marginVertical: 15,
    color: "#000099",
    textAlign: "center",
  },
  listTool: {
    fontWeight: "bold",
    padding: 2,
  },
  textSubTitle: {
    fontWeight: "normal",
    textAlign: "justify",
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  containerTool: {
    padding: 10,
    marginVertical: 15,
  },
  textRepo: {
    color: "#000",
    fontSize: 14,
    padding: 10,
  },
  dividerHorizontal: {
    marginHorizontal: 40,
    marginTop: 40,
    borderBottomColor: "blue",
    borderBottomWidth: 1,
  },
});
