import React, { Component, useState, useEffect } from 'react'
import Spinner from '../ui/spinner'
import ParallaxArea from './parallaxArea'
import Footer from './footer'
import utilStyles from "../../styles/utils.module.css"
import portfolioStyles from "../../styles/portfolio.module.css"
import { useParams, useLocation, useNavigate, Link } from "react-router-dom"
import PointList from '../ui/pointList'
import MouseStalker from '../functions/mouseStalker'
import WorksImage from '../ui/worksImage'
import Header from './header'

import JsonData_en from "../../locales/en/common.json"
import JsonData_de from "../../locales/de/common.json"

import i18n from '../../components/functions/i18n'
import ReactGA from "react-ga4"

const Portfolio = (props) => {
    let { work } = useParams()
    let navigate = useNavigate()
    return <Sections work={work} navigate={navigate} />
}

function Content({ work }) {
    const initLocale = i18n.language

    const [locale, setLocale] = useState(initLocale)

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        setLocale(lng)
    }

    const portfolioData = [
        {
            name: "THECOMPANY",
            title: "THECOMPANY",
            labels: getLabels("THECOMPANY", locale),
            data: getDataFromJSON("THECOMPANY", locale),
            image: createDetailsArray("THECOMPANY")
        },
        {
            name: "BrandingCeed",
            title: "Branding C°",
            labels: getLabels("BrandingCeed", locale),
            data: getDataFromJSON("BrandingCeed", locale),
            image: createDetailsArray("BrandingCeed")
        },
        {
            name: "WakutoRecruit",
            title: "Wakuto - Recruit",
            labels: getLabels("WakutoRecruit", locale),
            data: getDataFromJSON("WakutoRecruit", locale),
            image: createDetailsArray("WakutoRecruit")
        }
    ]

    let portfolio

    if (portfolioData.some(n => n.name === work)) {
        portfolio = portfolioData.find(el => {
            return el.name === work
        })
    }

    const pointList = pointArray(portfolio.data.Points)
    const details = portfolio.data.Details
    const location = useLocation()
    const GA4ID = process.env.REACT_APP_GA4ID
    
    useEffect(() => {
        document.title = "Ryohei Hara"
        ReactGA.initialize(GA4ID)
        ReactGA.send({
          hitType: "pageview",
          page: location.pathname + location.search
        })
    }, [location, GA4ID])

    return (
        <>  
            <MouseStalker />
            <Header changeLanguage={changeLanguage} locale={locale} aniPos={1}/>
            <div className={`${utilStyles.posRelative}`}>
                <ParallaxArea size={"small"} />
                <div className={`${portfolioStyles.mainTitle}`}>{portfolio.title}</div>
            </div>
            <div className={`${utilStyles.sectionWrapperSub} ${utilStyles.posRelative}`}>
                <div className={`${utilStyles.contentsHeadlineSub} ${utilStyles.colorGreen}`}>{portfolio.labels.Overview}</div>
                <div className={`${portfolioStyles.overViewWrapper}`}>
                    <div className={`${portfolioStyles.overViewFlexWrapper}`}>
                        <div className={`${portfolioStyles.overViewContents}`}>
                            <div className={`${portfolioStyles.overViewHeading}`}>{portfolio.labels.CustomerName}</div>
                            <div className={`${portfolioStyles.overViewDetail}`}>{portfolio.data.CompanyName}</div>
                        </div>
                        <div className={`${portfolioStyles.overViewContents}`}>
                            <div className={`${portfolioStyles.overViewHeading}`}>{portfolio.labels.Role}</div>
                            <div className={`${portfolioStyles.overViewDetail}`}>{portfolio.data.Role}</div>
                        </div>
                    </div>
                    <div className={`${portfolioStyles.overViewFlexWrapper}`}>
                        <div className={`${portfolioStyles.overViewContents}`}>
                            <div className={`${portfolioStyles.overViewHeading}`}>{portfolio.labels.Tools}</div>
                            <div className={`${portfolioStyles.overViewDetail}`}>{portfolio.data.Tools}</div>
                        </div>
                        <div className={`${portfolioStyles.overViewContents}`}>
                            <div className={`${portfolioStyles.overViewHeading}`}>{portfolio.labels.Release}</div>
                            <div className={`${portfolioStyles.overViewDetail}`}>{portfolio.data.Release}</div>
                        </div>
                    </div>
                    <div className={`${portfolioStyles.overViewSummary}`} style={{"marginTop": "50px"}}>{portfolio.data.Summary}</div>
                    <div className={`${portfolioStyles.goToPage}`}><Link className={`mouseOverEfct`} to={portfolio.data.Link} rel="noopener noreferrer" target="_blank">{portfolio.labels.ToSite}</Link></div>
                </div>
            
            </div>

            <div className={`${utilStyles.sectionWrapperSub} ${utilStyles.posRelative} ${portfolioStyles.pointSection}`}>
                <div className={`${utilStyles.contentsHeadlineSub} ${utilStyles.colorGreen}`}>{portfolio.labels.Points}</div>
                <ul>
                    {pointList.map((point, index) => {
                        return (
                            <li key={index}>
                                <PointList point={point} />
                            </li>
                        )
                    })}
                </ul>
            </div>
            
            <div className={`${utilStyles.sectionWrapperSub} ${utilStyles.posRelative}`}>
                <div className={`${utilStyles.contentsHeadlineSub} ${utilStyles.colorGreen}`}>{portfolio.labels.Details}</div>
                <div className={`${portfolioStyles.detailWrapper}`}>
                    {details.map((detail, index) => {
                        return (
                            <div key={index} className={`${index % 2 ? portfolioStyles.detailFlexWrapperReverse : portfolioStyles.detailFlexWrapper}`}>
                                <div className={portfolioStyles.detailText}>{detail.text}</div>
                                <WorksImage path={portfolio.image[index]} />
                            </div>
                        )
                    })}
                </div>
                <div className={`${portfolioStyles.backToTopPage}`}><a className={`mouseOverEfct`} href="/">{portfolio.labels.ToTopPage}</a></div>
            </div>
            <div id="footer">
                <Footer currentLocale={locale} />
            </div>
        </>
    )
}

