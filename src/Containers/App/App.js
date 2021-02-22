import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch , useSelector} from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Top from "../Top/Top";
import Showbiz from "../Showbiz/Showbiz";
import News from "../News/News";
import Life from "../Life/Life";
import Regional from "../Regional/Regional";
import Intermezzo from "../Intermezzo/Intermezzo";
import Trending from "../Trending/Trending";
import Videos from "../Videos/Videos";
import SciTech from "../SciTech/SciTech";
import Sports from "../Sports/Sport";
import Biz from "../Biz/Biz";
import Movie from "../Movie/Movie";
import Story from "../Story/Story";
import Hobbies from "../Hobbies/Hobbies";
import Otomotif from "../Otomotif/Otomotif";
import Parenting from "../Parenting/Parenting";
import Corona from '../Corona/Corona'
import Games from "../Games/Games";
import KataGaul from "../KataGaul/KataGaul";
import English from "../English/English";
import Music from "../Music/Music";
import Campus from "../Campus/Campus";

import {
  fetchUsers
} from "./redux/action"
function App() {
  const appState = useSelector((state) => state.appState)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  return (
    <div>
       <Helmet
        titleTemplate="%s - LINE TODAY"
        defaultTitle="LINE TODAY"
      >
      </Helmet>
      {
        !appState.loading ?
          <div className="App">
            <Navbar/>
            <Switch>
                  <Route exact path="/" component={Top} />
                  <Route path="/TOP" component={Top} />
                  <Route path="/Showbiz" component={Showbiz}/>
                  <Route path="/News" component={News}/>
                  <Route path="/Life" component={Life}/>
                  <Route path="/Regional" component={Regional} />
                  <Route path="/Intermezzo" component={Intermezzo}/>
                  <Route path="/Trending" component={Trending}/>
                  <Route path="/Videos" component={Videos}/>
                  <Route path="/Sci-Tech" component={SciTech} />
                  <Route path="/Sports" component={Sports}/>
                  <Route path="/Biz" component={Biz}/>
                  <Route path="/Movie" component={Movie}/>
                  <Route path="/Story" component={Story} />
                  <Route path="/Hobbies" component={Hobbies}/>
                  <Route path="/Otomotif" component={Otomotif}/>
                  <Route path="/Parenting" component={Parenting}/>
                  <Route path="/Corona-di-RI" component={Corona} />
                  <Route path="/Games" component={Games}/>
                  <Route path="/Kata-Gaul" component={KataGaul}/>
                  <Route path="/English" component={English}/>
                  <Route path="/Music" component={Music}/>
                  <Route path="/Campus" component={Campus}/>
            </Switch>
          </div>
        :
        <div>
          Loading
        </div>
      }
    </div>
  );
}

export default App;
