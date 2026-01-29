import Tailwind from '../../icons/Tailwind'
import Github from '../../icons/Github'

const Footer = () => {
  return (
    <div className="w-full bg-slate-50 py-2.5 border-t border-slate-100">
      <div className="px-3 flex text-xs text-slate-500 font-medium">
        <div className="w-1/2">
          <a
            href="https://tailwindcss.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center hover:text-slate-700"
          >
            <Tailwind />
            <span className="ml-1.5">tailwindcss</span>
          </a>
        </div>
        <div className="w-1/2 text-right">
          <a
            href="https://github.com/jan-dh/figma-tailwindcss/"
            rel="noopener noreferrer"
            target="_blank"
            className="inline-flex items-center hover:text-slate-700"
          >
            <Github />
            <span className="ml-1.5">Github</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
