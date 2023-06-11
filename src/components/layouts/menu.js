import React from 'react' //useState, useEffect, useRef
import utilStyles from "../../styles/utils.module.css"
import { withNamespaces } from 'react-i18next'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

function Menu({handleIsOpen, t}) {
    return(
        <>
        <div className={utilStyles.drawerCloseButton} onClick={() => {handleIsOpen(false)}}></div>
            <div className={`${utilStyles.menuWrapper}`}>
                <ul className={`${utilStyles.menuFlexWrapper}`}>
                    <li><Link onClick={() => {handleIsOpen(false)}} className={`mouseOverEfct ${utilStyles.anchorButton}`} to={"/"}>TOP</Link></li>
                    <li><HashLink onClick={() => {handleIsOpen(false)}} className={`mouseOverEfct ${utilStyles.anchorButton}`} to="/#about">{t("ui.labels.about")}</HashLink></li>
                    <li><HashLink onClick={() => {handleIsOpen(false)}} className={`mouseOverEfct ${utilStyles.anchorButton}`} to="/#timeline">{t("ui.labels.timeline")}</HashLink></li>
                    <li><HashLink onClick={() => {handleIsOpen(false)}} className={`mouseOverEfct ${utilStyles.anchorButton}`} to={"/#works"}>{t("ui.labels.works")}</HashLink>
                        <ul>
                            <li><Link className={`mouseOverEfct ${utilStyles.subMenu}`} to={"/portfolio/THECOMPANY"}>THECOMPANY</Link></li>
                            <li><Link className={`mouseOverEfct ${utilStyles.subMenu}`} to={"/portfolio/BrandingCeed"}>Branding C°</Link></li>
                            <li><Link className={`mouseOverEfct ${utilStyles.subMenu}`} to={"/portfolio/WakutoRecruit"}>Wakuto - Recruit</Link></li>
                        </ul>
                    </li>
                    <li><a className={`mouseOverEfct ${utilStyles.anchorButton}`} onClick={() => {handleIsOpen(false)}} href={"#footer"}>{t("ui.labels.contact")}</a></li>
                </ul>
            </div>
                
        </>
    )
}

export default withNamespaces()(Menu)