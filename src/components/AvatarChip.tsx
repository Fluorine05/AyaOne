export default function AvatarChip({ name }:{ name:string }){
  const initials = name.split(' ').map(n=>n[0]).slice(0,2).join('').toUpperCase()
  return (<div className="flex items-center gap-3">
    <div className="h-10 w-10 rounded-full bg-mint-500 text-inkwell font-bold grid place-items-center">{initials}</div>
    <div className="leading-tight"><div className="text-sm opacity-70">As-salamu alaykum</div><div className="font-semibold">{name}</div></div>
  </div>)
}
