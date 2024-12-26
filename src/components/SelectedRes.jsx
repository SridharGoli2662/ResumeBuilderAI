import React from "react";
import { useContext } from "react"
import { store,} from "./ResumeEdit";
import Markdown from "react-markdown";
import { Page, Text as Txtb, View, Document, StyleSheet } from "@react-pdf/renderer";
 function Selectedresumepdf(fonts) {
  const[getter]=useContext(store);
  console.log(getter)
  return (
    <Document>
     <Page style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <Txtb style={[styles.name, { fontFamily: fonts }]}>
            {getter.firstname} {getter.lastname}
          </Txtb>
          {/* <Text style={styles.details}>
            {getter.city}, {getter.state} | {getter.clientmobile} | {getter.email}{" "}
            {getter.linkedinProfile && `| ${getter.linkedinProfile}`}
          </Text> */}
        </View>

        {/* Objective Section */}
        {/* {getter.manualObjective && (
          <View style={styles.section}>
            <Text style={styles.heading}>Objective</Text>
            <Text style={styles.text}>{getter.manualObjective}</Text>
          </View>
        )} */}

        {/* Education Section */}
        {/* {getter.educations?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Education</Text>
            {getter.educations.map((education, index) => (
              <View key={index}>
                <Text style={styles.text}>
                  {education.Degree} - {education.FieldofStudy}
                </Text>
                <Text style={styles.text}>
                  {education.InstituteName}, {education.InstituteCity} | {education.Percentage}%
                </Text>
                <Text style={styles.text}>
                  {education.StartYear} - {education.Endyear}
                </Text>
              </View>
            ))}
          </View>
        )} */}

        {/* Skills Section */}
        {/* {getter.Skills?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Professional Skills</Text>
            <View>
              {getter.Skills.map((skill, index) => (
                <Text key={index} style={styles.text}>
                  {skill.Technologies}: {skill.skill}
                </Text>
              ))}
            </View>
          </View>
        )} */}

        {/* Projects Section */}
        {/* {getter.Projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Projects</Text>
            {getter.Projects.map((project, index) => (
              <View key={index}>
                <Text style={styles.text}>
                  {project.Name} | {project.Link}
                </Text>
                <Text style={styles.text}>{project.Desc}</Text>
                <Text style={styles.text}>
                  Technologies Used: {project.TechnologiesUsed}
                </Text>
              </View>
            ))}
          </View>
        )} */}

        {/* Achievements Section */}
        {/* {getter.Achievements?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Achievements</Text>
            {getter.Achievements.map((achievement, index) => (
              <Text key={index} style={styles.text}>
                {achievement.Achievement}
              </Text>
            ))}
          </View>
        )} */}
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Times-Roman",
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 10,
    marginVertical: 5,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

export default Selectedresumepdf;

