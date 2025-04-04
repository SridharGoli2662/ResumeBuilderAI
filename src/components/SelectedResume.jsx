import { useContext } from "react"
import { store,} from "./ResumeEdit";
import styled from "styled-components";
import Markdown from "react-markdown";
// import jsPDF from "jspdf";
import htmlToPdfmake from "html-to-pdfmake";
import PdfPrinter from "pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from 'pdfmake/build/vfs_fonts';
// import Pdfmake
// pdfMake.fonts = {
//    Roboto: {
//        normal: 'Roboto-Regular.ttf',
//        bold: 'Roboto-Bold.ttf',
//        italics: 'Roboto-Italic.ttf',
//        bolditalics: 'Roboto-BoldItalic.ttf',
//    },
// };
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
function dwnld(getter) {
   // const element = document.getElementById("done").innerText;
   const docdef={
      content: [
         {
           text: `${getter.firstname || ""} ${getter.LastName || ""}`,
           style: "header",
         },
         {
           text: `${getter.City || ""}${getter.State ? `, ${getter.State}` : ""} | ${
             getter.clientmobile || ""
           } | ${getter.Email || ""}`,
           style: "subheader",
         },
         {
           text: "OBJECTIVE",
           style: "sectionTitle",
         },
         {
           text: getter.manualobjective || "No objective provided.",
           style: "paragraph",
         },
   ],
   styles: {
      header: {
        fontSize: 20,
        bold: true,
        alignment: "center",
        margin: [0, 10, 0, 10],
      },
      subheader: {
        fontSize: 12,
        italics: true,
        alignment: "center",
        margin: [0, 5, 0, 10],
      },
}
   }
   // try {
   //   await html2pdf(element).save();
   // } catch (error) {
   //   console.error("Error generating PDF:", error);
   // }
   // const doc=new jsPDF;
   // console.log(element)
   // doc.text("this will be printed",10,10)
   // doc.html(element).save()
   // doc.save(element)
   // const pdfContent = htmlToPdfmake(element);
   // const documentDefinition = { content: pdfContent };
 
   pdfMake.createPdf(docdef).download("Resume.pdf")
   // console.log(pdfMake)
 
 };
