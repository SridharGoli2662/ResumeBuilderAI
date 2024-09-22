import { useContext } from "react"
import { store,} from "./ResumeEdit";
import styled from "styled-components";
export function SelectedResume(prop)
{
      const[getter]=useContext(store);
      console.log(getter)
   //  console.log(prop.prop)
    return(
      // get.map((getter)=>
         <>
      <Resume  style={{fontFamily:prop.prop}}>
             <div>
                <div style={{justifyContent:'center',display:'flex'}}>
                    <h1>{getter.firstname?getter.firstname:'Sridhar'}</h1>
                    <h1>{getter.LastName?getter.LastName:'Goli'}</h1>
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
                  <hr />
             </div>
             <div>
                <h2>CarrerObjective</h2>
                 <p>{getter.objective}</p>
             </div>
             <div>
                <h2>EDUCATION</h2>
                {
                  getter.educations?.map((education,index)=>
                 <div key={index} style={{display:'flex',justifyContent:'space-between',fontSize:'15px'}}>
                       <div >
                           <ul style={{display:'flex',listStyle:'none'}}>
                              <li>{education.CourseName}
                                 |</li>
                                 <li>{education.Percentage}%</li>
                                 <li>
                                 ({education.InstituteDetails})</li>
                           </ul>
                       </div>
                       <div>
                        <ul style={{display:'flex',listStyle:'none'}}>
                           <li>{education.StartYear}-</li>
                           <li>{education.Endyear}</li>
                        </ul>
                        </div>    
                 </div>
                  )
                }
             </div>
             <div>
                <h2>ProfessionsSkills</h2>
                  {
                     getter.Skills?.map((data,index)=>
                     
                  <div key={index} style={{display:'flex'}}>
                     <div >
                        <ul>
                           <li>{data.Technologies}:</li>
                        </ul>
                     </div>
                     <div>
                        <span>{data.skill}</span>
                     </div>
                  </div>
                     
                     )
                  }
             </div>
             <div>
                <h2>Projects</h2>
                {
                  getter.Projects?.map((items,index)=>
                     <div key={index}>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                        <h4>{items.Name}</h4>
                        <a href={items.Link}>{items.Link}</a>
                        </div>
                        <p>
                           {items.Desc}
                        </p>
                        <h4>Technologies Used:{items.TechnologiesUsed}</h4>
                        </div>
                  )
                }
             </div>
             <div style={{display:'flex',justifyContent:'space-around'}}>
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
      padding: 20px;
      height: 100vh;
      /* font-family: 'Times New Roman', Times, serif; */
      @media print {
         /* background-color: black; */
         /* margin-top:0; */
         padding:0px;
         margin-top: 0px;
         width: 95vw;
         height: 100vh;
         /* font-size: 3rem; */
         /* size: 50px; */
      }
      h2{
         text-align: center;
         background-color: #b8b5b5;
         color: black;
}
`