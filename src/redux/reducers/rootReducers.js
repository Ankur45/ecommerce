import {combineReducers} from 'redux';
import { productReducer, selectedProductsReducer } from './productReducers';


const rootReducers = combineReducers({
    productReducer:productReducer,
    selectedProductsReducer:selectedProductsReducer,
})



export default rootReducers;