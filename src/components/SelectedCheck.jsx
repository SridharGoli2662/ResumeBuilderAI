import React, { useContext } from "react";
import { store } from "./ResumeEdit";
import styled from "styled-components";
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import Markdown from "react-markdown";

// pdfMake.vfs = pdfFonts.pdfMake.vfs;
pdfMake.fonts = {
    Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Bold.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-BoldItalic.ttf',
    },
 };

export function dwnld() {
  const content = document.getElementById("done").innerHTML;
  const pdfContent = htmlToPdfmake(content);
  const documentDefinition = {
    content: pdfContent,
    styles: {
      heading: { fontSize: 14, bold: true },
      subHead: { fontSize: 12, bold: true },
      paragraph: { fontSize: 10 },
      list: { fontSize: 10, margin: [0, 5, 0, 5] },
    },
    defaultStyle: {
      font: "Roboto",
    },
  };

  pdfMake.createPdf(documentDefinition).download("Resume.pdf");
}

export function SelectedResumePdf(props) {
  const [getter] = useContext(store);

  return (
    <>
      <Resume id="done" style={{ fontFamily: props.fonts }}>
        <div>
          <div style={{ justifyContent: "center", display: "flex", gap: "10px" }}>
            <h2>
              {getter.firstname ? getter.firstname : ""} {getter.firstname && " "}
            </h2>
            <h2>{getter.LastName || ""}</h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ul style={{ display: "flex", listStyleType: "none", fontSize: "0.7rem", padding: "0px" }}>
              <li>
                {getter.City && `${getter.City},`} {getter.State && `${getter.State} | `}
              </li>
              <li>{getter.clientmobile && `${getter.clientmobile} | `}</li>
              <li>{getter.Email}</li>
              {getter.LinkedinProfile && <li>| {getter.LinkedinProfile}</li>}
            </ul>
          </div>
        </div>

        {getter.manualobjective && (
          <div style={{ lineHeight: "1.3rem" }}>
            <Heading>OBJECTIVE</Heading>
            <hr />
            <p>{getter.manualobjective}</p>
          </div>
        )}

        {getter.educations?.length > 0 && (
          <div>
            <Heading>EDUCATION</Heading>
            <hr />
            {getter.educations.map((education, index) => (
              <div key={index} style={{ lineHeight: "0px", marginTop: "1.5rem" }}>
                <ul style={{ listStyleType: "none", display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <li>
                    {education.Degree} - {education.FieldofStudy}
                  </li>
                  <li>
                    {education.StartYear}-{education.Endyear}
                  </li>
                </ul>
                <ul style={{ listStyleType: "none", display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <li>
                    {education.InstituteName}, {education.InstituteCity}
                  </li>
                  <li>Percentage: {education.Percentage}</li>
                </ul>
              </div>
            ))}
          </div>
        )}

        {getter.Skills?.length > 0 && (
          <div>
            <Heading>PROFESSIONAL SKILLS</Heading>
            <hr />
            <ul style={{ marginLeft: "20px" }}>
              {getter.Skills.map((data, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <SubHead>{data.Technologies}:</SubHead>
                  <span style={{ marginLeft: "10px" }}>{data.skill}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {getter.Projects?.length > 0 && (
          <div>
            <Heading>PROJECTS</Heading>
            <hr />
            {getter.Projects.map((items, index) => (
              <div key={index} style={{ marginBottom: "0.4rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <SubHead>{items.Name}</SubHead>
                  <a href={items.Link}>{items.Link}</a>
                </div>
                <Markdown>{items.Desc}</Markdown>
                <SubHead>Technologies Used: {items.TechnologiesUsed}</SubHead>
              </div>
            ))}
          </div>
        )}
      </Resume>
    </>
  );
}

const Resume = styled.div`
  font-size: 1rem;
  width: 45rem;
  height: 73rem;
  padding: 5mm;
  margin: 0 auto;
  box-shadow: 0 0 30px rgba(32, 32, 32, 0.1);
  li {
    font-size: 1rem;
  }
  ul {
    list-style-type: disc;
  }
  hr {
    margin: 0px;
  }
`;

const Heading = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 0px;
`;

const SubHead = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

export default dwnld;
