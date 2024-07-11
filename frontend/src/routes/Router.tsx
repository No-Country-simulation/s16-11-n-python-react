import { Route, Switch } from 'wouter';
import { routes } from './routes';

export default function Router() {
  return (
    <Switch>
      {routes.map((route, index) =>
        !route.errorPage ? (
          <Route
            key={`route-${index}`}
            path={route.path}
            component={route.component}
          />
        ) : (
          <Route component={route.component}></Route>
        )
      )}
    </Switch>
  );
}
