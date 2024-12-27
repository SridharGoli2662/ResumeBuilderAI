import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      {/* <Main>
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
      </Main> */}
      <div className="bg-slate-700 text-gray-50">
          <div className="mb-4 text-center">
               <p className="mb-0 text-lg">Our Vision Is To</p>
               <p className="font-extrabold text-xl">Empowering you to create your tomorrow.</p>
               <hr className="w-36 mx-auto h-2 bg-green-100 rounded "/>
          </div>
        <div  className='p-2 text-center'>
          <p> &copy; 2024 AI Resume Bulider. All rights reserved.</p>
        </div>
      </div>
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
