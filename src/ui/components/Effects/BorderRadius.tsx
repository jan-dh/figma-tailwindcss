import { getBorderRadiusName } from '../../helpers/helpers'

interface BorderRadiusProps {
  index: number
  value: number | string
  isDefault: boolean
  defaultIndex: number | null
  total: number
  useRem: boolean
  onSelect: () => void
}

const BorderRadius = ({
  index,
  value,
  isDefault,
  defaultIndex,
  total,
  useRem,
  onSelect,
}: BorderRadiusProps) => {
  const displayName = getBorderRadiusName(index, defaultIndex, total)
  const numValue = typeof value === 'number' ? value : parseFloat(String(value))
  const displayValue = useRem ? `${numValue / 16}rem` : `${numValue}px`

  return (
    <div
      className={`flex flex-col items-center text-center cursor-pointer group ${
        isDefault ? 'ring-2 ring-slate-900 ring-offset-2 rounded' : ''
      }`}
      onClick={onSelect}
      title={`Click to set as DEFAULT (${displayValue})`}
    >
      <div
        className={`w-12 h-12 bg-slate-200 transition-colors ${
          isDefault ? '' : 'group-hover:bg-slate-300'
        }`}
        style={{ borderRadius: numValue }}
      ></div>
      <span
        className={`block text-[10px] mt-1.5 truncate max-w-full ${
          isDefault ? 'text-slate-900 font-medium' : 'text-slate-500'
        }`}
      >
        {displayName}
      </span>
      <span className="block text-slate-400 text-[9px]">{displayValue}</span>
    </div>
  )
}

export default BorderRadius