export function SelectedResume(props)
{
      const[getter]=useContext(store);
    return(
         <>
      <Resume id='done' style={{fontFamily:props.fonts}}>
             <div >
                <div style={{justifyContent:'center',display:'flex',gap:'10px'}}>
                    <h2>{getter.firstname?getter.firstname:('')}{getter.firstname&&(' ')}</h2>
                    <h2>{getter.LastName?getter.LastName:('')}</h2>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                <div >
                   <ul style={{display:"flex",listStyleType:'none', fontSize:'0.7rem',padding:'0px'}}>
                           <li>{getter.City}{getter.City&&(',')}{getter.State}{getter.State&&(' | ')}</li>
                        <li>{getter.clientmobile}{getter.clientmobile&&(' | ')}</li>    
                        <li>{getter.Email}</li>
                        <li>{getter.LinkedinProfile&&('| ')}{getter.LinkedinProfile}</li>
                    </ul>
                 </div>
                </div>
                  
             </div>
             {
               getter.manualobjective &&(
             <div style={{lineHeight:'1.3rem'}}>
                {/* <h3>CarrerObjective</h3> */}
                <Heading>OBJECTIVE</Heading>
                <hr />
                 <p>{getter.manualobjective}</p>
             </div>
               )}
               {
                  getter.educations?.length>0 &&(
                     <div>
                       <Heading>EDUCATION</Heading>
                       <hr />
                     {
                  getter.educations?.map((education,index)=>
                      <div key={index} style={{lineHeight:'0px',marginTop:'1.5rem'}}>
                            
                                <ul style={{ listStyleType:'none', display:'flex',justifyContent:'space-between',fontSize:'13px'}} >
                                   <li >{education.Degree}
                                      - {education.FieldofStudy}</li>
                                      {/* <li>{education.Percentage}%</li> */}
                                      
                                       <li>{education.StartYear}-{education.Endyear}</li>
                                     
                                </ul>
                            
                            
                             <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-between',fontSize:'13px'}}>
                             <li>{education.InstituteName},{education.InstituteCity}</li>
                              <li>Percentage:{education.Percentage}</li>
                             </ul>
                      </div>
                       )
                     }
                     </div>
                  )
               }
                {getter.Skills?.length > 0 && (
                     <div>
                        {/* <h2>PROFESSIONAL SKILLS</h2> */}
                        <Heading>PROFESSIONAL SKILLS</Heading>
                        <hr />
                           <div style={{marginTop:'1rem',lineHeight:'0.5rem',marginBottom:'-7px'}}>
      
                     <ul style={{ marginLeft: '20px' }}>
  {getter.Skills?.map((data, index) => (
    <li key={index} style={{ marginBottom: '10px' }}>
      <SubHead>{data.Technologies}:</SubHead>
      <span style={{ marginLeft: '10px' }}>{data.skill}</span>
    </li>
  ))}
</ul>
               </div>
                  </div>  
                )}
                {
                     getter.Projects?.length>0 &&(
                        <div>
                           {/* <h2>PROJECTS</h2> */}
                           <Heading>PROJECTS</Heading>
                           <hr />
                  {
                  getter.Projects?.map((items,index)=>
                     <div key={index} style={{marginBottom:'0.4rem'}}>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                        <SubHead>{items.Name}</SubHead>
                        <a href={items.Link}>{items.Link}</a>
                        </div>
                        {/* <p style={{marginBottom:'0',lineHeight:'1.3rem'}}>
                           {items.Desc}
                        </p> */}
                       <Markdown>{items.Desc}</Markdown>
                        

                        <SubHead>Technologies Used:{items.TechnologiesUsed}</SubHead>
                     </div>
                  )} 
                        </div>
                  )}
                  {getter.Certifications?.length > 0 && (
                     <div>
                        {/* <h2>PROFESSIONAL SKILLS</h2> */}
                        <Heading>CERTIFICATES</Heading>
                        <hr />
                        <div style={{marginTop:'1rem',lineHeight:'0.5rem',marginBottom:'-7px'}}>
                           <ul style={{ margin:'0px'}}>
                              {/* // getter.Certifications?.map((data,index)=>
                              // <li  key={index}><SubHead>{data.CertificateName}:</SubHead>
                              // <span>{data.IssuedBy}</span>
                              // </li>) */}
                  {
                           getter.Certifications?.map((data, index) => (
                              <li key={index} style={{marginBottom: '10px'}}>
                                <SubHead>{data.CertificateName}:</SubHead>
                                <span style={{marginLeft: '10px'}}>{data.IssuedBy}</span>
                                <a href={data.Link} style={{float:'right',color:'blue',}}>{data.Link}</a>
                              </li>
                            ))
                     }
                     </ul>
                     </div>
                     
                     {/* <div>
                        <span>{data.skill}</span>
                     </div> */}
                  </div>  
                )}
                {
                  getter.Achievements?.length>0 &&(
                     <div>
                        <Heading>ACHIEVEMENTS</Heading>
                        <hr />
                        {
                           getter.Achievements?.map((data,index)=>
                           <li style={{lineHeight:'1.3rem'}} key={index}>{data.Achievement}</li>
                           )
                        }
                     </div>
                     
                  )
                }
             {/* <div>
                <span>CandidateName</span>
                <span>CandidateEmail</span>
                <span>andidateMobile</span>
             </div> */}
        </Resume> 
        </>
      )
   //  )
        }

const Resume=styled.div`
li{
   font-size: 1rem;
}
ul{
   list-style-type: disc;
}
      font-size: 1rem;
      /* padding: 20px;
      height: 100vh; */
      width: 45rem; /* A4 width */
  height: 73rem; /* A4 height */
  padding: 5mm; /* Optional padding inside the A4 page */
  margin: 0 auto; /* Center the A4 page */
  box-shadow: 0 0 30px rgba(32, 32, 32, 0.1); /* For a visual look of the resume */
      /* width: 70%; */
      /* border: 2px solid black;
      box-shadow: 2px gray; */
      /* font-family: 'Times New Roman', Times, serif; */
      @media print {
         /* width: 210mm; */
         width: 100%;
         height: 297mm;
         box-shadow: none;
         margin: 0;
         
    /* padding: 20mm; */
      }
      hr{
         margin: 0px;
      }
   /*   h2{
         text-align: center;
         background-color: #b8b5b5;
         color: black;
}*/
`
const Heading=styled.p`
      font-size: 1.1rem;
      font-weight: bold;
      margin-bottom: 0px;
   
`
const SubHead=styled.span`
   font-size: 15px;
   font-weight: bold;
`
export default dwnld;