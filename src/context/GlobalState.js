import React, {createContext , useReducer} from "react";
import AppReducer from './AppReducer'


// inital state :
const initalState = {
    transactions : [
    ]
} 

// create context 
export const GlobalContext =  createContext(initalState);

//Provider Context 
export const GlobalProvider =  ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer , initalState);

    // Actions 
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
          });
    }

    function addTransaction(transaction){
            dispatch({
              type: 'ADD_TRANSACTION',
              payload: transaction
            });
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>{children}</GlobalContext.Provider>)
}