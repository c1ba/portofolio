import React from 'react'
import { defaultSideBarStyling } from '../common/cssProperties';
import { texts } from '../common/textsAndLinks';
import { useLanguageHook } from '../hooks/useLanguageHook';



const EducationalBackground = () => {

  const {getEducation, getDiplomasAndCertificates, getEducationsHeader, getDiplomasCertificatesHeader, getMainSkillsHeader, getSideSkillsHeader} = useLanguageHook();
  return (
    <div style={{...defaultSideBarStyling, overflowY: "auto"}} className="text_box">
        <div className="content">
        <div className="rubrica" style={{marginTop: '75px'}}>
              <h2>{getDiplomasCertificatesHeader()}</h2>
              {getDiplomasAndCertificates().map((certificateData, index) => <div key={`cert_${index}`}><h3>{`${certificateData.what}`}</h3><h4>{`${certificateData.year}`}</h4></div>)}
           </div>
              <div className="rubrica">
              <h2>{getEducationsHeader()}</h2>
              {getEducation().map((educ, index) => <div key={`edu_${index}`}><h3>{`${educ.where}`}</h3><h4>{`(${educ.startYear} - ${educ.endYear})`}</h4><h4>{educ.forWhat}</h4></div> )}
           </div>
           <div className="rubrica">
            <h2>{getMainSkillsHeader()}</h2>
            {texts.educationalBG.mainSkills.map((skill) => <h4>{skill}</h4>)}
            </div>
            <div className="rubrica">
            <h2>{getSideSkillsHeader()}</h2>
            {texts.educationalBG.sideHustleSkills.map((skill) => <h4>{skill}</h4>)}
         </div>
        </div>
      </div>
        )
}

export default EducationalBackground;