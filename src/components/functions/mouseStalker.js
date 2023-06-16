import { animated } from 'react-spring'
import { useMouseStalker } from './useMouseStalker'
import { useMediaQuery } from 'react-responsive'


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
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })
    const springStyles = useMouseStalker(initMouse, springConfig, 5)
    if (isDesktop) {
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
    } else {
        return (<></>)
    }
} 

export default MouseStalker