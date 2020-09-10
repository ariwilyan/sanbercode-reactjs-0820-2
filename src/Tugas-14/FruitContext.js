import React, { useState, createContext } from "react";

export const FruitContext = createContext();

export const FruitProvider = props => {
    const [dataBuah, setDataBuah] = useState(null)

    const [inputForm, setInputForm] = useState({
        name: '',
        weight: '',
        price: '',
        id: null
    })

    return (
        <FruitContext.Provider value={[dataBuah, setDataBuah, inputForm, setInputForm]}>
            {props.children}
        </FruitContext.Provider>
    );
};