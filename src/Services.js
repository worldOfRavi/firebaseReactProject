import React,{useState} from 'react'
import Serviceapi from './API/ServicesApi'

const Services = () => {
    const[services, SetServices] = useState(Serviceapi);
  return (
    <>
        <section className="our_services">
            <div className="container services_container">
                <h1 className="main-heading text-center">
                    How to send money
                </h1>
                <div className="row gx-2 gy-2">
                {
                    services.map((curVal)=>{
                        const{id, logo, title, info} = curVal;
                        return(
                            <div className="col-12 col-lg-4 col-xxl-4 service_content" key={id} >
                        <i className={`font-style ${logo}`}></i>
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                    </div>
                        )
                    })
                }
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Services