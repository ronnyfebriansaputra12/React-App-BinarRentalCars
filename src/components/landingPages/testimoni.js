import React from 'react';

const Testimoni = () =>{
    return(
        <section id="testimoni" className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
{/*                 
              <div className="carousel js-flickity d-none d-md-block"
              data-flickity-options='{ "wrapAround": true }'>
                <div className="carousel-cell">
                  <img src="asset/testi.png" alt="orange tree" />
                </div>
                <div className="carousel-cell">
                  <img src="asset/testi.png" alt="orange tree" />
                </div>
                <div className="carousel-cell">
                  <img src="asset/testi.png" alt="orange tree" />
                </div>
              </div> */}
  
                                            {/* d-lg-none d-lg-block */}
              <div className="container pt-5 ">
                <h2 className="h2 text-center">Testimonial</h2>
                <p className="text-center py-3">Berbagai review positif dari para pelanggan kami</p>
                <div id="carouselExampleControls" className="carousel slide mx-auto" style={{maxWidth: '90%'}} data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active bg-aliceblue">
                            <div className="row mx-4 my-5">
                                <div className="col-xl-2 m-auto">
                                    <img src="asset/profile.png" className="d-block rounded-circle testimonial-img m-auto" alt="Person"/>
                                </div>
                                <div className="col-xl-10">
                                    <img src="asset/Rate.png" className="testimonial-rating" alt="Rating"/>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                    <p className="testimonial-name">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item bg-aliceblue">
                            <div className="row mx-4 my-5">
                                <div className="col-xl-2 m-auto">
                                    <img src="asset/profile.png" className="d-block rounded-circle testimonial-img m-auto" alt="Person"/>
                                </div>
                                <div className="col-xl-10">
                                    <img src="asset/Rate.png" className="testimonial-rating" alt="Rating"/>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””</p>
                                    <p className="testimonial-name">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item bg-aliceblue">
                            <div className="row mx-4 my-5">
                                <div className="col-xl-2 m-auto">
                                    <img src="asset/profile.png" className="d-block rounded-circle testimonial-img m-auto" alt="Person"/>
                                </div>
                                <div className="col-xl-10">
                                    <img src="asset/Rate.png" className="testimonial-rating" alt="Rating"/>
                                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod””</p>
                                    <p className="testimonial-name">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                    <div className="text-center">
                        <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" className="testimonial-media">&#8249;</a>
                        <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" className="testimonial-media">&#8250;</a>
                    </div>
                </div>
            </div>
  
            </div>
            <div className="col-md-1"></div>
        </div>
      </div>
  
    </section>
   
    )
}

export default Testimoni