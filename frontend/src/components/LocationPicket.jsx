'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Button } from "@/components/ui/button"
import { Loader2, MapPin } from 'lucide-react'
import { useLocation } from '@/store/locationStore'

const MapComponent = dynamic(() => import('./MapComponent'), {
    ssr: false,
    loading: () => <div className="h-[400px] bg-gray-200 flex items-center justify-center">Loading map...</div>
})

export default function LocationPicker() {
    const { hospoitalPosition, setHospitalPosition } = useLocation()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const getCurrentLocation = () => {
        setIsLoading(true)
        setError(null)

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setHospitalPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude })
                    setIsLoading(false)
                },
                (err) => {
                    console.warn(`ERROR(${err.code}): ${err.message}`)
                    setError(`Unable to retrieve your location: ${err.message}`)
                    setIsLoading(false)
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }
            )
        } else {
            setError('Geolocation is not supported by your browser')
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Select Your Location</h1>
            {isClient && (
                <div className="mb-4">
                    <Button onClick={getCurrentLocation} disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Getting location...
                            </>
                        ) : (
                            <>
                                <MapPin className="mr-2 h-4 w-4" />
                                Get Current Location
                            </>
                        )}
                    </Button>
                </div>
            )}
            {error && (
                <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4" role="alert">
                    {error}
                    <p className="mt-2">You can manually select your location on the map.</p>
                </div>
            )}
            <div className="mb-4 h-[400px]">
                {isClient && <MapComponent position={hospoitalPosition} setPosition={setHospitalPosition} />}
            </div>
        </div>
    )
}

