import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
const sections = [
  { id: 1, title: "Step1.Click ON GetStarted Button", image:"./steps/1.png",desc: "After Clicking You will Navigate to our ResumeBuilder Editing Process Please fill the forms with Accurate details" },
  { id:2, title: "Step2.Navigate Through Next and Previous Button", image:"./steps/2.png",desc:' You can Navigate to Next and Previous Forms By clicking   Next and Previous Butttons as Provided at Top of Forms' },
  { id: 3, title: "Step3.Click ON Yes If You Want To Genterate AI Content", image:"./steps/3.png",desc:' If You are Focusing for a Perticular Job then  Click on Yes To Genarate AI Based OBJECTIVE and Relavent KEYWORDS based on JobDescription ' },
  { id: 4, title: "Step4.Provide Relevent Jobdescription And Your Experience Level", image:"./steps/4.png", desc:'  Select your Exprerience Level and Provide job Title and Description to generate AI Content' }
  ,{ id: 5, title: "Step5.Click ON Download Button And Save Your Resume", image:"./steps/5.png", desc:'  After Filling All details Now your Resume is ready to Download this can be done By clicking Download Button at top of the Page' }

];

const Direc = () => {
  const [currentImage, setCurrentImage] = useState(sections[0].image);
  const sectionRefs = useRef([]);
  // const sectionRefs = useState([]);

// console.log(sectionRefs)
  const handleScroll = () => {
    sectionRefs.current.forEach((section, i) => {
      // console.log(section.getBoundingClientRect())
      const rect = section.getBoundingClientRect();
      if (rect.top < 264 && rect.bottom > 264) {
        setCurrentImage(sections[i].image);
      }
    });
  };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div>

    
      <h1>Steps To Download</h1>
    <Container >
      <div className="stickyimage">
        <img src={currentImage} alt="Sticky" />
        {/* <h2>{currentImage}</h2> */}
      </div>
      <div className="content" onScroll={handleScroll}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="section"
            ref={(el) => {(sectionRefs.current[index] = el
                         )
                        //  console.log(el)
                        }}
          >
            <h2>{section.title}</h2>
            <p>
             {section.desc}
            </p>
          </div>
        ))}
      </div>
    </Container>
    </div>
  );
};
const Container=styled.div`

  display: flex;
  height: 90vh;
  align-items: center;
  /* width: 80vw; */
  /* gap: 5vw; */
  justify-content: center;
  /* align-items: center; */
  margin: auto;
.stickyimage {
  position: sticky;
  /* top: 20px; */
  width: 40%;
  /* flex: 1; */
  height:70%;
}

.stickyimage img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.content {
  /* flex: 2; */
  /* margin-left: 20px; */
  /* margin: auto; */
  height: 50%;
  width: 50%;
  overflow-y: scroll;
  /* width: 20vw;
  ::-webkit-scrollbar{
    width: 2vw;
  }
  ::-webkit-scrollbar-track{
    border-radius: 30px;
  } */

}

.section {
  height:100%;
  padding: 20px;
  text-align: center;
  margin: auto;
}

`
export default Direc;
