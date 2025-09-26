export type TTSOptions = { text: string; lang?: string; rate?: number; pitch?: number }
export function speak({ text, lang='ar-SA', rate=1, pitch=1 }: TTSOptions){
  const s = new SpeechSynthesisUtterance(text)
  s.lang = lang; s.rate = rate; s.pitch = pitch
  window.speechSynthesis.cancel(); window.speechSynthesis.speak(s)
}
export function stopSpeaking(){ window.speechSynthesis.cancel() }
export type STTEvents = { onResult?: (text:string)=>void; onEnd?: ()=>void; onError?: (e:any)=>void }
export function createRecognizer(lang='ar-SA', ev: STTEvents = {}){
  const w: any = window
  const SR = w.SpeechRecognition || w.webkitSpeechRecognition
  if(!SR) return null
  const r = new SR(); r.lang = lang; r.interimResults = false; r.maxAlternatives = 1
  r.onresult = (e:any)=> ev.onResult?.(e.results[0][0].transcript)
  r.onend = ()=> ev.onEnd?.()
  r.onerror = (e:any)=> ev.onError?.(e)
  return r
}
