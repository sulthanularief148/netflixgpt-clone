import React from 'react'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'


const Body = () => {
    const dispatch = useDispatch()
    const appRoute = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
            

        } else {
            dispatch(removeUser())
        }
    });
    return (
        <>
            <RouterProvider router={appRoute} />
        </>

    )
}

export default Body