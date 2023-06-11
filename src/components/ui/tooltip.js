import utilStyles from "../../styles/utils.module.css"

function ToolTip ({path}) {
    return  (
        <span className={utilStyles.tooltip}>
            <img src={path} alt={"tooltip"} />
        </span>
    )
}

export default ToolTip