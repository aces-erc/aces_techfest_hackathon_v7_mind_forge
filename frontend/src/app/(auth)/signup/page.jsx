"use client"
import AmbulanceSignupForm from '@/components/auth/signup/AmbulanceSignup'
import HospitalSignupForm from '@/components/auth/signup/HospitalSignup';

import { useUserStore } from '@/store/userStore';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner';

const LocationPicker = dynamic(() => import('@/components/LocationPicket'), {
    ssr: false
})
const PatientSignupForm = dynamic(()=>import('@/components/auth/signup/PatientSignup'))


const Page = () => {
    const { role } = useUserStore();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        if (!role) {
            router.push("/chooserole");
        }
    }
        , [role])

    if (loading) {
        return <div className="flex h-screen items-center justify-center">
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    }

    return (
        <div className="flex h-screen items-center justify-center">

            {
                role === "Patient" && !loading &&<PatientSignupForm/>
            }
            {
                role === "Hospital" && !loading &&
                <div className='flex justify-between w-full items-center px-8'>
                    <HospitalSignupForm />
                    <LocationPicker />
                </div>

            }
            {
                role === "Ambulance" && <AmbulanceSignupForm />
            }

        </div>
    )
}

export default Page