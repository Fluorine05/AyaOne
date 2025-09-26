import { useRef, useState } from 'react'
export default function AudioButton({ src }:{ src: string }){
  const a = useRef<HTMLAudioElement | null>(null)
  const [playing,setPlaying] = useState(false)
  const toggle = () => { if(!a.current) return; if(playing){ a.current.pause(); setPlaying(false) } else { a.current.currentTime=0; a.current.play(); setPlaying(true); a.current.onended=()=>setPlaying(false) } }
  return (<div><audio ref={a} src={src} preload="auto" /><button onClick={toggle} className="px-3 py-2 rounded bg-white/10">{playing?'Pause':'Play'}</button></div>)
}
