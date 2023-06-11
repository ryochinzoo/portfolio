import React from "react"
import firstViewStyle from "../../styles/firstView.module.css"
import utilStyles from "../../styles/utils.module.css"
import Icons from "../ui/icons"
import KikkouPattern from "../../svg/pattern-kikkou.svg"
import { withNamespaces } from 'react-i18next'

function FirstView ({ t }) {
    return(
        <section className={`${utilStyles.posRelative} ${firstViewStyle.firstViewSize}`}>
            <div className={`${firstViewStyle.headlines}`}>
                <div className={`${firstViewStyle.headlineFvSmall}`}>
                    <span className={`${utilStyles.animation01} ${utilStyles.fadeUp}`}>{t("top.firstView.first")} </span><span className={`${utilStyles.colorBlue} ${utilStyles.animation02} ${utilStyles.fadeUp}`}>Ryohei Hara</span><span className={`${utilStyles.animation03} ${utilStyles.fadeUp}`}>, {t("top.firstView.second")}</span>
                </div>
                <div className={`${firstViewStyle.headlineBig} ${utilStyles.animation04} ${utilStyles.fadeUp}`}>
                    Full Stack <br /> {t("top.firstView.third")}
                </div>
            </div>
            <div className={`${firstViewStyle.firstViewImagePos} ${utilStyles.animation05} ${utilStyles.fadeIn}`}>
                <img className={`${firstViewStyle.fvSVGHeight}`} alt="firstViewMainImage" src={KikkouPattern} />
            </div>
            <div className={`${utilStyles.iconsLeft} ${utilStyles.animation05} ${utilStyles.fadeIn}`}>
                <Icons />
            </div>
        </section>
    )
}

export default withNamespaces()(FirstView)