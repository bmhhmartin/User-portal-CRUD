import React, {useState, useEffect, Suspense, lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import MyContext from '../context/MyContext';
const Homepage = lazy(() => import('../pages/HomePage'));
const AddUserPage = lazy(() => import('../pages/AddUserPage'));
const ShowUser = lazy(() => import('../components/ShowUser/ShowUser'));
const PostPage = lazy(() => import('../pages/PostPage'));
const AllPhotoPage = lazy(() => import('../pages/AllPhotoPage'));
const CustomHookPage = lazy(() => import('../pages/CustomHookPage'));

const AppRoute = () => {
    const [user, setUser] = useState([]);
    const defaultAvatar = 'https://www.gigacer.it/wp-content/uploads/2020/04/avatar-large-square-1030x1030-1.jpg';




    
    return (
        <MyContext.Provider value={[user, setUser, defaultAvatar]}>
            <Suspense fallback={<h1 className='text-center'>Loading...</h1>}>
                <Routes>
                    <Route path="/" element={<Homepage/>}></Route>
                    <Route path="/add" element={<AddUserPage/>}></Route>
                    <Route path="/show/:showID" element={<ShowUser/>}></Route>
                    <Route path="/post" element={<PostPage/>}></Route>
                    <Route path="/photo" element={<AllPhotoPage/>}></Route>
                    <Route path="/custom-hook" element={<CustomHookPage/>}></Route>
                </Routes>
            </Suspense>
        </MyContext.Provider>
    );
}

export default AppRoute;
