//Styles
import './styles/manageTable.css'
//

//React-hooks
import { useEffect } from 'react'
//Icons
import { RxUpdate } from 'react-icons/rx'
import { MdDelete } from 'react-icons/md'
//React-router-dom
import { Link, useNavigate } from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'
//InfoContext
import { useInfo } from '../../context/infoContext'

function ManageInfo(){

    const {infoList, getAllInfoApi, deleteInfoApi} = useInfo()

    const navigate = useNavigate()

    useEffect(() => {
        getAllInfoApi()
    },[infoList])

    useEffect(() => {
        document.title = 'Gestionar Ganaderia'
    })

    return(
        <div className='sectionManageAdmin'>
            <h1>
                Administraci<span className='tildesFont'>ó</span>n de la Ganader<span className='tildesFont'>í</span>a
            </h1>
            
            <p>
                Bienvenido usuario administrador, en este apartado tendras la posibilidad de gestionar todos los videos
                que van en la seccion de la ganaderia regenerativa Arsogam, podras crear o añadir nuevos videos a la ganaderia, actualizar un video ya existente,
                eleminar un video ya existente y por ultimo visualizar todos los videos que hacen parte de la ganaderia regenerativa Arsogam.
            </p>

            <div className='containerAddNewManage'>
                <Link className='addManage' to='/addInfo'>
                    A<span className='tildesFont'>ñ</span>adir Video
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Video de Ganader<span>í</span>a</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        infoList.map((itemInfo) => {
                                            return(
                                                <tr key={itemInfo.id}>
                                                    <td data-label = 'Video' className='containerTableImage'>
                                                        <video src={itemInfo.infoVideo}
                                                            controls = {true}
                                                            autoPlay = {true}
                                                            muted = {true}
                                                        ></video>
                                                    </td>
                                                    <td data-label = 'Opciones'>
                                                        <Link to={`/updateInfo/${itemInfo.id}`}>
                                                            <RxUpdate className='options clientUpdate'/>
                                                        </Link>

                                                        <Link>
                                                            <MdDelete className='options clientDelete' onClick={() => {
                                                                const deleteInfo = Swal.mixin({

                                                                })

                                                                deleteInfo.fire({
                                                                    title : 'Eliminar Video',
                                                                    text : 'Estas seguro de eliminar el video seleccionado?',
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
                                                                        deleteInfoApi(itemInfo.id)
                                                                        deleteInfo.fire({
                                                                            title : 'Video Eliminado',
                                                                            text : 'El video ha sido eliminado correctamente.',
                                                                            icon : 'success',
                                                                            confirmButtonColor : '#3ed634',
                                                                            confirmButtonText : 'Siguiente'
                                                                        })
                                                                        navigate('/')
                                                                    }
                                                                    else if(result.dismiss === Swal.DismissReason.cancel){
                                                                        deleteInfo.fire({
                                                                            title : 'Operación Cancelada',
                                                                            text : 'La noticia no ser eliminada',
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

export default ManageInfo