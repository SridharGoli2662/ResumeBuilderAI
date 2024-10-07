import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LandingPage } from './components/LandingPage'
import { BrowserRouter, Route, Router, Routes,Link } from 'react-router-dom'
import { ResumeEdit } from './components/ResumeEdit'
import { Objective } from './components/Objective'
import { UserForm } from './components/UserDetailsForm'
import { EductationForm } from './components/EducationForm'
import { ProfessionalSkills } from './components/ProfessionalSkills'
import { ProjectForm } from './components/ProjectForm'
// import '../src/index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      
        <Routes>
           <Route path='/' element={<LandingPage></LandingPage>}></Route>
           <Route path='/ResumeEdit' element={<ResumeEdit></ResumeEdit>}>
           <Route index element={<UserForm></UserForm>}></Route>
           <Route path='Objective' element={<Objective></Objective>}></Route>
           <Route path='Education' element={<EductationForm></EductationForm>}></Route>
           <Route path='ProfessionalSkills' element={<ProfessionalSkills></ProfessionalSkills>}></Route>
           <Route path='ProjectForm' element={<ProjectForm></ProjectForm>}></Route>

           </Route>
           {/* <Route path='/ResumeEdit' element={<ResumeEdit></ResumeEdit>}> */}
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
