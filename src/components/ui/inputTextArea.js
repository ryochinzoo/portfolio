import FormErrors from './formErrors'
import { useRef } from 'react'
import utilStyles from "../../styles/utils.module.css"

function InputTextArea ({ placeholder, isRequired, caseName, onChange, validation, hasError, isSubmitClicked, isClearAll }){
    const placeHolderMarked = placeholder
    const inputRef = useRef()
    if (isClearAll) {
        inputRef.current.value = ""
    }
    return (
        <>
            <div style={{width: "100%", textAlign: "left"}} >
                <div style={{display: "inline-block", width: "100%"}}>
                <textarea 
                    className={`${utilStyles.inputTextArea}`}
                    ref={inputRef} 
                    rows={8} 
                    placeholder={isRequired ? placeHolderMarked + " *" : placeHolderMarked} 
                    onChange={(e) => {onChange(e.target.value)}}></textarea>
                </div>
                <FormErrors hasError={hasError} errorMessage={validation.errors[caseName]} isSubmitClicked={isSubmitClicked} />
            </div>
        </>
    )
}

export default InputTextArea