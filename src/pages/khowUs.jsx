//React-hooks
import { useEffect } from "react"
//Bull Image
import bullImage from './static/img/knowUs/bullKnowUs.png'
//Styles
import './static/styles/KhowUs.css'
//FramerMotion
import {motion} from 'framer-motion'
//components
import { ContactFloat } from "../components/contactFloat"

function KhowUs(){

    useEffect(() => {
        document.title = "Conocenos"
    })

    return(
        <section className="sectionKhowUs">       
            <ContactFloat />
            <div className="containerKhowUsLogo">
                <motion.div
                    initial = {{scale : 0}}                
                    animate = {{rotate : 360, scale : 1}}
                    transition={{
                        type : "spring",
                        stiffness : 450,
                        damping : 90
                    }}
                >
                    <img src = {bullImage} alt="bullKnow" />
                </motion.div>
            </div>
            <div className="infoKhowUs">
                <h2>
                    ¿Qu<span className="tildesFont">é</span> es Arsogam?
                </h2>
                <p>
                    La Asociación Regenerativa y Sostenible de GANADEROS en la AMAZONIA ARSOGAM, 
                    tiene como  objetivo promover y difundir modelos de ganadería a gran escala en 
                    las regiones, basadas en prácticas regenerativas que promueven el mejoramiento 
                    del suelo, la protección del medio ambiente, la conservación de la selva y el 
                    bienestar animal. Con ello logrando generar un impacto positivo tanto a nivel 
                    social como ambiental.  
                    A su vez, la asociación fomenta la colaboración entre ganaderos, instituciones y 
                    organizaciones no solo a nivel nacional si no internacional, para avanzar hacia 
                    un modelo de desarrollo sostenible y resiliente en las regiones.
                </p>
            </div>
            <div className="infoKhowUs">
                <h2>
                    Su nombre
                </h2>
                <p>
                    Este nombre representa una transición de la ganadería tradicional a una ganadería 
                    regenerativa y sostenible, que permitió descubrir a un grupo de ganaderos en la región
                    amazónica, que trabajan para desarrollar prácticas ganaderas sostenibles, restaurando 
                    ecosistemas agotados.
                </p>
            </div>
            <div className="infoKhowUs">
                <h2>
                    Misi<span className="tildesFont">ó</span>n
                </h2>
                <p>
                    Trabajar, promover y difundir la ganadería regenerativa, protegiendo el medio ambiente y la biodiversidad,
                    vinculando a la comunidad e impulsando el desarrollo económico y social de las Regiones.
                </p>
            </div>
            <div className="infoKhowUs">
                <h2>
                    Visi<span className="tildesFont">ó</span>n
                </h2>
                <p>
                    "Seremos una asociación comprometida con la actividad ganadera, actuando como agentes de 
                    cambio en la regeneración del ecosistema, la biodiversidad y el bienestar de la comunidad. A
                    través de prácticas innovadoras, buscando transformar la ganadería regenerativa en un motor
                    socioeconómico sostenible, estableciendo alianzas estratégicas a nivel local, nacional e 
                    internacional."  
                </p>
            </div>
        </section>
    )
}

export default KhowUs