import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './LocationScreen.css';
import LocationScreenTxt from "../location-screen-txt/LocationScreenTxt";

function LocationScreen() {



    return (
        <>
            <LocationScreenTxt />

            <MapContainer className="locations-map-container" center={[28.128388, -15.447025]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[28.128388, -15.447025]}>
                    <Popup>
                        POWERZONE <br /> FITNESS
                    </Popup>
                </Marker>

            </MapContainer>
        </>


    );
}

export default LocationScreen;
