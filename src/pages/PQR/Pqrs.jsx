//React-Hooks
import { useEffect } from "react";
//Framer motion
import { motion } from "framer-motion";
//Styles
import '../static/styles/pqrs.css'
//Images
import bullPqrs from '../static/img/pqrs/pqrsBull.png'
//Components
import FormPQR from "../../components/formPQR";
import { ContactFloat } from "../../components/contactFloat";

function Pqrs(){

    useEffect(() => {
        document.title = "PQRS"
    })

    return(
        <section className="containerPQRS">
            <ContactFloat />
            <div className="containerBullPqrs">
                <motion.div
                    initial = {{scale : 0}}                  
                    animate = {{rotate : 360, scale : 1}}
                    transition={{
                        type : 'spring',
                        stiffness : 450,
                        damping : 90
                    }}
                >                    
                    <img src={bullPqrs} alt="BullPqrs" />
                </motion.div>
            </div>

            <div className="containerInfoPQRS">
                <div className="containerTextPQRS">
                    <p>
                        <span>¿Qué es una petición?</span>
                        <br />
                        Es el requerimiento que se realiza en nombre propio, apoderado, representante o entidad para solicitar el reconocimiento de un derecho, la prestación de un servicio, pedir información, documentos o copias, formular consultas y obtener respuesta oportuna y de fondo.
                        <br />
                        <br />
                        <span>¿Qué es una queja?</span>
                        <br />
                        Es la manifestación de desacuerdo, insatisfacción o descontento al recibir una atención inadecuada por parte de un servidor público.
                        <br />
                        <br />
                        <span>¿Qué es un reclamo?</span>
                        <br />
                        Es la exigencia ante la ausencia o indebida prestación de un servicio o la falta de atención de una petición.
                        <br />
                        <br />
                        <span>¿Qué es una denuncia?</span>
                        <br />
                        Es dar a conocer un acto sospechoso, posible hecho de corrupción o riesgo de fraude que esté realizando una persona a nombre de la entidad o dentro de ella.
                        <br />
                        <br />
                        <span>¿Qué es una sugerencia?</span>
                        <br />
                        Es la manifestación de una propuesta para plantear un cambio o mejora de un servicio, trámite o proceso.
                        <br />
                        <br />
                        <span>¿Qué es una felicitación o agradecimiento?</span>
                        <br />                        
                        Es la manifestación positiva o de gratitud frente al servicio o gestión de la entidad.
                    </p>
                </div>
                <div className="containerFormPqr">
                    <FormPQR />
                </div>
            </div>

        </section>
    )

}

export default Pqrs