import { Outlet } from 'react-router-dom'
import Tabbar from './components/Tabbar'
export default function App(){
  return (<div className="min-h-screen bg-gradient-to-b from-inkwell to-[#0f1020] pb-24">
    <main className="max-w-md mx-auto px-4 pt-6"><Outlet /></main><Tabbar />
  </div>)
}
