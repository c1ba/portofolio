import { useEffect, useLayoutEffect, useState } from "react"
import { calculateRandom } from "../common/mathFunctions";
import { desktopButtonDefaultProperties } from "../common/cssProperties";

export const useResponsivePropertiesHook = () =>  {

    const minWidth = 500, minHeight = 250;

    const [projectsCSSPosition, setProjectCSSPosition] = useState({left: 0, top: 0});
    const [educationalBGCSSPosition, setEducationalBGCSSPosition] = useState({left: 0, top: 0});
    const [aboutMeCSSPosition, setAboutMeCSSPosition] = useState({left: 0, top: 0});

    const handleInitialPositionAdjustment = () => {
        if (!(window.innerWidth >= 933)) {
            setProjectCSSPosition({textDecoration: 'none'});
            setEducationalBGCSSPosition({textDecoration: 'none'});
            setAboutMeCSSPosition({textDecoration: 'none'});

            return;
        }

        const maxHeight = window.innerHeight - 150, maxWidth = window.innerWidth - 150;

        setProjectCSSPosition({...desktopButtonDefaultProperties, left: calculateRandom(minWidth, maxWidth), top: calculateRandom(minHeight, maxHeight)});
        setEducationalBGCSSPosition({...desktopButtonDefaultProperties, left: calculateRandom(minWidth, maxWidth), top: calculateRandom(minHeight, maxHeight)});
        setAboutMeCSSPosition({...desktopButtonDefaultProperties, left: calculateRandom(minWidth, maxWidth), top: calculateRandom(minHeight, maxHeight)});
    }

    useLayoutEffect(() => {
        handleInitialPositionAdjustment();
    }, []);

    

    useEffect(() => {
        const handlePositionAdjustment = () => {
            if (!(window.innerWidth >= 933)) {
                setProjectCSSPosition({textDecoration: 'none'});
                setEducationalBGCSSPosition({textDecoration: 'none'});
                setAboutMeCSSPosition({textDecoration: 'none'});
                
                return;
            }
            
            const maxHeight = window.innerHeight - 150, maxWidth = window.innerWidth - 150;
    
            if (projectsCSSPosition.top >= maxHeight || projectsCSSPosition.left >= maxWidth) {
                setProjectCSSPosition({...desktopButtonDefaultProperties, left: calculateRandom(minWidth, maxWidth), top: calculateRandom(minHeight, maxHeight)});
            }
    
            if (educationalBGCSSPosition.top >= maxHeight || educationalBGCSSPosition.left >= maxWidth) {
                setEducationalBGCSSPosition({...desktopButtonDefaultProperties, left: calculateRandom(minWidth, maxWidth), top: calculateRandom(minHeight, maxHeight)});
            }
    
            if (aboutMeCSSPosition.top >= maxHeight || aboutMeCSSPosition.left >= maxWidth) {
                setAboutMeCSSPosition({...desktopButtonDefaultProperties, left: calculateRandom(minWidth, maxWidth), top: calculateRandom(minHeight, maxHeight)});
            }
    
        }
        window.addEventListener("resize", handlePositionAdjustment);
        return () => {
            window.removeEventListener("resize", handlePositionAdjustment)
        }
    }, [projectsCSSPosition, aboutMeCSSPosition, educationalBGCSSPosition]);

    return {projectsCSSPosition, educationalBGCSSPosition, aboutMeCSSPosition};
    
}