import { Route, Routes } from "react-router-dom";

import { Repository } from './pages/Repository'
import { Repositories } from './pages/Repositories'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Repositories />} />
      <Route path="/repository/*" element={<Repository />} />
    </Routes>
  )
}