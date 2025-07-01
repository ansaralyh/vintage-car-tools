
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePageLayout from './components/home-page-layout/home-page-layout'

function App() {

  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<HomePageLayout/>}>
        
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
