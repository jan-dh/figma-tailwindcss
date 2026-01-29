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
    <div className="flex mt-4 justify-between items-center">
      <div style={{ backgroundColor: value }} className="color shadow"></div>
      <div className="form-field">
        <input
          type="text"
          name="name"
          placeholder={name}
          defaultValue={name}
          className="form-control"
          onChange={setName}
        />
      </div>
      <div className="form-field mx-2">
        <input
          type="text"
          name="hex"
          placeholder={value}
          defaultValue={value}
          className="form-control"
          onChange={setValue}
        />
      </div>
      <div>
        <button className="mx-2 button button--grey" onClick={updateColor}>
          Update
        </button>
        <button className="button button--grey" onClick={handleRemove}>
          &times;
        </button>
      </div>
    </div>
  )
}

export default Color
