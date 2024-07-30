import React from 'react'
import './styles/index.scss'
import { Routes, Route, Link } from 'react-router-dom'
import HomePageAsync from './pages/HomePage/HomePage.async'
import AboutPageAsync from './pages/AboutPage/AboutPage.async'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames'

const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', theme)}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <button onClick={toggleTheme}>Toggle Theme</button>

            <React.Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route index element={<HomePageAsync/>}/>
                    <Route path="about" element={<AboutPageAsync/>}/>
                </Routes>
            </React.Suspense>
        </div>
    )
}

export default App