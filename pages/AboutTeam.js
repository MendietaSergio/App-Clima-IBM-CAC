import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  ScrollView,
  Linking,
  Modal,
  ImageBackground,
} from "react-native";
import { avatarEM,avatar, avatarSM, Portada } from "../assets/backgroundImages/Index";
import { EvilIcons } from "@expo/vector-icons";

const AboutTeam = ({ navigator }) => {
  const [showAvatar1, setShowAvatar1] = useState(false);
  const [showAvatar2, setShowAvatar2] = useState(false);
  const [showAvatar3, setShowAvatar3] = useState(false);
  const handleShow = (select) => {
    if (select === "one") {
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
        <View>
          <Modal visible={showAvatar1} transparent animationType="slide">
            <View style={styles.containerModal}>
              <View style={styles.containerClosed}>
                <ImageBackground
                  style={{
                    width: "100%",
                    height: "46%",
                  }}
                  source={Portada}
                  resizeMode="cover"
                >
                  <View style={styles.closedModel}>
                    <TouchableNativeFeedback
                      onPress={() => setShowAvatar1(false)}
                    >
                      <EvilIcons name="close" size={24} color="white" />
                    </TouchableNativeFeedback>
                  </View>
                  <View style={styles.headerModal}>
                    <View style={styles.avatar}>
                      <Image
                        source={avatarEM}
                        style={styles.backgroundImg}
                        resizeMode="cover"
                      />
                      <View style={styles.containerName}>
                        <Text style={styles.textName}>Eliana</Text>
                        <Text style={styles.textName}>Molinari</Text>
                        <Text style={styles.textCargo}>Investigación</Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
                <View style={styles.bodyModel}>
                  <Text>
                    Desarrolladora full stack, en esta ocasión fui encargada de
                    ser parte del lado de la investigación para realizar la
                    aplicación designada. Junto a mis compañeros/as, compartimos
                    información para poder entregar de manera funcional dicha
                    aplicación, con las espeficicaciones necesarias.
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>

        <View>
          <Modal visible={showAvatar2} transparent animationType="slide">
            <View style={styles.containerModal}>
              <View style={styles.containerClosed}>
                <ImageBackground
                  style={{
                    width: "100%",
                    height: "46%",
                  }}
                  source={Portada}
                  resizeMode="cover"
                >
                  <View style={styles.closedModel}>
                    <TouchableNativeFeedback
                      onPress={() => setShowAvatar2(false)}
                    >
                      <EvilIcons name="close" size={24} color="white" />
                    </TouchableNativeFeedback>
                  </View>
                  <View style={styles.headerModal}>
                    <View style={styles.avatar}>
                      <Image
                        source={avatarSM}
                        style={styles.backgroundImg}
                        resizeMode="cover"
                      />
                      <View style={styles.containerName}>
                        <Text style={styles.textName}>Sergio</Text>
                        <Text style={styles.textName}>Mendieta</Text>
                        <Text style={styles.textCargo}>Desarrollo</Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
                <View style={styles.bodyModel}>
                  <Text>
                    Desarrollador web Full Stack, autodidacta. En busca de
                    crecimiento profesional, actualmente aprendiendo React
                    Native para aplicaciones moviles con habilidades en
                    lenguajes MERN. En este proyecto tuve la oportunidad de
                    poder trabajar en las areas de desarrollo frontend, backend
                    e investigación.
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View>
          <Modal visible={showAvatar3} transparent animationType="slide">
            <View style={styles.containerModal}>
              <View style={styles.containerClosed}>
                <ImageBackground
                  style={{
                    width: "100%",
                    height: "46%",
                  }}
                  source={Portada}
                  resizeMode="cover"
                >
                  <View style={styles.closedModel}>
                    <TouchableNativeFeedback
                      onPress={() => setShowAvatar3(false)}
                    >
                      <EvilIcons name="close" size={24} color="white" />
                    </TouchableNativeFeedback>
                  </View>
                  <View style={styles.headerModal}>
                    <View style={styles.avatar}>
                      <Image
                        source={avatar}
                        style={styles.backgroundImg}
                        resizeMode="cover"
                      />
                      <View style={styles.containerName}>
                        <Text style={styles.textName}>Johana</Text>
                        <Text style={styles.textName}>Torres</Text>
                        <Text style={styles.textCargo}>Investigación</Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
                <View style={styles.bodyModel}>
                  <Text>
                    Desarrolladora full stack, en esta ocasión fui encargada de
                    ser parte del lado de la investigación para realizar la
                    aplicación designada. Junto a mis compañeros/as, compartimos
                    información para poder entregar de manera funcional dicha
                    aplicación, con las espeficicaciones necesarias.
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        <View style={styles.containerAvatar}>
          <TouchableNativeFeedback onPress={() => handleShow("one")}>
            <View style={styles.avatar}>
              <Image
                source={avatarEM}
                style={styles.backgroundImg}
                resizeMode="cover"
              />
              <View style={styles.containerName}>
                <Text style={styles.textName}>Eliana</Text>
                <Text style={styles.textName}>Molinari</Text>
                <Text style={styles.textCargo}>Investigación</Text>
              </View>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => handleShow("two")}>
            <View style={styles.avatar}>
              <Image
                source={avatarSM}
                style={styles.backgroundImg}
                resizeMode="cover"
              />
              <View style={styles.containerName}>
                <Text style={styles.textName}>Sergio</Text>
                <Text style={styles.textName}>Mendieta</Text>
                <Text style={styles.textCargo}>Desarrollo</Text>
              </View>
            </View>
          </TouchableNativeFeedback>
          <View>
            <TouchableNativeFeedback onPress={() => handleShow("three")}>
              <View style={styles.avatar}>
                <Image
                  source={avatar}
                  style={styles.backgroundImg}
                  resizeMode="cover"
                />
                <View style={styles.containerName}>
                  <Text style={styles.textName}>Johana</Text>
                  <Text style={styles.textName}>Torres</Text>
                  <Text style={styles.textCargo}>Investigación</Text>
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
            <Text style={styles.listTool}>○ Express</Text>
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
    borderColor: "#CEA76A",
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
  containerModal: {
    flex: 1,
    backgroundColor: "rgba(1,1,1, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  containerClosed: {
    height: "70%",
    width: "90%",
    backgroundColor: "#5DADE2",
  },
  headerModal: {
    top: 60,
    height: 45,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  closedModel: {
    top: 10,
    right: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bodyModel: {
    top: 50,
    height: "auto",
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: "justify",
    marginHorizontal: 10,
  },
  containerLogo: {
    top: 20,
    marginHorizontal: 20,
    marginVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",

  },
  logo: {
    width: 50,
    height: 50,
  },
});
