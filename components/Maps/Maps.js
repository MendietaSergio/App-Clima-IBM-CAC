import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from "react-native-maps"
const Maps = () =>{
    return(
        <View> 
            <MapView style={styles.map}/>
        </View>
    )
}

export default Maps;
const styles = StyleSheet.create({
    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})