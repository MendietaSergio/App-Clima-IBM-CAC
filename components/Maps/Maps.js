import React, { useState, useRef, useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
const Maps = ({
  lat,
  lon,
  viewRefLocation = true,
  resultado,
  allLocation = false,
}) => {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({});

  useEffect(() => {
    if (lat && lon) {
      if (viewRefLocation) {
        const refLocation = {
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.1203,
          longitudeDelta: 0.3355,
        };
        setRegion(refLocation);
        const ToRefLocation = () => {
          mapRef.current.animateToRegion(refLocation, 3 * 1000);
        };
        ToRefLocation();
      }
    }
  }, [lat, lon]);
  const locationArg = {
    latitude: -34,
    longitude: -64,
    latitudeDelta: 31,
    longitudeDelta: 21,
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={allLocation ? styles.maps : styles.map}
        initialRegion={allLocation ? locationArg : region}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        {allLocation ? (
          <>
            {resultado.map((coord) => (
              <Marker
                key={coord._id}
                coordinate={{ latitude: coord.lat, longitude: coord.lon }}
              />
            ))}
          </>
        ) : (
          <Marker coordinate={{ latitude: lat, longitude: lon }} />
        )}
      </MapView>
    </View>
  );
};

export default Maps;
const styles = StyleSheet.create({
  container: {
    opacity: 0.8,
  },
  map: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").height / 5,
  },
  maps: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