class Sections extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            loading: false,
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({loading: true}), 2000)
    }

    render() {
        const nameList = [
            { name: "THECOMPANY" },
            { name: "BrandingCeed" },
            { name: "WakutoRecruit" }
        ]

        if(nameList.some(n => n.name === this.props.work)){
            return(
                <div>
                    {this.state.loading ? (<Content work={this.props.work} navigate={this.props.navigate} />) : (<Spinner />)}
                </div>
            )}
        else {
            this.props.navigate("/")
        }
    }
}
function pointArray (obj) {
    //this will be switch in the future maybe
    if (Object.keys(obj).length === 3) {
        return [obj.first, obj.second, obj.third]
    } else {
        return [obj.first, obj.second, obj.third, obj.fourth]
    }
}
function createDetailsArray (name) {
    const result = []
    switch (name) {
        case "THECOMPANY":
            result.push("/img/portfolio/THECOMPANY/1.gif")
            result.push("/img/portfolio/THECOMPANY/2.gif")
            result.push("/img/portfolio/THECOMPANY/3.gif")
            result.push("/img/portfolio/THECOMPANY/4.gif")
            break;
        case "BrandingCeed":
            result.push("/img/portfolio/BrandingCeed/1.gif")
            result.push("/img/portfolio/BrandingCeed/2.gif")
            result.push("/img/portfolio/BrandingCeed/3.png")
            break;
        case "WakutoRecruit":
            result.push("/img/portfolio/WakutoRecruit/1.gif")
            result.push("/img/portfolio/WakutoRecruit/2.gif")
            result.push("/img/portfolio/WakutoRecruit/3.png")
            break;
        default:
            break;
    }
    return result
}
function getDataFromJSON (name, locale) {
    const json = locale === "en" ? JsonData_en : JsonData_de
    return json.portfolio[name]
}
function getLabels (name, locale) {
    const json = locale === "en" ? JsonData_en : JsonData_de
    return json.portfolio["labels"]
}
export default Portfolio