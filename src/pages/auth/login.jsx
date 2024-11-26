//React-hooks
import { useEffect } from "react"
//React Router-Dom
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
//Auth Context
import { UseAuth } from "../../context/authContext"
//React-hooks-forms
import { useForm } from "react-hook-form"
//Material UI
import { Alert } from "@mui/material"
import { Button } from "@mui/material"

function Login(){

    const {register, handleSubmit, formState : {errors}} = useForm()

    const {isAuthenticated, errorAuth, loginUserApi} = UseAuth()

    const onSubmit = handleSubmit(async (values) => {
        loginUserApi(values)
    })

    useEffect(() => {
        document.title = 'Iniciar Sesión'
    })    

    const navigate = useNavigate()

    useEffect(() => {
        if(isAuthenticated){
            navigate('/')
        }
    },[isAuthenticated])

    return(
        <div className="containerFormUser">
            <div className="containerFormLG">
                <h1>
                    Inicia Sesi<span className="tildesFont">ó</span>n
                </h1>
                <p> 
                    Bienvenido de nuevo, ingresa tu información
                </p>

                <form className="formTecnic1" onSubmit={onSubmit}>
                    {
                        errorAuth.map((error, i) => {
                            return(
                                <Alert severity="error" key={i}>{error.message}</Alert>
                            )
                        })
                    }                
                    <input type="email" 
                    {...register('emailUser',{
                        required: true,
                        pattern : {
                            value : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message : 'Por favor ingresa un correo valido'
                        },
                        minLength : 10
                    })}
                    placeholder="Correo Electrónico"
                    autoFocus = {true}
                    />
                    {
                        errors.emailUser && <Alert severity="error">Ingresa un Correo Valido</Alert>                        
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
                        errors.passwordUser && <Alert severity="error" >La contraseña debe de tener almenos 5 caracteres</Alert>
                    }

                    <div className="containerButtonSubmit">
                        <Button
                            type="submit"
                            variant = 'contained'
                            className = 'confirmButtonLG'
                        >Ingresar</Button>
                    </div>

                    <div className="containerGoLG">
                        <Link 
                            className="linkBackLG"
                            to='/registerUser'
                        >
                            No tienes cuenta?
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login