import React, { useEffect, useContext } from "react";
import {Link} from "react-router-dom";
import {NavContext} from "./NavContext";

const Nav = () => {
    const [theme] = useContext(NavContext)

    return (
        <>
            <div className={theme}>
                <ul className="nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Tugas9">Tugas 9</Link>
                    </li>
                    <li>
                        <Link to="/Tugas10">Tugas 10</Link>
                    </li>
                    <li>
                        <Link to="/Tugas11">Tugas 11</Link>
                    </li>
                    <li>
                        <Link to="/Tugas12">Tugas 12</Link>
                    </li>
                    <li>
                        <Link to="/Tugas13">Tugas 13</Link>
                    </li>
                    <li>
                        <Link to="/Tugas14">Tugas 14</Link>
                    </li>
                    <li>
                        <Link to="/Tugas15">Tugas 15</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Nav