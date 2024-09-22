import { flushSync } from "react-dom"
import styled from "styled-components"
import { Link } from "react-router-dom"
export function LandingPage()
{
    return(
        <>
    
    <Landing style={{}}>
        <div>
            <h1>Logo</h1>
        </div>
        <div style={{alignContent:'center'}}>
            <ul>
                <li>
                    Resume
                </li>
                <li>CoverLetter</li>
            </ul>
        </div>
         <div style={{alignContent:'center',margin:'20px'}}>
            <button >SignIn</button>
         </div>
    </Landing>
    <DemoPiece>
            <div>
                <img src="DemoPiece.jpg"></img>
            </div>
            <div>
                <h2>Tired of Applying jobs  </h2>
                 <h3>Don't Worry We Are Here to Help You</h3>
                <div style={{display:'flex', justifyContent:'right',margin:'10px'}}>
                        <Link to={'/ResumeEdit'}><button >GetStarted</button></Link>
                </div>
            </div>
    </DemoPiece>
    </>
    )
}
const Landing=styled.div`
    display: flex;
    background-color: burlywood;
    justify-content: space-between;
    /* margin: 5px; */
    ul{
        list-style: none;
        display: flex;
        gap: 10px;
    }  
`
const DemoPiece=styled.div`
    width: 50vw;
    margin: 20px auto ;
    display: flex;
    gap: 20px;
    border: 2px solid red;
    height: 60vh;
    img{
        width: 20vw;
        border: 2px solid black;
       
    }
`