
function FormErrors({errorMessage, hasError, isSubmitClicked}) {
    return (
        <>
            <span style={{display: isSubmitClicked && hasError ? "none": "inline-block", minHeight: "20px", marginBottom: "10px", color: isSubmitClicked && hasError ? "transparent": "red"}}>{errorMessage}</span>
        </>
    )
}

export default FormErrors