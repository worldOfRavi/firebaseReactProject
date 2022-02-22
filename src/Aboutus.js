import React, { useState } from 'react'
import HowToUse from "./API/HowToUse"

const Aboutus = () => {
    const [useIt, setUseIt] = useState(HowToUse)
    return (
        <>
            <section className="common-section our-services">
                <div className="container">
                    <div className="row how_to_use">
                        <div className="col-12 col-lg-5 text-center our_service_left_side_img">
                            <img src="./images/hero3.jpg" alt="about Us" className='img-fluid' />
                        </div>
                        <div className="col-12 col-lg-7 our_service_list">
                            <h3 className="mini-title">
                                --Available @ Google and ios store only
                            </h3>
                            <h1 className="main-heading">
                                How to use the App?
                            </h1>

                            {
                                useIt.map((curVal) => {
                                    const{id, title, info} = curVal;
                                    return (
                                        <>
                                            <div className="row our_service_info" key={id}>
                                                <div className="col-1 our_service_number">{id}</div>
                                                <div className="col-10 our_service_data">
                                                    <h2>{title}</h2>
                                                    <p className="main-hero-para">
                                                        {info}
                                                    </p>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }


                            <br />
                            <button className="btn btn-style btn-styled-border">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* about us second part */}
            <section className="common-section our-services services_right_side">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-12 col-lg-7 right_side_content">
                            <h3 className="mini-title">
                                --support in any language
                            </h3>
                            <h1 className="main-heading">
                            World class support is <br /> available 24/7
                            </h1>

                            {
                                useIt.map((curVal) => {
                                    const{id, title, info} = curVal;
                                    return (
                                        <>
                                            <div className="row our_service_info" key={id}>
                                                <div className="col-1 our_service_number">{id}</div>
                                                <div className="col-10 our_service_data">
                                                    <h2>{title}</h2>
                                                    <p className="main-hero-para">
                                                        {info}
                                                    </p>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }


                            <br />
                            <button className="btn btn-style btn-styled-border">Learn More</button>
                        </div>
                        <div className="col-12 col-lg-5 our_service_right_side_img">
                            <img src="./images/callcenter.jpg" alt="about Us" className='img-fluid callCenter' />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Aboutus