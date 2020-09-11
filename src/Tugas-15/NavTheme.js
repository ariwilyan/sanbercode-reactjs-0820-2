import React, {useContext, useEffect} from "react"
import {NavContext, NavProvider} from "./NavContext"
import Nav from "./Nav"

const ChangeTheme = () => {
    const [theme, setTheme] = useContext(NavContext)

    useEffect(() => {
        if (theme === "") {
            setTheme("nav-light")
        }
    })

    const buttonChange = (event) => {
        setTheme(event.target.value)
    }

    return (
        <div style={{textAlign: "center"}}>
            <div>
                Choose Your Navigation Bar Theme
            </div>
            <input type="radio" name="theme" value="nav-light" onChange={buttonChange} /> Light Theme
            <input type="radio" name="theme" value="nav-dark" onChange={buttonChange} style={{marginLeft: "15px"}}/> Dark Theme
        </div>
    )
}

const NavTheme = () => {
    return (
        <NavProvider>
            <Nav />
            <br />
            <ChangeTheme />
        </NavProvider>
    )
}

export default NavTheme