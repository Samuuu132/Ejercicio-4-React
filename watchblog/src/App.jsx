import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/items" element={<h1>Listado de Relojes</h1>} />
      <Route path="/items/:id" element={<h1>Detalle del Reloj</h1>} />
    </Routes>
  )
}

export default App