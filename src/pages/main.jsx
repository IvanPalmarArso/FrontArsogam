//React-Hooks
import { useEffect, useState } from "react"
//Styles
import './static/styles/main.css'
//Components
import CarouselHome from "../components/Slider"
//Images
import imgFarm from './static/img/knowFarm.svg'
//EvetnContext
import { useEvent } from "../context/eventContext"
//FramerMotion
import { motion } from "framer-motion"
//React Navigation
import { Link } from "react-router-dom"
//SweetAlert
import Swal from 'sweetalert2'

function Home(){

    const {eventList, allEventsApi} = useEvent()
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        allEventsApi()        
    },[allEventsApi])    

    useEffect(() => {
        document.title = "Pagina Principal"

        if(eventList.length > 0 && !loaded){
            const lastEvent = eventList.slice(-1)[0]                           

            Swal.fire({
                title : 'Próximo Evento',
                text : lastEvent.nameEvent,
                imageUrl : lastEvent.imageEvent,
                imageHeight : 350,    
                imageWidth : 320,
                showCloseButton : true,
                confirmButtonColor : 'green',
                confirmButtonText : 'CONTINUAR',
                allowEscapeKey : false,
                allowOutsideClick : false
            });
            
            setLoaded(true)

        }        
    
    },[eventList, loaded])

    return (        
        <section className="sectionHome">
            <div className="containerInfoHome">                
                <div className="containerTitle">
                    <motion.div
                        whileHover={{
                            scale : 1.1,
                            cursor : "pointer"
                        }}                    
                    >
                        <h1 className="titleMain">ARSOGAM</h1>
                    </motion.div>
                </div>
                <h3 className="subtitleMain">
                    ASOCIACI<span className="tildesFont">Ó</span>N REGENERATIVA Y SOSTENIBLE
                    <br />
                    DE GANADEROS EN LA AMAZONIA
                </h3>
                <div className="imageFarm">
                    <motion.div
                        whileHover={{
                            scale : 1.1,
                            cursor : "pointer"
                        }}
                    >
                        <Link to='InfoArso'>
                            <img className="subtitleImage" src={imgFarm} alt="farmImage" />
                        </Link>
                    </motion.div>
                </div>                
            </div>
            <div className="containerCarrousel">
                <CarouselHome />
            </div>                    
        </section>        
    )
}

export default Home