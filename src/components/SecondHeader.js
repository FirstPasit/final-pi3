import React from 'react'

const SecondHeader = ({ toggleModal, nbOfProducts }) => {
  return (
    <header className='header'>
        <div className='container'>
            <h3>UTCC Book List ({nbOfProducts})</h3>
            <button onClick={() => toggleModal(true)} className='btn'>
                <i className='bi bi-plus-square'></i> Add New Product
            </button>
        </div>
    </header>
  )
}

export default SecondHeader