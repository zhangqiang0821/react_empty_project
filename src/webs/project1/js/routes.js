import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  App,
  Home,
  NotFoundPage,
} from './containers'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    {/*<Route path="路由地址" getComponents={(nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./组件路径/按需加载demo').default)
        }, 'chunkName')
      }} />*/}
    <Route path="*" component={NotFoundPage}/>
  </Route>
);