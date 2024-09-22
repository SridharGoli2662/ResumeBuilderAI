import { SelectedResume } from "./SelectedResume";
import { UserForm } from "./UserDetailsForm";
import {styled} from 'styled-components'
import { createContext, useState } from "react";
import { Objective } from "./Objective";
import { EductationForm } from "./EducationForm";
import { ProfessionalSkills } from "./ProfessionalSkills";
import { ProjectForm } from "./ProjectForm";
export const store=createContext();
export function ResumeEdit()
{
  // const[getdata,setdata]=useState({'firstname':'sridhar','LastName':'Goli','clientmobile':'868850926'
//     ,eductaion:[{   
//               InstituteDetails:'SARDARPATEL DEGREE COLLEGE ',
//               Percentage:88,
//               CourseName:'MCA',
//               StartYear:2023,
//               Endyear:2024
// }]
// })

const[getdata,setdata]=useState({});
const compos=[<UserForm/>,<Objective/>,<EductationForm/>,<ProfessionalSkills/>,<ProjectForm></ProjectForm>];
const [index,setindex]=useState(0)
function handleindex()
{
   setindex(index+1)
}
function reduceindex()
{
    setindex(index-1)
}
function handledownload(e)
{
   e.preventDefault();
   window.print()
}
const[getfont,setfont]=useState();
function handlefont(e)
{
  // console.log(e.target)
  setfont(e.target.value);
}
return(
  <>
      <Maincompo>
        <div id="top">
          <div >
          <select onChange={handlefont} >
            <option value="'Arial', sans-serif">Arial</option>
            <option value="'Times New Roman', Times, serif">Times New Roman</option>
            <option value="'Georgia', serif">Georgia</option>
            <option value="'Garamond', serif">Garamond</option>
            <option value="'Verdana', Geneva, sans-serif">Verdana </option>
          </select>
          </div>
        <Download>
                     <button onClick={handledownload} style={{backgroundColor:'blue',color:"white"}}>Download</button>
        </Download>
        </div>
      <store.Provider value={[getdata,setdata]}>
      <div style={{width:'40vw'}} id="forms">
      <Btns>
         
          <button onClick={reduceindex} disabled={index==0}> Previous</button>
          <button onClick={handleindex} disabled={index==compos.length-1} >Next</button>
         
      </Btns>
        {/*  componets redering based on index */}
           {compos[index]}
        </div> 
        <Resumediv id='one'>
        
        <SelectedResume prop={getfont}></SelectedResume>
        </Resumediv>
      </store.Provider>
        </Maincompo>
        </>
    )
}
const Resumediv=styled.div`
    width:65vw;
    padding: 20px;
   /* border: 2px solid black; */
   /* position: relative; */
`
export const Btns=styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`
const Download=styled.div`
  /* background-color: blue; */
  color: white;
`
const Maincompo=styled.div`
display: flex;
  @media print {
    #forms{
      display: none;
    }
    #top{
      display: none;
    }
     /* #one{ */
      /* width: 100vw; */
      /* margin-top: 0; */
      
      /* height:; */
      /* display: absolute; */
      /* display: absolute; */
      /* background-color: black; */
    /* }  */
  }
`

