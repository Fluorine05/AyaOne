import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'
export function useUser(){
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    supabase.auth.getSession().then(({ data })=>{ setUser(data.session?.user ?? null); setLoading(false) })
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session)=> setUser(session?.user ?? null))
    return () => { sub.subscription.unsubscribe() }
  },[])
  const signOut = async () => { await supabase.auth.signOut() }
  return { user, loading, signOut }
}
