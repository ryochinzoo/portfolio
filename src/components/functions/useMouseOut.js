import { useEffect } from "react"

export const useMouseOut = (initMouse, setSpringStyles, times, tag, isOver) => {
    useEffect(() => {
        const elements = document.querySelectorAll(tag)
        const listener = () => {
            setSpringStyles.start({
                width: initMouse.width,
                height: initMouse.height,
                borderRadius: initMouse.borderRadius
            })
            isOver(false)
        }
        elements.forEach((element) => {
            element.addEventListener('mouseout', listener)
        })
        return () => {
            elements.forEach((element) => {
                element.removeEventListener('mouseout', listener)
            })
        }
    }, [initMouse, setSpringStyles, times, tag, isOver])
}