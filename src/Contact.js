import React, { useState } from 'react'

const Contact = () => {
    const [details, setDetails] = useState({
        firstName: "",
        lastName: '',
        phone: "",
        email: "",
        address: '',
        message: "",

    })
    const getDetails = (event) => {
        // let name = event.target.name;
        // let value = event.target.value;
        let { name, value } = event.target;
        setDetails({
            ...details,
            [name]: value
        })

    }
    // connect with firebse
    const submitDetails = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, address, message } = details;
        if (firstName && lastName && phone && email && address && message) {


            let res = await fetch("https://reactfirebaseproject-5e58b-default-rtdb.firebaseio.com/userDataRecord.json",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            firstName,
                            lastName,
                            phone,
                            email,
                            address,
                            message
                        }),
                });
            if (res) {
                alert('Data Stored');
                setDetails({
                    firstName: "",
                    lastName: '',
                    phone: "",
                    email: "",
                    address: '',
                    message: "",
                })
            }
            else {
                alert('please fill the data');
            }
        }
        else {
            alert('please fill the data');
        }

    }



    return (
        <>
            <section className="contanctUs-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-12 col-lg-5 contact-leftSide">
                                    <h1 className="main-heading">
                                        Connect With Our <br /> Sales Team.
                                    </h1>
                                    <p className="main-hero-para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim cum magnam animi?
                                    </p>
                                    <figure>
                                        <img src="./images/hero1.jpg" alt="contact us" className='img-fluid' />
                                    </figure>
                                </div>
                                <div className="col-12 col-lg-7 contact-rightside">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name="firstName" id=""
                                                    placeholder='First Name'
                                                    className='form-control'
                                                    value={details.firstName}
                                                    onChange={getDetails}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name="lastName" id=""
                                                    placeholder='Last name'
                                                    className='form-control'
                                                    value={details.lastName}
                                                    onChange={getDetails}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name="phone" id=""
                                                    placeholder='Phone No'
                                                    className='form-control'
                                                    value={details.phone}
                                                    onChange={getDetails}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name="email" id=""
                                                    placeholder='Email Id'
                                                    className='form-control'
                                                    value={details.email}
                                                    onChange={getDetails}
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input type="text"
                                                    name='address'
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Add Address'
                                                    value={details.address}
                                                    onChange={getDetails}
                                                />

                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input type="text"
                                                    name='message'
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Enter Your Message'
                                                    value={details.message}
                                                    onChange={getDetails}
                                                />

                                            </div>
                                        </div>
                                        <div class="form-check">
                                            <input className="form-check-input form-checkbox-style contact-input-field" type="checkbox" value="" id="flexCheckChecked" />
                                            <label className="form-check-label main-hero-para" for="flexCheckChecked">
                                                I agree that all the above details are correct
                                            </label>
                                        </div>
                                        <button type='submit' onClick={submitDetails} className="btn btn-style w-100">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact