import utilStyles from '../../styles/utils.module.css'
import worksStyles from '../../styles/works.module.css'
import WorksLink from '../ui/worksLink'
import { useInView } from "react-intersection-observer"
import { withNamespaces } from 'react-i18next'

import THECOMPANY_ToolTip from "../../img/portfolio/THECOMPANY/tooltip.gif"
import BrandingCeed_ToolTip from "../../img/portfolio/BrandingCeed/2.gif"
import Wakuto_ToolTip from "../../img/portfolio/WakutoRecruit/2.gif"

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
                    <WorksLink name="THECOMPANY" link="/portfolio/THECOMPANY" dataSet="thecompany" tooltipImgPath={THECOMPANY_ToolTip} />
                    <WorksLink name="Branding C°" link="/portfolio/BrandingCeed" dataSet="brandingceed" tooltipImgPath={BrandingCeed_ToolTip} />
                    <WorksLink name="Wakuto - Recruit" link="/portfolio/WakutoRecruit" dataSet="wakutorec" tooltipImgPath={Wakuto_ToolTip} />
                </div>
            </div>
        </section>
    )
}

export default withNamespaces()(Works)