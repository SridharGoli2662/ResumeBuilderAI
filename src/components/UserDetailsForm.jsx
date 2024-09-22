import { useContext, useEffect, useState } from "react"
import { store} from "./ResumeEdit";
import * as y from "yup"
import { Link } from "react-router-dom";
import { Formik,Form, Field, useFormik, yupToFormErrors, ErrorMessage } from "formik";
import styled from "styled-components";
import { Objective } from "./Objective";
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
                <form>
                    {/* <Btns>
                        <button>Previous</button>
                       <Link to='ResumeEdit/objective'><button onClick={handleroute}>Next</button></Link> 
                       <button onClick={handleindex}>Next</button>
                    </Btns> */}
                    <div style={{display:"flex",flexDirection:'column' }}>
                    <label htmlFor="firstname">FirstName</label>
                    <input type="text" value={data.firstname} name="firstname" onChange={hanlemanually} id='firstname' placeholder="EnterYourFirstName" />
                    {/* <ErrorMessage>{formik.errors.firstname}</ErrorMessage> */}
                    <p style={{color:"red"}}>{formik.errors.firstname}</p>
                    <label htmlFor="LastName">LastName</label>
                    <input value={data.LastName} type="text" name="LastName" onChange={hanlemanually} id='LastName' placeholder="EnterYourLastName" />
                    <label htmlFor="address">Address</label>
                    <input value={data.clientaddress} type="text" name='clientaddress' onChange={hanlemanually} id='address' placeholder="Address "></input>
                    <label htmlFor="mobile">Mobile</label>
                    <input value={data.clientmobile} type="tel" name='clientmobile' onChange={hanlemanually} id='moblie' placeholder="MobileNumber "></input>
                    <label htmlFor="Email">Email</label>
                    <input value={data.Email} type="Email" name='Email' onChange={hanlemanually} id='Email' placeholder="Email "></input>
                    <label htmlFor="LinkedinProfile">LinkedinProfile</label>
                    <input value={data.LinkedinProfile} type="url" name='LinkedinProfile' onChange={hanlemanually} id='Url' placeholder="LinkedinProfile "></input>
                    {/* <button >Next</button> */}
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
    padding: 25px;
    border: 2px solid blue;
    margin: 20vh 10px;
    /* display: flex;
    justify-content: center; */
`
// export const Btns=styled.div`
//     display: flex;
//     justify-content: space-between;
//     margin: 10px;
// `