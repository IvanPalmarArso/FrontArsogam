//React-hooks
import { useState, useEffect } from "react"
//React-router-dom
import { useNavigate, Link } from "react-router-dom"
import { useParams } from "react-router-dom"
//Event Context
import { useEvent } from "../../context/eventContext"
//React-jooks-forms
import { useForm } from "react-hook-form"
//Material UI
import { Alert } from "@mui/material"
import { Button } from "@mui/material"
//Images
import addImage from './img/plusAddImage.png'
//SweetAlert
import Swal from "sweetalert2"

function FormEvents(){

    //Navigate
    const navigate = useNavigate()

    //Params
    const params = useParams()

    //Forms-hooks
    const {handleSubmit, setValue, register, formState : {errors}} = useForm()

    //Events Context
    const {newEventApi, updateEventApi, getOneEventApi} = useEvent()
    const [imageEvent, setImageEvent] = useState([])

    const onSubmit = handleSubmit(async (data) => {

        const formValues = new FormData()

        formValues.append('nameEvent', data.nameEvent)

        for(let i = 0; i < imageEvent.length; i ++){
            formValues.append('imageEvent', imageEvent[i])
        }

        if(params.id){

            Swal.fire({
                title : 'Evento Actualizado',
                text : 'El evento ha sido actualizado correctamente.',
                icon : 'success',
                confirmButtonText : 'Siguiente',
                confirmButtonColor : '#3ed634'
            })
            updateEventApi(params.id, formValues)
            navigate('/manageEvents')
        }else{

            Swal.fire({
                text : 'Evento Agregado',
                title : 'El evento ha sido agregado correctamente.',
                icon : 'success',
                confirmButtonText : 'Siguiente',
                confirmButtonColor : '#3ed634'
            })
            newEventApi(formValues)
            navigate('/manageEvents')
        }

    })

    useEffect(() => {
        async function loadData(){
            if(params.id){

                const res = await getOneEventApi(params.id)

                setValue('nameEvent', res.nameEvent)

                const formTitle = document.getElementById('formTitle')
                formTitle.innerHTML = 'Actualizar Evento'

                const formText = document.getElementById('formText')
                formText.innerHTML = 'Bienvenido adminsitrador, ingresa la nueva información del evento seleccionado.'

                const buttonForm = document.getElementById('buttonForm')
                buttonForm.innerHTML = 'Actualizar Evento'

            }else{
                document.title = 'Añadir Evento'
            }
        }

        loadData()
    },[])

    //Upload Image

    const uploadImage = (e) => {
        const file = e.target.files
        setImageEvent(file)

        const fileImage = e.target.files[0]

        const imageNew = document.getElementById('img')

        const reader = new FileReader()

        reader.onload = function(e){
            imageNew.src = e.target.result
        }
        reader.readAsDataURL(fileImage)
    }

    return(
        <div className="containerFormUser">
            <div className="containerFormLG">
                <h1 id="formTitle">
                    Nuevo Evento
                </h1>
                <p id="formText">
                    Bienvenido Administrador, ingresa los datos de el nuevo evento a ingresar.
                </p>

                <form className="formTecnic1" onSubmit={onSubmit} encType="multipart/form-data">
                    <input type="text"
                    {...register('nameEvent',{
                        required: true,
                        minLength: 5,
                    })}
                    placeholder="Nombre del evento"
                    autoFocus = {true}
                    />
                    {
                        errors.nameEvent && <Alert severity="error">El nombre del evento debe de tener almenos 5 caracteres.</Alert>
                    }
                    
                    <br />

                    <div className="containerImageContent">
                        <label htmlFor="imageEvent">
                            Evento - Imagen
                        </label>
                        <div className="containerImageMedia">
                            <img src={addImage} alt="eventImage" id="img"/>
                        </div>
                        <input type="file"
                        {...register('imageEvent',{
                            required: true,
                        })}
                        multiple={false}                        
                        onChange={uploadImage}
                        id="imageEvent"
                        className="inputImage"
                        />
                        <br />
                        <div className="containerAddImage">
                            <label htmlFor="imageEvent" className="addImageLabel">
                                Agregar Imagen
                            </label>
                        </div>
                    </div>
                    {
                        errors.imageEvent && <Alert severity="error">La imagen es obligatoria.</Alert>
                    }

                    <div className="containerButtonSubmit">
                        <Button id="buttonForm" type="submit" variant="contained" className="confirmButtonLG">
                            A<span className="tildesFont">ñ</span>adir Evento
                        </Button>
                    </div>

                    <div className="containerButtonGoLG">
                        <Link to='/manageEvents' className="goBackContainer">Volver Atr<span className="tildesFont">á</span>s</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FormEvents