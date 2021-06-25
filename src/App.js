import "./App.css";
import Nav from "./Components/Nav";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
