//React Hooks
import { useEffect, useState } from "react";
//Images
import logoInfoArso from './img/modal/logoInfoArso.svg'
//styles
import './style/modalInfo.css'

const Modal = ({onRequestClose, text}) => {
    useEffect(() => {
        function onKeyDown(event){
            if(event.keyCode === 27){
                onRequestClose()
            }
        }   

        //Prevent the scrolling
            document.body.style.overflow = 'hidden'
            document.addEventListener('keydown', onKeyDown)

        //Clear things up unmounting this component
            return () => {
                document.body.style.overflow = 'visible'
                document.removeEventListener('keydown', onKeyDown)
            }
    })

    return(
        <div className="containerModalInfo">
            <div className="containerMainModal">
                <div className="containerImageModal">
                    <img className="imageModalIn" src={logoInfoArso} alt="Logo Info Arso" />
                </div>
            
                <div className="containerModalText">
                    <p>
                        {text}
                    </p>
                </div>

                <div className="containerButtonCloseModal">
                    <button className="buttonModalInf" type="button" onClick={onRequestClose}>
                        CERRAR
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal