import { useFormik } from "formik";
import { useContext, useState ,useEffect} from "react"
import {Container } from "./UserDetailsForm";
import { Addition, FormDesign } from "./EducationForm";
import { store } from "./ResumeEdit";

export function ProfessionalSkills()
{
    const[context,setcontext]=useContext(store)
    // console.log(context);
    //only for validation i thik????
    const formik=useFormik({
        initialValues:{
            skill:'',
            Technologies:''
        },
    })  
    const[data,setdata]=useState([{}]);
    // console.log(data)
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
    const newdata={}
    const setting=[...data,newdata];
    setdata(setting)
    setcontext({...context,Skills:setting})
}
// console.log(data[2].)
const deletefields=(index)=>
    {
        // e.preventDefault()
        // getedu.map((x)=>console.log(x))
        if(data.length>0)
        {
            // data[index].pop()
            // data[index].
            // delete data[index];
            data.splice(index,1)
            // console.log(index)
        }
        setdata([...data])
        setcontext({...context,Skills:data})
        
        // console.log(getedu.length)
        // console.log(context)
    }
useEffect(() => {
    if (context.Skills) {
        setdata(context.Skills); // Initialize with context values
    }
},[context.Skills]);
    return(
        <Container>
            <div>
            <div className="d-flex gap-3 m-5">
                <p className="my-auto text-lg">Show AI Generated Content</p>
                <button className="bg-green-500 px-3 py-2.5 text-m font-medium text-white hover:bg-green-700  focus:ring-4 focus:outline-none focus:ring-black-300 rounded-lg text-center">ClickHere</button>
    
            </div>
            <div>
                    <p  className="text-xl font-bold">KeyWords:</p>
                    <p className="text-m font-semibold">{context.keywords}</p>
            </div>
                <h2>Professional Skills</h2>
                {
                    data.map((items,index)=>
                        <div>
                            
            <form action="submit">
                    <FormDesign key={index}>  
                    <div className="grid gap-4 mb-2 md:grid-cols-2">
                        <div >
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="Category">Category</label>
                    <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" id='Category' name="Technologies" value={items?.Technologies}  onChange={(e)=>handling(e,index)} placeholder="Programming Languages"></input>
                        </div>
                        <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="ReleventSkills">ReleventSkills</label>
                    <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" id='ReleventSkills' onChange={(e)=>handling(e,index)} value={items?.skill}  name="skill"  placeholder="C,Java,Python,JavaScript"></input>
                        </div>
                </div>
                <div>
                    {/* <button className="px-5 py-2.5 text-sm font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center'">Delete</button> */}
                </div>
            </FormDesign>
            </form>
        <button onClick={()=>deletefields(index)}><svg className="w-[34px] h-[34px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
</svg>
</button>
</div>
        )
    }
    </div>
        <Addition>
        <button className='px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center' type="button" onClick={handlefields}>Add Technology</button>
        </Addition>
        </Container>
    )
}
