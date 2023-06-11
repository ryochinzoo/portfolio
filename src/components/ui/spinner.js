import utilStyles from "../../styles/utils.module.css"
import WindRad from "../../svg/windrad3.svg"


const Spinner = () => <div className={`${utilStyles.posRelative} ${utilStyles.bkfull}`}>
                        <div className={`${utilStyles.loader}`}>
                            <img alt="windrad" src={WindRad} />
                        </div>
                        </div>

export default Spinner