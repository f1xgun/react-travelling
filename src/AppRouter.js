import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "./components/routes";
import { HOME_ROUTE } from "./consts";
import { useContext } from "react";
import { Context } from ".";

function AppRouter() {
  const {user} = useContext(Context)

  console.log(user)
  return (
    <Router>
      <div>
        <div className="wrapper">
          <Header />
          <Switch>
            {user.isAuth && authRoutes.map(({path, Component}) =>
              <Route key={path} path={path} component={Component} exact />
            )}
            {publicRoutes.map(({path, Component}) =>
              <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={HOME_ROUTE} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
