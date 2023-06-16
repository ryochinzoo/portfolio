import Icons from "../ui/icons"
import { useState } from 'react'
import utilStyles from "../../styles/utils.module.css"
import InputText from "../ui/inputText"
import InputTextArea from "../ui/inputTextArea"
import SubmitButton from "../ui/submitButton"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { init, send } from 'emailjs-com'
import { withNamespaces } from 'react-i18next'

function Footer({ t, currentLocale }) {
    const userID = process.env.REACT_APP_USER_ID
    const serviceID = process.env.REACT_APP_SERVICE_ID
    const templateID = process.env.REACT_APP_TEMPLATE_ID
    
    const [isSubmitClicked, setIsSubmitClicked] = useState(false)
    const [formValidation, setFormValidation] = useState({
        result: false,
        details: {
            userName: false,
            email: false,
            message: false
        },
        errors: {
            userName: "",
            email: "",
            message: ""
        }
    })
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isClearAll, setIsClearAll] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const clearAll = (newValue) => {
        setIsClearAll(newValue)
    }
    const onNameChange = (newValue) => {
        setUserName(newValue)
        setIsSubmitClicked(false)
    }
    const onEMChange = (newValue) => {
        setEmail(newValue)
        setIsSubmitClicked(false)
    }
    const onMSGChange = (newValue) => {
        setMessage(newValue)
        setIsSubmitClicked(false)
    }
    function validateField (userName, email, message) {
        const validation = {
            userName: false,
            email: false,
            message: false
        }
        const errorMessages = {
            userName: "",
            email: "",
            message: ""
        }

        if (userName.trim().length !== 0) {
            validation.userName = true
        } else {
            validation.userName = false
            errorMessages.userName = "Name is required"
        }

        if (email.trim().length !== 0) {
            const regex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
            if (email.match(regex)) {
                validation.email = true
            } else {
                validation.email = false
                errorMessages.email = "Email is invalid"
            }
        } else {
            validation.email = false
            errorMessages.email = "Email is required"
        }

        if (message.trim().length !== 0) {
            validation.message = true
        } else {
            validation.message = false
            errorMessages.message = "Message is required"
        }

        const result = {result: !Object.values(validation).includes(false), details: validation, errors: errorMessages}
        return result
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Sending')
        //let data = {
        //    userName,
        //    email,
        //    message,
        //}
        //const JSONdata = JSON.stringify(data)
        //const endpoint = '/api/contact'
        //const options = {
        //    method: 'POST',
        //    headers: {
        //        'Accept': 'application/json, text/plain, */*',
        //        'Content-Type': 'application/json',
        //    },
        //    body: JSONdata,
        //}
        setButtonDisabled(true)
        const validation = validateField(userName, email, message)
        if (validation.result) {
            setFormValidation(validation)
            clearAll(true)
            setIsSubmitClicked(true)
            setUserName('')
            setEmail('')
            setMessage('')
            if (
                userID !== undefined &&
                serviceID !== undefined &&
                templateID !== undefined
            ) {
                init(userID)
                const template_param = {
                    from_name: userName,
                    from_email: email,
                    message: message,
                }
                send(serviceID, templateID, template_param).then(()=> {
                    clearAll(true)
                    setIsSubmitClicked(true)
                    setUserName('')
                    setEmail('')
                    setMessage('')
                    clearAll(false)
                    toast.success('Your message has been sent successfully', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                })
            }
            /*            
            await fetch(endpoint, options).then((res) => {
                console.log('Response Received')
                console.log(res)
                if(res.status === 200) {
                    console.log('Response Succeeded')
                    toast.success('Your message has been sent successfully', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                    clearAll(true)
                    setIsSubmitClicked(true)
                    setUserName('')
                    setEmail('')
                    setMessage('')
                    clearAll(false)
                }
            })
            */
        } else {
            clearAll(false)
            setButtonDisabled(false)
            toast.error('Oops, please input form correctly', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
            setIsSubmitClicked(true)
            setFormValidation(validation)
        }
    }
    return(
        <section className={`${utilStyles.posRelative}`}>
            <div className={`${utilStyles.footerWrapper}`}>
                <div className={`${utilStyles.footerContents}`}>
                    <div className={`${utilStyles.contentsHeadlineCenter} ${utilStyles.colorGreen}`}>{t("top.footer.moreinfo")}</div>  
                    <div className={`${utilStyles.iconCenter}`}>
                        <Icons currentLocale={currentLocale}/>
                    </div>
                </div>
                <div className={`${utilStyles.footerContents}`}>
                    <div className={`${utilStyles.contentsHeadlineCenter} ${utilStyles.colorGreen}`}>{t("top.footer.contact")}</div>  
                    <div className={`${utilStyles.contactFormWrapper}`}>
                        <form onSubmit={handleSubmit}>
                            <InputText 
                                placeholder = {"Name"}
                                isRequired = {true}
                                keyName = {"userName"}
                                caseName = {"userName"}
                                onChange = {onNameChange}
                                validation = {formValidation}
                                hasError={formValidation.details["userName"]}
                                isSubmitClicked={isSubmitClicked}
                                isClearAll={isClearAll}
                            />
                            <InputText 
                                placeholder = {"E-mail"}
                                isRequired = {true}
                                keyName = {"email"}
                                caseName = {"email"}
                                onChange = {onEMChange}
                                validation = {formValidation}
                                hasError={formValidation.details["email"]}
                                isSubmitClicked={isSubmitClicked}
                                isClearAll={isClearAll}
                            />
                            <InputTextArea
                                placeholder={t("ui.labels.enteryourmessage")}
                                isRequired={true}
                                isSignUp={false}
                                keyName={"message"}
                                caseName={"message"}
                                onChange={onMSGChange}
                                validation={formValidation}
                                hasError={formValidation.details["message"]}
                                isSubmitClicked={isSubmitClicked}
                                isClearAll={isClearAll}
                            ></InputTextArea>
                            <div style={{textAlign:"left"}}>
                                <SubmitButton
                                    handleSubmit={handleSubmit}
                                    isDisabled={buttonDisabled}
                                    label={t("top.footer.send")}
                                ></SubmitButton>
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`${utilStyles.copyright}`}>© 2023, Ryohei Hara</div>
        </section>
    )
}

export function createNewObj(array, key) {
    let newObj
    array.map((v) => {
        if(v.usage === key) {
            newObj = v
        }
        return null
    })
    return newObj
}

export default withNamespaces()(Footer)