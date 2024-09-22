import { useFormik } from "formik";
import { useContext, useState ,useEffect} from "react"
import {Container } from "./UserDetailsForm";
import { Addition, FormDesign } from "./EducationForm";
import { store } from "./ResumeEdit";

export function ProfessionalSkills()
{
    const[context,setcontext]=useContext(store)
    //only for validation i thik????
    const formik=useFormik({
        initialValues:{
            skill:'',
            Technologies:''
        },
    })
    
    const[data,setdata]=useState([{
            skill:'',
            Technologies:''
        }
    ]);
    function handling(e,index)
    {
        const{name,value}=e.target;
        // const newdata=data.slice();
        // newdata[index][name]=value;
        // console.log(newdata[index])
        // insted of sliceing we need to create new array object
        const newdata=[...data]
        newdata[index]={
            ...newdata[index],
            [name]:value
        }
        // const newdata={
        //     ...data,
        //     newdata[index]
        //     name:value
        // }
        setdata(newdata)
        formik.setFieldValue(name,value)
        setcontext({...context,Skills:newdata})
    //     setdata(prev=>
    //         [ {...prev,
    //            [name]:value
    // }]
    //     )
    // console.log(data)
    // console.log(context)
}
// function handlefields()
// {
//     setdata(prev=>[...prev,{
//         Skills:'',
//         Technologies:''
//     }])
// }
function handlefields()
{
    // insted of just setting the context i need to create a new object
    const newdata={
        skill:"",
        Technologies:""
    }
    const setting=[...data,newdata];
    setdata(setting)
    setcontext({...context,Skills:setting})
}
useEffect(() => {
    if (context.Skills) {
        setdata(context.Skills); // Initialize with context values
    }
}, [context.Skills]);
    return(
        <Container>
        <div>
            <h2>Professional Skills</h2>
            <form action="submit">
                {
                    data.map((items,index)=>
                    <FormDesign key={index}>  
                    <div>
                    <input type="text" name="Technologies" value={items.Technologies}  onChange={(e)=>handling(e,index)} placeholder="Enter Technologie"></input>
                    <input type="text" onChange={(e)=>handling(e,index)} value={items.skill}  name="skill" id="skill " placeholder="Enter Relavent Skills "></input>
                </div>
                      
            </FormDesign>
                )
            }
            </form>
        </div>
        <Addition>
        <button onClick={handlefields}>Add Technology</button>
        </Addition>
        </Container>
    )
}