import React from "react";
import styled from "styled-components";

export default function DirectionToD() {
  return (
    <STD>
      <h1>Steps To Download</h1>
      <div className="StepsNumber">
        <div className="STDimg">
          <img src="steps/1.png" alt="steps_image" />
        </div>
        <div className="STDContant">
          <h4>Step1.Click ON GetStarted Button</h4>
          <p>
           After Clicking You will Navigate to our ResumeBuilder Editing Process Please fill the forms with Accurate details 
          </p>
        </div>
      </div>
      <div className="StepsNumber">
        <div className="STDimg">
          <img src="steps/2.png" alt="" />
        </div>
        <div className="STDContant">
          <h4>Step2.Navigate Through Next and Previous Button</h4>
          <p>
            You can Navigate to Next and Previous Forms By clicking   Next and Previous Butttons as Provided at Top of Forms
          </p>
        </div>
      </div>
      <div className="StepsNumber">
        <div className="STDimg">
          <img src="steps/3.png" alt="" />
        </div>
        <div className="STDContant">
          <h4>Step3.Click ON Yes If You Want To Genterate AI Content</h4>
          <p>
            If You are Focusing for a Perticular Job then  Click on Yes To Genarate AI Based OBJECTIVE and Relavent KEYWORDS based on JobDescription 
          </p>
        </div>
      </div>
      <div className="StepsNumber">
        <div className="STDimg">
          <img src="steps/4.png" alt="" />
        </div>
        <div className="STDContant">
          <h4>
            Step4.Provide Relevent Jobdescription And Your Experience Level
          </h4>
          <p>
             Select your Exprerience Level and Provide job Title and Description to generate AI Content
          </p>
        </div>
      </div>
      <div className="StepsNumber">
        <div className="STDimg">
          <img src="steps/5.png" alt="" />
        </div>
        <div className="STDContant">
          <h4>Step5.Click ON Download Button And Save Your Resume</h4>
          <p>
            After Filling All details Now your Resume is ready to Download this can be done By clicking Download Button at top of the Page
          </p>
        </div>
      </div>
    </STD>
  );
}
const STD = styled.div`
  h1 {
    text-align: center;
  }
  .StepsNumber {
    display: flex;
    justify-content: center;
    margin: 2rem;
    gap: 3rem;
  }
  .STDimg {
    border: 1px solid black;
    width: 30vw;
    height: 35vh;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .STDimg:hover {
    border: 1px solid black;
    width: 36vw;
    height: 42vh;
    // cursor: pointer;
  }
  .STDContant {
    width: 40vw;
    text-align: center;
    padding: 1rem;
    /* height: 20rem; */
  }
`;
