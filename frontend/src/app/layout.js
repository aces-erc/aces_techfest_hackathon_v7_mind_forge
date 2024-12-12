"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { useEffect } from "react";
import { useSocket } from "@/store/useSocket";
import { io } from "socket.io-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {

  const { setSocket } = useSocket();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const socket = io('http://localhost:4000');
      setSocket(socket);

      return () => {
        socket.disconnect();
      };
    }
  }, [setSocket]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
