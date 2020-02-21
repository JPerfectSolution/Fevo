import React, { Suspense } from "react";
import Loading from "../components/Loading";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "../routes";
import Header from "./Header";
const Layout = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <main className="main">
          <Suspense fallback={<Loading />}>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => <route.component {...props} />}
                  />
                ) : (
                  <div>Could not find page!</div>
                );
              })}
              <Redirect from="/" to="/home" />
            </Switch>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Layout;
