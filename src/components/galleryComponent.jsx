//Components
import { useState } from "react"
import ModalImg from "./ModalImg"

export function GalleryComponent({url, alt}){

    const [isModalOpen, setModalOpen] = useState(false)

    const toggleModal = () => {
        setModalOpen(!isModalOpen)
    }

    return(
        <div onClick={toggleModal}>
            {isModalOpen && <ModalImg img={url} onRequestClose={toggleModal}/>}
            <div className="containerImg">
                {
                    url.match('mp4')
                    ?
                    <video 
                        src = {url}
                        loop = {true}
                        autoPlay = {true}
                        controls = {true}
                        muted = {true}
                    >

                    </video>
                    :
                    <img src={url} alt={alt} />
                }
            </div>
        </div>
    )
}