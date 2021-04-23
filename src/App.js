import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { SplashScreen, Login, Register, ForgotPassword, ChatList, Message } from './Pages'
import NotFound from './Components/NotFound'
import { PrivateRoute, PublicRoute } from "./Components/Route/index"
import { Provider } from 'react-redux'
import configureStore from './Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
// import { Redirect } from 'react-router-dom';

const { store, persistor } = configureStore()
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/chatlist" exact={true} component={() => <ChatList />} />
        <PrivateRoute path="/chatlist/message/:name/:contact" exact={true} component={() => <Message />} />
        <PublicRoute restricted={true} path="/" exact={true} component={() => <SplashScreen />} />
        <PublicRoute restricted={true} path="/login" exact={true} component={() => <Login />} />
        <PublicRoute restricted={true} path="/register" exact={true} component={() => <Register />} />
        <PublicRoute restricted={true} path="/forgot" exact={true} component={() => <ForgotPassword />} />
        <PublicRoute restricted={true} path="*" exact={true} component={() => <NotFound />} />
        <PrivateRoute path="*" exact={true} component={() => <NotFound />} />
      </Switch>
    </Router>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  )
}
// function App() {
//   return (
//     <Router>
//       <Switch>
//         <PrivateRoute path="/chatlist" exact={true} component={() => <ChatList />} />
//         <PrivateRoute path="/chatlist/message/:name/:contact" exact={true} component={() => <Message />} />
//         <PublicRoute restricted={true} path="/" exact={true} component={() => <SplashScreen />} />
//         <PublicRoute restricted={true} path="/login" exact={true} component={() => <Login />} />
//         <PublicRoute restricted={true} path="/register" exact={true} component={() => <Register />} />
//         <PublicRoute restricted={true} path="/forgot" exact={true} component={() => <ForgotPassword />} />
//         <PublicRoute restricted={false} path="*" exact={true} component={() => <NotFound />} />
//         <PrivateRoute path="*" exact={true} component={() => <NotFound />} />
//       </Switch>
//     </Router>
//   )

  // const [userToken, setUserToken] = useState(null)

  // useEffect(() => {
  //   function getToken() {
  //     const userToken = localStorage.getItem('userToken')
  //     setUserToken(userToken)
  //   }
  //   getToken()
  //   // console.log(userToken)
  // }, [userToken])

  // if (!userToken) {
  //   return (<Router>
  //     <Switch>
  //       <Route path="/" exact>
  //         <SplashScreen />
  //       </Route>
  //       {/* <Route path="/splashscreen" exact>
  //         <SplashScreen />
  //       </Route> */}
  //       <Route path="/login">
  //         <Login userToken={userToken} setUserToken={setUserToken} />
  //       </Route>
  //       <Route path="/register" component={Register}>
  //         <Register userToken={userToken} setUserToken={setUserToken} />
  //       </Route>
  //       <Route path="/forgot" component={ForgotPassword}>
  //         <ForgotPassword userToken={userToken} setUserToken={setUserToken} />
  //       </Route>
  //       <Route path="*">
  //         <NotFound />
  //       </Route>
  //     </Switch>
  //   </Router>)
  // }
  // return (
  //   <Router>
  //     <Switch>
  //       <Route path="/login" exact>
  //         <Redirect to='/chatlist' />
  //       </Route>
  //       <Route path="/chatlist" component={ChatList} exact>
  //         <ChatList userToken={userToken} setUserToken={setUserToken} />
  //       </Route>
  //       <Route path="/chatlist/message/:name/:contact" component={Message}>
  //         <Message userToken={userToken} setUserToken={setUserToken} />
  //       </Route>
  //       {/* <Route path="/callhistory/:email" component={CallHistory}>
  //         <CallHistory />
  //       </Route>
  //       <Route path="/chatlist/user_id" component={ChatList}>
  //         <ChatList />
  //       </Route> */}
  //       <Route path="*">
  //         <NotFound />
  //       </Route>
  //     </Switch>
  //   </Router>)
// }

// export default App;
