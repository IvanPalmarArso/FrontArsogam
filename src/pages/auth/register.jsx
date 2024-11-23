//React-router-dom
import { Link } from "react-router-dom"
//React-hooks-forms
import { useForm } from "react-hook-form"
//Material UI
import { Alert } from "@mui/material"
import { Button } from "@mui/material"
//Navigation
import { useNavigate } from "react-router-dom"
//Styles
import './styles/formLR.css'
import { useEffect } from "react"
//Auth Context
import { useAuth } from "../../context/authContext"

function Register(){

    const {register, handleSubmit, formState : {errors}} = useForm()

    const navigate = useNavigate()

    const {registerUserApi, errorAuth, isAuthenticated} = useAuth()

    const onSubmit = handleSubmit(async (data) => {                
        registerUserApi(data)              
    })

    useEffect(() => {
        document.title = 'Registrarse'        
    })    

    useEffect(() => {
        if(isAuthenticated){
            navigate('/')
        }
    },[isAuthenticated])

    return(
        <div className="containerFormUser">
            <div className="containerFormLG">
                <h1>
                    Registrate
                </h1>
                <p>
                    Bienvenido nuevo usuario, ingresa tu información
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
                    {...register('fullName', {required : true, minLength : 5})}
                    placeholder="Nombre Completo"                    
                    />
                    {
                        errors.fullName && <Alert severity="error">El Nombre completo debe de tener almenos 5 caracteres</Alert>
                    }
                                        
                    <br />

                    <input type="text" 
                    {...register('cellPhone', {
                        required : true, 
                        minLength : 10,
                        maxLength : 10
                    })}
                    placeholder="Numero de telefono"
                    />
                    {
                        errors.cellPhone && <Alert severity="error">El número de celular debe de tener 10 caracteres</Alert>
                    }

                    <br />
                    
                    <input type="email"
                    {...register('emailUser',{
                        required : true, 
                        pattern : {
                            value : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message : 'Por favor ingresa un correo valido'
                        },
                        minLength : 10
                    })}
                    placeholder="Correo Electrónico"
                    />
                    {
                        errors.emailUser && <Alert severity="error">Ingresa un correo valido</Alert>
                    }

                    <br />

                    <input type="password"
                    {...register('passwordUser',{
                        required: true,
                        minLength: 10,
                    })}
                    placeholder="Contraseña"
                    />
                    {
                        errors.passwordUser && <Alert severity="error">La contraseña debe de tener minimo 8 caracteres</Alert>
                    }

                    <div className="containerButtonSubmit">
                        <Button type="submit" variant="contained" className="confirmButtonLG">Registrarse</Button>
                    </div>

                    <div className="containerGoLG">
                        <Link className="linkBackLG" to='/loginUser'>Ya tienes cuenta?</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Register