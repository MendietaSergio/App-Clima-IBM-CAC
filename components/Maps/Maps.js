import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from "react-native-maps"
const Maps = () =>{
    return(
        <View style={styles.container}> 
            <MapView
             style={styles.map}
             initialRegion={{
                latitude: 39.675775,
                longitude: -75.768287,
                latitudeDelta: 0.0122,
                longitudeDelta: 0.0121,
              }}
            />
        </View>
    )
}

export default Maps;
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'transparent'        
    },
    map:{
        width:Dimensions.get('window').width-40,
        height: Dimensions.get('window').height/5,
      
    }
})