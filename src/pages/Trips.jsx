import React from 'react'
import Footer from '../components/Footer'
import Navbars from '../components/Navbars'

const Trips = () => {
  return (


<>


<section>

  <Navbars/>


<div id="tripsHeight">


<h5>Viaje y estadia</h5>
<p>La mayoría de los eventos tendrán lugar cerca.</p>


</div>


<article className="container-fluid bg-transparent">

  <h1>Recomendaciones de Alojamiento </h1>

<div className="row  d-flex justify-content-center bg-transparent">

    <div className="col-4  d-flex flex-column pt-3 justify-content-start align-items-center gap-2">
      
      <h2 className="w-100 text-center text-black-50">Bed & Breakfast</h2>

      <h3 className="w-100 text-center text-black-50">Dinos si necesitas alojamiento. Estas son nuestras recomendaciones:</h3>     
    </div>


    <div className="col-4  d-flex flex-column pt-3 justify-content-start align-items-center gap-2">
      
      <h2 className="w-100 text-center text-black-50">Hotel</h2>

      <h3 className="w-100 text-center">THE ELK INN</h3>     
    </div>



    <div className="col-4  d-flex flex-column  pt-3 justify-content-start align-items-center gap-2">

    <h2 className="w-100 text-center text-black-50">Cabaña</h2>

<h3 className="w-100 text-center">Riverside Cottage

</h3>   
    
    
    </div>


</div>



<div className="row  d-flex justify-content-center align-items-center bg-transparent  ">

    <div className="col-4 d-flex justify-content-center align-items-center ">    
      <button className="bg-dark p-4 text-light">VER LOS ALOJAMIENTOS</button> 
    </div>

    <div className="col-4 d-flex justify-content-center ">
      
      
     <p className="w-50 "> Calle de Ejemplo, 123
Flagstaff, AZ 12345
(555) 555-5555</p>

</div>

    <div className="col-4 d-flex justify-content-center align-items-center ">
      
  <p className="d-block w-50 h-50">    Calle de Ejemplo, 123
Flagstaff, AZ 12345
(555) 555-5555</p>


</div>


</div>


</article>



</section>

<Footer/>


</>




    )
}

export default Trips