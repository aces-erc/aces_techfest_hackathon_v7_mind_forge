# SAHARA WEB APP

- This is a web application designed to connect patients, ambulance drivers, and hospitals in real-time for faster, smarter emergency response. The app ensures quick ambulance assignment, real-time tracking, and optimized hospital recommendations during emergencies.

## Table of Contents

- **Project Overview**
- **Features**
- **Tech Stack**
- **Installation**

## Project Overview

- **SAHARA** app helps patients get access to emergency medical services by enabling them to quickly find the nearest available ambulance, provide details about their medical condition, and connect with hospitals. The app also allows ambulance drivers to receive real-time location data and information about patients, while hospitals can prepare ahead for emergencies.

## Features

1. **Patient Features**
- Book Ambulance: Patients can book an ambulance and provide real-time location data.
- Disease/Health Problem Selection: Patients can select their medical condition, which helps the app recommend the most appropriate hospital.

2. **Ambulance Driver Features**

- Real-Time Location: Receive patient location and track the ambulance's path using real-time traffic data.
- Hospital Suggestions: If a hospital is not selected by the patient, the ambulance driver can choose the most suitable hospital based on the patient's condition.

3. **Hospital Features**

- Live Ambulance Tracking: Receive real-time updates on ambulance location and estimated time of arrival.
- Patient Information: Hospitals get detailed patient information (disease, health condition, etc.) for better preparedness.

## Tech Stack

- **Frontend**
    - Next.js with React.js (JavaScript)
    - Tailwind CSS for styling

- **Backend**
    - Node.js with Express.js
    - MongoDB for database management

- **APIs**
    - Leaflet Maps API for live location and route tracking

- **Authentication**
    - JWT (JSON Web Tokens) for secure user authentication

## Installation

- Follow these steps to set up the project on your local machine:

1. **Clone the repository**

```bash
    git clone https://github.com/aces-erc/        aces_techfest_hackathon_v7_mind_forge.git
    cd aces_techfest_hackathon_v7_mind_forge
```
2. **Install Dependencies**

```bash
    cd frontend
    npm install
```
3. **Backend**

```bash
    cd backend
    npm install
```
4. **Set Up Environment Variables**
-  Create a .env file in both the backend directry and set the variables up :

- `PORT`
- `CORS_ORIGIN`
- `MONGO_UR`I 
- `DB_NAME`
- `JWT_TOKEN_SECRET`
- `JWT_TOKEN_EXPIRY`
- `JWT_COOKIE_EXPIRES_IN`

5. **Start the Application**
```bash
npm run dev
```
6. **Open the Application**
- Open your browser and navigate to http://localhost:3000 to access the **SAHARA** web app.