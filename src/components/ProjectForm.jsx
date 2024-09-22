import { useContext, useDebugValue, useEffect, useState } from "react"
import { Addition, FormDesign } from "./EducationForm";
import {Container } from "./UserDetailsForm";
import { store } from "./ResumeEdit";
export function ProjectForm()
{
    const[context,setcontext]=useContext(store);
    const[data,setdata]=useState(
        [
            {
                Name:'',
                Desc:'',
                Link:'',
                TechnologiesUsed:''
            }
        ]
    )
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
        const newdata={
            Name:'',
            Desc:'',
            Link:'',
            TechnologiesUsed:''
        }
        const intermediate=[...data,newdata]
        setdata(intermediate)
        // setdata([...data,newdata])
        setcontext({...context,Projects:intermediate})
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
            <form>
                <FormDesign>
                {
                    data.map((items,index)=>
                
                        <div>
                        <input type="text" onChange={(e)=>handling(e,index)} value={items.Name}  name="Name" id="Name " placeholder="Enter Project Name "></input>
                     {/* <input type="textarea" onChange={(e)=>handling(e,index)} value={items.Desc}  name="Desc" id="Desc " placeholder="Enter Project Description "></input> */}
                    <textarea rows={6} cols={20}  onChange={(e)=>handling(e,index)} value={items.Desc} name="Desc" id="Desc " placeholder="Enter Project Description " ></textarea>
                     <input type="text" onChange={(e)=>handling(e,index)} value={items.TechnologiesUsed}  name="TechnologiesUsed" id="TechnologiesUsed " placeholder="Technologies Used  "></input>
                     <input type="text" onChange={(e)=>handling(e,index)} value={items.Link}  name="Link" id="Link " placeholder="Enter Link of the Project "></input>

                        </div>
    )
}
    </FormDesign>
            </form>
            <Addition>
                 <button onClick={handlefields}>Add Technology</button>
            </Addition>
        </div>
        </Container>
    )
}