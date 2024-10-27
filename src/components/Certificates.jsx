import { useContext, useEffect, useState } from "react";
import { FormDesign } from "./EducationForm";
import { Container } from "./UserDetailsForm";
import { store } from "./ResumeEdit";
import { Addition } from "./EducationForm";

export function Certificates()
{
    const[getcontext,setcontext]=useContext(store);
    //component state
    const[data,setdata]=useState([{}]);
    //internal state management
    const  handledata=(e,index)=> {
      const{name,value}=e.target;
      //creating new array of state objects
      const newobject=[...data];
    //   console.log(newobject)
      //modifying internal state copied into newobject array based on index
      newobject[index]={
            ...newobject[index],
            [name]:value
        }
        //re initializing the state with updated values at perticular index
        setdata(newobject)
        setcontext({...getcontext,Certifications:newobject})
    }
    // console.log(data)
  const handlefields=()=>{
    const newstate={};
    const updatedstate=[...data,newstate]
    setdata([...data,newstate]);
    // setdata(updatedstate)
    // setcontext({...getcontext,Certifications:data})
  }
  //deleting fields
  const deletefields=(index)=>
    {
        // e.preventDefault();
        // getedu.map((x)=>console.log(x))
        if(data.length>0)
        {
            // data.pop()
            data.splice(index,1)
        }
        setdata([...data])
        setcontext({...getcontext,Certifications:data})     
        // console.log(getedu.length)
        // console.log(context)
    }
  useEffect(()=>{
    if(getcontext.Certifications)
    {
        setdata(getcontext.Certifications)
    }
  },[])

    return(
        <Container>
            <>
            <h2>Certificates</h2>
          {
            data.map((items,index)=>(
                <div key={index}>
                    <FormDesign>
                <form>
                    <div>
                        <label htmlFor="CertificateName">Name Of The Certificate</label>
                        <input value={items.CertificateName} onChange={(e)=>handledata(e,index)} name='CertificateName' className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type='text' placeholder='CoreJava' id='CertificateName'></input>
                    </div>
                    <div>
                        <label htmlFor="IssuedBy">Issued By</label>
                        <input value={items.IssuedBy} onChange={(e)=>handledata(e,index)} name='IssuedBy' className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type='text' placeholder='HackerRank,Cisco,Coursera...etc' id='IssuedBy'></input>
                    </div>
                    <div>
                        <label htmlFor="Link">Link</label>
                        <input value={items.Link} onChange={(e)=>handledata(e,index)} name="Link" className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type='text' placeholder='Link' id='Link'></input>
                    </div>
                </form>
                    </FormDesign>
                 <button onClick={()=>deletefields(index)}><svg className="w-[34px] h-[34px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
               </svg>
               </button>
                </div> 
            ))
          }
          <Addition>
            <button onClick={handlefields}><svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

</button>
        </Addition>
          </>
        </Container>
    )
}