import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';

export function Hero() {
  return (
    <div className="bg-[#FFF5F5] min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-6 pb-12 pt-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-10">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Emergency Medical <span className="text-red-600">Response</span>{" "}
            When Every Second Counts
          </h1>

          <p className="text-xl text-gray-600 max-w-xl">
            Connect instantly with nearby ambulances, select specialized
            hospitals, and ensure rapid emergency response with real-time
            tracking and coordination.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full">
              <Link href="/chooserole">Get Started Now</Link>
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg border-red-600 text-red-600 hover:bg-red-50 rounded-full"
            >
              Learn More
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center"
                >
                  <p className="text-red-500">{String.fromCharCode(64 + i)}</p>
                </div>
              ))}
            </div>
            <div>
              <span className="font-bold text-xl">1000+</span>{" "}
              <span className="text-gray-600">Emergency Cases Handled</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gray-200 rounded-lg shadow-lg aspect-[4/3] w-full overflow-hidden flex items-center justify-center ">
        <Image 
        src="/image.png" // Path to the logo in the public directory
        alt="logo" 
        layout="fill" // Specify width
        objectFit="contain"
        className="rounded-lg" // Make the image rounded
        priority // Ensures image loads quickly
        />
          </div>

          <div className="absolute bottom-8 -left-8 bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-600">Average Response Time</p>
              <p className="font-bold text-red-600">4.5 Minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
