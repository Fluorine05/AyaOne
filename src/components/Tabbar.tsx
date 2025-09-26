import { NavLink } from 'react-router-dom'
function Item({ to, label, icon }:{ to:string; label:string; icon:JSX.Element }){
  return (<NavLink to={to} className={({isActive}) => `flex flex-col items-center justify-center py-2 w-full ${isActive?'text-grape-400':'text-white/70'}`}>{icon}<span className="text-xs">{label}</span></NavLink>)
}
export default function Tabbar(){
  const icon = (d:string)=> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={d}/></svg>
  return (<nav className="tabbar grid grid-cols-5 max-w-md mx-auto">
    <Item to="/" label="Home" icon={icon('M12 3l9 8h-3v9h-5v-6H11v6H6v-9H3z')} />
    <Item to="/reading" label="Reading" icon={icon('M4 6h16v2H4zM4 10h10v2H4zM4 14h16v2H4z')} />
    <Item to="/course" label="Course" icon={icon('M4 4h16v4H4zM4 10h16v10H4z')} />
    <Item to="/leaderboard" label="Board" icon={icon('M6 20h4V10H6v10zm8 0h4V4h-4v16zM11 20h2v-6h-2v6z')} />
    <Item to="/settings" label="Settings" icon={icon('M12 8a4 4 0 100 8 4 4 0 000-8zm9 4l-2 1a7.9 7.9 0 010 2l2 1-2 3-2-1a8 8 0 01-1.7 1L15 22h-3l-.3-2a8 8 0 01-1.7 1l-2 1-2-3 2-1a7.9 7.9 0 010-2l-2-1 2-3 2 1a8 8 0 011.7 1L12 2h3l.3 2a8 8 0 011.7 1l2-1 2 3z')} />
  </nav>)
}
