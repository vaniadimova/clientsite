import React, { useCallback, useEffect, useState } from 'react'

interface ScrollVallue {
    innerWidth: number
}

export const SizeContext = React.createContext<ScrollVallue>({
    innerWidth: 0
})

const SizeObserver: React.FC<{ children: React.ReactNode}> = ({ children }) => {
    const [innerWidth, setInnerWidth] = useState(0)
    const handleResize = useCallback(() => {
        setInnerWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize, { passive: true })
        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])

    return (
        <SizeContext.Provider value={{ innerWidth }}>
            {children}
        </SizeContext.Provider>
    )
}

export default SizeObserver