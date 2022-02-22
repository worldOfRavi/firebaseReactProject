import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const[show, setShow] = useState(false);
  return (
    <>
    <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand" href="#">Ravi's World</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show" : ""}`} >
    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
      </ul>
      <form className="d-flex btn-container">
      <button className="btn btn-style ">Sign up</button>
        <button className="btn btn-style btn-styled-border">Log in</button>
      </form>
    </div>
  </div>
</nav>
</section>
    </>
  )
}

export default Navbar