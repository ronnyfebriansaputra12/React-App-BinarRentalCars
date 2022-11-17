import React from 'react'; 

const Header = () =>{
    return(
        <header className="masthead text-dark" style={{backgroundColor: '#f1f3ff'}}>
        <div className="container mt-5">
          <br /><br />
          <div className="row">
            <div className="col-md-6 col-sm-12 mb-4">
              <h1>Sewa & Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum hic ducimus minus ullam beatae cupiditate ex distinctio repellendus atque dolorum debitis reiciendis, suscipit necessitatibus voluptate itaque nihil eveniet
                tenetur quidem!
              </p>
            </div>
            <div className="col-md-6">
              <img className="mobil" width="612" src="asset/img_car.png" />
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header