//React-hooks
import { useEffect } from "react";
//Framer-motion
import { motion } from "framer-motion";
//Image
import bullNews from './static/img/news/bullNews.png'
//Styles
import './static/styles/news.css'
//Components
import { ContactFloat } from "../components/contactFloat";
//NewContext
import { useNew } from "../context/newContext";

function News(){

    useEffect(() => {
        document.title = "Noticias"
    })

    const {allNewsApi, newList} = useNew()

    useEffect(() => {
        allNewsApi()
    },[newList])

    return(
        <>
        <head>
            <meta name="keywords" content="Noticias de Arsogam, Arsogam Noticias" />

            <meta name="description" 
            content="
                En esta pagina es donde se podran visualizar todas las noticias que sean relevantes
                y que tengan relacion con la ganaderia regenerativa Arsogam.
            " />
        </head>

        <section className="containerNewsSection">            

            <ContactFloat />
            <div className="bullNews">
                <motion.div
                    initial = {{scale : 0}}
                    animate = {{rotate : 360, scale : 1}}
                    transition= {{
                        type : 'spring',
                        stiffness : 450,
                        damping : 90
                    }}
                >
                    <img src={bullNews} alt="newsBull" />
                </motion.div>
            </div>

        <div className="containerNewsAll">
            {
                newList.map((news) => {
                    return(
                        <div className="containerSingleNew">
                        <div className="containerTitleNewMain">
                            <div className="containerTitleNew">
                                <h4 className="tildesFont titleH4">
                                    {news.newName}
                                </h4>
                            </div>
                        </div>

                        <div className="containerImgTextNew">
                            <div className="containerImageNews">
                                <motion.div
                                    style={{
                                        borderRadius : 30,
                                        cursor : "pointer"                    
                                    }}

                                    whileHover={{
                                        scale : 0.8
                                    }}
                                >                    
                                    {
                                        news.imageNew.match('mp4')
                                        ?
                                        <video 
                                            className="videoNews"
                                            src = {news.imageNew}
                                            loop = {true}
                                            autoPlay = {true}
                                            controls = {true}
                                            muted = {true}
                                        >

                                        </video>
                                        :
                                        <img src={news.imageNew} alt="newsPicture" />
                                    }
                                </motion.div>        
                            </div>
                            <div className="containerTextNews">
                                    <textarea disabled rows={13}>
                                        {news.textNew}
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        </section>
        </>
    )

}

export default News