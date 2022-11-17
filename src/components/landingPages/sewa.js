import React from 'react';

const Sewa = () =>{
    return(
        <div className="container mt-5 mb-5" id="sewa">
            <div className="row d-flex justify-content-center">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="card text-center"  style={{backgroundColor: '#0b00a3', color: 'white'}}>
                        <div className="card-body p-5">
                        <h3 className="card-title">Sewa Mobil di (Lokasimu) Sekarang</h3>
                        <p className="card-text mt-3 p-4" style={{fontSize: '10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illum eius nemo nulla et minus vitae, amet fugiat eligendi voluptates!amet fugiat eligendi voluptates!amet fugiat eligendi voluptates!</p>
                        <a href="#" className="btn btn-success mt-3">Mulai Sewa Mobil</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}

export default Sewa