import './App.css'
import { Route, Routes } from 'react-router-dom'
import { TopBar } from '../components/TopBar/TopBar'
import { HomePage } from '../pages/homePage/HomePage'
import { FavoritePage } from '../pages/favoritePage/FavoritePage'

function App() {
  return (
    <>
      <TopBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </>
  )
}

export default App
