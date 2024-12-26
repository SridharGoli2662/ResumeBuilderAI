import { SelectedResume } from "./SelectedResume";
import {styled} from 'styled-components'
import { createContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { html2pdf } from "html2pdf.js/dist/html2pdf.bundle.min.js";
import  html2pdf  from "html2pdf.js";
import { AiGenerator } from "./AiContent.jsx";
import Selectedresumepdf from "./SelectedRes.jsx";
// import { SelectedResumePdf } from "./SelectedCheck.jsx";
import jsPDF from "jspdf";
// import { downloadPDF } from "./Testing.jsx";
import dwnld from "./SelectedResume";
import { pdfMake } from "pdfmake/build/vfs_fonts.js";
import Test from "./Testing.jsx";
// pdfMake.fonts = {
//   Roboto: {
//       normal: 'Roboto-Regular.ttf',
//       bold: 'Roboto-Bold.ttf',
//       italics: 'Roboto-Italic.ttf',
//       bolditalics: 'Roboto-BoldItalic.ttf',
//   },
// };
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
export const store=createContext();
export function ResumeEdit()
{
const[getdata,setdata]=useState({popup:false});
const formroutes=['','Objective','Education','ProfessionalSkills','ProjectForm','Certifications','Achievements']
const navigate=useNavigate();
const [index,setindex]=useState(0)
// function dwonld()
// {
//    dwnld()
// }
function handleindex()
{
  if(index<formroutes.length-1)
  {
    setindex(index+1)
    navigate(formroutes[index+1])
  }
}
function reduceindex()
{
  if(index>0)
  {
    setindex(index-1)
    navigate(formroutes[index-1])
  }
}
function handledownload(e)
{
   e.preventDefault();
   window.print()
}
const[getfont,setfont]=useState("'Times New Roman', Times, serif");
function handlefont(e)
{
  setfont(e.target.value);
}
useEffect(() => {
  const timer = setTimeout(() => {
    setdata((prevData) => ({ ...prevData, popup: true }));
  }, 3000); 
  navigate(formroutes[0]);
  return () => clearTimeout(timer);
}, []);
const navg=useNavigate();
// async function dwnld()
// {
//   console.log('clicked')
//   const element=document.getElementById('one')
//   // console.log(ele)
//   const options = {
//     margin: 1,
//     filename: "specific-part.pdf",
//     image: { type: "jpeg", quality: 0.98 },
//     html2canvas: { scale: 2 },
//     jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
//   };
//   // var prom=html2pdf()
//   console.log(element)
//   html2pdf().set(options).from(element).save();
// //  await html2pdf()
// }
// function dwnld() {
//   const element = document.getElementById("done");
//   // try {
//   //   await html2pdf(element).save();
//   // } catch (error) {
//   //   console.error("Error generating PDF:", error);
//   // }
//   const doc=new jsPDF;
//   console.log(element)
//   doc.text("this will be printed",10,10)
//   doc.save()

// };

return(
  <>
      <Maincompo>
      <store.Provider value={[getdata,setdata]}>
        {getdata.popup &&(<AiGenerator></AiGenerator>)} 
        <div id='leftside' >
        
        <div style={{    margin: '0px 1rem',padding: '1rem'}}>
            <button  className=" d-flex px-3 mb-0 py-2.5 text-md font-medium text-black bg-gray-300 hover:bg-gray-500   rounded-md text-center" onClick={()=>navg('/')} >
             
                <img style={{width:'1.3rem',height:'1.3rem',margin:'0px 5px'}} src="/home_icon.svg"></img>
             
              Home</button>
        </div>
      <div  style={{overflowY:'auto',marginTop:'2rem'}}>
     
    <Btns>
          <button className="px-5 mb-0 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800  rounded-lg text-center" onClick={reduceindex} disabled={index==0}> Previous</button>
          <button  className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800  rounded-lg text-center" onClick={handleindex} disabled={index==formroutes.length-1} >Next</button>
      </Btns>
      <div  id="forms" >
        <Outlet key={index}></Outlet>
      </div>
        </div>
      </div>  
        <div style={{width:'50vw'}}>
        <Top id="top">
          <div style={{display:"inline-flex",gap:'1vw',alignItems:'center'}}>
            <div style={{width:'2vw'}}>
           <img src='FONTS.svg' style={{width:'100%'}}></img>

            </div>
          <select onChange={handlefont} >
            <option value="'Arial', sans-serif">Arial</option>
            <option value="'Times New Roman', Times, serif">Times New Roman</option>
            <option value="'Georgia', serif">Georgia</option>
            <option value="'Garamond', serif">Garamond</option>
            <option value="'Verdana', Geneva, sans-serif">Verdana </option>
          </select>
          </div>
        <Download>
                     {/* <button onClick={handledownload} style={{backgroundColor:'blue',color:"white"}}>Download</button> */}
                     <button onClick={handledownload} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Print</span>
</button>
        </Download>
        <Download>
                     <button onClick={dwnld} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download</span>
  </button>
        </Download>
        </Top>
        <Resumediv id='one'>
        {/* <SelectedResumePdf fonts={getfont}></SelectedResumePdf> */}
        {/* <Test  fonts={getfont}></Test> */}
        <SelectedResume fonts={getfont}></SelectedResume>
        {/* <Selectedresumepdf id='wanted' fonts={getfont}></Selectedresumepdf> */}
        </Resumediv>
        </div>
      </store.Provider>
        </Maincompo>
        </>
    )
}
const Resumediv=styled.div`
    width:55vw;
    padding: 1rem;
    overflow-y:auto;
    height:85vh;
    margin: auto auto;
    border: 2px solid black;
    @media  screen and (max-width:767px) {
    #top{
      width: 50vw;
    }
  }
`
export const Btns=styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1.5rem;
    margin-bottom: 5px;
`
const Download=styled.div`
  
  color: white;
`
const Top=styled.div`
display: flex;
justify-content: center;
gap:5rem;
  margin: 0.5rem;
  padding:10px;
 
`
const Maincompo=styled.div`
display: flex;
#forms{
  width: 40vw;
  overflow-y: auto;
  height: 75vh;
}
  @media print {
    #one{
    width: 210mm;
    height: 297mm;
    box-shadow: none;
    border: none;
    margin: 0;
    padding:10px;
    overflow: hidden;
    }
    #leftside{
      display: none;
    }
    #top{
      display: none;
    }
  }
  @media  screen and (max-width:767px) {
   #forms{
    width: 100vw;
   }
  }
`

