import portfolioStyles from "../../styles/portfolio.module.css"

function WorksImage ({ path }) {
    return (
        <div className={portfolioStyles.detailImg}>
            <img alt="" src={path} loading="lazy" />
        </div>
    )
}

export default WorksImage