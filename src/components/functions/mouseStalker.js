import { animated } from 'react-spring'
import { useMouseStalker } from './useMouseStalker'

const initMouse =  {
        width: 16,
        height: 16,
        borderRadius: 8,
        opacity: 0,
        top: 0,
        left: 0
    }
const springConfig = {
    frequency: 0.2,
    damping: 2,
}

const cssStyles = {
    pointerEvents: 'none',
    position: 'fixed',
    zIndex: 100,
    backgroundColor: '#53A9CF',
    mixBlendMode: 'difference',
}

function MouseStalker () {
    const springStyles = useMouseStalker(initMouse, springConfig, 5)
    return (
        <>
            <animated.div
                style={{
                    ...cssStyles,
                    ...springStyles,
                }}
            />
        </>
    )
} 

export default MouseStalker