import { useEffect, useRef, useState } from 'react'
import { createRecognizer } from '../lib/voice'
import { transcribeWithServer } from '../lib/sttClient'
export default function Recorder({ onText }:{ onText: (t:string)=>void }){
  const [usingLocal,setUsingLocal] = useState(true)
  const [status,setStatus] = useState<'idle'|'recording'|'working'>('idle')
  const rec = useRef<any>(null); const mr = useRef<MediaRecorder | null>(null); const chunks = useRef<BlobPart[]>([])
  useEffect(()=>{ rec.current = createRecognizer('ar-SA', { onResult: (t)=> onText(t), onEnd: ()=> setStatus('idle') }); if(!rec.current) setUsingLocal(false) },[])
  const startServerRecord = async ()=>{ const stream = await navigator.mediaDevices.getUserMedia({ audio: true }); mr.current = new MediaRecorder(stream); chunks.current=[]; mr.current.ondataavailable=(e)=>chunks.current.push(e.data); mr.current.onstop=async()=>{ setStatus('working'); const blob = new Blob(chunks.current,{type:'audio/webm'}); try{ const text = await transcribeWithServer(blob); onText(text) }catch(e){ onText('') } setStatus('idle') }; mr.current.start() }
  const start = async ()=>{ if(usingLocal){ setStatus('recording'); onText(''); rec.current.start() } else { setStatus('recording'); onText(''); await startServerRecord() } }
  const stop = ()=>{ if(usingLocal){ rec.current?.stop() } else { mr.current?.stop() } }
  return (<div className="flex gap-2"><button onClick={start} className="px-3 py-2 rounded bg-grape-600">{status==='recording'?'Listening…':'🎙️ Speak'}</button>{status==='recording'&&<button onClick={stop} className="px-3 py-2 rounded bg-white/10">Stop</button>}</div>)
}
