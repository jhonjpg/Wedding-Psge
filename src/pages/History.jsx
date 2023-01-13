import React,{useRef, useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Navbars from '../components/Navbars'
import { useObserver } from '../Hooks/useObserver'


const History = () => {



  const start = useRef()

  const end = useRef()


  const [marcas, setmarcas] = useState("");

  const [marco, setmarco] = useState("");




  const [Visible, setVisible] = useState(false)


  const allClass = `all-start  ${Visible ? "all-start-p" : ""}`

  const histClass = `history-pic  ${Visible ? "history-picture" : ""}`

  


  const entr = useObserver(start, { rootMargin: "100px" })
  const animatio = useObserver(start,{ rootMargin: "0" })

  
  
  
  
  useEffect(() => {
    
    
    if (!entr) return;
    
    if (entr.isIntersecting) {
      
      setmarcas(entr.target.dataset.src)
      
    }
    
  }, [entr, { rootMargin: "0" }])
  
  const entr2 = useObserver( end, { rootMargin: "100px" })
  const animatio2 = useObserver( end,{ rootMargin: "0" })


  useEffect(() => {


    if (!entr2) return;

    if (entr2.isIntersecting) {

      setmarco(entr2.target.dataset.src)

    }

  }, [entr2, { rootMargin: "0" }])



  useEffect(() => {
    if (animatio2?.isIntersecting) {

      setVisible(true)
    }


  }, [animatio2]);


  useEffect(() => {
    if (animatio?.isIntersecting) {

      setVisible(true)
    }


  }, [animatio]);




  return (

    <>

<Navbars/>

<section className="d-flex flex-column  p-5 ">


<div  className="articulo">

<h2 className="w-100 d-flex flex-column justify-content-center align-items-center">Como todo Empezo</h2>



<div  ref={start}  className={allClass} ></div>


<h6>"La vi al otro lado del bar y no pude dejar de mirarla hasta que me animé a hablarle".
<p>— Antoine</p> </h6>


<h5>"Hicimos contacto visual en un momento y me hipnotizó esa sonrisa adictiva que tiene".
<p>— Soria</p>    </h5>




<div className="history">


<div className="w-50 h-auto d-flex flex-column justify-content-center align-items-center">

<div ref={end} className={histClass}></div>

</div>


<div className="w-50 d-flex flex-column justify-content-center align-items-center p-4">

<p className=" w-76 fs-3 text-start ">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis earum vitae ipsa vero. Enim quo minima, 
architecto doloribus quos modi fugiat molestias est maiores labore earum laboriosam totam sit iste.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis sed qui porro doloremque doloribus asperiores voluptate deserunt nesciunt, aut inventore ea, 
quis id. Commodi magni nihil nesciunt nisi necessitatibus nam!
</p>


</div>


</div>

</div>

<aside className="w-100 d-flex flex-column justify-content-center align-items-center mt-5 gap-2 ">

  <h2 className="w-100 text-center fs-8">El resto es historia conocida</h2>


  <p className="w-50 text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quae debitis laudantium fugiat. Obcaecati dicta vero voluptates ratione iure nesciunt, eum, 
  corporis commodi molestias amet sed incidunt, eveniet deleniti molestiae!
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur totam eos dolorem minus incidunt numquam assumenda eveniet hic voluptatem natus magni, consequuntur perferendis ab alias recusandae laudantium saepe reiciendis molestiae?
  
  </p>

  <div id="slide" className="">

<div id="carouselExampleRide" className="carousel slide w-50 justify-content-center align-items-center" data-bs-ride="true">

<div className="carousel-inner overflow-hidden w-100 h-100 p-5">


    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/1777846/pexels-photo-1777846.jpeg?auto=compress&cs=tinysrgb&w=1600" className=" " alt="..."/>
    </div>

    <div className="carousel-item overflow-hidden">
      <img src="https://images.pexels.com/photos/2403568/pexels-photo-2403568.jpeg?auto=compress&cs=tinysrgb&w=1600" className=" " alt="..."/>
    </div>

    <div className="carousel-item overflow-hidden bg-primay">
      <img src="https://images.pexels.com/photos/1439261/pexels-photo-1439261.jpeg?auto=compress&cs=tinysrgb&w=1600" className=" " alt="..."/>
    </div>

  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>

</aside>


</section>

<Footer/>


    </>



  )
}

export default History