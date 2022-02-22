import React from 'react'

const Header = () => {
  return (
    <>
        <header>
            <section className="container main-hero-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
                        <h1 className="display-2">
                            Online Payment Mode <br />
                            Easy For You...
                        </h1>
                        <p className="main-hero-para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptas, nisi labore nam reprehenderit recusandae deserunt iure iste voluptatem, maiores odio ipsam accusantium repudiandae non dolore soluta. Facilis, earum incidunt?
                        </p>
                        <h3>Get early access for you</h3>
                        <div className="input-group mt-3 input_form">
                            <input type="email" placeholder='example@gamil.com' className='rounded-pill w-75 me-3 from-control-text p-2 '/>
                            <div className="input-group-button btn rounded-pill">
                                Get it now
                            </div>
                        </div>
                    </div>
                    {/* main header right side */}
                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main_hero_section_images order-md-first order-sm-first">
                    <img src="./images/hero1.jpg" alt="hero_img" className='img-fluid' />
                    <img src="./images/hero4.jpg" alt="hero_img" className='img-fluid main-hero-img2' />
                        
                    </div>
                </div>
            </section>
        </header>
    </>
  )
}

export default Header