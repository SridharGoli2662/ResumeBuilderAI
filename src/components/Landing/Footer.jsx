import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <Main>
        <div className="FooterBox">
          <h2>Features</h2>
          <a>Cured text genrator</a>
          <a>Photo effects</a>
          <a>image enhancher</a>
          <a>Add frames to photo</a>
          <a>Video trimmer</a>
        </div>
        <div className="FooterBox">
          <h2>Explore</h2>
          <a>Cured text genrator</a>
          <a>Photo effects</a>
          <a>image enhancher</a>
          <a>Add frames to photo</a>
          <a>Video trimmer</a>
        </div>
        <div className="FooterBox">
          <h2>Community</h2>
          <a>Cured text genrator</a>
          <a>Photo effects</a>
          <a>image enhancher</a>
          <a>Add frames to photo</a>
          <a>Video trimmer</a>
        </div>
        <div className="FooterBox">
          <h2>Download</h2>
          <a>Cured text genrator</a>
          <a>Photo effects</a>
          <a>image enhancher</a>
          <a>Add frames to photo</a>
          <a>Video trimmer</a>
        </div>
        <div className="FooterBox">
          <h2>About</h2>
          <a>Cured text genrator</a>
          <a>Photo effects</a>
          <a>image enhancher</a>
          <a>Add frames to photo</a>
          <a>Video trimmer</a>
        </div>
      </Main>
      <Main2>
        <div className="FooterCopyRight">
          <p> &copy; 2024 AI Resume Bulider. All rights reserved.</p>
        </div>
      </Main2>
    </>
  );
}
const Main = styled.div`
  display: flex;
  height: 300px;
  color: white;
  background-color: black;
  margin: 0px;
  border-bottom: 2px solid gray;

  .FooterBox {
    text-align: center;
    padding: 10px;
    width: 280px;
    display: flex;
    flex-direction: column;
    a {
      padding: 7px;
    }
  }
`;
const Main2 = styled.div`
  margin: 0px;
  background-color: black;
  color: white;
  .FooterCopyRight {
    text-align: center;
    padding: 10px;
    p {
      margin: 0px;
    }
  }
`;
