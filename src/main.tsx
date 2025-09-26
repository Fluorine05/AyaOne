import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles.css'
import App from './App'
import Home from './routes/Home'
import Login from './routes/Login'
import Reading from './routes/Reading'
import Course from './routes/Course'
import Leaderboard from './routes/Leaderboard'
import Settings from './routes/Settings'
import QuranLab from './routes/QuranLab'
import TajweedLab from './routes/TajweedLab'
import SpeakingLab from './routes/SpeakingLab'
const router = createBrowserRouter([{ path: '/', element: <App />, children: [
  { index: true, element: <Home /> },
  { path: 'login', element: <Login /> },
  { path: 'reading', element: <Reading /> },
  { path: 'course', element: <Course /> },
  { path: 'leaderboard', element: <Leaderboard /> },
  { path: 'settings', element: <Settings /> },
  { path: 'quran', element: <QuranLab /> },
  { path: 'tajweed', element: <TajweedLab /> },
  { path: 'speaking', element: <SpeakingLab /> },
]}])
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><RouterProvider router={router} /></React.StrictMode>)
if ('serviceWorker' in navigator) { window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js')) }

if ('serviceWorker' in navigator) { window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js')) }
