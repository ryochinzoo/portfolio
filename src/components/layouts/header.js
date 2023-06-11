import React, { useState } from 'react' //useState, useEffect, useRef
import utilStyles from "../../styles/utils.module.css"
import { withNamespaces } from 'react-i18next'
import { Drawer } from '@mui/material'
import Menu from './menu'

function Header({changeLanguage, locale, aniPos, t}) {
    const [isOpen, setIsOpen] = useState(false)
    const handleIsOpen = (newValue) => {
        setIsOpen(newValue)
    }
    return (
        <header className={`${aniPos === 5 ? utilStyles.animation05: utilStyles.animation01} ${utilStyles.fadeIn}`}>
            <div>
                <a className={`mouseOverEfct ${utilStyles.contactAnchorButton}`} href="#footer">{t("ui.labels.contact")}</a>
            </div>
            <div className={`${utilStyles.languageWrapper}`}>
                <span onClick={() => changeLanguage('en')} className={`mouseOverEfct ${locale === "en" ? utilStyles.languageActive : utilStyles.languageNotActive}`}>En</span>
                <span onClick={() => changeLanguage('de')} className={`mouseOverEfct ${locale === "de" ? utilStyles.languageActive : utilStyles.languageNotActive}`}>De</span>
            </div>
            <div className={`mouseOverEfct ${utilStyles.mainMenuIconArea}`} onClick={() => {setIsOpen(true)}}>
                <div className={`${utilStyles.burgerMenuIcon}`}></div>
            </div>
            <Drawer anchor="top" open={isOpen} onClose={() => {setIsOpen(false)}}>
                <Menu handleIsOpen={handleIsOpen} />
            </Drawer>
        </header>
    )
}

export default withNamespaces()(Header)