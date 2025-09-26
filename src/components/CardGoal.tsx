import Progress from './Progress'
export default function CardGoal(){
  return (<div className="card bg-gradient-to-br from-grape-500/40 to-sky-500/30">
    <div className="flex items-center justify-between"><div className="text-lg font-semibold">Goal</div><div className="text-sm opacity-80">0%</div></div>
    <div className="text-sm opacity-80 mt-1">Start with common short surahs</div>
    <div className="mt-4"><Progress value={0} /></div>
    <div className="text-sm opacity-80 mt-2">0 of 10 verses per day</div>
    <button className="mt-4 w-full bg-white text-inkwell font-semibold rounded-xl2 py-3">Read Quran</button>
  </div>)
}
