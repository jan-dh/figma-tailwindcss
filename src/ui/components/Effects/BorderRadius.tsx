interface BorderRadiusProps {
  name: string
  value: number | string
}

const BorderRadius = ({ name, value }: BorderRadiusProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <span className="block text-gray-700">{name}</span>
      <div
        className="w-20 h-20 rounded bg-gray-200 border"
        style={{ borderRadius: value }}
      ></div>
    </div>
  )
}

export default BorderRadius
