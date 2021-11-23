import React from 'react';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { Dimensions, StyleSheet, View } from 'react-native';
import  {   MapView, Marker  }  from "react-native-maps"

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



// getInitialState() {
// return {
//     region: {
//       latitude: 33.675775,
//       longitude: -75.768287,
//       latitudeDelta: 0.0122,
//       longitudeDelta: 0.0121,
//     },
//   };
// }

// onRegionChange(region) {
//   this.setState({ region });
// }
// const Maps = ()=> {
//     const [ciudad,setCiudad]=useState([]);
    
//     useEffect(()=>{
//         getDatos();
//     },[])

//     const getDatos= async () => {
//         try {
//           const { data } = await axios.get(
//             "https://bd-app-clima.vercel.app/listweather"
//           );
//           setCiudad(data);
//         } catch (error) {
//           console.log(error);
//         }
//       };
//     return(

//         <MapView
//         region={this.state.region}
//         onRegionChange={this.onRegionChange}
//         >
//         {ciudad.map((marker) => (
//             <Marker
            
//             latitude={marker.lat}
//             longitude={marker.lon}
                       
//             />
//             ))}
//             </MapView>
//         )
// }

export default Maps;
const styles = StyleSheet.create({
    container:{
        opacity: 0.5
    },
    map:{
        width:Dimensions.get('window').width-40,
        height: Dimensions.get('window').height/5,
      
    }
})