import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
              <nav className="navbarContainer">
                  <a href="/home">Home</a>
                  <a href="/home">Posts</a>
                  <a href="/header">Header</a>
                  <a href="/post/:id">Post Detail</a>
              </nav>
          </div>
        <Switch>
          <Route path="/home"><Home></Home></Route>
          <Route path="/post/:id"><PostDetails></PostDetails></Route>
          <Route exact path="/"><Home></Home></Route>
          <Route exact path="/header"><Header></Header></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
