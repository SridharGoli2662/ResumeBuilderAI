import { useFormik } from "formik"
import { useContext, useEffect, useState } from "react"
import { store } from "./ResumeEdit"
import {Container} from './UserDetailsForm'
import { Btns } from "./ResumeEdit"
import { Route, Router,Link} from "react-router-dom";
import { AiGenerator } from "./AiContent"

export function Objective()
{
    const[getter,setter]=useContext(store);
    // const[getter,setter]=useContext(store);
    // getter.map(x=>console.log(x));
    const formdata=useFormik(
        {
            initialValues:{'manualobjective':'some initial text here'}, 
        }
    )
    const handlemanually=(e)=>{
        // console.log(e.target.value),
        const{name,value}=e.target;
        // console.log(value)
        setter({
            ...getter,
            [name]:value
          });
          formdata.handleChange(e)
        //   console.log(getter)
      }
    //  const[index,setindex]=useContext(store)
     function handleindex(e)
     {
        e.preventDefault();
        setindex(index+1)
     }
     const[get,set]=useState(true)
     function ai()
     {
        //  proper('block')
         set(!get)
     }
     //Aicomponent
    //  const[getai,setai]=useState(false);
     function setpop()
     {
        // setai(true);
        setter({...getter,popup:true})
     }
    return(
        <Container>
        <div>
        <h2>Carrier Objective</h2>
            {/* {getai&&(<AiGenerator></AiGenerator>)} */}
            <form  >
                <textarea  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" rows={10} value={getter.manualobjective} name="manualobjective" cols={30} onChange={handlemanually} placeholder="DescribeObjective"></textarea>
            </form>
            {
                get ?(
                    <div className="d-flex gap-3 m-5">
                    <p className="my-auto text-lg">Show AI Generated Content</p>
                    <button onClick={ai} className="bg-green-500 px-3 py-2.5 text-m font-medium text-white hover:bg-green-700  focus:ring-4 focus:outline-none focus:ring-black-300 rounded-lg text-center">ClickHere</button>
                </div>
                ):(
            <div className="m-auto my-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                <div>
                    <div className="text-right">
                    <button  onClick={ai} ><svg  className="w-[33px] h-[33px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
</svg></button>
                        </div>
                        {
                            getter.AIContent?.keywords&&(
                      <div>
                    <p  className="text-xl font-bold">KeyWords:</p>
                    {/* <p className="text-m font-semibold">{getter.keywords}</p> */}
                    <ul>
                    {
                       getter.AIContent.keywords?.map((x,index)=>
                            <li key={index}>{x}</li>
                            // console.log(x)
                        )
                    }
                    </ul>
                        </div>
                            )
                        }
                </div>
                {
                    getter.AIContent?.objective?(
                <div>
                    <p className="text-xl font-bold">Objective:</p>
                    <p className="text-m font-semibold">{getter.AIContent.objective}</p>
                </div>  
                    ):(
                        <div>
                            <p>No Content Is Generated</p>
                            <h3>Do You Really Want AI Content?</h3>
                            <button onClick={setpop} className="bg-green-500 px-3 py-2.5 text-m font-medium text-white hover:bg-green-700  focus:ring-4 focus:outline-none focus:ring-black-300 rounded-lg text-center">AI</button>
                            </div>
                    )
                }
            </div>
                )
            }
        </div>
        </Container>
    )
}