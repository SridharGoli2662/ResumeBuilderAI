import { useContext, useEffect, useState } from "react"
import { store} from "./ResumeEdit";
import * as y from "yup"
import { Link, useNavigate } from "react-router-dom";
import { Formik,Form, Field, useFormik, yupToFormErrors, ErrorMessage } from "formik";
import styled from "styled-components";
import { Btns } from "./ResumeEdit";
import { Objective } from "./Objective";
import { flushSync } from "react-dom";
export function UserForm()
{
    const[data,setdata]=useContext(store);
        ({clientaddress:'Hyderabad,Telangana 500020','firstname':'Sridhar','LastName':'Goli', clientmobile:'+(91)8688850926','state':'Telangana'})  
        // const[loc,setloc]=useState();
      const formik=useFormik(
        {
            initialValues:{
                firstname:'Pavan',
                LastName:'Goli',
                clientaddress:'Hyderabad,Telangana 500020',
                clientmobile:'+(91)8688850926',
                Email:'sridharg927@gmail.com',
                LinkedinProfile:'wwww.linkedin.com/in/sridhargoli'
            },
//by assigning true it will update initialvalues through our manual function
            enableReinitialize:true,
            onSubmit:(va)=>{
                alert(JSON.stringify(va))
            },
            validationSchema:y.object({
                "firstname":y.string().required()

            })
        }
      )
        // setdata({...data},formik.values)
      const hanlemanually=(e)=>{
          // console.log(e.target.value),
          const{name,value}=e.target;
          // console.log(value)
          setdata({...data,  
                  [name]:value
                // formik.values
      })
      formik.setFieldValue(name,value)
    //   console.log(data)
    }
    return(
            // <Formik>
            //     <Form onSubmit={formik.handleSubmit}>
            <Container>
                <form >
                        <div className="grid gap-4 mb-2 md:grid-cols-2">
                            <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="firstname">FirstName</label>
                    <input className=" g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" value={data.firstname} name="firstname" onChange={hanlemanually} id='firstname' placeholder="Sridhar" />
                    {/* <ErrorMessage>{formik.errors.firstname}</ErrorMessage> */}
                    <p style={{color:"red"}}>{formik.errors.firstname}</p>
                            </div>
                            <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="LastName">LastName</label>
                    <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.LastName} type="text" name="LastName" onChange={hanlemanually} id='LastName' placeholder="Goli" />
                            </div>
                            <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="City">City</label>
                        <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.clientaddress} type="text" name='City' onChange={hanlemanually} id='City' placeholder="Hyderabad"></input>
                            </div>
                            <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="State">State</label>
                        <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.clientState} type="text" name='State' onChange={hanlemanually} id='State' placeholder="Telangana"></input>
                            </div>
                            <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="mobile">Mobile</label>
                    <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.clientmobile} type="tel" name='clientmobile' onChange={hanlemanually} id='moblie' placeholder="123456789"></input>
                            </div>
                            <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  htmlFor="Email">Email</label>
                    <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"value={data.Email} type="Email" name='Email' onChange={hanlemanually} id='Email' placeholder="xyz@gmail.com"></input>
                            </div>
                           
                        </div>
                    <div style={{display:"flex",flexDirection:'column' }}>
                    {/* <button >Next</button> */}
                   
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="LinkedinProfile">LinkedinProfile</label>
                    <input className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.LinkedinProfile} type="url" name='LinkedinProfile' onChange={hanlemanually} id='Url' placeholder="linkedin.com/in/example-profile"></input>
                          
                    </div>
                    </form> 
                    {/* <Router>
                    <Route path='/ResumeEdit/:id' element={<Objective></Objective>}></Route>
                    </Router> */}
                </Container>
                    // </Form>
            // </Formik>
            
        )
}
// export default UserForm;
export const Container=styled.div`
    width: 37vw;
    padding: 1rem;
    /* border: 2px solid blue; */
    margin: auto auto;
    height: 70vh;
    /* margin: 20vh 10px; */
    /* display: flex;
    justify-content: center; */
`
// export const Btns=styled.div`
//     display: flex;
//     justify-content: space-between;
//     margin: 10px;
// `