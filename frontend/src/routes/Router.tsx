import { Route, Switch } from 'wouter';
import { routes } from './routes';

export default function Router() {
  return (
    <Switch>
      {routes.map((route) =>
        route.errorPage ? (
          <Route key="error-route" component={route.component}></Route>
        ) : (
          <Route
            key={`route-${route.path}`}
            path={route.path}
            component={route.children ? undefined : route.component}
            nest={Boolean(route.children)}
          >
            {route.children && <route.component />}
            {route.children &&
              route.children.map((childRoute) => (
                <Route key={`child-${childRoute.path}`} path={childRoute.path} component={childRoute.component} />
              ))}
          </Route>
        )
      )}
    </Switch>
  );
}
