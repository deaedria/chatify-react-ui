import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
// import { userToken } from '../../Helper/const'

const PublicRoute = ({ component: Component, restricted, ...rest}) => {
    const { isLogin } = useSelector((state) => state.UserLogin)
    console.log(isLogin)
    return (
        <Route {...rest} render={(props) => isLogin && restricted ? 
        <Redirect to='/chatlist' /> : <Component {...props} /> } />
    )
}

export default PublicRoute
