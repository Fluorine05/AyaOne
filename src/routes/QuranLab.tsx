import React, { useMemo, useState } from 'react'
import qv from '../data/quran_vocab.json'
import qe from '../data/quran_examples.json'
import { transliterate, stripDiacritics } from '../lib/arabic'
import AudioButton from '../components/AudioButton'
import { getAyahAudio_AlQuranCloud } from '../lib/audioSources'

type Vocab = { arabic: string; english: string; root?: string; notes?: string }
type Ayah = { ref: string; text: string; words: { w: string; gloss?: string }[]; audio?: string }

function AudioAsync({ a }:{ a:Ayah }){
  const [url,setUrl] = React.useState<string | null>(a.audio || null)
  return (<button onClick={async()=>{ if(!url){ const m = a.ref.match(/(\d+):(\d+)/); if(m){ const u = await getAyahAudio_AlQuranCloud(parseInt(m[1],10), parseInt(m[2],10)); setUrl(u) } } }} className="px-3 py-2 rounded bg-white/10">{url ? <audio src={url||''} controls /> : 'Load audio'}</button>)
}

export default function QuranLab(){
  const [query,setQuery] = useState(''); const [sel,setSel] = useState<Vocab | null>(null)
  const vocab = qv as Vocab[]; const examples = qe as Ayah[]
  const filtered = useMemo(()=>{ const q = stripDiacritics(query).toLowerCase(); return vocab.filter(v => stripDiacritics(v.arabic).includes(q) || v.english.toLowerCase().includes(q) || (v.root||'').includes(q)) },[query])
  return (<div className="grid md:grid-cols-2 gap-6">
    <section><h2 className="text-2xl font-bold mb-2">Quran vocabulary</h2>
      <input className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded mb-3" placeholder="Search Arabic, English, or root..." value={query} onChange={e=>setQuery(e.target.value)} />
      <ul className="space-y-2 max-h-[60vh] overflow-auto pr-2">{filtered.map(v => (<li key={v.arabic} className="p-3 glass rounded-lg cursor-pointer" onClick={()=>setSel(v)}><div className="flex items-center justify-between"><div className="text-2xl text-right">{v.arabic}</div><div className="text-sm opacity-80">{v.english} {v.root && <span className="badge">root {v.root}</span>}</div></div>{v.notes && <div className="text-xs opacity-70 mt-1">{v.notes}</div>}</li>))}</ul>
    </section>
    <section><h2 className="text-2xl font-bold mb-2">Examples</h2>
      {!sel && <div className="opacity-70">Pick a vocab item to highlight examples.</div>}
      <div className="space-y-3 max-h-[60vh] overflow-auto pr-2">{examples.map(a => { const has = sel ? a.words.some(w => stripDiacritics(w.w) === stripDiacritics(sel.arabic)) : true; if(!has) return null; return (<div key={a.ref} className="p-3 glass rounded-lg"><div className="flex items-center justify-between"><div className="text-sm opacity-70">{a.ref}</div><AudioAsync a={a} /></div><div className="text-right text-xl leading-loose">{a.words.map((w,i)=>(<span key={i} className={`px-1 rounded ${sel && stripDiacritics(w.w)===stripDiacritics(sel.arabic) ? 'bg-white/10' : ''}`} title={w.gloss || ''}>{w.w}</span>))}</div><div className="text-xs opacity-80 mt-2">Translit: {transliterate(a.text)}</div></div>) })}</div>
    </section>
  </div>)
}
