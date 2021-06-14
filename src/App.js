import React, { Suspense } from 'react'
import { Route, Switch, } from "react-router-dom";
import LayoutRouter from "./layouts/LayoutRouter";
import routes from './routes'
import PrivateRouter from "./layouts/privateRouter";
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';
function App() {

  return (
    < div className="App" style={{ overflow: "hidden" }} >
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <LayoutRouter>
          <Switch>
            {routes.map((route, index) => {
              if (!route.isPrivate) {
                return (
                  <Route
                    key={index}
                    component={route.component}
                    path={route.path}
                    exact
                  />
                )
              }
              else {
                return (
                  <PrivateRouter
                    key={index}
                    component={route.component}
                    exact
                    path={route.path}
                  />
                )
              }
            })}
          </Switch>
        </LayoutRouter>
      </Suspense>
    </div >
  );
}

export default App;
