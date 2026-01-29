interface ShadowProps {
  name: string
  value: string
}

const Shadow = ({ name, value }: ShadowProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded bg-white" style={{ boxShadow: value }}></div>
      <span className="block text-slate-500 text-[10px] mt-1.5 truncate max-w-full">{name}</span>
    </div>
  )
}

export default Shadow
