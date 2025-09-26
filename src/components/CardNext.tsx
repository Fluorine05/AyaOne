import { Link } from 'react-router-dom'
export default function CardNext({ unit }:{ unit: any }){
  return (<div className="card bg-gradient-to-br from-purple-500/30 to-pink-500/20">
    <div className="text-sm opacity-80">Next up</div>
    <div className="text-lg font-semibold">{unit.title}</div>
    <div className="text-sm opacity-70">{unit.surah} • {unit.verses} verses</div>
    <Link to={`/course?start=${unit.slug}`} className="mt-4 inline-block bg-grape-600 hover:bg-grape-700 rounded-xl2 px-4 py-2">Start lesson</Link>
  </div>)
}
