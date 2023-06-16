import GitHubIcon from "../../img/GitHubIcon.png" 
import LinkedInIcon from "../../img/LinkedInIcon.png"
import CVIcon from "../../img/CVIcon.png"
import utilStyles from "../../styles/utils.module.css"

function Icons({currentLocale}) {
    
    let data = currentLocale === "en" ? "/pdf/CV_en.pdf" : "/pdf/Lebenslauf_de.pdf"
    let downloadFileName = currentLocale === "en" ? "CV_Ryohei Hara" : "Lebenslauf_Ryohei Hara"
    
    return (
        <div className={`${utilStyles.iconsWrapper}`}>
            <a href="https://github.com/ryochinzoo" alt="GitHub" className={`mouseOverEfct`} rel="noopener noreferrer" target="_blank"><img src={GitHubIcon} alt="GitHubIcon" /></a>
            <a href="https://www.linkedin.com/in/ryohei-hara-6b160553/" alt="LinkedIn" className={`mouseOverEfct`} rel="noopener noreferrer" target="_blank"><img src={LinkedInIcon} alt="LinkedInIcon" /></a>
            <a href={data} download={downloadFileName} alt="CV" className={`mouseOverEfct`}><img src={CVIcon} alt="CVIcon" /></a>
        </div>
    )
}

export default Icons