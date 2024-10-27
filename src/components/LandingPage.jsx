import { flushSync } from "react-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import { BenifitsCompo } from "./BenifitsCompo";
// import { Footer, Benefit, DirectionToD } from "Landing/Footer";
// import Footer from "LandingPage/Footer";
import Footer from "./Landing/Footer";
import Benefit from "./Landing/Benefit";
import DirectionToD from "./Landing/DirectionToD";
export function LandingPage() {
  return (
    <>
      <Landing style={{}}>
        <div>
          <h1>Logo</h1>
        </div>
        <div style={{ alignContent: "center" }}>
          <ul>
            <li>Resume</li>
            <li>CoverLetter</li>
          </ul>
        </div>
        <div style={{ alignContent: "center", margin: "20px" }}>
          <button>SignIn</button>
        </div>
      </Landing>
      <DemoPiece>
        <div>
          <h2>Tired of Applying jobs </h2>
          <h3>Don't Worry We Are Here to Help You</h3>
          <div
            style={{
              background: "green",
              display: "flex",
              justifyContent: "right",
              margin: "10px",
              padding: "5px",
              borderRadius: "2px",
            }}
          >
            <Link to={"/ResumeEdit"}>
              <button>GetStarted</button>
            </Link>
          </div>
        </div>

        <div>
          <img style={{ width: "10rem" }} src="DemoPiece.jpg"></img>
        </div>
      </DemoPiece>
      <Benefit></Benefit>
      <DirectionToD></DirectionToD>
      {/* <BenifitsCompo></BenifitsCompo> */}
      <Footer></Footer>
    </>
  );
}
const Landing = styled.div`
  display: flex;
  background-color: burlywood;
  justify-content: space-between;
  /* margin: 5px; */
  ul {
    list-style: none;
    display: flex;
    gap: 10px;
  }
`;
const DemoPiece = styled.div`
  width: 50vw;
  margin: 5rem auto;
  display: flex;
  gap: 4rem;
  /* height: 60vh; */
  img {
    width: 20vw;
    border: 2px solid black;
  }
`;
