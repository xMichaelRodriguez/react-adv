import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  children?: Route[];
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  exact?: boolean;
  name: string;
  path: string;
}

// const LazyPage1 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1')
// );

// const LazyPage2 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2')
// );
// const LazyPage3 = lazy(
//   () =>
//     import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3')
// );

export const routes: Route[] = [
  {
    path: '/lazyload',
    Component: lazy(
      () => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layouts/LazyLayout')
    ),
    exact: false,
    name: 'LazyLoading Nested',
  },
  {
    path: '/no-lazy',
    Component: NoLazy,
    exact: false,
    name: 'No Lazy',
  },
];
