import React from "react";
import styled from "styled-components";

export default function Benefit() {
  return (
    <BenefitStyle>
      <div className="BenefitBox">
        <div className="BenefitImg">
          <img src="ATS F.png" alt="  " />
        </div>
        <div className="BenefitContent">
          <h1>ATS Friendly</h1>
          <p>
          Ensure your resume is optimized to pass through Applicant Tracking Systems (ATS) effortlessly. Our AI Resume Builder follows best practices for formatting, keywords, and layout to increase your chances of getting noticed by recruiters and landing an interview.
          </p>
        </div>
        <div className="BenefitImg">
          <img src="DF.png" alt="  " />
        </div>
        <div className="BenefitContent">
          <h1>Download Free</h1>
          <p>
          Get your polished, professional resume with no hidden costs. Once your resume is ready, download it in multiple formats, including PDF, at absolutely no charge.
          </p>
        </div>
      </div>
      <div className="BenefitBox">
        <div className="BenefitImg">
          <img src="FC.png" alt="  " />
        </div>
        <div className="BenefitContent">
          <h1>Customizable Fonts</h1>
          <p>
          Make your resume uniquely yours by selecting from a variety of font styles. Customizable fonts allow you to personalize your resume’s look, helping you stand out while maintaining a professional appearance.
          </p>
        </div>
        <div className="BenefitImg">
          <img src="TR.png" alt="  " />
        </div>
        <div className="BenefitContent">
          <h1>Align your resume based on Job Description</h1>
          <p>
          Tailor your resume to match specific job descriptions. Our AI tool analyzes job requirements and suggests relevant keywords, skills, and project highlights, so you can align your profile closely with what employers are looking for.
          </p>
        </div>
      </div>
    </BenefitStyle>
  );
}
const BenefitStyle = styled.div`
  .BenefitBox {
    display: flex;
    justify-content: space-evenly;
    margin: 50px;
    h1 {
      text-align: center;
    }
  }
  .BenefitImg {
    width: 8rem;
    height: 8rem;
    // border: 2px solid black;
  }
  .BenefitContent {
    font-family: Times New Roman;
    width: 30rem;
    height: 15rem;
    // border: 2px solid black;
  }
`;
