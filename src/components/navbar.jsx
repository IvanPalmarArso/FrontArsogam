//React-Router-Dom
import { Link } from 'react-router-dom'
//React-router-dom
import { useNavigate } from 'react-router-dom'
//Images
import logoArsogam from './img/logoArsogam.svg'
//Auth Context
import { useAuth } from '../context/authContext'
//Style
import './style/navbar.css'
import { useEffect } from 'react'
//SweetAlert
import Swal from 'sweetalert2'

function Navbar(){
    
    const {isAuthenticated, user, logoutUserApi} = useAuth()

    const navigate = useNavigate()    

    return(
        <div className='containerNavBar'>
            <div className='containerImage'>
                <img src={logoArsogam} alt="logoArsogam" />
            </div>
            <nav className='navBar'>                
                {user?.isAdmin ?
                <ul>
                    <li>
                        <Link className='linkNav' to = '/'>Inicio</Link>
                    </li>                                                            
                    <li>
                        <Link className='linkNav' to = '/manageUsers'>Usuarios</Link>
                    </li>                    
                    <li>
                        <Link className='linkNav' to = '/manageEvents'>Eventos</Link>
                    </li>                    
                    <li>
                        <Link className='linkNav' to = '/manageNews'>Noticias</Link>
                    </li>
                    <li>
                        <Link className='linkNav' to = '/manageGallery' >Galeria</Link>
                    </li>                    
                </ul>    
                :
                <ul>
                    <li>
                        <Link className='linkNav' to = '/' >Inicio</Link>
                    </li>
                    <li>
                        <Link className='linkNav' to = 'KhowUs' >Conocenos</Link>
                    </li>
                    <li>
                        <Link className='linkNav' to = 'Events'>Eventos</Link>
                    </li>
                    <li>
                        <Link className='linkNav' to = 'Services'>Servicios</Link>
                    </li>
                    <li>
                        <Link className='linkNav' to = 'News' >Noticias</Link>
                    </li>
                    <li>
                        <Link className='linkNav' to = 'PQRS' >Pqrs</Link>
                    </li>                    
                </ul>    
                }
                {isAuthenticated ? 
                <ul>                    
                    <li>
                        <Link className='linkNav' to='/loginUser' >{user.fullName.split(' ')[0]}</Link>    
                    </li>     
                    <li>
                        <Link className='logOutLink'
                        onClick={() => {
                            const logOutUser = Swal.mixin({

                            })

                            logOutUser.fire({
                                title : 'Cerrar Sesión',
                                text : 'Estas seguro que deseas cerrar la sesión?',
                                icon : 'info',
                                showCancelButton : true,
                                confirmButtonText : 'Si, Cerrar!',
                                confirmButtonColor : '#3ed634',
                                cancelButtonText : 'Cancelar',
                                cancelButtonColor : '#ff2d2d'
                            }).then((result) => {
                                if(result.isConfirmed){
                                    logoutUserApi()
                                    navigate('/loginUser')
                                }else if(result.dismiss === Swal.DismissReason.cancel){
                                    logOutUser.fire({
                                        title : 'Operación Cancelada',
                                        text : 'Continuaras con tu sesión, buen viaje.',
                                        icon : 'info',
                                        confirmButtonColor : '#3ed634',
                                        confirmButtonText : 'Volver'
                                    })
                                }
                            })
                        }}
                        >Salir</Link>
                    </li>                    
                </ul>
                :       
                <ul>                    
                    <li>
                        <Link className='linkNav' to='/loginUser' >Login</Link>    
                    </li>     
                    <li>
                        <Link className='logOutLink' to='/registerUser' >Empezar</Link>
                    </li>                    
                </ul>
                }
            </nav>
        </div>
    )
}

export default Navbar