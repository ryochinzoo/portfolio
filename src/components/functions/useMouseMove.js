import { useEffect } from "react"

export const useMouseMove = (initMouse, setSpringStyles, times, isMouseOver) => {
    useEffect(() => {
        const listener = (e) => {
            if(isMouseOver) {
                setSpringStyles.start({
                    opacity: 100,
                    top: e.y - initMouse.height / (2 / times),
                    left: e.x - initMouse.width / (2 / times)
                })
            } else {
                setSpringStyles.start({
                    opacity: 100,
                    top: e.y - initMouse.height / 2,
                    left: e.x - initMouse.width / 2
                })
            }
        }
        window.addEventListener('mousemove', listener)
        return () => {
            window.removeEventListener('mousemove', listener)
        }
    }, [setSpringStyles, initMouse, times, isMouseOver])
}