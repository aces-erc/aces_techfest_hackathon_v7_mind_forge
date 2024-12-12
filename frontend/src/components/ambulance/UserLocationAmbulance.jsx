"use client"

import React, { useState, useEffect, use } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useSocket } from '@/store/useSocket'
import { useUserStore } from '@/store/userStore'

// Custom icon definitions
const customIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/128/666/666201.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

const userIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

// Function to generate random locations within a 10km radius
const getAmbulanceLocations = (center, count, radius = 10000) => {
    const randomLocations = [];
    const earthRadius = 6371e3; // Earth's radius in meters (6,371 km)

    for (let i = 0; i < count; i++) {
        const randomDistance = Math.random() * radius; // Random distance up to 10 km
        const randomBearing = Math.random() * 2 * Math.PI; // Random bearing (angle) in radians

        // Convert distance to latitude and longitude offsets
        const latOffset = randomDistance / earthRadius; // Angular distance in radians
        const lngOffset = randomDistance / (earthRadius * Math.cos(Math.PI * center.lat / 180)); // Adjust for longitude scaling

        // New coordinates based on the random distance and bearing
        const newLat = center.lat + latOffset * (180 / Math.PI) * Math.cos(randomBearing);
        const newLng = center.lng + lngOffset * (180 / Math.PI) * Math.sin(randomBearing);

        randomLocations.push({ lat: newLat, lng: newLng });
    }

    return randomLocations;
};


function LocationMarker({ position, setPosition }) {
    const [error, setError] = useState(null);
    const map = useMap();

    useEffect(() => {
        map.locate({ setView: true, maxZoom: 16 }).on("locationfound", function (e) {
            const { lat, lng } = e.latlng; // Use the location found by Leaflet
            setPosition({ lat, lng }); // Update the position state with the found location
            map.flyTo([lat, lng], 16); // Automatically zoom in to the found location
        }).on("locationerror", function (e) {
            setError(e.message);
        });
    }, [map, setPosition]);

    return position === null ? null : (
        <Marker position={position} icon={userIcon}>
            <Popup>You are here</Popup>
        </Marker>
    );
}


export default function UserLocationAmbulance() {
    const [locations, setLocations] = useState([])
    const [userLocation, setUserLocation] = useState(null)
    const [locationError, setLocationError] = useState(null)
    const { socket } = useSocket();
    const { user } = useUserStore();

   

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userPos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    setUserLocation(userPos);
                    setLocations(getAmbulanceLocations(userPos, 5));
                },
                (error) => {
                    setLocationError("Unable to retrieve your location")
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }
            )
        } else {
            setLocationError("Geolocation is not supported by your browser")
        }
    }, [])


    useEffect(()=>{
        if(socket && user && userLocation){
            socket.emit('ambulanceLocation', {user, location: userLocation});
        }
        console.log("Socket: ", socket);
        console.log("User: ", user);
    }, [socket, user, userLocation])

    return (
        <div className="flex flex-col items-center space-y-4">
            {locationError && (
                <p className="text-red-500">{locationError}</p>
            )}
            <div className="w-[70vw] h-[250px]">
                <MapContainer center={userLocation || [0, 0]} zoom={userLocation ? 10 : 2} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <LocationMarker position={userLocation} setPosition={setUserLocation} />
                    {locations.map((location, index) => (
                        <Marker key={index} position={[location.lat, location.lng]} icon={customIcon}>
                            <Popup>
                                Ambulance {index + 1}<br />
                                Lat: {location.lat.toFixed(6)}<br />
                                Lng: {location.lng.toFixed(6)}
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
}

