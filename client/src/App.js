import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import {Provider} from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert'


const App = ()=>(//wrap everythiin ini <Provider> this is made so that all the components that we create can access app level state 
<Provider store={store}>
<Router>
<Fragment>
  <Navbar/>
  <Route exact path="/" component={Landing}/>
  <section className="container">
  <Alert/>
    <Switch>
      <Route exact path="/Register" component={Register}/>
      <Route exact path="/Login" component={Login}/>

    </Switch>
  </section>
</Fragment>

</Router>

</Provider>
  
)




export default App;
