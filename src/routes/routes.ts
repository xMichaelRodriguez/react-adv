import { lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  children?: Route[];
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  exact?: boolean;
  name: string;
  path: string;
}

const LazyPage1 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1')
);
const LazyPage2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2')
);
const LazyPage3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3')
);

export const routes: Route[] = [
  {
    path: '/lazy',
    Component: LazyPage1,
    exact: false,
    name: 'LazyPage-1',
  },
  {
    path: '/lazy2',
    Component: LazyPage2,
    exact: false,
    name: 'LazyPage-2',
  },
  {
    path: '/lazy3',
    Component: LazyPage3,
    exact: false,
    name: 'LazyPage-3',
  },
];
