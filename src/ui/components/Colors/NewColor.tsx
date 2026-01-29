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
    <div className="mt-4 pt-3 border-t border-slate-100">
      <div className="flex items-center gap-1.5">
        <div
          style={{ backgroundColor: value || '#e2e8f0', borderColor: value || '#e2e8f0' }}
          className="color border border-dashed border-slate-300"
        ></div>
        <div className="form-field">
          <input
            type="text"
            className="form-control"
            placeholder="Color name"
            onChange={setName}
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            className="form-control"
            placeholder="#hex"
            onChange={setValue}
          />
        </div>
        <button
          className="text-slate-400 hover:text-slate-600 p-1 flex-shrink-0"
          onClick={addColor}
          title="Add color"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default NewColor
