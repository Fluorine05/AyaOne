const days = ['M','T','W','T','F','S','S']
export default function WeekDots({ active=4 }:{ active?: number }){
  return (<div className="flex gap-3 mt-2 mb-4">
    {days.map((d,i)=>(<div key={i} className={`h-8 w-8 rounded-pill flex items-center justify-center ${i===active?'bg-grape-600 text-white':'ring-1 ring-white/20 text-white/70'}`}>{d}</div>))}
  </div>)
}
