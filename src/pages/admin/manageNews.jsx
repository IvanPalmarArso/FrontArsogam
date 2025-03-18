//Styles
import './styles/manageTable.css'
//New Context
import { useNew } from "../../context/newContext"
//React-hooks
import { useEffect } from 'react'
//Icons
import {RxUpdate} from 'react-icons/rx'
import {MdDelete} from 'react-icons/md'
//React-router-dom
import {Link, useNavigate} from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'

function ManageNews(){

    const {allNewsApi, newList, deleteNewApi} = useNew()

    const navigate = useNavigate()

    useEffect(() => {
        allNewsApi()
    },[newList])

    useEffect(() => {
        document.title = 'Gestionar Noticias'
    },[])

    return (
        <div className='sectionManageAdmin'>
            <h1>
                Administraci<span className='tildesFont'>ó</span>n de Noticias
            </h1>
            <p>
                Bienvenido usuario administrador, en este apartado de gestión de las noticias 
                te encontraras con la posibilidad de realizar operaciones con las noticias que vayan a
                ser parte del aplicativo, aquí se tendrá la opción de agregar una nueva noticia con su título, imagen y descripción, se visualizarán todas las diferentes noticias que existen y se ingresaron al aplicativo, 
                se pondrán actualizar las noticias ya existentes con su información correspondiente además de poder eliminar
                una noticia en específico que ya no vaya a ser parte del aplicativo.
            </p>

            <div className='containerAddNewManage'>
                <Link className='addManage' to='/addNew'>
                    A<span className='tildesFont'>ñ</span>adir Noticia
                </Link>
            </div>

            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre de la Noticia</th>
                                        <th>Descripci<span className='tildesFont'>ó</span>n de la Noticia</th>
                                        <th>Imagen de la noticia</th>
                                        <th>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        newList.map((news) => {
                                            return(
                                                <tr key={news.id}>
                                                    <td data-label = 'Nombre - Noticia'>{news.newName}</td>
                                                    <td data-label = 'Descripción - Noticia' >{news.textNew.slice(0, 255)}...</td>
                                                    <td data-label = 'Imagen - Noticia' className='containerTableImage'>
                                                        {
                                                            news.imageNew.match('mp4')
                                                            ?   
                                                            <video 
                                                                src = {news.imageNew}
                                                                autoPlay = {true}
                                                                loop = {true}
                                                                muted = {true}
                                                                controls = {true}
                                                            >

                                                            </video>
                                                            :
                                                            <img src={news.imageNew} alt="Notice Image" />
                                                        }
                                                    </td>
                                                    <td data-label = 'Opciones'>
                                                        <Link to={`/updateNews/${news.id}`}>
                                                            <RxUpdate className='options clientUpdate' />
                                                        </Link>

                                                        <Link>
                                                            <MdDelete className='options clientDelete' onClick={() => {
                                                                const deleteNew = Swal.mixin({

                                                                })

                                                                deleteNew.fire({
                                                                    title : 'Eliminar Noticia',
                                                                    text : 'Estas seguro de eliminar la noticia seleccionada?',
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
                                                                        deleteNewApi(news.id)

                                                                        deleteNew.fire({
                                                                            title : 'Noticia Eliminada',
                                                                            text : 'La noticia ha sido eliminada correctamente.',
                                                                            icon : 'success',
                                                                            confirmButtonColor : '#3ed634',
                                                                            confirmButtonText : 'Siguiente'
                                                                        })

                                                                        navigate('/')
                                                                    }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                        deleteNew.fire({
                                                                            title : 'Operación Cancelada',
                                                                            text : 'La noticia no sera eliminada',
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

export default ManageNews