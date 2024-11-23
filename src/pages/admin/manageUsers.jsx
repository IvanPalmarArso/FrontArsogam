//Styles
import './styles/manageTable.css'
//AuthContext
import { useAuth } from "../../context/authContext"
//React-hooks
import { useEffect, useState } from "react"
//Icons
import {RxUpdate} from 'react-icons/rx'
import {MdDelete} from 'react-icons/md'
import { CiSearch } from "react-icons/ci";
//React-router-dom
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'
//Use Form
import { useForm } from 'react-hook-form'

function ManageUser(){

    useEffect(() => {
        document.title = 'Gestionar Usuarios'
    }) 

    const {allUsersApi, userList, deleteUserApi, user} = useAuth()

    useEffect(() => {
        allUsersApi()               
    }, [userList])

    const [searchItem, setSearchItem] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([])

    const handleInputChange = (e) => {
        const searchItem = e.target.value
        setSearchItem(searchItem)
        
        const filteredItems = userList.filter((user) => {
            if(user.emailUser === searchItem){
                return user.emailUser === searchItem
            }else{
                setFilteredUsers(user)
            }
        })

        setFilteredUsers(filteredItems)
    }    

    const navigate = useNavigate()

    const {register} = useForm()    

    return(
        <div className="sectionManageAdmin">
            <h1>
                Administraci<span className='tildesFont'>ó</span>n de Usuarios
            </h1>
            <p>
                Bienvenido usuario Administrador, en este apartado de manejo de 
                usuarios podrás tener todas las opciones disponibles para la gestión de todos los diferentes usuarios 
                dentro del sistema, podrás agregar un nuevo usuario con su respectiva información, actualizar un usuario
                ya existente cambiando sus respectivos datos, y por último podrás eliminar un usuario en especifico
                que ya no desee hacer parte del aplicativo.
            </p>        

            <div className="containerAddNewMedia">
                <div className='containerSearchFunctionality'>
                    <label htmlFor="searchInput">
                        <CiSearch className='searchIcon'/>
                    </label>
                    <input type="text"
                    {...register('searchInput')}
                    value={searchItem}
                    onChange={handleInputChange}
                    placeholder='Buscar usuario por email'
                    id='searchInput'
                    className='searchInput'
                    />                    
                </div>
                <Link className="addManage" to='/addNewUser'>
                    A<span className='tildesFont'>ñ</span>adir Nuevo Usuario
                </Link>                
            </div>

            <div className="containerManage">
                <div>
                    <div>
                        <div className="containerTable">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre Completo</th>
                                        <th>N<span className='tildesFont'>ú</span>mero de Telefono</th>
                                        <th>Correo Electr<span className='tildesFont'>ó</span>nico</th>
                                        <th className="optionsFile">Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {                                        
                                     filteredUsers.length > 0 ? 
                                     
                                     filteredUsers.map(users => {
                                        if(users.emailUser != user.emailUser){                                                
                                        return(
                                            <tr key={users.id}>                                                    
                                                <td data-label = 'Nombre Completo'>{users.fullName}</td>
                                                <td data-label = 'Numero de Telefono'>{users.cellPhone}</td>
                                                <td data-label = 'Correo Electrónico' >{users.emailUser}</td>
                                                <td data-label = 'Opciones'>
                                                    <Link to={`/updateUser/${users.id}`}>
                                                        <RxUpdate className="options clientUpdate" />
                                                    </Link>
                                                    <Link>
                                                        <MdDelete className="options clientDelete" onClick={() => {
                                                            const deleteUser1 = Swal.mixin({

                                                            })

                                                            deleteUser1.fire({
                                                                title : 'Eliminar Usuario',
                                                                text : 'Estas seguro de eliminar este usuario?',
                                                                icon : 'warning',
                                                                showCloseButton : true,
                                                                showCancelButton : true,
                                                                confirmButtonText : 'Si, eliminar!',
                                                                confirmButtonColor : '#ff2d2d',
                                                                reverseButtons : true,
                                                                cancelButtonText : 'Cancelar',
                                                                cancelButtonColor : '#3ed634'
                                                            }).then((result) => {
                                                                if(result.isConfirmed){
                                                                    deleteUserApi(users.id)                                                                                                                                                
                                                                    deleteUser1.fire({
                                                                        title : 'Usuario Eliminado',
                                                                        text : 'El usuario ha sido eliminado correctamente',
                                                                        icon : 'success',
                                                                        confirmButtonColor : '#3ed634',
                                                                        confirmButtonText : 'Siguiente'
                                                                    })
                                                                    setFilteredUsers(null)
                                                                    navigate('/')
                                                                }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                    deleteUser1.fire({
                                                                        title : 'Operación Cancelada',
                                                                        text : 'No se eliminara al usuario seleccionado',
                                                                        icon : 'success',
                                                                        confirmButtonColor : '#3ed634',
                                                                        confirmButtonText : 'Volver'
                                                                    })
                                                                }
                                                            })
                                                        }}/>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )}
                                    })
                                     :
                                     userList.map(users => {
                                        if(users.emailUser != user.emailUser){                                                
                                        return(
                                            <tr key={users.id}>                                                    
                                                <td data-label = 'Nombre Completo'>{users.fullName}</td>
                                                <td data-label = 'Numero de Telefono'>{users.cellPhone}</td>
                                                <td data-label = 'Correo Electrónico' >{users.emailUser}</td>
                                                <td data-label = 'Opciones'>
                                                    <Link to={`/updateUser/${users.id}`}>
                                                        <RxUpdate className="options clientUpdate" />
                                                    </Link>
                                                    <Link>
                                                        <MdDelete className="options clientDelete" onClick={() => {
                                                            const deleteUser1 = Swal.mixin({

                                                            })

                                                            deleteUser1.fire({
                                                                title : 'Eliminar Usuario',
                                                                text : 'Estas seguro de eliminar este usuario?',
                                                                icon : 'warning',
                                                                showCloseButton : true,
                                                                showCancelButton : true,
                                                                confirmButtonText : 'Si, eliminar!',
                                                                confirmButtonColor : '#ff2d2d',
                                                                reverseButtons : true,
                                                                cancelButtonText : 'Cancelar',
                                                                cancelButtonColor : '#3ed634'
                                                            }).then((result) => {
                                                                if(result.isConfirmed){
                                                                    deleteUserApi(users.id)                                                                                                                                                
                                                                    deleteUser1.fire({
                                                                        title : 'Usuario Eliminado',
                                                                        text : 'El usuario ha sido eliminado correctamente',
                                                                        icon : 'success',
                                                                        confirmButtonColor : '#3ed634',
                                                                        confirmButtonText : 'Siguiente'
                                                                    })
                                                                    setFilteredUsers(null)
                                                                    navigate('/')
                                                                }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                    deleteUser1.fire({
                                                                        title : 'Operación Cancelada',
                                                                        text : 'No se eliminara al usuario seleccionado',
                                                                        icon : 'success',
                                                                        confirmButtonColor : '#3ed634',
                                                                        confirmButtonText : 'Volver'
                                                                    })
                                                                }
                                                            })
                                                        }}/>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )}
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ManageUser