// saga 模块化引入
import { fork } from 'redux-saga/effects'

// 一些同步逻辑
// import { watchIncrementAsync, watchFirstThreeTodosCreation, watchTimer } from './synchronous' //actionsType已删除

// 异步逻辑
// import { watchPost } from './posts' //actionsType已删除

// 单一进入点，一次启动所有 Saga
export default function* rootSaga() {
  yield [
    // fork(watchIncrementAsync),
    // fork(watchFirstThreeTodosCreation)
  ]
}