//Styles
import './style/formPQR.css'
//Use Form
import { useForm } from 'react-hook-form'
//Material IU
import { Button } from '@mui/material'
import Swal from 'sweetalert2'
//Post PQR
import { postPqr } from '../api/sendPQR'

export default function FormPQR(){

    const {register, handleSubmit, formState : {errors}} = useForm()

    const refreshPage = () => {
        window.location.reload()
    }

    const onSubmitForm = handleSubmit((data) => {
        
        const validData = {
            ...data
        }        

        const patterEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/        

        if(data.fullName.length < 8){            
            Swal.fire({
                icon: "info",
                title: "Oops...",
                text: "El nombre debe de tener más de 8 caracteres.",               
                confirmButtonColor : "#17c5e4",
                confirmButtonText : "Siguiente"
            });
            return false
        
        }else if(data.phoneUser.length < 10 || data.phoneUser.length > 10){
            Swal.fire({
                icon: "info",
                title: "Oops...",
                text: "El número de telefono debe de tener 10 digitos.",                                           
                confirmButtonColor : "#17c5e4",
                confirmButtonText : "Siguiente"
            });
            return false
        
        }else if(!patterEmail.test(data.emailUser) && data.emailUser != ''){
            Swal.fire({
                icon: "info",
                title: "Oops...",
                text: "Por favor ingresa un correo validó.",                               
                confirmButtonColor : "#17c5e4",
                confirmButtonText : "Siguiente"
            });
            return false

        }else if(data.requestUser.length < 20){        
            Swal.fire({
                icon: "info",
                title: "Oops...",
                text: "El asunto de la petición debe de tener almenos.",               
                confirmButtonColor : "#17c5e4",
                confirmButtonText : "Siguiente"
            });
            return false

        }else{
            Swal.fire({
                icon: "success",
                title: "PQR Enviada",
                text: "La PQR ha sido enviada correctamente, gracias y buen día.",               
                confirmButtonColor : "#84d100",
                confirmButtonText : "Siguiente"
            });
            postPqr(validData)
            
            setInterval(refreshPage,2000)            
        }                    
    })

    return(
            <div className='containerForm1'>
                <form className='formTecnic1' onSubmit={onSubmitForm}>
                    <label htmlFor="fullName" className='nameLabel'>Nombres y Apellidos:</label>
                    <br />
                    <input type="text" autoFocus
                        {...register("fullName",{required : true})}
                    />                                                   
    
                    <br />
    
                    <label htmlFor="phoneUser">Celular:</label>
                    <br />
                    <input type="text" 
                    {...register("phoneUser",{required : true})}
                    />                    
    
                    <br />
    
                    <label htmlFor="emailUser">Correo:</label>
                    <br />
                    <input type="text" 
                    {...register("emailUser")}
                    />                                    
    
                    <br />                    
                    <label htmlFor="kindOfRequest">Tipo de PQRS</label>
                    <br />
                    <select 
                        {...register('kindOfRequest',{required : true})}
                    >
                        <option value = "Petición">Petición</option>
                        <option value = "Queja">Queja</option>
                        <option value = "Reclamo">Reclamo</option>
                        <option value = "Denuncia">Denuncia</option>
                        <option value = "Sugerencia">sugerencia</option>
                        <option value = "Felicitación">Felicitación</option>
                    </select>                    

                    <br />                    
                    <label htmlFor="requestUser">Asunto:</label>
                    <br />
                    <textarea rows={3}
                     {...register("requestUser", {required : true},)}></textarea>
    
                    <div className='containerButtonSubmit1'>
                        <Button type='submit' variant="contained">Radicar</Button>
                    </div>
    
                </form>
            </div>
        )
}    