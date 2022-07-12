import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid w-100 p-3" style={{backgroundColor : '#333', color: 'white'}}>
        <div className="container-fluid ">
            <div className="row d-flex">
                <div className="col-6">
                    <h1 className="text-start fw-bold ms-5">ReduxCart</h1>
                </div>
                <div className="col-6 text-end">
                    <button className="p-1 px-4 py-2 me-5 bg-transparent fs-5 text-center border border-success rounded" style={{color: 'cyan'}}>
                        My Cart <span className="fs-4 border border-primary px-3 ms-2 rounded-pill" style={{ background: "cyan", color: '#333'}}>1</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
