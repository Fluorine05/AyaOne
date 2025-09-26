import { useEffect, useState } from 'react'
export default function Settings(){
  const [big,setBig] = useState(false); const [contrast,setContrast] = useState(false)
  useEffect(()=>{ document.body.style.fontSize = big ? '18px' : ''; document.documentElement.style.setProperty('--glass', contrast ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.06)') },[big,contrast])
  return (<div className="max-w-md mx-auto space-y-3">
    <div className="card"><h3 className="font-semibold mb-2">Accessibility</h3><label className="flex items-center gap-3 mb-2"><input type="checkbox" checked={big} onChange={e=>setBig(e.target.checked)} /><span>Big text</span></label><label className="flex items-center gap-3"><input type="checkbox" checked={contrast} onChange={e=>setContrast(e.target.checked)} /><span>High contrast</span></label></div>
  </div>)
}
