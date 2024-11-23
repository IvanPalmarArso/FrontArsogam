//React-hooks
import { useEffect, useState } from "react";
//Images
import bullServices from './static/img/services/bullServices.png'
import training from './static/img/services/training.svg'
import tecnicAssistance from './static/img/services/tecnicAssistance.svg'
import arrowService from './static/img/services/arrowServices.svg'
//Styles
import './static/styles/services.css'
//FramerMotion
import {motion} from 'framer-motion'
//Components
import FormTecnicAssis from '../components/formTecnicAssis'
import { ContactFloat } from "../components/contactFloat";

function Services(){
        
    useEffect(() => {
        document.title = "Servicios"
    })

    const [isModalOpen, setModalOpen] = useState(false)

    const toggleModal = () => {
        setModalOpen(!isModalOpen)
    }

    return(
        <section className="servicesSection" id="sectionService">
            <ContactFloat />
            <div className="containerImageServices">                
                <motion.div
                    initial = {{scale : 0}}
                    animate = {{rotate : 360, scale : 1}}
                    transition={{
                        type : 'spring',
                        stiffness : 450,
                        damping : 90
                    }}
                >
                    <img src = {bullServices} alt = "bullServices"/>
                </motion.div>
            </div>

            <div className="containerServices">
                <div className="containerInfoService tecnicAssitance">                                
                {isModalOpen && <FormTecnicAssis onRequestClose = {toggleModal}/>}                                                                                
                <div>                
                    <motion.div className="motionImage"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 30,
                                cursor : "pointer"
                            }}
                            whileHover={{ scale: 0.8 }}
                    >                        
                        <img src={tecnicAssistance} alt="tecnicAssitance" onClick={toggleModal}/>                        
                    </motion.div>
                    </div>
                    <h2>
                        Asistencia T<span className="tildesFont">é</span>cnica
                    </h2>                    
                    <div className="arrowServ">
                        <motion.div
                            initial = {{
                                opacity: 0, scale : 0.5
                            }}
                            animate = {{
                                opacity : 1, scale : 1
                            }}
                            transition={{
                                duration : 5,
                                ease : [0, 0.71, 0.2, 1.01],
                                scale : {
                                    type : 'spring',
                                    damping : 5,
                                    stiffness : 100,
                                    restDelta : 0.001
                                }                                
                            }}
                        >
                            <img src = {arrowService} alt="arrowService" />
                        </motion.div>
                    </div>
                </div>

                <div className="containerInfoService">
                    <motion.div
                        style={{
                            width : '100%',
                            borderRadius : 30,
                            cursor : "pointer"
                        }}
                        whileHover={{scale : 0.8}}
                    >
                        <img src={training} alt="trainingSessions" className="imgNro2Ser" onClick={toggleModal}/>
                    </motion.div>
                    <h2>
                        Capacitaciones
                    </h2>
                    <div className="arrowServ">
                        <motion.div
                            initial = {{
                                opacity : 0, scale : 0.5
                            }}
                            animate = {{
                                opacity : 1, scale : 1
                            }}
                            transition={{
                                duration : 5,
                                ease : [0, 0.71, 0.2, 1.01],
                                scale : {
                                    type : 'spring',
                                    damping : 5,
                                    stiffness : 100,
                                    restDelta : 0.001
                                }
                            }}
                        >
                            <img src = {arrowService} alt="arrowService" />
                        </motion.div>
                    </div>
                </div>
            </div>        
        </section>
        
    )

}

export default Services