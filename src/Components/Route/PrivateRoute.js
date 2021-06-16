import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
// import { userToken } from '../../Helper/const'

const PrivateRoute = ({ component: Component, ...rest}) => {
    const { isLogin } = useSelector((state) => state.UserLogin)
    // console.log(isLogin)
    return (
        <Route {...rest} render={(props) => isLogin ? 
        <Component {...props} /> : <Redirect to='/' />} />
    )
}

export default PrivateRoute
