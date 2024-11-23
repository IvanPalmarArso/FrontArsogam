//Styles 
import './styles/manageTable.css'
//Gallery Context
import { useGallery } from '../../context/galleryContext'
//React-hooks
import { useEffect } from 'react'
//Icons
import { RxUpdate } from 'react-icons/rx'
import { MdDelete } from 'react-icons/md'
//React-router-dom
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
//SweetAlert
import Swal from 'sweetalert2'

function ManageGallery(){

    const {galleryList, getAllGalleryApi, deleteGalleryApi} = useGallery()

    useEffect(() => {
        getAllGalleryApi()
    },[galleryList])

    useEffect(() => {
        document.title = 'Gestionar Galeria'
    })

    const navigate = useNavigate()

    return(
        <div className='sectionManageAdmin'>
            <h1>
                Administraci<span className = 'tildesFont'>ó</span>n de la Galeria
            </h1>
            <p>
                Bienvenido usuario administrador, en este apartado de administración de la
                Galería de imágenes podrás realizar operaciones como; visualizar todas las
                imágenes que componen la galería con su respectivo nombre, agregar nuevas 
                imágenes a la galería con su respectiva información, actualizar un registro 
                ya existente cambiando sus datos en específico o los datos que deban ser 
                actualizados y por último se le permitirá como administrador eliminar 
                imágenes que pertenezcan a la galería.
            </p>
            
            <div className='containerAddNewManage'>
                <Link className='addManage' to = '/addNewGallery'>
                    A<span className='tildesFont'>ñ</span>adir Nueva Imagen
                </Link>
            </div>
            
            <div className='containerManage'>
                <div>
                    <div>
                        <div className='containerTable'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre de la Imagen</th>
                                        <th>Imagen - Galeria</th>
                                        <th className='optionsFile'>Opciones</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        galleryList.map((gallery) => {
                                            return(
                                                <tr key={gallery.id}>
                                                    <td data-label = 'Nombre - Imagen'>{gallery.nameImage}</td>
                                                    <td data-label = 'Imagen' className='containerTableImage'>
                                                        <img src={gallery.galleryImage} alt={gallery.nameImage} />
                                                    </td>
                                                    <td data-label = 'Opciones'>
                                                        <Link to={`/updateGallery/${gallery.id}`}>
                                                            <RxUpdate className='options clientUpdate'/>
                                                        </Link>

                                                        <Link>
                                                            <MdDelete className='options clientDelete' onClick={() => {
                                                                const deleteGallery = Swal.mixin({

                                                                })

                                                                deleteGallery.fire({
                                                                    title : 'Eliminar Imagen',
                                                                    text : 'Estas seguro de eliminar la imagen de la galeria?',
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
                                                                        deleteGalleryApi(gallery.id)
                                                                        
                                                                        deleteGallery.fire({
                                                                            title : 'Imagen Eliminada',
                                                                            text : 'La imagen ha sido eliminada correctamente de la galeria.',
                                                                            icon : 'success',
                                                                            confirmButtonColor : '#3ed634',
                                                                            confirmButtonText : 'Siguiente'
                                                                        })

                                                                        navigate('/')
                                                                    }else if(result.dismiss === Swal.DismissReason.cancel){
                                                                        deleteGallery.fire({
                                                                            title : 'Operación Cancelada',
                                                                            text : 'No se eliminara la imagen seleccionada.',
                                                                            icon : 'success',
                                                                            confirmButtonColor : '#3ed634',
                                                                            confirmButtonText : 'Volver'
                                                                        })
                                                                    }
                                                                })
                                                            }}
                                                            
                                                            />
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

export default ManageGallery