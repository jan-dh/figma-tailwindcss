import { useThemeStore } from '../../store/themeStore'
import FontFamily from './FontFamily'

const FontFamilies = () => {
  const fontFamilies = useThemeStore((s) => s.fontFamily)

  return (
    <div className="code-block text-white mt-4">
      {fontFamilies.map((family, i) => (
        <FontFamily key={i} {...family} />
      ))}
    </div>
  )
}

export default FontFamilies
