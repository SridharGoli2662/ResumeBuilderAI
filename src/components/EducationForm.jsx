import { useFormik } from "formik"
import { useContext, useEffect, useState } from "react";
import { store } from "./ResumeEdit";
import { Container } from "./UserDetailsForm";
import styled from "styled-components";
export function EductationForm()
{
    const[context,setcontex]=useContext(store);
    //this empty object is just for rendering form intially  before  clicking the add button
    const[getedu,setedu]=useState([{}])
    const formik=useFormik({
        initialValues:[{
            InstituteDetails:'Sardarpatel Degree college,Secunderabad',
            Percentage:88,
            CourseName:'Bachelors of computer science (MCCS)',
            StartYear:2020,
            Endyear:2023
    }],
        enableReinitialize:true
    })
    // useEffect(()=>{
    //     context&&setedu(context?.educations)
    // },[])
// function handlechange(e,index)
// {
//     const{name,value}=e.target;
//     //creating dupicate State for modifying 
//     const newobject=getedu.slice();
//     // console.log(newobject[index])
//     // newobject[]
//     newobject[index][name]=value;
//     // console.log(newobject)
//     //setting the duplicate state after modification
//     setedu(newobject)
//     setcontex({...context,educations:newobject})
//     formik.setFieldValue(name,value);
//     console.log(context)

// }    
function handlechange(e, index) {
    const { name, value } = e.target;
    const newobject = [...getedu]; // Create a new array
    newobject[index] = {
        ...newobject[index],
        [name]: value // Update the specific field
    };
    setedu(newobject); // Update the state
    setcontex({ ...context, educations: newobject }); // Update the context
    formik.setFieldValue(name, value);
    // console.log(context);
}
const handlefields = () => {
    const newEducation = {};
    const updatedEdu = [...getedu, newEducation];
    setedu(updatedEdu); // Add new education details
    setcontex({ ...context, educations: updatedEdu }); // Update the context
    // console.log(context)
    // console.log(getedu)
}
const deletefields=(index)=>
{
    // getedu.map((x)=>console.log(x))
    if(getedu.length>0)
    {
        // getedu.pop()
        getedu.splice(index,1);
    }
    setedu([...getedu])
    setcontex({...context,educations:getedu})
    
    // console.log(getedu.length)
    // console.log(context)
}
useEffect(() => {
    if (context.educations) {
        setedu(context.educations); // Initialize with context values
    }
}, [context.educations]);
// const handlefields=()=>
//     {
// /*getting previous values and updating new valuses so that the component will render each
//    and every time by assuming it as a new object    */
// setedu([...getedu,{
//              InstituteDetails:'',
//             Percentage:0,
//             CourseName:'',
//             StartYear:0,
//             Endyear:0
// }])
// setcontex({...context,educations:getedu})
// // setcontex({...context,educations:(prev=>[...prev,{
// //              InstituteDetails:'',
// //             Percentage:0,
// //             CourseName:'',
// //             StartYear:0,
// //             Endyear:0
// // }])})
//     // console.log(getedu)
//     // console.log(context)
// }
// useEffect(()=>{
//         setcontex({
//             ...context,
//             educations:getedu
// })
// },[getedu])
// getedu.map((x)=>console.log(x))
// console.log(getedu)
    return(
        <Container>
            <>
            <h2>Education</h2>
        {getedu.map((items,index)=>
          <div>
            <form key={index} >
                <FormDesign> 
                    <div>

                     <div className="grid gap-4 mb-2 md:grid-cols-2">
                        <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="Degree">Degree</label>
                      <input id='Degree' className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  type="text" value={items.Degree} onChange={(e)=>handlechange(e,index)} name="Degree" placeholder="Bachelores/Masters"></input>
                        </div>
                        <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="FieldofStudy/Course">FieldofStudy/Course</label>
                      <input id='FieldofStudy/Course' className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  type="text" value={items.FieldofStudy} onChange={(e)=>handlechange(e,index)} name="FieldofStudy" placeholder="ComputerScience/CSE/ECE"></input>
                        </div>
                        <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="Percentage">Percentage</label>
                       <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" id='Percentage' value={items.Percentage} onChange={(e)=>handlechange(e,index)} name="Percentage"   placeholder="Percentage"></input>
                        </div>
                        <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="InstituteCity">InstituteCity</label>
                       <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" value={items.InstituteCity} id='InstituteCity'  onChange={(e)=>handlechange(e,index)} name="InstituteCity"   placeholder="Hyderabad"></input>
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="InstituteName">InstituteName</label>
                       <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text"   id='InstituteName' value={items.InstituteName}  onChange={(e)=>handlechange(e,index)} name="InstituteName"  placeholder="Xyz College Of Engineering" ></input>
                        </div>
                        <div className="grid gap-4 mb-2 md:grid-cols-2">
                        <div>  
                        <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="From">From</label>
                    <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id='From' value={items.StartYear} type="number" onChange={(e)=>handlechange(e,index)} name="StartYear"   placeholder="Startyear"></input>
                    </div>
                    <div>
                    <label  className="block mb-2 text-sm font-medium text-gray-900"htmlFor="To">To</label>
                    <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" id='To' value={items.Endyear} type="number" onChange={(e)=>handlechange(e,index)} name="Endyear"   placeholder="Endyear"></input>
                    </div>
                    </div>

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
export const FormDesign=styled.div`
    input{
        margin: 5px;
    }
    #institute{
        width: 78%
    }
    margin: 10px;
    /* border: 1px dotted black; */
`
export const Addition=styled.div`
     margin: 1rem 0;
     gap: 1rem;
     display: inline-flex;
     float:right;
     /* display: inline-flex;
     justify-content: right; */
`