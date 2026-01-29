import { useInput } from '../../helpers/customHooks'
import type { ColorItem } from '../../../shared/types'

interface ColorProps extends ColorItem {
  index: number
  onChange: (color: ColorItem, index: number) => void
  removeColor: (index: number) => void
  colorFormat: string
}

function Color({ name: initialName, value: initialValue, index, onChange, removeColor }: ColorProps) {
  const [name, setName] = useInput(initialName)
  const [value, setValue] = useInput(initialValue)

  const updateColor = () => {
    const newColor = { name, value }
    onChange(newColor, index)
  }

  const handleRemove = () => {
    removeColor(index)
  }

  return (
    <div className="flex mt-2 justify-between items-center gap-1.5">
      <div style={{ backgroundColor: value }} className="color shadow-sm"></div>
      <div className="form-field">
        <input
          type="text"
          name="name"
          placeholder={name}
          defaultValue={name}
          className="form-control"
          onChange={setName}
          onBlur={updateColor}
        />
      </div>
      <div className="form-field">
        <input
          type="text"
          name="hex"
          placeholder={value}
          defaultValue={value}
          className="form-control"
          onChange={setValue}
          onBlur={updateColor}
        />
      </div>
      <button
        className="text-slate-400 hover:text-slate-600 p-1 flex-shrink-0"
        onClick={handleRemove}
        title="Remove color"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

export default Color
