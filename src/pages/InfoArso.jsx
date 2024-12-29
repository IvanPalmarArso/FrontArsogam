//React Hooks
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//Styles
import './static/styles/infoArso.css'
//Framer Motion
import { motion } from 'framer-motion'
//Images
import logoInfoArso from './static/img/infoArso/logoInfoArso.svg'
import visionImage from './static/img/infoArso/visionImage.svg'
import valuesImage from './static/img/infoArso/valuesImage.svg'
import politicsImage from './static/img/infoArso/politicsImage.svg'
import galleryIcon from './static/img/infoArso/galleryIcon.svg'
//Videos
import firstVideo from './static/img/infoArso/firstVideo.mp4'
import secondVideo from './static/img/infoArso/secondVideo.mp4'
import thirdVideo from './static/img/infoArso/thirdVideo.mp4'
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
//Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//Modal
import Modal from '../components/ModalInfo'
import { modalVision } from '../components/modalText'
import { modalValues } from '../components/modalText'
import { modalPolitics } from '../components/modalText'
//Components
import { ContactFloat } from '../components/contactFloat'

function InfoArso(){

   //Carousel Logic

    useEffect(() => {
        document.title = 'Ganaderia Regenerativa'
    })
    
    //Vision Modal
    const [isModalOpen1, setModalOpen1] = useState(false)

    const toggleModal1 = () => {
        setModalOpen1(!isModalOpen1)
    }

    //Values Modal
    const [isModalOpen2, setModalOpen2] = useState(false)

    const toggleModal2 = () => {
        setModalOpen2(!isModalOpen2)
    }

    //Politics Modal
    const [isModalOpen3, setModalOpen3] = useState(false)

    const toggleModal3 = () => {
        setModalOpen3(!isModalOpen3)
    }

    return (
        <>
                <head>
            <meta name="keywords" content="Informacion de Arsogam, Arsogam Informacion, Información de Arsogam, Arsogam Información" />

            <meta name="description" 
            content="
                Se enlista información crucial con los videos informativos de la asociación regenerativa Arsogam, la misión, la visión y la galeria de
                imagenes de la asociación.
            " />
        </head>
        <section className='sectionInfoArso'>
            <ContactFloat />
            <div className='containerInfoLogo'>
                <motion.div
                    initial = {{scale : 0}}
                    animate = {{rotate : 360, scale : 1}}
                    transition={{
                        type : 'spring',
                        stiffness: 450,
                        damping : 90
                    }}
                >
                    <img src={logoInfoArso} alt="infoArsoImage" />
                </motion.div>
            </div>

            <div className="containerSwiper1">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    breakpoints={{
                        800: {                            
                          slidesPerView: 1,
                        },
                        900: {                            
                          slidesPerView: 2,
                        },
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 40,
                        depth: 150,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container1"
                >
                    <SwiperSlide className='swiperSlide'>
                        <video className='imgSwiper' src = {firstVideo} alt="slide_image" autoPlay = {true} muted={true} loop={true} controls={true}></video>                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <video className='imgSwiper' src = {secondVideo} alt="slide_image" autoPlay = {true} muted={true} loop={true} controls={true}></video>                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <video className='imgSwiper' src = {thirdVideo} alt="slide_image" autoPlay = {true} muted={true} loop={true} controls={true}></video>                        
                    </SwiperSlide>                    
                    <SwiperSlide>
                        <video className='imgSwiper' src = {thirdVideo} alt="slide_image" autoPlay = {true} muted={true} loop={true} controls={true}></video>                        
                    </SwiperSlide>            

                    <div className="slider-controler1">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                    </div>
                </Swiper>    
            </div>

            <div className='containerTextInfo'>
                <div className='containerInfoP'>
                    <p>
                        Somos una ganader<span className='tildesFont'>í</span>a regenerativa dedicada a la explotaci<span className='tildesFont'>ó</span>n
                        de machos de CEBA, implementando el sistema de pastoreo PUAD
                        (pastoreo de ultra alta densidad), restaurando servicios 
                        ecosist<span className='tildesFont'>é</span>micos, protegiendo fuentes de agua, flora, fauna y 
                        especies nativas en la Amazonia. 
                    </p>
                </div>
                <div className='containerModals'>

                    <div className='imageModal' onClick={toggleModal1}>                        
                        {isModalOpen1 && <Modal text= {modalVision()} onRequestClose={toggleModal1}/>}
                        <img src={visionImage} alt="Info Image" />
                        <h2>    
                            Visi<span className='tildesFont'>ó</span>n
                        </h2>
                    </div>
                    <div className='imageModal' onClick={toggleModal2}>
                        {isModalOpen2 && <Modal text={modalValues()} onRequestClose={toggleModal2}/>}
                        <img src={valuesImage} alt="Info Image" />
                        <h2>    
                            Valores
                        </h2>
                    </div>
                    <div className='imageModal' onClick={toggleModal3}>
                        {isModalOpen3 && <Modal text={modalPolitics()} onRequestClose={toggleModal3} />}
                        <img src={politicsImage} alt="Info Image" />
                        <h2>
                            Pol<span className='tildesFont'>í</span>ticas
                        </h2>
                    </div>
                    <div className='imageModal'>                    
                        <Link to='/GalleryArso' className='linkNone'>
                            <img src={galleryIcon} alt="Info Image" />
                            <h2>
                                Galer<span className='tildesFont'>í</span>a
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default InfoArso