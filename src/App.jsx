//React-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Pages
import Home from './pages/main'
import KhowUs from './pages/khowUs';
import Services from './pages/Services';
import Events from './pages/Events';
import News from './pages/News';
import Pqrs from './pages/PQR/Pqrs';
import InfoArso from './pages/InfoArso';
import { GalleryArso } from './pages/gallery';
//Auth Pages
import Login from './pages/auth/login';
import Register from './pages/auth/register';
//Components
import Navbar from './components/navbar';
import { ScrollTop } from './components/scrollTop';
//Context
import { AuthProvider } from './context/authContext';
import { GalleryProvider } from './context/galleryContext';
import { NewProvider } from './context/newContext';
import { EventProvider } from './context/eventContext';
import { InfoProvider } from './context/infoContext';
//Protect Routes
import ProtectedRoutes from './ProtectedRoutes';
import ProtectedRoutesAdmin from './ProtectedRoutesAdmin';
//Admin Pages
import ManageUser from './pages/admin/manageUsers';
import FormUser from './pages/admin/formUser';
import ManageGallery from './pages/admin/manageGallery';
import FormGallery from './pages/admin/FormGallery';
import ManageNews from './pages/admin/manageNews';
import FormNews from './pages/admin/FormNews';
import ManageEvents from './pages/admin/ManageEvents';
import FormEvents from './pages/admin/FormEvents';
import ManageInfo from './pages/admin/ManageInfo';
import FormInfo from './pages/admin/FormInfo';

function App() {

    return (           
        <AuthProvider>  
        <InfoProvider>
        <GalleryProvider>
        <NewProvider>
        <EventProvider>
            <BrowserRouter>            
                <Navbar />        
                <ScrollTop />        
                    <Routes>
                        <Route path = '/' element = {<Home />}/>
                        <Route element = {<ProtectedRoutes />}>
                            <Route path = 'KhowUs' element = {<KhowUs />}/>
                            <Route path = 'Services' element = {<Services />} />
                            <Route path = 'Events' element = {<Events />} />
                            <Route path = 'News' element = {<News />} />
                            <Route path = 'PQRS' element = {<Pqrs />} />
                            <Route path = 'InfoArso' element = {<InfoArso />}/>
                            <Route path = '/GalleryArso' element = {<GalleryArso />}/>                            
                        </Route>                        

                        <Route element = {<ProtectedRoutesAdmin />}>
                            <Route path='manageUsers' element = {<ManageUser />}/>                            
                            <Route path='/addNewUser' element = {<FormUser />}/>
                            <Route path='/updateUser/:id' element = {<FormUser />}/>

                            <Route path='manageGallery' element = {<ManageGallery />}/>
                            <Route path='/addNewGallery' element = {<FormGallery />}/>
                            <Route path='/updateGallery/:id' element = {<FormGallery />}/>

                            <Route path='manageNews' element={<ManageNews />}/>
                            <Route path='/addNew' element={<FormNews />} />
                            <Route path='/updateNews/:id' element={<FormNews />} />

                            <Route path='manageEvents' element = {<ManageEvents />}/>
                            <Route path='/AddEvent' element = {<FormEvents />} />
                            <Route path='/updateEvent/:id' element = {<FormEvents />}/>

                            <Route path='manageInfo' element = {<ManageInfo />}/>
                            <Route path='/addInfo' element = {<FormInfo />} />
                            <Route path='/updateInfo/:id' element = {<FormInfo />} />

                        </Route>

                        <Route path = '/loginUser' element = {<Login />} />                        
                        <Route path = '/registerUser' element = {<Register />} /> 
                        
                        <Route path = '*' element = {<h1>Not Found</h1>} />                                   
                    </Routes>                     
            </BrowserRouter>  
        </EventProvider>
        </NewProvider>          
        </GalleryProvider>   
        </InfoProvider>
        </AuthProvider>
    )
}

export default App;