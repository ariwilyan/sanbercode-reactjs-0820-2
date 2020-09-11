import React, { useState, createContext } from "react";

export const NavContext = createContext();

export const NavProvider = props => {
    const [theme, setTheme] = useState("")

    return (
        <NavContext.Provider value={[theme, setTheme]}>
            {props.children}
        </NavContext.Provider>
    );
};