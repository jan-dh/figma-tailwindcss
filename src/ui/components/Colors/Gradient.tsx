interface GradientProps {
  hex: string
}

function Gradient({ hex }: GradientProps) {
  return (
    <div className="flex mt-4 justify-start items-center">
      <div style={{ backgroundColor: hex }} className="color shadow"></div>
      <div>{hex}</div>
    </div>
  )
}

export default Gradient
