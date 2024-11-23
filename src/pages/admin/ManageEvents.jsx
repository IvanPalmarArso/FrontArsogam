//Styles
import './styles/manageTable.css';
//Event Context
import { useEvent } from '../../context/eventContext';
//React-hooks
import { useEffect } from 'react';
//Icons 
import { RxUpdate } from 'react-icons/rx';
import { MdDelete } from 'react-icons/md';
//React-router-dom
import { Link, useNavigate } from 'react-router-dom';
//SweetAlert
import Swal from 'sweetalert2';

function ManageEvents(){

    //Event Data
    const {eventList, allEventsApi, deleteEventApi} = useEvent()

    useEffect(() => {
        allEventsApi()
    },[eventList])

    //Use Navigate
    const navigate = useNavigate()

    //Document Title
    useEffect(() => {
        document.title = 'Gestionar Eventos'
    },[])

    return(
        <div className='sectionManageAdmin'>
            <h1>
                Administraci<span>ó</span>n de Eventos
            </h1>
            <p>
                Bienvenido usuario administrador, en este apartado de gestión de eventos, podrás con el rol de 
                administrador poder gestionar todos los eventos que se muestran en la aplicación, en este apartado se 
                podrá agregar un nuevo evento con su respectivo nombre e imagen, se podrán listar todos los diferentes eventos
                que se encuentran registrados en la aplicación, también se podrán actualizar los diferentes eventos que hacen parte del aplicativo
                y por último como administrador podrás eliminar un evento en específico que pertenece a la aplicación.
            </p>

            <div className='containerAddNewManage'>
                <Link className='addManage' to='/AddEvent'>
                    A<span className='tildesFont'>ñ</span>adir Evento
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre - Eventos</th>
                                        <th>Imagen - Evento</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        eventList.map((event) => {
                                            return(
                                                <tr key={event.id}>
                                                    <td data-label = 'Nombre - Evento'>{event.nameEvent}</td>
                                                    <td data-label = 'Imagen - Evento' className='containerTableImage'>
                                                        <img src={event.imageEvent} alt="imageEvent" />
                                                    </td>
                                                    <td data-label = 'Opciones'>
                                                        <Link to={`/updateEvent/${event.id}`}>
                                                            <RxUpdate className='options clientUpdate'/>
                                                        </Link>

                                                        <Link>
                                                            <MdDelete className='options clientDelete' onClick={() => {
                                                                const deleteEvent = Swal.mixin({

                                                                })

                                                                deleteEvent.fire({
                                                                    title : 'Eliminar Evento',
                                                                    text : 'Estas seguro de eliminar el evento seleccionado?',
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
                                                                        deleteEventApi(event.id)
                                                                        deleteEvent.fire({
                                                                            title : 'Evento Eliminado',
                                                                            text : 'El evento ha sido eliminado correctamente.',
                                                                            icon : 'success',
                                                                            confirmButtonColor : '#3ed634',
                                                                            confirmButtonText : 'Siguiente'
                                                                        })
                                                                        navigate('/')
                                                                    }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                        deleteEvent.fire({
                                                                            title : 'Operación Cancelada',
                                                                            text : 'El evento  seleccionado no sera eliminado.',
                                                                            icon : 'info',
                                                                            confirmButtonColor : '#3ed634',
                                                                            confirmButtonText : 'Cancelar'
                                                                        })
                                                                    }
                                                                })

                                                            }}/>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
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

export default ManageEvents