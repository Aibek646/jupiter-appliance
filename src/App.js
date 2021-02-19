import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Residential from "./Components/Residential";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/residential" component={Residential} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
