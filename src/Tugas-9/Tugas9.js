import React from 'react';

class ContainerHeader extends React.Component {
  render() {
    return (
      <>
        <div className="container-header">
          <div className="container-header-pelanggan">
            Nama Pelanggan
          </div>
          <input className="container-header-input" type="text" name="name" />
        </div>
      </>
    )
  }
}

var buah = [
  {name: "Semangka", value: "semangka"},
  {name: "Jeruk", value: "jeruk"},
  {name: "Nanas", value: "nanas"},
  {name: "Salak", value: "salak"},
  {name: "Anggur", value: "anggur"},
]

class ContainerContent extends React.Component {
  render() {
    return (
      <>
        <div className="container-content">
          <div className="container-content-header">
            Daftar Item
          </div>
          <div className="container-content-form">
            {buah.map(el=> {
              return (
                <>
                  <input type="checkbox" name={el.value} value={el.value} />
                  <label>{el.name}</label><br/>
                </>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <>
        <button className="button">
          <a href="#" className="button-a">Kirim</a>
        </button>
      </>
    )
  }
}

class Tugas9 extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          <h1>Form Pembelian Buah</h1>
          <div className="container-header-root">
            <ContainerHeader />
            <ContainerContent />
            <Button />
          </div>
        </div>
      </>
    )
  }
}

export default Tugas9;