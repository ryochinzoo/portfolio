import { useEffect } from 'react'

export const useIntersectionObserver = (refs, callback, options) => {
    useEffect(() => {
        const observer = new IntersectionObserver (callback, options)
        refs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current)
            }
        })
        return () => {
            refs.forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current)
                }
            })
        }
    })
}