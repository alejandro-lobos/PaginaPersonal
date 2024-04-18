// components/Map.jsx
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {        
    height: "400px",
    width: "100%"};
  
  const defaultCenter = {
    lat: 40.43162265974226, lng: -3.6688677429117535 // Estas coordenadas son de Barcelona, cámbialas por las tuyas
  }
  
  return (
     <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
       <GoogleMap
         mapContainerStyle={mapStyles}
         zoom={13}
         center={defaultCenter}
       >
        <Marker position={defaultCenter}/>
       </GoogleMap>
     </LoadScript>
  )
}

export default Map;
