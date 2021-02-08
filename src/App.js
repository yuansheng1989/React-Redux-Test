import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CarArchives from './components/CarArchives';
import ModifyArchives from './components/ModifyArchives';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Redirect to="/car" />
            </Route>
            <Route exact path='/car'>
              <CarArchives />
            </Route>
            <Route exact path='/modify'>
              <ModifyArchives isNew={true} />
            </Route>
            <Route exact path='/modify/:carId'>
              <ModifyArchives isNew={false} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
