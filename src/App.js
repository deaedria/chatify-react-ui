import React from 'react';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import { Login, Register, ForgotPassword, CallHistory, ChatList, Message} from './Pages'

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route path="/" component={Login} exact>
          <Login />
        </Route>
        <Route path="/register" component={Register}>
          <Register />
        </Route>
        <Route path="/forgot" component={ForgotPassword}>
          <ForgotPassword />
        </Route>
        <Route path="/callhistory/:email" component={CallHistory}>
          <CallHistory />
        </Route>
        <Route path="/chatlist/:email" component={ChatList}>
          <ChatList />
        </Route>
        <Route path="/message/:email" component={Message}>
          <Message />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
