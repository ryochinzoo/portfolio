import utilStyles from "../../styles/utils.module.css"

function SubmitButton ({ handleSubmit, isDisabled, label }) {
    return (
        <>
            <button disabled={isDisabled} type="submit" className={`mouseOverEfct ${utilStyles.submitButton}`} onClick={(e)=>{handleSubmit(e)}}>{label}</button>
        </>
    )
}

export default SubmitButton