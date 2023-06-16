import utilStyles from "../../styles/utils.module.css"


const Spinner = () => <div className={`${utilStyles.posRelative} ${utilStyles.bkfull}`}>
                        <div className={`${utilStyles.loader}`}>
                            <img alt="windrad" src="/img/svg/windrad3.svg" />
                        </div>
                        </div>

export default Spinner