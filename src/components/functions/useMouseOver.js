import { useEffect } from "react"

export const useMouseOver = (initMouse, setSpringStyles, times, tag, isOver) => {
    useEffect(() => {
        const elements = document.querySelectorAll(tag)
        const listener = () => {
            setSpringStyles.start({
                width: initMouse.width * times,
                height: initMouse.height * times,
                borderRadius: initMouse.borderRadius * times
            })
            isOver(true)
        }
        elements.forEach((element) => {
            element.addEventListener('mouseover', listener)
        })
        return () => {
            elements.forEach((element) => {
                element.removeEventListener('mouseover', listener)
            })
        }
    }, [initMouse, setSpringStyles, times, tag, isOver])
}