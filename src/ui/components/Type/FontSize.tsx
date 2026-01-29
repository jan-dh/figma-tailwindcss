interface FontSizeProps {
  name: string
  value: string
}

const FontSize = ({ name, value }: FontSizeProps) => {
  const remSize = Number(value) / 16
  const fontSize = {
    fontSize: `${remSize}rem`,
  }

  return (
    <div className="flex justify-between items-center leading-none">
      <p style={fontSize} className="text-code-white">
        {value}px<span className="ml-4 text-code-red">- {remSize}rem</span>
      </p>
      <span className="text-code-green">{name}</span>
    </div>
  )
}

export default FontSize
