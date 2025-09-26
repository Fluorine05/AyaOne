export default function Progress({ value }:{ value:number }){
  return (<div className="w-full h-3 rounded-pill bg-white/10 overflow-hidden">
    <div className="h-full bg-gradient-to-r from-grape-500 to-sky-500" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
  </div>)
}
