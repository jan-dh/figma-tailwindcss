import { Link } from 'react-router-dom'
import { Highlight, themes } from 'prism-react-renderer'
import { saveAs } from 'file-saver'
import { useThemeStore } from '../../store/themeStore'
import { cleanupTheme, formatTailwind4Theme, formatTailwind3Theme } from '../../helpers/helpers'

const Export = () => {
  const theme = useThemeStore()
  const preferences = useThemeStore((s) => s.preferences)
  const setPreferences = useThemeStore((s) => s.setPreferences)
  const { colorFormat, grouped, tailwindVersion } = preferences

  const isV4 = tailwindVersion === '4'
  const cleanTheme = cleanupTheme(theme, colorFormat, grouped)

  const groupColors = () => {
    if (isV4) return
    setPreferences({ grouped: !grouped })
  }

  const exportTheme = () => {
    if (isV4) {
      const cssContent = formatTailwind4Theme(cleanTheme)
      const blob = new Blob([cssContent], {
        type: 'text/css;charset=utf-8',
      })
      saveAs(blob, 'theme.css')
    } else {
      const jsContent = formatTailwind3Theme(cleanTheme)
      const blob = new Blob([jsContent], {
        type: 'application/javascript;charset=utf-8',
      })
      saveAs(blob, 'tailwind.config.js')
    }
  }

  const markup = isV4 ? formatTailwind4Theme(cleanTheme) : formatTailwind3Theme(cleanTheme)

  const buttonText = grouped ? 'Ungroup colors' : 'Group colors'
  const switchClass = grouped ? 'bg-green-400 active' : 'bg-gray-400'

  return (
    <>
      <div className="flex">
        <div className="w-full border-b border-slate-200 py-3">
          <h2 className="t-beta">Export theme</h2>
          <p className="intro">Almost there...</p>
        </div>
      </div>

      <div className="mt-4 relative">
        <Highlight
          theme={themes.dracula}
          code={markup}
          language={isV4 ? 'css' : 'javascript'}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        {!isV4 && (
          <div
            className="absolute top-0 right-0 mr-3 mt-3 flex items-center cursor-pointer"
            onClick={groupColors}
          >
            <div
              className={`switch w-10 h-5 rounded-full cursor-pointer mr-3 ${switchClass}`}
            >
              <div className="w-1/2 h-full rounded-full shadow bg-white"></div>
            </div>
            <span className="text-slate-300 text-xs">{buttonText}</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center">
        <button className="button button--grey mr-3" onClick={exportTheme}>
          <svg
            className="fill-current w-3.5 h-3.5 mr-1.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          Create file
        </button>
        <a
          className="button button--blue"
          href="https://github.com/jan-dh/figma-tailwindcss/blob/master/README.md"
          target="_blank"
          rel="noreferrer"
        >
          How does it work?
        </a>
      </div>

      <div className="flex justify-between mt-4">
        <Link to="/effects" className="button button--green">
          Previous
        </Link>
      </div>
    </>
  )
}

export default Export
