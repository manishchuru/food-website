import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar';
import {BrowserRouter as Router ,Route,Link} from 'react-router-dom';
import About from './pages/About';
import Content from './pages/Content';
import Home from './pages/Home';
import News from './pages/News';
import Footer from './Footer';
import Login from './pages/Login';
import Logout from './pages/Logout';

const App = () => {
    return (
        <div>
        <Router>
        <Navbar/>
        <Route exact path='/' component={About}></Route>
        <Route path='/content' component={Content}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/news' component={News}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/logout' component={Logout}></Route>
        </Router>
        <Footer/>
        </div>
    );
}

export default App;
