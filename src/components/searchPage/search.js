import ListCars from "../ListCars"
const Search = () =>{
    return(
      <>
        <section id="search">
          <div className="container px-lg-5">
            <div className="row">
              <div className="d-lg-flex py-4 px-3 rounded-3 shadow bg-white">
                      <div className="col mt-2">
                          <label className="label">Tipe Driver</label>
                          <select className="form-select" id="tipe-driver" style={{width: '95%'}}>
                            <option value="">Pilih Tipe Driver</option>
                            <option value="Ds">Dengan Sopir</option>
                            <option value="Ts">Tanpa Sopir (Lepas Tangan)</option>
                          </select>
                      </div>
                      <div className="col mt-2">
                        <label className="label">Tanggal</label>
                        <div className="input-group" style={{width: '95%'}}>
                          <input type="date" name="date" className="form-control" id="select-tanggal" placeholder="Pilih Tanggal"/>
                        </div>
                      </div>
                      <div className="col mt-2">
                        <label className="label">Waktu Jemput/Ambil</label>
                        <div className="input-group" style={{width: '95%'}}>
                          <input type="time" name="time" id="select-jam" className="form-control" placeholder="Pilih Tanggal"/>
                        </div>
                      </div>

                      <div className="col mt-2">
                        <label className="label">Jumlah Penumpang</label>
                        <div className="input-group" style={{width: '95%'}}>
                          <input type="text" id="select-jml" className="form-control" placeholder="Jumlah Penumpang"/>
                        </div>
                      </div>
                      <div>
                        <div className="col">
                          <button className="btn btn-sm btn-success p-2 my-4 mx-3" id="load-btn"> Cari Mobil</button>
                          <button className="btn btn-sm btn-outline-danger p-2 my-4 mx-3" id="clear-btn"> Clear Mobil</button>
                        </div>
                      </div>
              </div>
            </div>    
          </div>
      </section>
      <ListCars/>
    </>
    )
}

export default Search