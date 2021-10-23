import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
