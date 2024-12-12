'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icon
delete (L.Icon.Default.prototype)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png',
})

export default function MapComponent({ position, setPosition }) {
  const mapRef = useRef(null)
  const markerRef = useRef(null)

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([position.lat, position.lng], 13)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current)

      markerRef.current = L.marker([position.lat, position.lng], { draggable: true }).addTo(mapRef.current)
      markerRef.current.on('dragend', () => {
        const newPos = markerRef.current?.getLatLng()
        if (newPos) {
          setPosition({ lat: newPos.lat, lng: newPos.lng })
        }
      })
    } else {
      mapRef.current.setView([position.lat, position.lng])
      markerRef.current?.setLatLng([position.lat, position.lng])
    }
  }, [position, setPosition])

  return <div id="map" className="h-full w-full z-0" />
}

