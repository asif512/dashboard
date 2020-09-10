import React, { Suspense } from "react";
import { Layout } from "../../views/Layout/Layout";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Route, Switch } from "react-router-dom";
import { Loader } from "../Loader/Loader";
const Home = React.lazy(() => import("../Home/Home"));
const Charts = React.lazy(() => import("../Charts/Charts"));
const Buttons = React.lazy(() => import("../Buttons/Buttons"));

const renderWithLayout = (Component) => (props) => {
  return (
    <Layout {...props}>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    </Layout>
  );
};

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={renderWithLayout(Home)} />
        <Route path="/charts" component={renderWithLayout(Charts)} />
        <Route path="/buttons" component={renderWithLayout(Buttons)} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};
