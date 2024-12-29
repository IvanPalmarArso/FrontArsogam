//React-hooks
import { useEffect, useState } from "react";
//Styles
import './static/styles/events.css'
//Images
import bullEvents from './static/img/events/bullEvents.png'
//Framer motion
import { motion } from "framer-motion";
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
//Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//Components
import { ContactFloat } from "../components/contactFloat";
//Context Auth
import { UseAuth } from "../context/authContext";
//React-router-dom
import { useNavigate } from "react-router-dom";
//Events Context
import { useEvent } from "../context/eventContext";

function Events(){

    useEffect(() => {
        document.title = "Eventos"
    })

    //Carousel Logic

    useEffect(() => {
        console.log(window.screen.width)
    })       

    //Auth Context
    const {user} = UseAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if(user?.isAdmin){
            navigate('/')
        }
    },[user])

    //Event Context
    const {eventList, allEventsApi} = useEvent()

    useEffect(() => {
        allEventsApi()
    },[eventList])

    return (
        <>
        <head>
            <meta name="keywords" content="Eventos de Arsogam, Arsogam Eventos" />

            <meta name="description" 
            content="
                Tendras información especifica sobre todos los diferentes eventos en los que ha participado la asociación
                regenerativa y los eventos que se llevaran a cabo en dias futuros o proximos que seran de grann relevancia.
            " />
        </head>

        <section className="sectionEvents">            
            <ContactFloat />
            <div className="containerEventsLogo">
                <motion.div
                    initial = {{scale : 0}}
                    animate = {{rotate : 360, scale : 1}}
                    transition={{
                        type : 'spring',
                        stiffness : 450,
                        damping : 90
                    }}
                >
                    <img src={bullEvents} alt="bullEvents" />
                </motion.div>
            </div>
            <div className="containerSwiper">
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
                        stretch: 10,
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
                    className="swiper_container"
                >                    
                        {
                            eventList.map((event) => {
                                return(
                                    <SwiperSlide>
                                        <div className="containerSingleEvent" key={event.imageEvent}>
                                            <div className="containerImageEvent">
                                                <img className="singleEventImg" src={event.imageEvent} alt="Event Image" />
                                            </div>
                                            <div>
                                                <p>
                                                    {event.nameEvent}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>                    
                                )
                            })
                        }                    

                    <div className="slider-controler">
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
        </section>
        </>
    )

}

export default Events