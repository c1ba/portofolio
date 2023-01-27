import React, { Component } from 'react'
import { defaultSideBarStyling } from '../common/cssProperties';

const mainSkillsList = ["ReactJS", "TypeScript", "Material UI", "jQuery", "HTML/CSS"];
const sideHustleSkills = ["PHP", "ASP.NET", "C++", "Unity", "C#"];
const education = [{where: `"I. L. Caragiale" National College, Bucharest`, forWhat: "Mate-Info" , startYear: "Sep 2016", endYear: "Jun 2020"}, {where: `"Titu Maiorescu" University, Bucharest`, forWhat: "Computer Science" , startYear: "Oct 2020", endYear: "Jul 2023", relevantCertificates: []}];
const certificates = [{what: "Computer Science Certificate - Unity Game", year: "May 2020"}, {what: "Cambridge C1 Advanced Exam", year: "Jul 2019"}, {what: "Oracle Database Design & Programming with SQL", year: "May 2020"}, {what: "Endava Apprenticeship Programme", year: "Dec 2021"}];

export default class EducationalBackground extends Component {
  render() {
    return (
<div style={{...defaultSideBarStyling, overflowY: "auto"}} className="text_box">
    <div className="content">
    <div className="rubrica" style={{marginTop: '75px'}}>
          <h2>DIPLOMAS & CERTIFICATES</h2>
          {certificates.map((certificateData, index) => <div key={`cert_${index}`}><h3>{`${certificateData.what}`}</h3><h4>{`${certificateData.year}`}</h4></div>)}
       </div>
          <div className="rubrica">
          <h2>EDUCATION</h2>
          {education.map((educ, index) => <div key={`edu_${index}`}><h3>{`${educ.where}`}</h3><h4>{`(${educ.startYear} - ${educ.endYear})`}</h4><h4>{educ.forWhat}</h4></div> )}
       </div>
       <div className="rubrica">
        <h2>MAIN SKILLS</h2>
        {mainSkillsList.map((skill) => <h4>{skill}</h4>)}
        </div>
        <div className="rubrica">
        <h2>SIDE SKILLS</h2>
        {sideHustleSkills.map((skill) => <h4>{skill}</h4>)}
     </div>
    </div>
  </div>
    )
  }
}