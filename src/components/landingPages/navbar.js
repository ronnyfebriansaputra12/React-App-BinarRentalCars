const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-expand-sm fixed-top" style={{backgroundColor: '#f1f3ff'}}>
        <div className="container">
          <a className="navbar-brand" href="#" style={{backgroundColor:'#0b00a3' , color: '#0b00a3'}}>Binarrrrrrr</a>
  
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
  
          <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Binar Rental Car</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#service">Our Service</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#whyus">Why Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#testimoni">Testimonial</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sewa">Sewa</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#faq">FAQ</a>
                  </li>
                  <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-success my-2 my-md-0" type="submit">Register</button>
                  </form>
                </ul>
              </div>
            </div>
        </div>
      </nav>
    )
}

export default Navbar