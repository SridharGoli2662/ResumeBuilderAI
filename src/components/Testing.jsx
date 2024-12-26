import React, { useContext } from "react";
import { store } from "./ResumeEdit"; // Your Context API store
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// pdfMake.vfs = pdfFonts.pdfMake.vfs; // Set up the virtual font system for pdfMake
// pdfMake.fonts = {
//     Roboto: {
//         normal: 'Roboto-Regular.ttf',
//         bold: 'Roboto-Bold.ttf',
//         italics: 'Roboto-Italic.ttf',
//         bolditalics: 'Roboto-BoldItalic.ttf',
//     },
//  };
export function downloadPDF(getter) {
  // Construct the documentDefinition dynamically using context data
  const docDefinition = {
    content: [
      {
        text: `${getter.firstname || ""} ${getter.LastName || ""}`,
        style: "header",
      },
      {
        text: `${getter.City || ""}${getter.State ? `, ${getter.State}` : ""} | ${
          getter.clientmobile || ""
        } | ${getter.Email || ""}`,
        style: "subheader",
      },
      {
        text: "OBJECTIVE",
        style: "sectionTitle",
      },
      {
        text: getter.manualobjective || "No objective provided.",
        style: "paragraph",
      },
      {
        text: "EDUCATION",
        style: "sectionTitle",
      },
      {
        ul: getter.educations?.length
          ? getter.educations.map((edu) => [
              {
                text: `${edu.Degree} - ${edu.FieldofStudy}`,
                style: "listItem",
              },
              {
                text: `${edu.InstituteName}, ${edu.InstituteCity}`,
                style: "listItem",
              },
              {
                text: `Years: ${edu.StartYear} - ${edu.Endyear}, Percentage: ${
                  edu.Percentage || "N/A"
                }`,
                style: "listItem",
              },
            ])
          : ["No education details provided."],
      },
      {
        text: "PROFESSIONAL SKILLS",
        style: "sectionTitle",
      },
      {
        ul: getter.Skills?.length
          ? getter.Skills.map(
              (skill) => `${skill.Technologies}: ${skill.skill || "N/A"}`
            )
          : ["No skills provided."],
      },
      {
        text: "PROJECTS",
        style: "sectionTitle",
      },
      {
        ul: getter.Projects?.length
          ? getter.Projects.map(
              (project) =>
                `${project.Name} - ${project.Link || "No link provided."}\n${
                  project.Desc || "No description provided."
                }\nTechnologies Used: ${project.TechnologiesUsed || "N/A"}`
            )
          : ["No projects provided."],
      },
    ],
    styles: {
      header: {
        fontSize: 20,
        bold: true,
        alignment: "center",
        margin: [0, 10, 0, 10],
      },
      subheader: {
        fontSize: 12,
        italics: true,
        alignment: "center",
        margin: [0, 5, 0, 10],
      },
      sectionTitle: {
        fontSize: 16,
        bold: true,
        margin: [0, 15, 0, 5],
      },
      paragraph: {
        fontSize: 12,
        margin: [0, 5, 0, 10],
      },
      listItem: {
        fontSize: 12,
        margin: [0, 2, 0, 2],
      },
    },
  };

  // Generate and download the PDF
  pdfMake.createPdf(docDefinition).download("Resume.pdf");
// console.log(docDefinition)
}

export function Test(props) {
  const [getter] = useContext(store); // Access the context data

  return (
    <div>
      <div id="resume-preview" style={{ padding: "10px", fontFamily: props.fonts }}>
        <h2>
          {getter.firstname} {getter.LastName}
        </h2>
        <p>
          {getter.City}, {getter.State} | {getter.clientmobile} | {getter.Email}
        </p>
        <h3>OBJECTIVE</h3>
        <p>{getter.manualobjective || "No objective provided."}</p>
        <h3>EDUCATION</h3>
        {getter.educations?.length ? (
          <ul>
            {getter.educations.map((edu, index) => (
              <li key={index}>
                {edu.Degree} - {edu.FieldofStudy} at {edu.InstituteName},{" "}
                {edu.InstituteCity} ({edu.StartYear}-{edu.Endyear}) -{" "}
                {edu.Percentage || "N/A"}%
              </li>
            ))}
          </ul>
        ) : (
          <p>No education details provided.</p>
        )}
        <h3>PROFESSIONAL SKILLS</h3>
        {getter.Skills?.length ? (
          <ul>
            {getter.Skills.map((skill, index) => (
              <li key={index}>
                {skill.Technologies}: {skill.skill || "N/A"}
              </li>
            ))}
          </ul>
        ) : (
          <p>No skills provided.</p>
        )}
        <h3>PROJECTS</h3>
        {getter.Projects?.length ? (
          <ul>
            {getter.Projects.map((project, index) => (
              <li key={index}>
                {project.Name} ({project.Link || "No link provided."}):{" "}
                {project.Desc || "No description provided."} - Technologies Used:{" "}
                {project.TechnologiesUsed || "N/A"}
              </li>
            ))}
          </ul>
        ) : (
          <p>No projects provided.</p>
        )}
      </div>

      {/* Download Button */}
      <button onClick={() => downloadPDF(getter)}>Download Resume</button>
    </div>
  );
}

export default Test;
