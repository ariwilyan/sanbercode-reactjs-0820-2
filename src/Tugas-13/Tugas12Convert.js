import React, {useState, useEffect} from 'react';

const Buah = () => {
    const [itemBuah, setItemBuah] = useState([
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
    ])
    const [namaBuah, setNamaBuah] = useState("")
    const [hargaBuah, setHargaBuah] = useState("")
    const [beratBuah, setBeratBuah] = useState("")
    const [indexBuah, setIndexBuah] = useState(-1)

    // event handler for CRUD
    const submitForm = (event) => {
        event.preventDefault()
        var indeks = indexBuah
        var namaItem = namaBuah
        var hargaItem = parseInt(hargaBuah)
        var beratItem = parseFloat(parseInt(beratBuah)/1000)
        var buah = {nama: namaItem, harga: hargaItem, berat: beratItem}
        
        if (indeks === -1) {
            // add new item
            setItemBuah([...itemBuah, buah])
            setNamaBuah("")
            setHargaBuah("")
            setBeratBuah("")
            setIndexBuah(-1)
        } else {
            // update data based on choose index (id)
            var newItemBuah = itemBuah
            newItemBuah[indeks] = buah

            // do the update data
            setItemBuah([...newItemBuah])
            setNamaBuah("")
            setHargaBuah("")
            setBeratBuah("")
            setIndexBuah(-1)
        }
    }

    const deleteForm = (event) => {
        var index = event.target.value
        var item = itemBuah
        item.splice(index, 1) // cut the data based on index (id) just only 1 data

        setItemBuah([...item])
        setNamaBuah("")
        setHargaBuah("")
        setBeratBuah("")
        setIndexBuah(-1)
    }

    const editForm = (event) => {
        var index = event.target.value
        var editNamaBuah = itemBuah[index].nama
        var editHargaBuah = itemBuah[index].harga
        var editBeratBuah = itemBuah[index].berat

        setNamaBuah(editNamaBuah)
        setHargaBuah(editHargaBuah)
        setBeratBuah(editBeratBuah)
        setIndexBuah(index)
    }

    // event handler for input in input form text
    const changeInputNama = (event) => {
        var value = event.target.value
        setNamaBuah(value)
    }

    const changeInputHarga = (event) => {
        var value = event.target.value
        setHargaBuah(value)
    }

    const changeInputBerat = (event) => {
        var value = event.target.value
        setBeratBuah(value)
    }

    // main function
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
                        {itemBuah.map((val, index)=> {
                            return (
                                <>
                                    <tr key={index}>
                                        <td style={{padding: "10px"}}>{val.nama}</td>
                                        <td style={{padding: "10px"}}>{val.harga}</td>
                                        <td style={{padding: "10px"}}>{val.berat/1000} kg</td>
                                        <td style={{width: "20%", padding: "10px"}}>
                                            <button value={index} style={{marginLeft: "10%", background: "#2ded60", cursor: "pointer"}} onClick={editForm}>Edit</button> {/* style={{marginRight: "5px"}} */}
                                            <button value={index} style={{marginLeft: "15px", background: "#ff5757", cursor: "pointer"}} onClick={deleteForm}>Delete</button>
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
                                <input required style={{display: "inline-block"}} type="text" name="name" value={namaBuah} onChange={changeInputNama}/>
                            </div>
                            <div style={{display: "block", marginBottom: "1em"}}>
                                <div style={{display: "inline-block", width: "150px", fontWeight: "bold", fontSize: "16px"}}>
                                    Harga Buah
                                </div>          
                                <input required style={{display: "inline-block"}} type="number" min="0" name="harga" value={hargaBuah} onChange={changeInputHarga}/>
                            </div>
                            <div style={{display: "block", marginBottom: "1em"}}>
                                <div style={{display: "inline-block", width: "150px", fontWeight: "bold", fontSize: "12px"}}>
                                    Berat Buah (Satuan Gram)
                                </div>          
                                <input required style={{display: "inline-block"}} type="number" min="0" name="berat" value={beratBuah} onChange={changeInputBerat}/>
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

const Tugas12Convert = () => {
    return (
        <>
            <Buah />
        </>
    )
}

export default Tugas12Convert;