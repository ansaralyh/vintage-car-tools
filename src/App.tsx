

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePageLayout from './components/home-page-layout/home-page-layout'

import './App.css'
import SignUp from './components/SignUp'


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

    <SignUp />

  )
}

export default App
