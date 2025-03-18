//React-hooks
import { useEffect, useState, useRef } from "react"
//React-router-dom
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
//New Context
import { useNew } from "../../context/newContext"
//React-Hook-Forms
import { useForm } from "react-hook-form"
//Material UI
import { Alert } from "@mui/material"
import { Button } from "@mui/material"
//Images
import addImage from './img/plusAddImage.png'
//SweetAlert
import Swal from 'sweetalert2'

function FormNews(){

    //Image State
    const [imageNew, setImageNew] = useState([])

    //React-router-dom
    const navigate = useNavigate()

    const params = useParams()

    //Use Form
    const {handleSubmit, setValue, register, formState : {errors}} = useForm()

    //NewContext
    const {postNewApi, updateNewApi, getOneNewApi} = useNew()

    //OnSubmit
    const onSubmit = handleSubmit(async (values) => {

        const formValues = new FormData()

        formValues.append('newName', values.newName)
        formValues.append('textNew', values.textNew)

        for(let i = 0; i < imageNew.length; i ++){
            formValues.append('imageNew', imageNew[i])
        }

        if(params.id){
            Swal.fire({
                icon : 'success',
                title : 'Noticia Actualizada',
                text : 'La noticia ha sido actualizada correctamente',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            updateNewApi(params.id, formValues)
            navigate('/manageNews')
        }else{
            Swal.fire({
                icon : 'success',
                title : 'Noticia Agregada',
                text : 'La noticia ha sido agregada correctamente',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente'
            })
            postNewApi(formValues)
            navigate('/manageNews')
        }
    })

    //Upload Image

    const [mediaSee, setMediaSee] = useState('')

    const imgRef = useRef(null)
    const videoRef = useRef(null)

    const uploadImage = (e) => {
        const file = e.target.files
        setImageNew(file)

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

    useEffect(() => {
        async function loadData(){
            if(params.id){
                document.title = 'Actualizar Noticia'
                
                const res = await getOneNewApi(params.id)                

                setValue('newName', res.newName)
                setValue('textNew', res.textNew)

                const titleForm = document.getElementById('titleForm')
                titleForm.innerHTML = 'Actualizar Noticia'

                const textForm = document.getElementById('textForm')
                textForm.innerHTML = 'Bienvenido Administrador, ingresa los nuevos datos de la noticia seleccionada.'

                const buttonForm = document.getElementById('buttonForm')
                buttonForm.innerHTML = 'Actualizar Noticia'
    
            }else(
                document.title = 'Añadir Noticia'
            )
        }

        loadData()
    },[])

    return (
        <div className="containerFormUser">
            <div className="containerFormLG">
                <h1 id="titleForm">
                    Nueva Noticia
                </h1>
                <p id="textForm">
                    Bienvenido Administrador, ingresa los datos de la nueva noticia.
                </p>

                <form className="formTecnic1" onSubmit={onSubmit} encType="multipart/form-data">
                    <input type="text" 
                    {...register('newName',{
                        required: true,
                        minLength : 5
                    })}
                    placeholder = "Nombre de la noticia"
                    autoFocus = {true}
                    />
                    {
                        errors.newName && <Alert severity="error">El nombre de la noticia debe de tener almenos 5 caracteres.</Alert>
                    }

                    <br />

                    <textarea
                    {...register('textNew', {
                        required: true,
                        minLength : 10
                    })}
                    placeholder="Descripción de la noticia"
                    >
                    {
                        errors.textNew && <Alert severity="error">La descripción de la noticia debe de tener almenos 10 caracteres.</Alert>
                    }
                    </textarea>

                    <div className="containerImageContent">
                        <label htmlFor="imageNew" className="imageTitleLabel">
                            Noticia
                        </label>
                        <div className="containerImageMedia">
                            {
                                mediaSee === '' && 
                                <img 
                                    src={addImage} 
                                    alt="Image" 
                                    id="img" 
                                    className="imageMedia"/>}
                            {   
                                mediaSee === 'image' && 
                                <img 
                                    alt="Image" 
                                    id="img" 
                                    className="imageMedia"
                                    ref={imgRef}
                                />
                            }
                            {
                                mediaSee === 'video' && 
                                <video
                                    ref = {videoRef}
                                    autoPlay = {true}
                                    controls = {true}
                                    muted = {true}
                                    loop = {true}
                                    className="infoVideoClass"
                                >

                                </video>
                            }
                        </div>
                        <input type="file"
                        {...register('imageNew',{
                            required : true
                        })}
                        multiple = {false}
                        onChange={uploadImage}
                        id="imageNew"
                        className="inputImage"
                        />
                        <br />
                        <div className="containerAddImage">
                            <label htmlFor="imageNew" className="addImageLabel">
                                Agregar
                            </label>
                        </div>
                    </div>
                    {
                        errors.imageNew && <Alert severity="error">La imagen es obligatoria</Alert>
                    }

                    <div className="containerButtonSubmit">
                        <Button id="buttonForm" type="submit" variant="contained" className="confirmButtonLG">
                            A<span className="tildesFont">ñ</span>adir Noticia
                        </Button>
                    </div>

                    <div className="containerButtonGoLG">
                        <Link to='/manageNews' className="goBackContainer">Volver Atr<span className="tildesFont">á</span>s</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FormNews