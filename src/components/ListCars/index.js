import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getListCars } from "../../actions/carsAction"
import Cars from "../../reducers/cars"

const ListKontak = () =>{
    const {getListCarsResult,getListCarsLoading,getListCarsError} = useSelector((state) => state.CarsReducer)

    const dispatch = useDispatch()

 
    useEffect(() =>{
        //panggil action getListKontak
        console.log("1. use effect component did mount");
        dispatch(getListCars())

    },[dispatch])

    return (
        <div className="container-fluid" style={{ padding:'100px'}}>
            <div className="row d-flex justify-content-center" id="cars-container">
            {getListCarsResult ? (
                getListCarsResult.map((car) => {
                    return (
                            <div className="col-md-4" key={car.id}>
                                <div className="card mb-3">
                                    <img src={car.image} className="card-img-top" height="350" alt={car.manufacture}/>
                                    <div className="card-body">
                                        <p className="card-text">{car.model}</p>
                                        <h5 className="card-title">Rp.{car.rentPerDay} / Hari</h5>
                                        <p className="card-text">{car.description}</p>
                                        <p className="card-text"><img src="/asset/fi_users.png" className="me-2" alt="Users"/>{car.capacity}</p>
                                        <p className="card-text"><img src="asset/fi_settings.png" className="me-2" alt="Transmission"/>{car.transmission}</p>
                                        <p className="card-text"><img src="asset/fi_calendar.png" className="me-2" alt="Calender"/>{car.year}</p>
                                        <a href="/" className="btn btn-success d-flex justify-content-center">Pilih Mobil</a>
                                    </div>
                                </div>
                            </div>
                    )
                })
            ) : getListCarsLoading ? (
                <p>Loading . . . </p>
            ) : (
                <p>{getListCarsError ? getListCarsError : "Data Kosong"}</p>
            )}
            </div>
        </div>
      );
}

export default ListKontak