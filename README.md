Talky – Real-Time Chat & Video Calling App
📌 Overview

Talky is a real-time chat and video calling web application that enables users to communicate instantly through messages and video calls.
The application uses WebSockets (Socket.io) for real-time communication and follows a modern MERN-style architecture with a separate frontend and backend.

It provides secure authentication, instant messaging, and seamless peer communication using modern web technologies.

🚀 Features
💬 Real-Time Messaging

Instant one-to-one chat using Socket.io

Messages delivered in real time without refreshing the page

Persistent chat history using MongoDB

📹 Video Calling

Real-time peer communication

Live video interaction between users

Socket-based signaling for establishing video calls

🔐 Authentication & Security

User authentication using JWT (JSON Web Tokens)

Password hashing with bcryptjs

Secure cookie handling using cookie-parser

☁️ Media Storage

Image uploads handled via Cloudinary

⚡ Modern Frontend

Built with React + Vite

Global state management using Zustand

API communication with Axios

UI styling with Tailwind CSS + DaisyUI

🏗️ Tech Stack
Frontend

React 18

Vite

React Router DOM

Axios

Socket.io Client

Zustand

Tailwind CSS

DaisyUI

Lucide React Icons

Backend

Node.js

Express.js

MongoDB

Mongoose

Socket.io

JWT Authentication

bcryptjs


Cloudinary

📂 Project Structure

talky/
│
├── backend/
│   ├── src/
│   │   ├── controllers
│   │   ├── models
│   │   ├── routes
│   │   ├── middleware
│   │   └── index.js
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   ├── store
│   │   └── main.jsx
│   │
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/yourusername/talky.git

cd talky

Backend Setup

Install dependencies

cd backend
npm install


Environment Variables

Create a .env file in the backend folder.

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

Run Backend
npm run dev

Backend runs on

http://localhost:5000

Frontend Setup
Install dependencies
cd frontend
npm install
Run Frontend
npm run dev

Frontend runs on

http://localhost:5173
🔄 Real-Time Communication

Talky uses Socket.io for:

Live messaging

Online user tracking

Call signaling

Instant message updates

📦 Dependencies
Backend

express

mongoose

socket.io

jsonwebtoken

bcryptjs

cors

cookie-parser

dotenv

cloudinary

Frontend

react

react-router-dom

axios

socket.io-client

zustand

tailwindcss

daisyui

lucide-react

👨‍💻 Author

Harsh Sahu

MERN Stack Developer

Passionate about building scalable web applications
