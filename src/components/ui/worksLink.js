import worksStyles from '../../styles/works.module.css'
import { Link } from 'react-router-dom'
import ToolTip from './tooltip'
import { useRef } from "react"
import utilStyles from "../../styles/utils.module.css"
import i18n from '../functions/i18n'
import { useMediaQuery } from 'react-responsive'

function WorksLink({name, link, dataSet, tooltipImgPath}) {
    const ref = useRef()
    
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    const handleMouseEnter = () => {
        if (!ref.current || !isDesktop) return
        ref.current.children[1].style.opacity = "1"
        ref.current.children[1].style.visibility = "visible"
        ref.current.children[1].style.translationDuration = ".2s"
    }

    const handleMouseLeave = () => {
        if (!ref.current || !isDesktop) return
        ref.current.children[1].style.opacity = "0"
        ref.current.children[1].style.visibility = "hidden"
        ref.current.children[1].style.translationDuration = ".2s"
    }
    return(
        <div ref={ref} className={`${utilStyles.posRelative}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to={link} state={{name: dataSet, locale: i18n.language}} className={`mouseOverEfct ${worksStyles.linkname}`}>{name}</Link>
            <ToolTip path={tooltipImgPath} />
        </div>
    )
}

export default WorksLink