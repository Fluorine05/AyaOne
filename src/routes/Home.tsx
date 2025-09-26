import AvatarChip from '../components/AvatarChip'
import WeekDots from '../components/WeekDots'
import CardGoal from '../components/CardGoal'
import CardNight from '../components/CardNight'
import CardNext from '../components/CardNext'
import unitsData from '../data/surah_packs.json'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Link } from 'react-router-dom'
type Stat = { unit_slug:string; attempts:number; correct:number; last_seen:string|null }
export default function Home(){
  const [stats,setStats] = useState<Record<string, Stat>>({})
  const units = (unitsData as any).units
  useEffect(()=>{ supabase.from('user_skill').select('unit_slug, attempts, correct, last_seen').then(({ data })=>{ const d: any = {}; (data||[]).forEach((r:any)=> d[r.unit_slug]=r); setStats(d) }) },[])
  const next = units[0]
  return (<div className="space-y-4">
    <div className="flex items-center justify-between"><AvatarChip name="Saif Asif" /><Link to="/speaking" className="badge">Voice</Link></div>
    <WeekDots active={4} />
    <CardGoal /><CardNight /><CardNext unit={next} />
    <div className="grid grid-cols-2 gap-2"><Link to="/quran" className="card text-center">Quran Lab</Link><Link to="/tajweed" className="card text-center">Tajweed</Link></div>
  </div>)
}
