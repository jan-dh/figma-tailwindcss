interface GradientProps {
  hex: string
}

function Gradient({ hex }: GradientProps) {
  return (
    <div className="flex mt-2 justify-start items-center">
      <div style={{ backgroundColor: hex }} className="color shadow-sm"></div>
      <div className="text-sm text-slate-600">{hex}</div>
    </div>
  )
}

export default Gradient
