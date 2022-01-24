import React, { useState } from 'react'
import { DarkModeContext } from './DarkModeContext'





export const DarkModeProvider = ({ children }) => {
    const [toggleDarkMode, setToggleDarkMode] = useState(false)

    return (
        <DarkModeContext.Provider value={{ toggleDarkMode, setToggleDarkMode}}>
                    {children}
        </DarkModeContext.Provider>
    )
}