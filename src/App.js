import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'> <Home /> </Route>
            <Route path='/create'> <Form /> </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
