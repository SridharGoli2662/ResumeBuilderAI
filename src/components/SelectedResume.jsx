import { useContext } from "react"
import { store,} from "./ResumeEdit";
import styled from "styled-components";
export function SelectedResume(props)
{
      const[getter]=useContext(store);
      console.log(getter)
   //  console.log(prop.prop)
    return(
      // get.map((getter)=>
         <>
      <Resume  style={{fontFamily:props.fonts}}>
             <div>
                <div style={{justifyContent:'center',display:'flex'}}>
                    <h2>{getter.firstname?getter.firstname:'Sridhar'}</h2>
                    <h2>{getter.LastName?getter.LastName:'Goli'}</h2>
                </div>
                <div style={{display:'flex',justifyContent:'center',}}>
                <div >
                   <ul style={{display:"flex", gap:'10px',listStyleType:'none'}}>
                        {/* <li>{getter.city?getter.city:"Hyderabad"}</li>
                        <li>{getter.state}</li>
                        <li>{getter.pincode} |</li> */}
                         <li>{getter.clientaddress} | </li>
                        <li>{getter.clientmobile} | </li>    
                        <li>{getter.Email} | </li>
                        <li>{getter.LinkedinProfile}</li>
                    </ul>
                 </div>
                </div>
                  
             </div>
             {
               getter.manualobjective &&(
             <div>
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
                            
                                <ul style={{display:'flex',justifyContent:'space-between',fontSize:'13px'}} >
                                   <li >{education.Degree}
                                      - {education.FieldofStudy}</li>
                                      {/* <li>{education.Percentage}%</li> */}
                                      
                                       <li>{education.StartYear}-{education.Endyear}</li>
                                     
                                </ul>
                            
                            
                             <ul style={{display:'flex',justifyContent:'space-between',fontSize:'13px'}}>
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
                  {
                     getter.Skills?.map((data,index)=>
                        <div style={{marginTop:'1rem',lineHeight:'0',marginBottom:'-7px'}}>
                           <ul style={{display:'flex',margin:'0px'}}>
                           <li key={index}><SubHead>{data.Technologies}:</SubHead></li>
                           <p>{data.skill}</p>
                           </ul>
                        </div>
                        )
                     }
                     {/* <div>
                        <span>{data.skill}</span>
                     </div> */}
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
                     <div key={index}>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                        <SubHead>{items.Name}</SubHead>
                        <a href={items.Link}>{items.Link}</a>
                        </div>
                        <p>
                           {items.Desc}
                        </p>
                        <SubHead>Technologies Used:{items.TechnologiesUsed}</SubHead>
                     </div>
                  )} 
                        </div>
                  )}
             <div style={{display:'flex',justifyContent:'space-around',
             }}>
                <div>CandidateName</div>
                <div>CandidateEmail</div>
                <div>CandidateMobile</div>
             </div>
        </Resume> 
        </>
      )
   //  )
        }

const Resume=styled.div`
      font-size: 13px;
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
const SubHead=styled.p`
   font-size: 15px;
   font-weight: bold;
`