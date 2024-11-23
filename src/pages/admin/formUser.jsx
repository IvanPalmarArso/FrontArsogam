//React-hooks
import { useEffect } from "react"
//React-router-dom
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
//Auth Context
import { useAuth } from "../../context/authContext"
//React-hooks-forms
import { useForm } from "react-hook-form"
//Material UI
import { Alert } from "@mui/material"
import { Button } from "@mui/material"
//SweetAlert
import Swal from "sweetalert2"

function FormUser(){

    const {register, handleSubmit, setValue, formState : {errors}} = useForm()

    const {addNewUserApi, updateUserApi, getOneUserApi, errorAuth} = useAuth()

    const params = useParams()

    useEffect(() => {
        async function loadUser(){
            if(params.id){

                document.title = 'Actualizar Usuario'

                const postUser = await getOneUserApi(params.id)
                console.log(postUser)

                setValue('fullName', postUser.fullName)
                setValue('cellPhone', postUser.cellPhone)
                setValue('emailUser', postUser.emailUser)                

                const titleFormLG = document.getElementById('titleFormLG')
                titleFormLG.innerHTML = 'Actualizar Usuario'

                const textFormLG = document.getElementById('textFormLG')
                textFormLG.innerHTML = 'Bienvenido Administrador, actualiza la informacion del usuario seleccionado'

                const buttonUserLG = document.getElementById('buttonUserLG')
                buttonUserLG.innerHTML = 'Actualizar Usuario'
            }else if(!params.id){
                document.title = 'Añadir Usuario'
            }        
        }
        loadUser()
    }, [])    

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (data) => {
        if(params.id){
            Swal.fire({
                icon : 'success',
                title : 'Usuario Actualizado',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente',
                text : 'El usuario ha sido actualizado correctamente'
            })
            updateUserApi(params.id, data)
            navigate('/manageUsers')
        }else{
            Swal.fire({
                icon : 'success',
                title : 'Usuario Agregado',
                confirmButtonColor : '#3ed634',
                confirmButtonText : 'Siguiente',
                text : 'El usuario ha sido agregado correctamente'
            })
            addNewUserApi(data)
            navigate('/manageUsers')
        }
    })

    return(
        <div className="containerFormUser">
            <div className="containerFormLG">
                <h1 id="titleFormLG">
                    Nuevo Usuario
                </h1>
                <p id="textFormLG">
                    Bienvenido Administrador, ingresa la información del nuevo usuario.
                </p>
                <form onSubmit={onSubmit} className="formTecnic1">
                    {
                        errorAuth.map((error, i) => {
                            return(
                                <Alert severity="error" key={i}>
                                    {error.message}
                                </Alert>
                            )
                        })
                    }
                    <input type="text" 
                    autoFocus = {true}
                    {...register('fullName',{
                        required : true,
                        minLength : 5
                    })}
                    placeholder="Nombre Completo"
                    />
                    {
                        errors.fullName && <Alert severity="error">El nombre completo debe de tener almenos 5 caracteres</Alert>
                    }
                    
                    <br />

                    <input type="text"
                    {...register('cellPhone',{
                        required : true,
                        minLength : 10,
                        maxLength : 10                        
                    })}
                    placeholder="Número de Telefono"
                    />
                    {
                        errors.cellPhone && <Alert severity="error">El número de telefono debe de tener 10 caracteres.</Alert>
                    }

                    <br />

                    <input type="email"
                    {...register('emailUser',{
                        required : true,
                        pattern : {
                            value : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message : 'Por favor ingresa un correo valido.',
                        },
                        minLength : 10                        
                    })}
                    placeholder="Correo Electrónico"
                    />
                    {
                        errors.emailUser && <Alert severity="error">Por favor ingresa un correo valido.</Alert>
                    }

                    <br />

                    <input type="password"
                    {...register('passwordUser',{
                        required : true,
                        minLength : 5
                    })}
                    placeholder="Contraseña"
                    />
                    {
                        errors.passwordUser && <Alert severity="error">La contraseña debe de tener almenos 5 caracteres</Alert>
                    }

                    <div className="containerButtonSubmit">
                        <Button id="buttonUserLG" type="submit" variant="contained" className="confirmButtonLG">Agregar Usuario</Button>
                    </div>

                    <div className="containerButtonGoLG">
                        <Link to='/manageUsers' className="goBackContainer">Volver Atras</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default FormUser