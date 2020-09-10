import React from 'react'
import {FruitProvider} from "./FruitContext"
import FruitList from "./FruitList"
import FruitForm from "./FruitForm"

const Tugas14 = () => {
    // main function component
    let divStyles = {
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
        borderRadius: "5px",
        boxSizing: "border-box",
        padding: "10px",
        margin: "0 auto",
        marginTop: "50px",
        marginLeft: "300px",
        marginRight: "300px"
    }
    return (
        <FruitProvider>
            <div style={divStyles}>
                <FruitList/>
                <br/>
                <FruitForm/>
            </div>
        </FruitProvider>
    )
}

export default Tugas14;