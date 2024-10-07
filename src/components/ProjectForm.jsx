import { useContext, useDebugValue, useEffect, useState } from "react"
import { Addition, FormDesign } from "./EducationForm";
import {Container } from "./UserDetailsForm";
import { store } from "./ResumeEdit";
export function ProjectForm()
{
    const[context,setcontext]=useContext(store);
    const[data,setdata]=useState([{}])
    function handling(e,index)
    {
        const{name,value}=e.target;
        const newdata=[...data]
        newdata[index]=
            {
                ...newdata[index],
                [name]:value
            }
            setdata(newdata)
            setcontext({...context,Projects:newdata})
    }
    function handlefields()
    {
        const newdata={}
        const intermediate=[...data,newdata]
        setdata(intermediate)
        // setdata([...data,newdata])
        setcontext({...context,Projects:intermediate})
    }
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
            setcontext({...context,Projects:data})
            
            // console.log(getedu.length)
            // console.log(context)
        }
    useEffect(()=>{
        if(context.Projects)
        {
            setdata(context.Projects)
        }
    },[context.Projects])
    return(
        <Container>

       
        <div>
            <h2>Project Details</h2>
            
                <FormDesign>
                {
                    data.map((items,index)=>
                        <div key={index}>
                    <div className="grid gap-4 mb-2 md:grid-cols-2">
                        <div>
                            <label htmlFor="ProjectName">ProjectName</label>
                    <input type="text" id='ProjectName' className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e)=>handling(e,index)} value={items.Name}  name="Name"placeholder="Enter Project Name "></input>
                        </div>
                        <div>
                            <label htmlFor="ProjectLink">ProjectLink</label>
                     <input type="text" id='ProjectLink' className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e)=>handling(e,index)} value={items.Link}  name="Link"  placeholder="Enter Link of the Project "></input>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="Description">Description</label>
                        <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" rows={6} cols={20}  onChange={(e)=>handling(e,index)} value={items.Desc} name="Desc" id="Description " placeholder="Enter Project Description " ></textarea>
                    </div>
                     {/* <input type="textarea" onChange={(e)=>handling(e,index)} value={items.Desc}  name="Desc" id="Desc " placeholder="Enter Project Description "></input> */}
                     <label htmlFor="TechnologiesUsed">TechnologiesUsed</label>
                     <input type="text" className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e)=>handling(e,index)} value={items.TechnologiesUsed}  name="TechnologiesUsed" id="TechnologiesUsed " placeholder="Technologies Used  "></input>
            <button onClick={()=>deletefields(index)}><svg className="w-[34px] h-[34px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
</svg>
</button>
                     </div>
                    
    )
}
    </FormDesign>
            <Addition>
                 <button  type="button"  className='px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center' onClick={handlefields}>Add Technology</button>
            </Addition>
        </div>
        </Container>
    )
}