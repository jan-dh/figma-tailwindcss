interface FontFamilyProps {
  name: string
  value: string
}

const FontFamily = ({ name, value }: FontFamilyProps) => {
  return (
    <div className="flex justify-between">
      <span>{name}</span>
      <span className="text-code-green">{value}</span>
    </div>
  )
}

export default FontFamily
