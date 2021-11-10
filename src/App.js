import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
<<<<<<< HEAD
import Places from "./components/Pages/Places";
=======
>>>>>>> 9fb2b8974f93ab5a02391bda97ea1bf2dba216e2

function App() {
  return (
    <Router>
      <div>
        <div className="wrapper">
          <Header />
          <Switch>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/place" exact>
<<<<<<< HEAD
              <Places />
=======
              places
>>>>>>> 9fb2b8974f93ab5a02391bda97ea1bf2dba216e2
            </Route>
            <Route path="/news" exact>
              news
            </Route>
            <Route path="/feedback" exact>
              feedback
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
