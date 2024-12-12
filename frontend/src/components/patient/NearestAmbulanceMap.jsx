"use client"

import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useLocation } from '@/store/locationStore'
import { useSocket } from '@/store/useSocket'

// Custom icon definitions
const customIcon = new L.Icon({
    iconUrl: 'data:image/png;base64,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',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

const userIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [50, 61],
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


export default function RandomLocationsMap() {
    const [locations, setLocations] = useState([])
    const [userLocation, setUserLocation] = useState(null)
    const [locationError, setLocationError] = useState(null)
    const { setUserLocationStore, userLocationStore } = useLocation();
    const { ambulanceLocation } = useSocket();

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userPos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    setUserLocation(userPos);
                    setLocations(ambulanceLocation);
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

    useEffect(() => {
        localStorage.setItem("userLocation", JSON.stringify(userLocation))
    }, [userLocation])

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
                    {ambulanceLocation.map((location, index) => (
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

