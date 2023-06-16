import utilStyles from '../../styles/utils.module.css'
import worksStyles from '../../styles/works.module.css'
import WorksLink from '../ui/worksLink'
import { useInView } from "react-intersection-observer"
import { withNamespaces } from 'react-i18next'

function Works({ t }) {
    const { ref: headline, inView: headlineVisible } = useInView({threshold: 0.5, triggerOnce: true})
    return (
        <section className={`${utilStyles.posRelative} ${utilStyles.backgroundGreen}`}>
            <div className={`${utilStyles.sectionWrapperWorks}`}>
                <div ref={headline} className={`${utilStyles.contentsHeadline} ${headlineVisible ? utilStyles.headlineAfter : ""}`}>{t("ui.labels.works")}</div>
                <div className={`${worksStyles.summary}`}>
                    {t("top.works.summary")}
                </div>
                <div className={`${worksStyles.linksWrapper}`}>
                    <WorksLink name="THECOMPANY" link="/portfolio/THECOMPANY" dataSet="thecompany" tooltipImgPath="/img/portfolio/THECOMPANY/tooltip.gif" />
                    <WorksLink name="Branding C°" link="/portfolio/BrandingCeed" dataSet="brandingceed" tooltipImgPath="/img/portfolio/BrandingCeed/2.gif" />
                    <WorksLink name="Wakuto - Recruit" link="/portfolio/WakutoRecruit" dataSet="wakutorec" tooltipImgPath="/img/portfolio/WakutoRecruit/2.gif" />
                </div>
            </div>
        </section>
    )
}

export default withNamespaces()(Works)