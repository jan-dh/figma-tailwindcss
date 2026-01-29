interface ShadowProps {
  name: string
  value: string
}

const Shadow = ({ name, value }: ShadowProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <span className="block text-gray-700">{name}</span>
      <div className="w-20 h-20 rounded mt-4 " style={{ boxShadow: value }}></div>
    </div>
  )
}

export default Shadow
