import React, {useState} from 'react';
import WorkApi from './API/WorkApi';

const HowItWorks = () => {
    const [work, setWork] = useState(WorkApi);
    return (
        <>
            <section>
                <div className="work_container container">
                    <h1 className="main-heading text-center ">How does it work</h1>
                    <div className="row">
                        
                            {
                                work.map((curVal) => {
                                    return (
                                        <div key={curVal.id} className="col-12 col-lg-4 text-center work-container-subdiv">
                                        <i className={curVal.logo}></i>
                            <h2 className="sub-heading">{curVal.title}</h2>
                            <p className="main-hero-para w-100">{curVal.info}</p>
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

export default HowItWorks