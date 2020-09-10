import React, {useEffect, useContext} from "react";
import {FruitContext} from "./FruitContext";
import axios from 'axios';

const FruitForm = () => {
    const [dataBuah, setDataBuah, inputForm, setInputForm] = useContext(FruitContext)

    // using useEffect to get get the data from server (REST API)
    useEffect(() => {
        if (dataBuah === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDataBuah([...res.data])
                console.log(res.data)
            })
        }
    }, [dataBuah])

    // handle for type in input form (name, weight, price)
    const changeInputName = (event) => {
        setInputForm({
            ...inputForm, name: event.target.value
        })
    }

    const changeInputWeight = (event) => {
        setInputForm({
            ...inputForm, weight: event.target.value
        })
    }

    const changeInputPrice = (event) => {
        setInputForm({
            ...inputForm, price: event.target.value
        })
    }

    const submitForm = (event) => {
        event.preventDefault()
        var idFruit = inputForm.id
        if (idFruit === null) {
            // add new data
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, inputForm)
            .then(res => {
                var data = res.data
                setDataBuah([...dataBuah, inputForm])
            })
        } else {
            // update data
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${inputForm.id}`, inputForm)
            .then(res => {
                var newDataBuah = dataBuah.map(x => {
                    if (x.id === inputForm.id) {
                        x.name = inputForm.name
                        x.weight = inputForm.weight
                        x.price = inputForm.price
                    }
                    return x
                })
                setDataBuah([...newDataBuah])
            })
        }
        setInputForm({
            id: null,
            name: '',
            weight: '',
            price: '',
        })
    }

    return (
        <>
            {/* Form */}
            <div style={{width: "50%", margin: "0 auto", marginTop: "20px", border: "1px solid #000", borderRadius: "20px", marginBottom: "20px"}}>
                <h1 style={{textAlign : "center"}}>Form Pembelian Buah</h1>
                <div style={{padding: "20px", paddingTop: "0px"}}>
                    <form onSubmit={submitForm}>
                        <div style={{display: "block", marginBottom: "1em"}}>
                            <div style={{display: "inline-block", width: "150px", fontWeight: "bold", fontSize: "16px"}}>
                                Nama Buah
                            </div>          
                            <input required style={{display: "inline-block"}} type="text" name="name" value={inputForm.name} onChange={changeInputName}/>
                        </div>
                        <div style={{display: "block", marginBottom: "1em"}}>
                            <div style={{display: "inline-block", width: "150px", fontWeight: "bold", fontSize: "16px"}}>
                                Harga Buah
                            </div>          
                            <input required style={{display: "inline-block"}} type="number" min="0" name="harga" value={inputForm.price} onChange={changeInputPrice}/>
                        </div>
                        <div style={{display: "block", marginBottom: "1em"}}>
                            <div style={{display: "inline-block", width: "150px", fontWeight: "bold", fontSize: "12px"}}>
                                Berat Buah (Satuan Gram)
                            </div>          
                            <input required style={{display: "inline-block"}} type="number" min="0" name="berat" value={inputForm.weight} onChange={changeInputWeight}/>
                        </div>
                        <button style={{background: "white", borderRadius: "20px", textDecoration: "none", color: "black", cursor: "pointer"}}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FruitForm