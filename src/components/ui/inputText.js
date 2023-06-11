import FormErrors from './formErrors'
import { useRef } from 'react'
import utilStyles from "../../styles/utils.module.css"

function InputText({ placeholder, isRequired, caseName, keyName, onChange, validation, hasError, isSubmitClicked, isClearAll }) {
    const placeHolderMarked = placeholder
    const inputRef = useRef()
    if (isClearAll) {
        console.log("test")
        inputRef.current.value = ""
    }
    return (
        <>
            <div style={{width: "100%", textAlign: "left", minHeight: "90px", height: "90px"}} >
                <input 
                    className={`${utilStyles.inputText}`}
                    ref={inputRef} 
                    type={"text"} 
                    id={keyName} 
                    name={keyName} 
                    placeholder={isRequired ? placeHolderMarked + " *" :placeHolderMarked} 
                    onChange={(e) => {onChange(e.target.value)}} />
                <FormErrors hasError={hasError} errorMessage={validation.errors[caseName]} isSubmitClicked={isSubmitClicked} />
            </div>
        </>
    )
}

export default InputText