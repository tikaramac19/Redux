import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const ShopCart = () => {
  return (
    <>
    
    <div className="container-fluid">
        <div className="container d-flex justify-content-center flex-column border border-secondary mt-5 bg-dark text-white" style={{width: '30%'}}>
            <h1 className='fw-4 fs-3 fw-bold text-start float-start mt-3'>Your Shopping Cart</h1>
            <div className="d-flex flex-column border bg-secondary p-3 mb-4">
                <div className="d-flex flex-row justify-content-between mb-3">
                    <span className="fw-bold fs-2"> Test Item</span>
                    <span className="">$12.00 ($6.00/item)</span>
                </div>
                <div className="d-flex flex-row justify-content-between"> 
                
                    <span className="fw-bold fs-3"> x 4 </span>
                    <span >
                        <button className='button button-dark px-2 border border-dark bg-transparent '>-</button>
                        <button className='button button-dark px-2 border border-dark bg-transparent'>+</button>

                    </span>
                
                </div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default ShopCart