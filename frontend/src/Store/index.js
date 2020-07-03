import { combineReducers,createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk'
import {reducer as productState} from '../Pages/Products/products.reducer';
import {reducer as cartState} from '../Pages/Cart/cart.reducer'; 



const reducers = combineReducers({
  /*Aqui registro a lista de todos os meus reducers */
  productState,
  cartState
});

//cria a store com todos os reducers combinados
const store = createStore(reducers,applyMiddleware(ReduxThunk));
//disponibilizo a store para toda a aplicação
export default store;