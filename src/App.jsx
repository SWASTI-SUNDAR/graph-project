import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Algorithm from './pages/Algorithm'
import CharacterDetail from './pages/CharacterDetail'
import Cases from './pages/Cases'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/algorithm" element={<Algorithm />} />
        <Route path="/algorithm/:id" element={<CharacterDetail />} />
        <Route path="/cases" element={<Cases />} />
      </Route>
    </Routes>
  )
}
