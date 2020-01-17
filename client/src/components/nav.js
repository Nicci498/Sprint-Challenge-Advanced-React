import React from 'react';
import {useDarkMode} from './hooks/useDarkMode';

const Nav = () =>{
    const [darkMode, setDarkMode] = useDarkMode(false)
    const toggle = e =>{
        e.preventDefault()
        setDarkMode(!darkMode)
    }
    return(
        <>
        <h1>Most Searched Women's Soccer Players</h1>
        <button onClick={toggle}>Join the Dark Side {darkMode ? 'dark' : 'light'} </button>
        </>
    )
}
export default Nav;