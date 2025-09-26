import { useEffect, useState } from 'react'
import Recorder from '../components/Recorder'
import { fuzzyEqual, transliterate } from '../lib/arabic'
import { speak } from '../lib/voice'
const prompts = [
  { id: 'p1', arabic: 'السلام عليكم', english: 'peace be upon you' },
  { id: 'p2', arabic: 'كيف حالك', english: 'how are you' },
  { id: 'p3', arabic: 'أين المكتبة', english: 'where is the library' },
]
export default function SpeakingLab(){
  const [i,setI] = useState(0); const [rec,setRec] = useState(''); const current = prompts[i]
  useEffect(()=>{ speak({ text: current.arabic }) },[i])
  const good = rec && fuzzyEqual(rec, current.arabic)
  return (<div className="max-w-xl mx-auto card">
    <h2 className="text-xl font-semibold mb-2">Speaking practice</h2>
    <div className="text-sm opacity-70">Say this</div><div className="text-right text-3xl">{current.arabic}</div>
    <div className="text-xs opacity-80">({current.english}) • ({transliterate(current.arabic)})</div>
    <div className="mt-4 flex gap-2"><Recorder onText={setRec} /><button onClick={()=>setI((i+1)%prompts.length)} className="px-3 py-2 rounded-xl2 bg-white/10">Next</button></div>
    <div className="mt-3 text-sm opacity-80">You said <b>{rec || '(nothing yet)'}</b></div>
    {rec && <div className={`mt-2 text-sm ${good?'text-green-300':'text-red-300'}`}>{good?'Nice pronunciation':'Close Try again'}</div>}
  </div>)
}
