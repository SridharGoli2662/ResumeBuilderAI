import { useState,useContext,useEffect } from "react"
import { Container } from "./UserDetailsForm";
import { FormDesign } from "./EducationForm";
import { Addition } from "./EducationForm";
import { store } from "./ResumeEdit";
export function Achievments()
{
const[getcontext,setcontext]=useContext(store);
   const[data,setdata]=useState([{}]);
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
      setcontext({...getcontext,Achievements:newobject})
  }
  console.log(data)
const handlefields=()=>{
  const newstate={};
  setdata([...data,newstate]);
}
//deleting fields
const deletefields=(index)=>
  {
      if(data.length>0)
      {
          data.splice(index,1)
      }
      setdata([...data])
      setcontext({...getcontext,Achievements:data})     
  }
useEffect(()=>{
  if(getcontext.Achievements)
  {
      setdata(getcontext.Achievements)
  }
},[])
    return(
        <Container>
            <h2>Achievements</h2>
                {
                    data?.map((items,index)=>
                        <div key={index}>
                        <FormDesign >
                            <form>
                            <div>
                <textarea onChange={(e)=>handledata(e,index)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" rows={5} value={items.Achievement} name="Achievement" cols={30}  placeholder="Describe Your Achievement"></textarea>

                    </div>
                            </form>
                         <button onClick={()=>deletefields(index)}><svg className="w-[34px] h-[34px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                       </svg>
                       </button>
                        </FormDesign>
                        </div>
                    )
                }
                <Addition>
            <button onClick={handlefields}><svg className="w-[35px] h-[35px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg>

</button>
        </Addition>
        </Container>
    )
}