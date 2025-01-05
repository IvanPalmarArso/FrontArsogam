//React-hooks
import { useEffect, useState } from "react"
//React-router-dom
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
//InfoContext
import { useInfo } from "../../context/infoContext"
//React-hook-forms
import { useForm } from "react-hook-form"
//Material UI
import { Alert } from "@mui/material"
import { Button } from "@mui/material"
//Images
import backAdd from './img/backAdd.mp4'
//SweetAlert
import Swal from "sweetalert2"

function FormInfo(){

    const params = useParams()
    const navigate = useNavigate()

    const [videoInfo, setInfoVideo] = useState([])

    const {register, handleSubmit, setValue, formState : {
        errors
    }} = useForm()

    const {newInfoApi, updateInfoApi, getOneInfoApi} = useInfo()

    useEffect(() => {
        async function loadInfo() {
            if(params.id){
                document.title = 'Actualizar Video'

                const getOneInfo = await getOneInfoApi(params.id)

                const titleFormLG = document.getElementById('titleFormLG')
                titleFormLG.innerHTML = 'Actualizar Video'

                const textFormLG = document.getElementById('textFormLG')
                textFormLG.innerHTML = 'Bienvenido Administrador, actualiza la información del video seleccionado.'

                const buttonUserLG = document.getElementById('buttonUserLG')
                buttonUserLG.innerHTML = 'Actualizar Video'
            }else{
                document.title = 'Añadir Video'
            }
    }
        loadInfo()
    },[])

    const onSubmit = handleSubmit(async(data) => {
        const formValue = new FormData()

        for(let i = 0;i < videoInfo.length; i ++){
            formValue.append('videoInfo', videoInfo[i])
        }

        if(params.id){
            Swal.fire({
                icon : 'success',
                title : 'Video Actualizado',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente',
                text : 'El video de la ganaderia fue actualizado correctamente.'
            })
            updateInfoApi(params.id, formValue)
            navigate('/manageInfo')
        }else{
            Swal.fire({
                icon : 'success',
                title : 'Video Agregado',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente',
                text : 'El video de la ganaderia fue agregado correctamente.'
            })
            newInfoApi(formValue)
            navigate('/manageInfo')
        }
    })

    const uploadVideoInfo = (e) => {
        const file = e.target.files
        setInfoVideo(file)
        
        const fileVideo = e.target.files[0]

        const videoShow = document.getElementById('videoShow')

        const reader = new FileReader()

        reader.onload = function(e){
            videoShow.src = e.target.result            
        }

        reader.readAsDataURL(fileVideo)

    }

    return(
        <div className="containerFormUser">
            <div className="containerFormLG">
                <h1 id="titleFormLG">
                    Nuevo Video
                </h1>
                <p id="textFormLG">
                    Bienvenido adminsitrador, ingresa el nuevo video de la ganaderia regenerativa Arsogam.
                </p>

                <form onSubmit={onSubmit} className="formTecnic1" encType="multipart/form-data">
                    <br />
                    <div className="containerImageContent">
                        <label htmlFor="videoInfo" className="imageTitleLabel">
                            Seleccionar Video
                        </label>
                        <div className="containerImageMedia">
                            <video id="videoShow" className="infoVideoClass"
                                src={backAdd}
                                controls={true}
                                loop={true}
                                autoPlay = {true}
                                muted = {true}
                            ></video>
                        </div>
                        
                        <input type="file"
                        {...register('videoInfo',{
                            required : true
                        })}
                        multiple = {false}
                        onChange={uploadVideoInfo}
                        id="videoInfo"
                        className="inputImage"
                        />
                        <br />
                        <div className="containerAddImage">
                            <label htmlFor="videoInfo" className="addImageLabel">
                                Agregar Video
                            </label>
                        </div>
                    </div>
                    {
                        errors.videoInfo && <Alert severity = 'error'>El video es obligatoriox.</Alert>
                    }
                    <div className="containerButtonSubmit">
                        <Button id='buttonUserLG' type='submit' variant = 'contained' className='confirmButtonLG'>
                            A<span className="tildesFont">ñ</span>adir a la ganaderia
                        </Button>
                    </div>

                    <div className="containerButtonGoLG">
                        <Link to='/manageInfo' className="goBackContainer">Volver Atras</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormInfo