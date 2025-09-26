import { useState, FormEvent } from 'react'
import { supabase } from '../lib/supabaseClient'
import { Navigate } from 'react-router-dom'
import { useUser } from '../lib/useUser'
export default function Login(){
  const { user } = useUser()
  const [email,setEmail] = useState(''); const [password,setPassword] = useState(''); const [mode,setMode] = useState<'signin'|'signup'>('signin'); const [error,setError] = useState<string | null>(null); const [working,setWorking] = useState(false)
  if(user) return <Navigate to="/" replace />
  const onSubmit = async (e:FormEvent)=>{ e.preventDefault(); setWorking(true); setError(null); try{ if(mode==='signin'){ const { error } = await supabase.auth.signInWithPassword({ email, password }); if(error) throw error } else { const { error } = await supabase.auth.signUp({ email, password }); if(error) throw error } }catch(err:any){ setError(err.message) }finally{ setWorking(false) } }
  return (<div className="max-w-md mx-auto card">
    <h2 className="text-xl font-semibold mb-2">{mode==='signin'?'Sign in':'Create account'}</h2>
    <form onSubmit={onSubmit} className="space-y-3">
      <input className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-xl2" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      {error && <div className="text-red-400 text-sm">{error}</div>}
      <button disabled={working} className="w-full bg-grape-600 hover:bg-grape-700 rounded-xl2 py-3">{working?'Working...':(mode==='signin'?'Sign in':'Sign up')}</button>
    </form>
    <div className="mt-3 text-sm opacity-80">{mode==='signin' ? <button onClick={()=>setMode('signup')} className="underline">No account yet Create one</button> : <button onClick={()=>setMode('signin')} className="underline">Have an account Sign in</button>}</div>
  </div>)
}
