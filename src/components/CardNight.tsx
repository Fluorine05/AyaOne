import Progress from './Progress'
export default function CardNight(){
  return (<div className="card bg-card">
    <div className="text-xl font-semibold">Nightly Recitations</div>
    <div className="text-sm opacity-80">Complete the challenge and earn hasanats</div>
    <div className="mt-3"><Progress value={0} /></div>
    <div className="mt-2 text-sm opacity-80">0 / 48 verse</div>
  </div>)
}
