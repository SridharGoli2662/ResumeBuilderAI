import React from "react";
import styled from "styled-components";

export default function DirectionToD() {
  return (
    <STD>
      <h1>Steps To Download</h1>
      <div className="StepsNumber">
        <div className="STDimg"></div>
        <div className="STDContant"></div>
      </div>
      <div className="StepsNumber">
        <div className="STDimg"></div>
        <div className="STDContant"></div>
      </div>
      <div className="StepsNumber">
        <div className="STDimg"></div>
        <div className="STDContant"></div>
      </div>
      <div className="StepsNumber">
        <div className="STDimg"></div>
        <div className="STDContant"></div>
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
    justify-content: space-around;
    margin: 2rem;
  }
  .STDimg {
    border: 1px solid black;
    width: 20rem;
    height: 20rem;
  }
  .STDContant {
    border: 1px solid black;
    width: 60rem;
    height: 20rem;
  }
`;
