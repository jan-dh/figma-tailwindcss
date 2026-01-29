interface BorderRadiusProps {
  name: string
  value: number | string
}

const BorderRadius = ({ name, value }: BorderRadiusProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="w-12 h-12 bg-slate-200"
        style={{ borderRadius: value }}
      ></div>
      <span className="block text-slate-500 text-[10px] mt-1.5 truncate max-w-full">{name}</span>
    </div>
  )
}

export default BorderRadius
