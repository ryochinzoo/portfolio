import PortfolioStyle from '../../styles/portfolio.module.css'
function PointList ({ point }) {
    return (
        <>
        <div className={`${PortfolioStyle.pointListWrapper}`}>
            <div className={`${PortfolioStyle.check}`}>✓</div>
            <div className={`${PortfolioStyle.point}`}>{ point }</div>
        </div>
        </>
    )
}

export default PointList