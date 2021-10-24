import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Booking from './Pages/Booking/Booking/Booking';

function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route exact path='/booking/:serviceId'>
              <Booking></Booking>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
