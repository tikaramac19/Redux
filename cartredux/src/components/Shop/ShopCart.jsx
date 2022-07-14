import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
const ShopCart = () => {
  return (
    <>
    
    <div className="container-fluid">
        <div className="container d-flex justify-content-center flex-column border border-secondary mt-5 bg-dark text-white" style={{width: '30%', }}>
            <h1 className='fw-4 fs-3 fw-bold text-start float-start mt-3'>Your Shopping Cart</h1>
            <div className="d-flex flex-column border  p-3 mb-4" style={{backgroundColor : "#333"}}>
                <div className="d-flex flex-row justify-content-between mb-3">
                    <span className="fw-bold fs-2"> Test Item</span>
                    <span className="fs-2">$12.00 <span className="fs-4"> ($6.00/item)</span></span>
                </div>
                <div className="d-flex flex-row justify-content-between"> 
                
                    <span className="fw-bold fs-3"> x 4 </span>
                    <span >
                        <button className='button button-dark px-2 border border-success bg-transparent text-white' >-</button>
                        <button className='button button-dark px-2 border border-danger bg-transparent text-white'>+</button>

                    </span>
                
                </div>
            </div>
        </div>

        <div className="text-center fs-2 fw-bold pt-4 ">Buy your Favourite products </div>

        <div className="container d-flex flex-row justify-content-center  pt-3 " style={{width: "60%", border: "2px solid"}}>
            <div style={{display:'flex', justifyContent: "space-between"}}>
                <div className='fw-bold fs-3 '>Test</div>
                <div className='fw-bold fs-3 border rounded-pill bg-dark px-4 text-white'>$7.00</div>
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}

export default ShopCart