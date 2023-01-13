import React,{useState} from 'react'
import { Link } from 'react-router-dom';


const Navbars = () => {



  const [menu, setmenu] = useState(true);



  const change = () => {


    if (window.scrollY >= 80) {


      setmenu(false)


    } else {

      setmenu(true)

    }


  }


  window.addEventListener("scroll", change)



  return (

    <div className="d-flex w-100 h-100 ">


  
    <nav className=" container-fluid position-fixed p-0 navbar-expand navbar-light ">

    <div className={menu ? "navbar" : "navbar active"}  >
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarLeftAlignExample"
        aria-controls="navbarLeftAlignExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
  
      <div className=" d-flex justify-content-between  navbar-collapse " id="navbarLeftAlignExample">
  
        <ul  className="navbar-nav  mb-2 gap-3 mb-lg-0 w-25"  >
          <li className="nav-item">
            <Link className="nav-link active text-light" aria-current="page" to="/history">Nuestra history</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/trips">Viaje estadia</Link>
  
          </li>
          
          <li className="nav-item">

            <Link className="nav-link  text-light" to="/list">Lista de regalos</Link>

          </li>
        </ul>
  
        <h1 > <Link className="text-light text-decoration-none" to="/"> S&A 14.10.25</Link></h1>
  
        <div className="d-flex  justify-content-center w-25">
  
        <button className="p-2 border-0 bg-light "> <Link className="text-dark text-decoration-none" to="/asistence">Confirmar Asistencia </Link></button>
  
        </div>
  
      </div>
  
  
    </div>
  </nav> 
  
  </div>
  
  
   )
}

export default Navbars