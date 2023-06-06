import { forwardIcons, texts } from "../common/textsAndLinks"
import { useLanguageHook } from "../hooks/useLanguageHook"
import { Icon } from "./Icon"

const contactCol={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'bottom',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    position: 'absolute',
    bottom: '0',
    zIndex: '1'
  }
  
  const contactRow={
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '25%'
  }

export const BottomHeader = () => {
  const {handleLanguageSwitch, getCurrentLanguage} = useLanguageHook();
  return <div style={contactCol}>
    <h2 onClick={handleLanguageSwitch} style={{cursor: 'pointer'}}>{getCurrentLanguage()}</h2>
  <h2 style={{textAlign: 'center'}}>{texts.email}</h2>
  <div style={contactRow}>
    {forwardIcons.map((iconData, index) => <Icon altText={`icon_${index}`} key={`icon_${index}`} imageSource={iconData.imageSource} link={iconData.link} />)}
  </div>
  </div>
}