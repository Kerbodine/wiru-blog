import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import Signup from "./components/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={Signup} />
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
