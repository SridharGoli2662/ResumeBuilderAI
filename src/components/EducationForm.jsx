import { useFormik } from "formik"
import { useContext, useEffect, useState } from "react";
import { store } from "./ResumeEdit";
import { Container } from "./UserDetailsForm";
import styled from "styled-components";
export function EductationForm()
{
    const[context,setcontex]=useContext(store);
    const[getedu,setedu]=useState([
        {
            InstituteDetails:'',
            Percentage:0,
            CourseName:'',
            StartYear:0,
            Endyear:0
        }
    ])
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
    const newEducation = {
        InstituteDetails: '',
        Percentage: 0,
        CourseName: '',
        StartYear: 0,
        Endyear: 0
    };
    const updatedEdu = [...getedu, newEducation];
    setedu(updatedEdu); // Add new education details
    setcontex({ ...context, educations: updatedEdu }); // Update the context
    // console.log(context)
    // console.log(getedu)
}
const deletefields=()=>
{
    // getedu.map((x)=>console.log(x))
    if(getedu.length>1)
    {
        getedu.pop()
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
        {getedu.map((items,index)=>
          
            // console.log(items[index])
            <form key={index} >
                <FormDesign>  
                     <div>
                      <input type="text" value={items.CourseName} onChange={(e)=>handlechange(e,index)} name="CourseName" placeholder="CourseName"></input>
                       <input type="number" value={context.educations?.[index].Percentage} onChange={(e)=>handlechange(e,index)} name="Percentage"   placeholder="Percentage"></input>
                       <input type="text" value={context?.educations?.[index].InstituteDetails} id='institute' onChange={(e)=>handlechange(e,index)} name="InstituteDetails"  placeholder="InstituteDetails" ></input>
                     </div>
                    <div>
                    <input value={context?.educations?.[index].StartYear} type="number" onChange={(e)=>handlechange(e,index)} name="StartYear"   placeholder="StartYear"></input>
                    <input value={context.educations?.[index].Endyear} type="number" onChange={(e)=>handlechange(e,index)} name="Endyear"   placeholder="Endyear"></input>
                    </div>
                    </FormDesign>
            </form>
        )
        }
        <Addition>
            <button onClick={handlefields}>AddEducation</button>
            <button onClick={deletefields}>DeleteEducation</button>
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
    border: 1px dotted black;
`
export const Addition=styled.div`
     text-align: right;
     margin: 5px 8rem;
     /* float:right; */
     /* display: inline-flex;
     justify-content: right; */
`