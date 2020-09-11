import React from 'react'
import { Switch, Route } from 'react-router'
import NavTheme from './NavTheme'
import Logo from '../logo.svg'

// Component Tugas - Tugas
import Tugas9 from '../Tugas-9/Tugas9'
import Tugas10 from '../Tugas-10/Tugas10'
import Tugas11 from '../Tugas-11/Tugas11'
import Tugas12 from '../Tugas-12/Tugas12'
import Tugas13 from '../Tugas-13/Tugas13'
import Tugas14 from '../Tugas-14/Tugas14'

const Home = () => {
    return(
        <header>
            <h1>Selamat Datang di Web ReactJs</h1>
            <img src={Logo} alt="logo-react"/>
        </header>
    )
}

const Routes = () => {
    return(
        <>
            <NavTheme />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/Tugas9' >
                    <br />
                    <header><h1>Tugas 9</h1></header>
                    <Tugas9 />
                </Route>
                <Route path='/Tugas10' >
                    <br />
                    <header><h1>Tugas 10</h1></header>
                    <Tugas10 />
                </Route>
                <Route path='/Tugas11'>
                    <br />
                    <header><h1>Tugas 11</h1></header>
                    <Tugas11 />
                </Route>
                <Route path='/Tugas12'> 
                    <br />
                    <header><h1>Tugas 12</h1></header>
                    <Tugas12 />
                </Route>
                <Route path='/Tugas13'>
                    <br />
                    <header><h1>Tugas 13</h1></header>
                    <Tugas13 />
                </Route>
                <Route path='/Tugas14'>
                    <br />
                    <header><h1>Tugas 14</h1></header>
                    <Tugas14 />
                </Route>
            </Switch>
        </>
    )
}

export default Routes