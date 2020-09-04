import React from 'react';

let dataHargaBuah = [
  {nama: "Semangka", harga: 10000, berat: 1000},
  {nama: "Anggur", harga: 40000, berat: 500},
  {nama: "Strawberry", harga: 30000, berat: 400},
  {nama: "Jeruk", harga: 30000, berat: 1000},
  {nama: "Mangga", harga: 30000, berat: 500}
]

class TableData extends React.Component {
  render() {
    return (
      <>
        {dataHargaBuah.map(el=> {
          return (
            <>
              <tr style={{backgroundColor: "#ff904d"}}>
                <td style={{width: "350px"}}>{el.nama}</td>
                <td style={{width: "200px"}}>{el.harga}</td>
                <td style={{width: "200px"}}>{el.berat / 1000} kg</td>
              </tr>
            </>
          )
        })}
      </>
    )
  }
}

class TableHead extends React.Component {
  render() {
    return (
      <>
        <tr style={{backgroundColor: "#bfbfbf"}}>
          <th style={{width: "350px"}}>Nama</th>
          <th style={{width: "200px"}}>Harga</th>
          <th style={{width: "200px"}}>Berat</th>
        </tr>
      </>
    )
  }
}

class Table extends React.Component {
  render() {
    return (
      <>
        <table border="2" style={{margin: "3px 1px 5px 1px"}}>
          <TableHead />
          <TableData />
        </table>
      </>
    )
  }
}

class Tugas10 extends React.Component {
  render() {
    let divStyles = {
      margin: "0 auto",
      border: "0px solid black",
      width: "700px",
      backgroundColor: "white",
      boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)"
    }
    return (
      <>
        <div style={divStyles} className="main-table">
          <h1 style={{textAlign: "center", margin: "3px 0px 20px 0px"}}>Tabel Harga Buah</h1>
          <Table />
        </div>
      </>
    )
  }
}

export default Tugas10;