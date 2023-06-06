import { createContext, useContext, useReducer } from "react";
import { texts } from "../common/textsAndLinks";

export const LANGAUAGES = {
    EN: 'EN',
    RO: 'RO'
}

export const ACTION_TYPES = {
    SET_EN: 'SET_EN',
    SET_RO: 'SET_RO'
}

const initialState = {
    language: LANGAUAGES.EN,
    aboutMe: {
        description: texts.aboutMe.english,
        header: texts.aboutMe.header.english
    },
    educationalBG: {
        header: texts.educationalBG.header.english,
        diplomasCertificatesHeader: texts.educationalBG.diplomasCertificatesHeader.english,
        educationHeader: texts.educationalBG.educationHeader.english,
        mainSkillsHeader: texts.educationalBG.mainSkillsHeader.english,
        diplomasCertificates: texts.educationalBG.certificates.english,
        education: texts.educationalBG.education.english,
        sideSkillsHeader: texts.educationalBG.sideHustleSkillsHeader.english
    },
    projects: {
        header: texts.projects.header.english
    }
}

const languageReducer = (languageData, action) => {
    switch(action.type) {
        case ACTION_TYPES.SET_EN: 
        return {
            ...languageData,
            language: LANGAUAGES.EN,
            aboutMe: {
                description: texts.aboutMe.english,
                header: texts.aboutMe.header.english
            },
            educationalBG: {
                header: texts.educationalBG.header.english,
                diplomasCertificatesHeader: texts.educationalBG.diplomasCertificatesHeader.english,
                educationHeader: texts.educationalBG.educationHeader.english,
                mainSkillsHeader: texts.educationalBG.mainSkillsHeader.english,
                certificates: texts.educationalBG.certificates.english,
                education: texts.educationalBG.education.english,
                sideSkillsHeader: texts.educationalBG.sideHustleSkillsHeader.english
            },
            projects: {
                header: texts.projects.header.english
            }
        };
        case ACTION_TYPES.SET_RO: 
        return {
            ...languageData,
            language: LANGAUAGES.RO,
            aboutMe: {
                description: texts.aboutMe.romanian,
                header: texts.aboutMe.header.romanian
            },
            educationalBG: {
                header: texts.educationalBG.header.romanian,
                diplomasCertificatesHeader: texts.educationalBG.diplomasCertificatesHeader.romanian,
                educationHeader: texts.educationalBG.educationHeader.romanian,
                mainSkillsHeader: texts.educationalBG.mainSkillsHeader.romanian,
                certificates: texts.educationalBG.certificates.romanian,
                education: texts.educationalBG.education.romanian,
                sideSkillsHeader: texts.educationalBG.sideHustleSkillsHeader.romanian
            },
            projects: {
                header: texts.projects.header.romanian
            }
        };
        default: {
            throw Error('Unknown action: ' + action.type);
          }
    }
    
}


export const LanguageContext = createContext(null);

export const useLanguageCtx = () => useContext(LanguageContext);

export const LanguageProvider = ({children}) => {
    const [languageData, dispatchLanguageAction] = useReducer(languageReducer, initialState);
    return <LanguageContext.Provider value={{languageData, dispatchLanguageAction}}>
        {children}
    </LanguageContext.Provider>
}