import React from 'react'

const Footer = () => {
    return (

        <footer className="container-fluid bg-transparent">

            <div className="row  d-flex justify-content-center bg-transparent">

                <div className="col-4  d-flex justify-content-center align-items-center">Tienes preguntas?</div>

                <div className="col-4  d-flex flex-column justify-content-center align-items-center gap-2">

                    <li>Cita y Recepcion</li>
                    <li>Viaje y estadia</li>
                    <li>Listas de regalos</li>
                    <li>Confirmar asistecina</li>
                </div>


                <div className="col-4 d-flex justify-content-center align-items-center">Compartir</div>


            </div>



            <div className="row  d-flex justify-content-center align-items-center bg-transparent  ">

                <div className="col-4 d-flex justify-content-center align-items-center ">Enviar un e-mail</div>

                <div className="col-4 d-flex justify-content-center align-items-center">Hecho con React Js</div>

                <div className="col-4 d-flex justify-content-center align-items-center ">#SA2025</div>


            </div>


        </footer>
    )
}

export default Footer