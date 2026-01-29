import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './helpers/customHooks'
import Preferences from './components/Preferences/Preferences'
import Colors from './components/Colors/Colors'
import Type from './components/Type/Type'
import Effects from './components/Effects/Effects'
import Export from './components/Export/Export'
import Info from './components/Export/Info'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="min-h-full flex flex-col">
      <MemoryRouter initialEntries={['/']}>
        <ScrollToTop />
        <div className="p-4 flex-grow">
          <Routes>
            <Route path="/" element={<Preferences />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/typography" element={<Type />} />
            <Route path="/effects" element={<Effects />} />
            <Route path="/export" element={<Export />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </div>
      </MemoryRouter>
      <Footer />
    </div>
  )
}

export default App
