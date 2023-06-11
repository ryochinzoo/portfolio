import utilStyles from "../../styles/utils.module.css"

function ParallaxArea ({size}) {
    return (
        <div className={`${size === "normal" ? utilStyles.parallax : utilStyles.parallaxSmall}`}></div>
    )
}

export default ParallaxArea