import React, { Component, useState, useEffect } from 'react' //useState, useEffect, useRef
import FirstView from '../components/layouts/firstView'
import About from '../components/layouts/about'
import Timeline from '../components/layouts/timeline'
import ParallaxArea from '../components/layouts/parallaxArea'
import Works from '../components/layouts/works'
import Footer from '../components/layouts/footer'
import Spinner from '../components/ui/spinner'
import MouseStalker from '../components/functions/mouseStalker'
import i18n from '../components/functions/i18n'
import Header from '../components/layouts/header'
import { withNamespaces } from 'react-i18next'
import ScrollToHashElement from '../components/functions/scrollToHashElement'
import { useLocation } from 'react-router-dom'
import ReactGA from "react-ga4"

const Home = () => {
    return <Sections />
}

function Content() {
    const [locale, setLocale] = useState(i18n.language)
    const location = useLocation()
    const GA4ID = process.env.REACT_APP_GA4ID
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        setLocale(lng)
    }
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
            <ScrollToHashElement />
            <MouseStalker />
            <Header changeLanguage={changeLanguage} locale={locale} aniPos={5} />
            <FirstView currentLocale={locale}/>
            <span id="about"></span>
            <About />
            <div id="timeline">
            <Timeline /></div>
            <ParallaxArea size={"normal"} />
            <span id="works"></span>
            <Works />
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
        return(
            <div>
                {this.state.loading ? (<Content />) : (<Spinner />)}
            </div>
        )
    }
}

export default withNamespaces()(Home)