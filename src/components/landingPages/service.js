import React from 'react';

const Service = () =>{
    return(
        <div className="container mt-3" id="service">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img className="service p-4 m-5" src="asset/service.png" width="400" alt="Service"/>
          </div>
          <div className="col-md-6 mt-5 p-5">
            <h5>Best Car Rental for any kind of trip (Lokasi Mu)</h5>
            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis perferendis, temporibus quia dignissimos voluptatem iusto porro eius, commodi ea veritatis ullam nesciunt eos praesentium sapiente corporis! Debitis facilis veritatis adipisci?</p>
            <div className="my-3">
              <img src="asset/ceklis.png" className="me-3" style={{width: '24px'}}/>
              Sewa Mobil Dengan Supir di Bali 12 Jam
          </div>
          <div className="my-3">
              <img src="asset/ceklis.png" className="me-3" style={{width: '24px'}}/>
              Sewa Mobil Lepas Kunci di Bali 24 Jam
          </div>
          <div className="my-3">
              <img src="asset/ceklis.png" className="me-3" style={{width: '24px'}}/>
              Sewa Mobil Jangka Panjang Bulanan
          </div>
          <div className="my-3">
              <img src="asset/ceklis.png" className="me-3" style={{width: '24px'}}/>
              Gratis Antar - Jemput Mobil di Bandara
          </div>
          <div className="my-3">
              <img src="asset/ceklis.png" className="me-3" style={{width: '24px'}}/>
              Layanan Airport Transfer / Drop In Out
          </div>
      </div>
          </div>
        </div>
    )
}

export default Service