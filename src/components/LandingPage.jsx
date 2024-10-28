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
import { TypeAnimation } from "react-type-animation";
import Frequently from "./Landing/Faq";
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
        <div className="left">
          <div>
            <h1>AI RESUME BUILDER</h1>
            <h5>
              Start building your future today with our AI-driven approach!
            </h5>
          </div>
          <div style={{ marginTop: "5rem" }}>
            <TypeAnimation
              sequence={[
                "Tired of Applying jobs", // First sentence
                2000, // Pause for 2 seconds
                "Don't Worry We Are Here to Help You", // Second sentence
                2000, // Pause for 2 seconds
                "Craft Your Resume Based on Job Description",
                2000,
                // 'Land Your Dream Job',          // Third sentence
                // 2000,                          // Pause for 2 seconds
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", color: "#333", marginBottom: "1.5rem" }}
            ></TypeAnimation>

            {/* <h4>Tired of Applying jobs </h4>
          <h4>Don't Worry We Are Here to Help You</h4>
           <h2>Carft your Ai Resume</h2> */}

            <Link to={"/ResumeEdit"}>
              <button className="px-5 py-2.5 text-lg font-medium text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 w-60 rounded-lg text-center">
                GetStarted
              </button>
            </Link>
          </div>
        </div>
        <div className="demopic">
          <img src="DemoPiece.jpg"></img>
        </div>
      </DemoPiece>

      <Benefit></Benefit>
      <DirectionToD></DirectionToD>
      <Frequently></Frequently>
      <Footer></Footer>
    </>
  );
}
const Landing = styled.div`
  display: flex;
  background-color: burlywood;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;

  /* margin: 5px; */
  ul {
    list-style: none;
    display: flex;
    gap: 10px;
  }
`;
const DemoPiece = styled.div`
  margin: 6rem auto;
  h1 {
    background-image: linear-gradient(
      43deg,
      #f40d0d 0%,
      #b63aae 46%,
      #ffcc70 100%
    );
    -webkit-background-clip: text;
    color: transparent;
  }
  font-family: "DM Serif Text", serif;
  font-weight: 400;
  font-style: normal;
  display: flex;
  gap: 4rem;
  justify-content: center;
  /* height: 60vh; */
  img {
    max-width: 100%;
    max-height: 100%;
    margin: auto auto;
    /* border: 2px solid black; */
  }
  .demopic {
    width: 21rem;
    border: 2px solid black;
  }
  .left {
    width: 50vw;
    text-align: center;
    h5 {
      font-weight: bold;
      font-style: italic;
    }
  }
`;
