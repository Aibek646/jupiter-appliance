import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Residential from "./Components/Residential";
import { Route, Switch } from "react-router-dom";
import SingleResidential from "./Components/SingleResidential";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/residential" component={Residential} />
        <Route exact path="/" component={Main} />
        <Route exact path="/residential/:id" component={SingleResidential} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
