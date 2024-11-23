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
                <img src={url} alt={alt} />
            </div>
        </div>
    )
}