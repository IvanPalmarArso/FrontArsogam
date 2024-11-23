//React-hooks
import { useEffect } from "react"
//Styles
import './style/modalImg.css'
//Icons
import { IoMdClose } from "react-icons/io";

const ModalImg = ({onRequestClose, img}) => {
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
        <div className="containerModalImg">
        <div className="containerMainImg">                 
            <div className="containerModalImg">
                <div className="iconModalImg">
                    <IoMdClose className="iconCloseImg"/>
                </div>       
                <div className="containerImgModal">
                    <img src={img} alt="imgModal" />
                </div>                        
            </div>            
        </div>
    </div>
    )
}

export default ModalImg