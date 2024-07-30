import { FC, ReactNode, useMemo, useState } from 'react'
import { IThemeContext, LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

const defaultTheme: Theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme)

    const defaultValue: IThemeContext = useMemo(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultValue}>
            {children}
        </ThemeContext.Provider>
    )
}