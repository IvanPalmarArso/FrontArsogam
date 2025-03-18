//React-hooks
import { useEffect, useState, useRef } from "react"
//React-router-dom
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
//Gallery Context
import { useGallery } from "../../context/galleryContext"
//React-hooks-forms
import { useForm } from "react-hook-form"
//Material UI
import { Alert } from "@mui/material"
import { Button } from "@mui/material"
//Images
import addDefaultImage from './img/plusAddImage.png'
//SweetAlert
import Swal from "sweetalert2"

function FormGallery(){

    const params = useParams()
    const navigate = useNavigate()

    const [imageGall, setImageGall] = useState([])

    const {register, handleSubmit, setValue, formState : {errors}} = useForm()

    const {getOneGalleryApi, updateGalleryApi, newGalleryApi} = useGallery()


    useEffect(() => {
        async function loadContent(){
            if(params.id){
                document.title = 'Actualizar Imagen'

                const galleryApiOne = await getOneGalleryApi(params.id)

                setValue('nameImage', galleryApiOne.nameImage)

                const titleFormLG = document.getElementById('titleFormLG')
                titleFormLG.innerHTML = 'Actualizar Imagen'

                const textFormLG = document.getElementById('textFormLG')
                textFormLG.innerHTML = 'Bienvenido Administrador, actualiza la información de la imagen seleccionada'

                const buttonUserLG = document.getElementById('buttonUserLG')
                buttonUserLG.innerHTML = 'Actualizar Imagen'

            }else{
                document.title = 'Añadir Imagen'
            }
        }   

        loadContent()
    },[])


    const onSubmit = handleSubmit(async (data) => {
        const formValue = new FormData()

        formValue.append('nameImage', data.nameImage)

        for(let i = 0; i < imageGall.length; i ++){
            formValue.append('galleryImage', imageGall[i])
        }

        if(params.id){
            Swal.fire({
                icon : 'success',
                title : 'Imagen Actualizada',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente',
                text : 'La imagen de la galeria ha sido actualizada correctamente.'
            })
            updateGalleryApi(params.id, formValue)
            navigate('/manageGallery')
        }else{
            Swal.fire({
                icon : 'success',
                title : 'Imagen Agregada',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente',
                text : 'La imagen se ha añadido correctamente a la galeria'
            })
            newGalleryApi(formValue)
            navigate('/manageGallery')
        }
    })

    //Upload File
    const [mediaSee, setMediaSee] = useState('')

    const imgRef = useRef(null)
    const videoRef = useRef(null)

    const uploadGalleryImage = (e) => {
        const file = e.target.files
        setImageGall(file)

        const fileImage = e.target.files[0]
        const fileType = fileImage.type.split('/')[0]
        setMediaSee(fileType)

        const reader = new FileReader()

        reader.onload = function(e){
            if(fileType === 'image'){
                imgRef.current.src = e.target.result
            }else if(fileType === 'video'){
                videoRef.current.src = e.target.result
            }            
        }   

        reader.readAsDataURL(fileImage)

    }

    return(
        <div className="containerFormUser">
            <div className="containerFormLG">
                <h1 id="titleFormLG">
                    Nueva Imagen
                </h1>
                <p id="textFormLG">
                    Bienvenido adminsitrador, ingresa la información de la imagen que vas a ingresar.
                </p>

                <form onSubmit={onSubmit} className="formTecnic1" encType="multipart/form-data">
                    <input type="text"
                    autoFocus = {true}
                    {...register('nameImage', {
                        required: true,
                        minLength : 5
                    })}
                    placeholder="Nombre de la Imagen"
                    />
                    {
                        errors.nameImage && <Alert severity="error">El nombre de la imagen debe de tener almenos 5 caracteres</Alert>
                    }

                    <br />

                    <div className="containerImageContent">
                        <label htmlFor="galleryImage" className="imageTitleLabel">
                            Galer<span className="tildesFont">í</span>a
                        </label>
                        <div className="containerImageMedia">
                            {
                                mediaSee === '' && 
                                <img 
                                    src={addDefaultImage}                                 
                                    className="imageMedia"
                                />                            
                            }
                            {
                                mediaSee === 'image' &&
                                <img 
                                    src={addDefaultImage}                                     
                                    className="imageMedia"
                                    ref={imgRef}
                                />                            
                            }
                            {
                                mediaSee === 'video' &&
                                <video 
                                    className="infoVideoClass"
                                    autoPlay = {true}
                                    loop = {true}
                                    muted = {true}
                                    controls = {true}
                                    ref={videoRef}
                                >
                                </video>
                            }
                        </div>
                        <input type="file"
                        {...register('galleryImage',{
                            required : true
                        })}
                        multiple = {false}
                        onChange={uploadGalleryImage}
                        id="gallerymage"
                        className="inputImage"
                        />
                        <br />                        
                        <div className="containerAddImage">
                            <label htmlFor="gallerymage" className="addImageLabel">
                                Agregar Media
                            </label>
                        </div>
                    </div>
                    {
                        errors.galleryImage && <Alert severity="error">La imagen es obligatoria</Alert>
                    }

                    <div className="containerButtonSubmit">
                        <Button id="buttonUserLG" type="submit" variant="contained" className="confirmButtonLG">
                            A<span className="tildesFont">ñ</span>adir a la Galeria
                        </Button>
                    </div>

                    <div className="containerButtonGoLG">
                        <Link to='/manageGallery' className="goBackContainer">Volver Atras</Link>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default FormGallery