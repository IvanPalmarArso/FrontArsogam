//Styles
import './static/styles/gallery.css'
//Framer-motion
import { motion } from "framer-motion"
//Components
import { ContactFloat } from "../components/contactFloat"
import { GalleryComponent } from '../components/galleryComponent'
//React-hooks
import { useEffect } from 'react'
//Gallery Context
import { useGallery } from '../context/galleryContext'
//Images
import galleryBull from './static/img/gallery/galleryBull.png'

export function GalleryArso(){
    
    const {getAllGalleryApi, galleryList} = useGallery()

    useEffect(() => {
        getAllGalleryApi()
    }, [galleryList])

    useEffect(() => {
        document.title = 'Galeria'
    },[])

    return(
        <>
        <head>
            <meta name="keywords" content="Galeria de Arsogam, Arsogam Galeria" />

            <meta name="description" 
            content="
                En la galeria de imagenes de Arsogam se podran ver todas las fotografias que muestran los diferentes apartados 
                con los que cuenta la asociación regenerativa Arsogam.
            " />
        </head>

        <section className="sectionGallery">            

            <ContactFloat />

            <div className="containerGalleryLogo">
                <motion.div
                    initial = {{scale : 0}}                
                    animate = {{rotate : 360, scale : 1}}
                    transition={{
                        type : 'spring',
                        stiffness : 450,
                        damping : 90
                    }}
                >   
                    <img src={galleryBull} alt="galleryBull" />
                </motion.div>
            </div>

            <div className='containerGallery'>
                    {
                        galleryList.map((gallery) => {
                            return(                               
                                <GalleryComponent 
                                        key={gallery.id}
                                        url={gallery.galleryImage}
                                        alt={gallery.nameImage}                                    
                                />                               
                            )
                        })
                    }
            </div>

        </section>
        </>
    )
}