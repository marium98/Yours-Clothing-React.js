import { createStore , applyMiddleware} from 'redux';

/* add middleware so that whenever action gets fired or dispatched
we can catch them and display them */
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

/* logger middleware is a handy middleware */
import rootReducer from './root-reducer';
const middlewares = [logger];

export const store = createStore(rootReducer , applyMiddleware(...middlewares))

/* this will spread all the of the middleware in the above array (logger)
this function call as a individual function(applyMiddleware()) */
export const persistor = persistStore(store);

/*persistor is the persisted version of persistStore */
//export default { store , persistor };