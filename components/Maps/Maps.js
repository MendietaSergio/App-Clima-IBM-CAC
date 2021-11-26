import React, { useState, useRef, useEffect } from "react";
import { Dimensions, StyleSheet, View, Button } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
const Maps = ({ lat, lon, viewRefLocation = true }) => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: lat,
    longitude: lon,
    latitudeDelta: 0.9,
    longitudeDelta: 0.9,
  });
  console.log("LAT ", lat, " LON ", lon);
  console.log("REGION =>>> ", region);
  const refLocation = {
    latitude: lat,
    longitude: lon,
    latitudeDelta: 0.1203,
    longitudeDelta: 0.3355,
  };
  useEffect(() => {
    if (viewRefLocation) {
      ToRefLocation();
    }
  }, [lat, lon]);
  const ToRefLocation = () => {
    mapRef.current.animateToRegion(refLocation, 3 * 1000);
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        <Marker coordinate={{ latitude: lat, longitude: lon }} />
      </MapView>
    </View>
  );
};


export default Maps;
const styles = StyleSheet.create({
  container: {
    opacity: 0.5,
  },
  map: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").height / 5,
  },
});
