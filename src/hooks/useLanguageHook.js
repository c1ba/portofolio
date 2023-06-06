import { ACTION_TYPES, LANGAUAGES, useLanguageCtx } from "../contexts/LanguageContext"

export const useLanguageHook = () => {
    const langCtx = useLanguageCtx();

    const getAboutMeDesccription = () => langCtx.languageData.aboutMe.description;

    const getEducationalBGHeader = () => langCtx.languageData.educationalBG.header;

    const getProjectsHeader = () => langCtx.languageData.projects.header;

    const getAboutMeHeader = () => langCtx.languageData.aboutMe.header;

    const getDiplomasCertificatesHeader = () => langCtx.languageData.educationalBG.diplomasCertificatesHeader;

    const getDiplomasAndCertificates = () => langCtx.languageData.educationalBG.diplomasCertificates;

    const getEducationsHeader = () => langCtx.languageData.educationalBG.educationHeader;

    const getEducation = () => langCtx.languageData.educationalBG.education;

    const getMainSkillsHeader = () => langCtx.languageData.educationalBG.mainSkillsHeader;

    const getSideSkillsHeader = () => langCtx.languageData.educationalBG.sideHustleSkillsHeader;

    const getCurrentLanguage = () => langCtx.languageData.language;

    const setENG = () => {langCtx.dispatchLanguageAction({type: ACTION_TYPES.SET_EN})}

    const setRO = () => {langCtx.dispatchLanguageAction({type: ACTION_TYPES.SET_RO})}

    const handleLanguageSwitch = () => {
        getCurrentLanguage() === LANGAUAGES.RO ? setENG() : setRO();
    }

    return {
        getAboutMeDesccription, 
        getEducationalBGHeader, 
        getDiplomasCertificatesHeader, 
        getEducationsHeader, 
        getMainSkillsHeader, 
        getCurrentLanguage,
        setENG,
        setRO,
        handleLanguageSwitch,
        getProjectsHeader,
        getAboutMeHeader,
        getEducation,
        getDiplomasAndCertificates,
        getSideSkillsHeader
    }
}