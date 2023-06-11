import { useSpring } from "react-spring"
import { useMouseMove } from "./useMouseMove"
import { useMouseOut } from "./useMouseOut"
import { useMouseOver } from "./useMouseOver"
import { useState } from "react"

export const useMouseStalker = (initMouse, mouseConfig, times) => {
    const [isMouseOver, setIsMouseOver] = useState(false)
    const isOver = (newValue) => {
        setIsMouseOver(newValue)
    }

    const [springStyles, setSpringStyles] = useSpring(() => ({
        to: initMouse,
        config: mouseConfig
    }))
    
    useMouseMove(initMouse, setSpringStyles, times, isMouseOver)
    useMouseOver(initMouse, setSpringStyles, times, '.mouseOverEfct', isOver)
    useMouseOut(initMouse, setSpringStyles, times, '.mouseOverEfct', isOver)

    return springStyles
}