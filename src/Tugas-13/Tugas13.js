import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ApiBuah = () => {
    // create states
    const [dataBuah, setDataBuah] = useState(null)
    const [input, setInput] = useState({
        name: '',
        weight: '',
        price: '',
        id: null
    })

    // using useEffect to get get the data from server (REST API)
    useEffect(() => {
        if (dataBuah === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDataBuah(res.data)
                console.log(res.data)
            })
        }
    }, [dataBuah])

    // handle for type in input form (name, weight, price)
    const changeInputName = (event) => {
        var value = event.target.value
        setInput({
            ...input, name: value,
        })
    }

    const changeInputWeight = (event) => {
        var value = event.target.value
        setInput({
            ...input, weight: value,
        })
    }

    const changeInputPrice = (event) => {
        var value = event.target.value
        setInput({
            ...input, price: value,
        })
    }

    const submitForm = (event) => {
        event.preventDefault()
        var idFruit = input.id
        if (idFruit === null) {
            // add new data
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`, input)
            .then(res => {
                var data = res.data
                setDataBuah([...dataBuah, input])
                setInput({
                    id: null,
                    name: '',
                    weight: '',
                    price: '',
                })
            })
        } else {
            // update data
            axios.put(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`, input)
            .then(res => {
                var newDataBuah = dataBuah.map(x => {
                    if (x.id === input.id) {
                        x.name = input.name
                        x.weight = input.weight
                        x.price = input.price
                    }
                    return x
                })
                setDataBuah(newDataBuah)
                setInput({
                    id: null,
                    name: '',
                    weight: '',
                    price: '',
                })
            })
        }
    }

    const deleteForm = (event) => {
        var idFruit = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/fruits/${input.id}`)
        .then(res => {
            var newDataBuah = dataBuah.filter(x => x.id !== idFruit)
            setDataBuah(newDataBuah)
        })
    }

    const editForm = (event) => {
        var idFruit = parseInt(event.target.value)
        var buah = dataBuah.find(x => x.id === idFruit)

        setInput({
            id: idFruit,
            name: buah.name,
            weight: buah.weight,
            price: buah.price,
        })
    }

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
        <>
            <div style={divStyles}>
                {/* Table Buah */}
                <h1 style={{textAlign : "center"}}> Daftar Harga Buah</h1>
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

                <br/>

                {/* Form */}
                <div style={{width: "50%", margin: "0 auto", marginTop: "20px", border: "1px solid #000", borderRadius: "20px", marginBottom: "20px"}}>
                    <h1 style={{textAlign : "center"}}>Form Pembelian Buah</h1>
                    <div style={{padding: "20px", paddingTop: "0px"}}>
                        <form onSubmit={submitForm}>
                            <div style={{display: "block", marginBottom: "1em"}}>
                                <div style={{display: "inline-block", width: "150px", fontWeight: "bold", fontSize: "16px"}}>
                                    Nama Buah
                                </div>          
                                <input required style={{display: "inline-block"}} type="text" name="name" value={input.name} onChange={changeInputName}/>
                            </div>
                            <div style={{display: "block", marginBottom: "1em"}}>
                                <div style={{display: "inline-block", width: "150px", fontWeight: "bold", fontSize: "16px"}}>
                                    Harga Buah
                                </div>          
                                <input required style={{display: "inline-block"}} type="number" min="0" name="harga" value={input.price} onChange={changeInputPrice}/>
                            </div>
                            <div style={{display: "block", marginBottom: "1em"}}>
                                <div style={{display: "inline-block", width: "150px", fontWeight: "bold", fontSize: "12px"}}>
                                    Berat Buah (Satuan Gram)
                                </div>          
                                <input required style={{display: "inline-block"}} type="number" min="0" name="berat" value={input.weight} onChange={changeInputWeight}/>
                            </div>
                            <button style={{background: "white", borderRadius: "20px", textDecoration: "none", color: "black", cursor: "pointer"}}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

const Tugas13 = () => {
    return (
        <>
            <ApiBuah />
        </>
    )
}

export default Tugas13;