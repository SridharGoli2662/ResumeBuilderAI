import { useFormik } from "formik"
import { useContext, useEffect } from "react"
import { store } from "./ResumeEdit"
import {Container} from './UserDetailsForm'
import { Route, Router } from "react-router-dom";

export function Objective()
{
    const[getter,setter]=useContext(store);
    // const[getter,setter]=useContext(store);
    // getter.map(x=>console.log(x));
    const formdata=useFormik(
        {
            initialValues:{
                'objective':'some initial text here'
            },
            
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
    return(
        <Container>
        <div>
            {/* <Btns>
                <button >Previous</button>
                <button onClick={handleindex}>Next</button>
            </Btns> */}
            <form >
                <textarea rows={10} value={getter.objective} name="objective" cols={30} onChange={handlemanually} placeholder="DescribeObjective"></textarea>
            </form>
            <button>Next</button>
        </div>
        </Container>
    )
}