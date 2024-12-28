import{styled} from 'styled-components'
import { useState,useEffect, useContext } from 'react';
import { store } from './ResumeEdit';
import {AIchatSession} from '../AI_Services/AI_Model.js'
export function AiGenerator()
{
    //context
    const[getdata,setdata]=useContext(store);
//user data for AI Content Generation 
const[getuserdata,setuserdata]=useState();
function datasetting(e)
{
    const{name,value}=e.target;
    setuserdata({
       ...getuserdata,
       [name]:value
})
}
//AI Services
const Prompt=`generate best keywords and objective for Role:"${getuserdata?.jt}" ExperienceLevel:"${getuserdata?.experience}" and the jobDescription is "${getuserdata?.jd}" with in 100 tokens use 70 tokens for objective in JSON format`
async function aiContent()
{
  setdecision(false)
   const result= await AIchatSession.sendMessage(Prompt)
   setdata({...getdata,AIContent:JSON.parse(result.response.text())});
}
//popup usestate
const [getpop,setpop]=useState(false);
useEffect(function(){
  setpop(true)
  // setdecision(true)
  setdata({...getdata,popup:true})

},[])
//jobdescription form
const[getdecision,setdecision]=useState(false)
function pophide()
{
  setpop(false)  
  setdata({...getdata,popup:false})

}
function setjd()
{
    setpop(false)
   setdecision(true)
  //  setdata({...getdata,popup:true})
}
function close()
{
  setdecision(false)
  setdata({...getdata,popup:false})
}
    return(
<Outer>
        {
            getpop &&(
          <div id='Popupbg'>
              <div id='popup'>
                <div style={{margin:'2rem',textAlign:'center'}}>
                <p>Are You Focusing Any Perticular Job</p>
                <div style={{display:'inline-flex',gap:'2rem'}}>
                <button className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"onClick={setjd} >Yes</button>
                <button className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center" onClick={pophide} >No</button>
                </div>
                </div>
              </div>
          </div>
            )
          }
          {
            getdecision &&(
              <div id='jdform'>
                <div id='jddetails'>
                 <div style={{padding:'2rem'}}>
                  <div style={{textAlign:'right'}} >
                    <button onClick={close} ><svg  className="w-[33px] h-[33px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
    </svg>
    </button>
                  </div>
                    <form >
                      <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="experience">Select Your Experience Level</label>
                        <select onChange={datasetting} className="g-gray-50 border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="experience" id="experience">Experience Level
                          <option>Fresher</option>
                          <option>MidLevel</option>
                          <option>Experienced</option>
                        </select>
    
                      </div>
                      
                       <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="jt">JobTitle</label>
                        <input onChange={datasetting} id='jt' name='jt' className="g-gray-50 mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text"placeholder="Eg:JavaFullStack,WebDeveloper"></input>
                       </div>
                       <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900"  htmlFor="jd">JobDescription</label>
                        {/* <input type="textarea" placeholder="Paste Your JobDescription with in 100words ignore Other Clutter"></input> */}
                        <textarea maxLength={350} onChange={datasetting} id='jd' name="jd" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" rows={10} cols={30} placeholder="Paste Your JobDescription with in 100words ignore Other Clutter"></textarea>
                       </div>
                       <div>
                       </div>
                    </form>
                    <div className="d-flex justify-end">
                    <button onClick={aiContent} className="px-3  mt-3 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">GenerateContent</button>
                    </div>
                  </div>
                </div>
                </div>
            )
          }
          </Outer>
    )
}
const Outer=styled.div `
#Popupbg{
  position: fixed;
   display: flex;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,0.5) ;
}

#popup{
  background-color:white;
  width:20rem;
  align-items: center;
  margin: auto auto;
}
#jdform{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
}
#jddetails{
  background-color: white;
  width:30vw;
  margin: auto auto;
  border-radius: 1rem;
}
@media screen and (max-width: 767px) {
  #jddetails{
    width:70%;
  }
}
 `