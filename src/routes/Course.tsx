import packs from '../data/surah_packs.json'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { speak } from '../lib/voice'
const units = (packs as any).units
export default function Course(){
  const [params] = useSearchParams(); const start = params.get('start'); const [u,setU] = useState<any>(units.find((x:any)=>x.slug===start) || units[0]); const [i,setI] = useState(0); const d = u.drills[i]
  useEffect(()=>{ if(d) speak({ text: d.ar }) },[i,u])
  return (<div className="max-w-md mx-auto card">
    <div className="text-sm opacity-70">{u.surah}</div><div className="text-lg font-semibold">{u.title}</div>
    <div className="mt-6 text-right text-4xl">{d.ar}</div><div className="text-sm opacity-80">({d.en})</div>
    <div className="mt-4 grid grid-cols-2 gap-3"><button onClick={()=> setI((i+1)%u.drills.length)} className="rounded-xl2 bg-white/10 py-3">I forgot</button><button onClick={()=> setI((i+1)%u.drills.length)} className="rounded-xl2 bg-grape-600 py-3">I knew it</button></div>
    <div className="mt-3 text-xs opacity-70">Item {i+1} / {u.drills.length}</div>
  </div>)
}
