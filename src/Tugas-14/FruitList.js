import React, {useContext} from "react"
import {FruitContext} from "./FruitContext"
import axios from 'axios'

const FruitList = () => {
    const [dataBuah, setDataBuah, inputForm, setInputForm] = useContext(FruitContext)

    const deleteForm = (event) => {
        var idFruit = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${inputForm.id}`)
        .then(res => {
            var newDataBuah = dataBuah.filter(x => x.id !== idFruit)
            setDataBuah([...newDataBuah])
        })
    }

    const editForm = (event) => {
        var idFruit = parseInt(event.target.value)
        var buah = dataBuah.find(x => x.id === idFruit)

        setInputForm({
            ...inputForm,
            id: idFruit,
            name: buah.name,
            weight: buah.weight,
            price: buah.price,
        })
    }

    return (
        <>
            {/* Table Buah */}
            <h1 style={{textAlign : "center"}}>Daftar Harga Buah</h1>
            <table style={{border: "1px solid", width: "60%", margin: "0 auto"}}> {/* width: 40% */}
                <thead style={{background: "#aaa"}}>
                    <tr>
                        <th style={{padding: "10px"}}>Nama</th>
                        <th style={{padding: "10px"}}>Harga</th>
                        <th style={{padding: "10px"}}>Berat</th>
                        <th style={{padding: "10px"}}>Aksi</th>
                    </tr>
                </thead>
                <tbody style={{background: "coral"}}>
                    {dataBuah !== null && dataBuah.map((item, index) => {
                        return (
                            <>
                                <tr key={index}>
                                    <td style={{padding: "10px"}}>{item.name}</td>
                                    <td style={{padding: "10px"}}>{item.price}</td>
                                    <td style={{padding: "10px"}}>{item.weight/1000} kg</td>
                                    <td style={{width: "20%", padding: "10px"}}>
                                        <button value={item.id} style={{marginLeft: "10%", background: "#2ded60", cursor: "pointer"}} onClick={editForm}>Edit</button> {/* style={{marginRight: "5px"}} */}
                                        <button value={item.id} style={{marginLeft: "15px", background: "#ff5757", cursor: "pointer"}} onClick={deleteForm}>Delete</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default FruitList