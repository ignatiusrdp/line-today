import './App.css';
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Top from "../Top/Top"

function App() {
  return (
    <div className="App">
       <Helmet
        titleTemplate="%s - LINE TODAY"
        defaultTitle="LINE TODAY"
      >
      </Helmet>
      <Router>
        <Switch>
              <Route exact path="/" component={Top} />
              <Route path="/top"/>
              <Route path="/recomendation"/>
              <Route path="/showbiz"/>
              <Route path="/news"/>
              <Route path="/life"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
