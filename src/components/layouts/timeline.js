import React, {useRef} from "react"
import utilStyles from "../../styles/utils.module.css"
import timelineStyles from "../../styles/timeline.module.css"
import { useInView } from "react-intersection-observer"
import { useIntersectionObserver } from "../functions/useIntersectionObserver"
import { withNamespaces } from 'react-i18next'

function Timeline ({ t }) {
    const { ref: headline, inView: headlineVisible } = useInView({threshold: 0.5, triggerOnce: true})
    const box1 = useRef()
    const box2 = useRef()
    const box3 = useRef()
    const box4 = useRef()
    const rootMargin = 100
    const options = {
        threshold: buildThresholdList(10),
        rootMargin: `0px 0px -${rootMargin}px 0px`,
    }
    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const ratio = Math.round(entry.intersectionRatio * 100)
                if (ratio > 60) {
                    entry.target.children[0].style.transform = "translateX(0)"
                    entry.target.children[1].children[0].style.opacity = 1
                    entry.target.children[0].children[0].style.opacity = 1
                }
            }
        })
    }
    useIntersectionObserver([box1, box2, box3, box4], callback, options)
    return (
        <section className={`${utilStyles.posRelative}`}>
            <div className={`${utilStyles.sectionWrapper}`}>
                <div ref={headline} className={`${utilStyles.contentsHeadline} ${utilStyles.colorGreen} ${headlineVisible ? utilStyles.headlineAfter : ""}`}>{t("ui.labels.timeline")}</div>
            </div>
            <div className={`${timelineStyles.timelineWrapper}`}>
                <div ref={box1} className={`${timelineStyles.timelineFlexWrapper}`}>
                    <div className={`${timelineStyles.backgroundGreen} ${timelineStyles.timelineParts}`}>
                        <div className={`${timelineStyles.timelineYears}`}>2018 - {t("ui.labels.current")}</div>
                    </div>
                    <div className={`${timelineStyles.timelineParts}`}>
                        <div  className={`${timelineStyles.descriptionWrapper}`}>
                            <div className={`${timelineStyles.timelineHeadline} ${utilStyles.colorBlue}`}>{t("top.timeline.current.title")}</div>
                            <div className={`${timelineStyles.timelineTitle}`}>{t("top.timeline.current.category")}</div>
                            <div className={`${timelineStyles.timelineDescription}`}>
                            {t("top.timeline.current.description")}</div>
                        </div>
                    </div>
                </div>
                <div ref={box2} className={`${timelineStyles.timelineFlexWrapperReverse}`}>
                    <div className={`${timelineStyles.backgroundGreen} ${timelineStyles.timelineParts}`}>
                        <div className={`${timelineStyles.timelineYears}`}>2015 - 2018</div>
                    </div>
                    <div className={`${timelineStyles.timelineParts}`}>
                        <div  className={`${timelineStyles.descriptionWrapper}`}>
                            <div className={`${timelineStyles.timelineHeadline} ${utilStyles.colorBlue}`}>{t("top.timeline.by18.title")}</div>
                            <div className={`${timelineStyles.timelineTitle}`}>{t("top.timeline.by18.category")}</div>
                            <div className={`${timelineStyles.timelineDescription}`}>
                            {t("top.timeline.by18.description")}</div>
                        </div>
                    </div>
                </div>
                <div ref={box3} className={`${timelineStyles.timelineFlexWrapper}`}>
                    <div className={`${timelineStyles.backgroundGreen} ${timelineStyles.timelineParts}`}>
                        <div className={`${timelineStyles.timelineYears}`}>2013 - 2015</div>
                    </div>
                    <div className={`${timelineStyles.timelineParts}`}>
                        <div  className={`${timelineStyles.descriptionWrapper}`}>
                            <div className={`${timelineStyles.timelineHeadline} ${utilStyles.colorBlue}`}>{t("top.timeline.by15.title")}</div>
                            <div className={`${timelineStyles.timelineTitle}`}>{t("top.timeline.by15.category")}</div>
                            <div className={`${timelineStyles.timelineDescription}`}>
                            {t("top.timeline.by15.description")}</div>
                        </div>
                    </div>
                </div>
                <div ref={box4} className={`${timelineStyles.timelineFlexWrapperReverse}`}>
                    <div className={`${timelineStyles.backgroundGreen} ${timelineStyles.timelineParts}`}>
                        <div className={`${timelineStyles.timelineYears}`}>2012 - 2013</div>
                    </div>
                    <div className={`${timelineStyles.timelineParts}`}>
                        <div  className={`${timelineStyles.descriptionWrapper}`}>
                            <div className={`${timelineStyles.timelineHeadline} ${utilStyles.colorBlue}`}>{t("top.timeline.by13.title")}</div>
                            <div className={`${timelineStyles.timelineTitle}`}>{t("top.timeline.by13.category")}</div>
                            <div className={`${timelineStyles.timelineDescription}`}>
                            {t("top.timeline.by13.description")}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export function buildThresholdList(num) {
    const thresholds = []
    const numSteps = num
    for(let i = 1; i <= numSteps; i++) {
        const ratio = i / numSteps
        thresholds.push(ratio)
    }
    return thresholds
}

export default withNamespaces()(Timeline)