// just for learn
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import accountReducer from "./accounts/accountSlice";
import customerReducer from "./customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

// store.dispatch(deposit(500));
// console.log(store.getState());

// store.dispatch(withdraw(300))
// console.log(store.getState());

// store.dispatch(requestLoan(1000, "buy a house"))
// console.log(store.getState());

// store.dispatch(payLoan())
// console.log(store.getState());

// store.dispatch(createCustomer("john english", "1231231"));
// console.log(store.getState());
// store.dispatch(updateName("john ricard english"));
// console.log(store.getState());

export default store;
