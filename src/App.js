import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Details from './components/Details/Details';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          
          <Route exact path='/'>
            <Home></Home>
            <Services></Services>
            <Footer></Footer>
          </Route>

          <Route exact path='/home'>
            <Home></Home>
            <Services></Services> 
            <Footer></Footer>
          </Route>

          <Route exact path='/services'>
             <Services></Services>
             <Footer></Footer>
          </Route>

          <PrivateRoute exact path='/details/:serviceID'>
            <Details></Details>
            <Footer></Footer>
          </PrivateRoute>

          <Route exact path='/about'>
            <About></About>
            <Footer></Footer>
          </Route>

          <Route exact path='/login'>
            <Login></Login>
            <Footer></Footer>
          </Route>

          <Route exact path='/register'>
            <Register></Register>
            <Footer></Footer>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
            <Footer></Footer>
          </Route>

        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
