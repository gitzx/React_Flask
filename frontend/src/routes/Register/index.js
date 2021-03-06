import { injectReducer } from '../../store/reducers'
/**
export default (store) => ({
	const Register = require('./containers/RegisterContainer').default
    const reducer = require('./modules/register').default
    injectReducer(store, { key: 'register', reducer })
    return { path: 'register', component: Register }
})
**/

export default (store) => ({
  path : 'register',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Register = require('./containers/RegisterContainer').default
      const reducer = require('./modules/register').default
      //injectReducer(store, { key: 'register', reducer })
      cb(null, Register)
    }, 'register')
  }
})
