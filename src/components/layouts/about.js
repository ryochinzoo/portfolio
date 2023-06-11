import React from "react"
import utilStyles from "../../styles/utils.module.css"
import aboutStyles from "../../styles/about.module.css"
import SkillsIcon from "../../img/SkillsIcon.png"
import EducationIcon from "../../img/EducationIcon.png"
import { useInView } from "react-intersection-observer"
import { withNamespaces } from 'react-i18next'

function About ({ t }) {
    const { ref: headline, inView: headlineVisible } = useInView({threshold: 0.5, triggerOnce: true})
    const { ref: profile, inView: profileVisible } = useInView({rootMargin: "-50px",threshold: 0.8, triggerOnce: true})
    const { ref: skillEdu, inView: skillEduVisible } = useInView({rootMargin: "20px",threshold: 0.8, triggerOnce: true})

    //Skillsは2023年現在のデータ。毎年更新。

    return (
        <section className={`${utilStyles.posRelative}`}>
            <div className={`${utilStyles.sectionWrapper}`}>
                <div ref={headline} className={`${utilStyles.contentsHeadline} ${utilStyles.colorGreen} ${headlineVisible ? utilStyles.headlineAfter : ""}`}>{t("ui.labels.about")}</div>
                <div className={`${aboutStyles.aboutContentsWrapper}`}>
                    <div ref={profile} className={`${aboutStyles.aboutOverview} ${profileVisible ? utilStyles.fadeUp : ""}`}>
                        <div className={`${aboutStyles.profilWrapper}`}>
                            <div><span className={`${utilStyles.colorBlue}`}>Name</span>: Ryohei Hara</div>
                            <div><span className={`${utilStyles.colorBlue}`}>{t("top.about.nationality")}</span>: Japan</div>
                            <div><span className={`${utilStyles.colorBlue}`}>{t("top.about.residence")}</span>: Berlin, {t("top.about.germany")}</div>
                        </div>
                        <div className={`${aboutStyles.profileSummary}`}>
                            {t("top.about.summary")}
                        </div>
                    </div>
                    <div ref={skillEdu} className={`${aboutStyles.aboutSkillEduFlexWrapper}`}>
                        <div className={`${aboutStyles.subContentsWrapper}`}>
                            <div className={`${aboutStyles.subHeadlineWrapper} ${skillEduVisible ? utilStyles.fadeUp : ""} ${skillEduVisible ? utilStyles.animation01 : ""}`}>
                                <img className={`${aboutStyles.subHeadlineIcon}`} src={SkillsIcon} alt="SkillsIcon" />
                                <div className={`${aboutStyles.subHeadline} ${utilStyles.colorBlue}`}>{t("top.about.skills")}</div>
                            </div>
                            <ul className={`${aboutStyles.list} ${skillEduVisible ? utilStyles.fadeUp : ""} ${skillEduVisible ? utilStyles.animation02 : ""}`}>
                                <li className={`${aboutStyles.listedContents}`}>
                                    <span className={`${aboutStyles.boldTitle}`}>HTML/CSS/Javascript</span> (11 {t("top.about.years")})
                                </li>
                                <li className={`${aboutStyles.listedContents}`}>
                                    <span className={`${aboutStyles.boldTitle}`}>React.js/Next.js</span> (1 {t("top.about.year")})
                                </li>
                                <li className={`${aboutStyles.listedContents}`}>
                                    <span className={`${aboutStyles.boldTitle}`}>Wordpress, PHP</span> (6 {t("top.about.years")})
                                </li>
                                <li className={`${aboutStyles.listedContents}`}>
                                    <span className={`${aboutStyles.boldTitle}`}>Photoshop, Illustrator</span> (10 {t("top.about.years")})
                                </li>
                                <li className={`${aboutStyles.listedContents}`}>
                                    <span className={`${aboutStyles.boldTitle}`}>Python</span> (1 {t("top.about.year")})
                                </li>
                                <li className={`${aboutStyles.listedContents}`}>
                                    <span className={`${aboutStyles.boldTitle}`}>Node.js</span> (2 {t("top.about.years")})
                                </li>
                                <li className={`${aboutStyles.listedContents}`}>
                                    <span className={`${aboutStyles.boldTitle}`}>Git</span> (5 {t("top.about.years")})
                                </li>
                            </ul>
                        </div>
                        <div className={`${aboutStyles.subContentsWrapper}`}>
                            <div className={`${aboutStyles.subHeadlineWrapper} ${skillEduVisible ? utilStyles.fadeUp : ""} ${skillEduVisible ? utilStyles.animation01 : ""}`}>
                                <img className={`${aboutStyles.subHeadlineIcon}`} src={EducationIcon} alt="EducationIcon" />
                                <div className={`${aboutStyles.subHeadline} ${utilStyles.colorBlue}`}>Education</div>
                            </div>
                            <div className={`${aboutStyles.educationWrapper} ${skillEduVisible ? utilStyles.fadeUp : ""} ${skillEduVisible ? utilStyles.animation02 : ""}`}>
                                <div className={`${aboutStyles.timeline}`}>{t("top.about.apr10")}</div>
                                <div className={`${aboutStyles.boldTitle}`}>Master of Engineering</div>
                                <div className={`${aboutStyles.uniName}`}>Tokyo Institute of Technology</div>
                            </div>
                            <div className={`${aboutStyles.educationWrapper} ${skillEduVisible ? utilStyles.fadeUp : ""} ${skillEduVisible ? utilStyles.animation02 : ""}`}>
                                <div className={`${aboutStyles.timeline}`}>{t("top.about.apr06")}</div>
                                <div className={`${aboutStyles.boldTitle}`}>B.A for Educational Engineering</div>
                                <div className={`${aboutStyles.uniName}`}>Oita University</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withNamespaces()(About)
