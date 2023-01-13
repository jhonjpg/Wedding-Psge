import React from 'react'
import Footer from '../components/Footer'
import Navbars from '../components/Navbars'

const Asistence = () => {
  return (


<>

<Navbars/>

<div id="asistHeight">

 <div id="foto" className=""></div>
</div>


<div className="formulario ">

  <h3 className="">Enlace de Soria y Antoine</h3>

<form className="w-75 d-flex flex-column">
  <div className="row mb-4">
    <div className="col bg-white">
      <div className="form-outline">
        <input type="text" id="form6Example1" className="form-control" />
        <label className="form-label" for="form6Example1"> Name</label>
      </div>
    </div>
    <div className="col bg-white">
      <div className="form-outline">
        <input type="text" id="form6Example2" className="form-control" />
        <label className="form-label" for="form6Example2"> Last Name</label>
      </div>
    </div>
  </div>

  <div className="form-outline mb-4">
    <input type="text" id="form6Example3" className="form-control" />
    <label className="form-label" for="form6Example3">Email</label>
  </div>

  <div className="form-outline mb-4">
    <input type="text" id="form6Example4" className="form-control" />
    <label className="form-label" for="form6Example4">Nombre de tus acompanantes</label>
  </div>

  <div className="form-outline mb-4">
    <input type="email" id="form6Example5" className="form-control" />
    <label className="form-label" for="form6Example5">tinenes alguna restriccion alimenticia</label>
  </div>

  

  <div className="form-outline mb-4">
    <textarea className="form-control" id="form6Example7" rows="4"></textarea>
    <label className="form-label" for="form6Example7">Preguntas o Comentarios</label>
  </div>


 

  <button type="submit" className=" d-flex  align-self-center btn btn-primary btn-block mb-4">Enviar</button>
</form>


</div>

<Footer/>

</>
  )
}

export default Asistence