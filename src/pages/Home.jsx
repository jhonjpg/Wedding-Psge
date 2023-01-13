import React,{useRef, useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Navbars from '../components/Navbars'
import { useObserver } from '../Hooks/useObserver'


const Home = () => {



  const citas = useRef()

  const reception = useRef()




  const [marcas, setmarcas] = useState("");


  const [Visible, setVisible] = useState(false)


  const logoClass = `cita-p ${Visible ? "cita-p2" : ""}`
  const logoAClass = `reception-p ${Visible ? "reception-p2" : ""}`


  const entry = useObserver(citas, reception,  { rootMargin: "100px" })
  const animation = useObserver(citas, reception, { rootMargin: "0" })




  useEffect(() => {


    if (!entry) return;

    if (entry.isIntersecting) {

      setmarcas(entry.target.dataset.src)

    }

  }, [entry, { rootMargin: "0" }])


  useEffect(() => {
    if (animation?.isIntersecting) {

      setVisible(true)
    }


  }, [animation]);









  return (

<>




<Navbars/>

<div id="fullHeight">

  <p>Nos Casamos!</p>

  <h5>Jake y Jany</h5>

  <p >10.25.20</p>
</div>


<div ref={citas}  className="citas">

<div  className={logoClass} >


<img src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1600" className="object-fit-cover w-50 h-50 " alt="" />


</div>


<div className="d-flex flex-column justify-content-center align-items-center w-50 gap-4">

<h2 >Citas</h2>

<h3 >16:00</h3> 

<p >

Grace Church
Calle de Ejemplo, 123
Flagstaff, AZ 12345

Mapa

</p>
</div>


</div>




<div ref={citas} className="recepcion"  >

<div className={logoAClass}>


<img src="https://images.pexels.com/photos/1603884/pexels-photo-1603884.jpeg?auto=compress&cs=tinysrgb&w=1600" className="object-fit-cover w-50 h-50 " alt="" />


</div>


<div className="d-flex flex-column justify-content-center align-items-center w-50 gap-4">

<h2 >Recepcion</h2>

<h3 >16:30-22:00</h3> 

<p >

The Barrel Keg
Calle de Ejemplo, 123
Flagstaff, AZ 12345

Mapa

</p>
</div>


</div>


<div className="HowStart">
<h5 className="w-100 text-center">Ver como  empezo todo</h5>

<div className="d-flex h-25 w-100 justify-content-around align-items-center mb-5 ">
  
<hr />
<button className="w-25 bg-dark text-light text-center p-2">Nuestra Historia</button>
<hr />

</div>




<div  id="bottomPicture" >

  <p>Acompañanos</p>

  <h6>Esperamos que puedas acompañarnos!</h6>

  <button>Confirmar Asistencia</button>





</div>




<Footer/>

</div>


</>



  )
}

export default Home