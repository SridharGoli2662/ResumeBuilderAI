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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            expedita magni voluptates? Cum, iure? Minus sequi numquam asperiores
            eius doloremque illum fugit! Possimus, illum nesciunt. Enim sequi
            animi omnis odio? Repellat
          </p>
        </div>
        <div className="BenefitImg">
          <img src="DF.png" alt="  " />
        </div>
        <div className="BenefitContent">
          <h1>Download Free</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            expedita magni voluptates? Cum, iure? Minus sequi numquam asperiores
            eius doloremque illum fugit! Possimus, illum nesciunt. Enim sequi
            animi omnis odio? Repellat
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            expedita magni voluptates? Cum, iure? Minus sequi numquam asperiores
            eius doloremque illum fugit! Possimus, illum nesciunt. Enim sequi
            animi omnis odio? Repellat
          </p>
        </div>
        <div className="BenefitImg">
          <img src="TR.png" alt="  " />
        </div>
        <div className="BenefitContent">
          <h1>Align your resume based on Job Description</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            expedita magni voluptates? Cum, iure? Minus sequi numquam asperiores
            eius doloremque illum fugit! Possimus, illum nesciunt. Enim sequi
            animi omnis odio? Repellat
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
