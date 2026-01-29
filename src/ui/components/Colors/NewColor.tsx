import { useInput } from '../../helpers/customHooks'
import type { ColorItem } from '../../../shared/types'

interface NewColorProps {
  index: number
  onChange: (color: ColorItem, index: number) => void
}

const NewColor = ({ index, onChange }: NewColorProps) => {
  const [name, setName] = useInput('')
  const [value, setValue] = useInput('')

  const addColor = () => {
    const newColor = { name, value }
    onChange(newColor, index)
  }

  return (
    <div className="mt-8">
      <label className="t-gamma">Add new color</label>
      <div className="flex justify-between items-center mt-2">
        <div
          style={{ backgroundColor: value, borderColor: value }}
          className="color shadow"
        ></div>
        <div className="form-field">
          <input
            type="text"
            className="form-control"
            placeholder="Color name"
            onChange={setName}
          />
        </div>
        <div className="form-field mx-2">
          <input
            type="text"
            className="form-control"
            placeholder="Hex code"
            onChange={setValue}
          />
        </div>
        <button className="button button--grey" onClick={addColor}>
          &#x0002B; Add new Color
        </button>
      </div>
    </div>
  )
}

export default NewColor
