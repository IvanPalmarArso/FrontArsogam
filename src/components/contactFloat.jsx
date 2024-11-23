//Styles
import './style/contactFloat.css'
//Images
import whatsFloat from './img/contactFloat/whatsIcon.svg'
import instaFloat from './img/contactFloat/instaIcon.svg'
//Framer.-Motion
import { motion } from 'framer-motion'

export function ContactFloat(){
    return(
        <div className='containerFloat'>            
            <motion.div
                className='containerLogoFloat'                
            >
                <a href="https://www.instagram.com/arsogam/profilecard/?igsh=aTJjaDJ6NXBwdHB6" target="_blank" rel="noopener noreferrer">
                    <img className='imgFloat' src={instaFloat} alt="WhatsAppLogo" />
                </a>
            </motion.div>
            <motion.div
                className='containerLogoFloat'            
            >
                <a href="https://wa.me/3115535796?text=Buen dia, deseo contactar con la asistencia de arsogam, gracias." target="_blank" rel="noopener noreferrer">
                    <img className='imgFloat' src={whatsFloat} alt="WhatsAppLogo" />
                </a>
            </motion.div>
        </div>
    )
}