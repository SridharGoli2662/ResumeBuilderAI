import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LandingPage } from './components/LandingPage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { ResumeEdit } from './components/ResumeEdit'
import { Objective } from './components/Objective'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<LandingPage></LandingPage>}></Route>
           <Route path='/ResumeEdit' element={<ResumeEdit></ResumeEdit>}>

           {/* <Route path='/ResumeEdit/:id' element={<Objective></Objective>}></Route>  */}
         
           </Route>
         
        </Routes>
      </BrowserRouter>
    {/* <ResumeEdit></ResumeEdit> */}
        
      {/* <div>
        <h1>What happend for this</h1>
      </div> */}
    </>
  )
}

export default App
