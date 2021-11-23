import React from "react";
import { Text, View } from "react-native";

const AboutApp = ({navigator}) =>{
    return(
        <View>
            <Text>Acerca de la App =)</Text>
            <Text>climapp incluye un numero de features como ubucacion y coordenadas de varias cuidades 
                y su respectivo clima en vivo y predicciones al instante, esto es gracias a la API de openweathermap.org 
                 en colaboracion con 
                 "axios - https://bd-app-clima.vercel.app/listweather" </Text>
        </View>
    )
}
export default AboutApp;