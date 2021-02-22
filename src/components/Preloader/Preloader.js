import React from 'react'
import './preloader.css'

const Preloader = () => {
    return(
        <div style={{flexShrink: '1', }} className="d-flex justify-content-center mt-5">
            <div className="spinner-border text-success size" role="status">
            </div>
        </div>
    )
}

export default Preloader