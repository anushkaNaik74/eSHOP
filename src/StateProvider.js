import React, {createContext, useContext, useReducer} from 'react';

// preaparing the data layer
export const StateContext = createContext();

// wrap our app and provide the data layer with the data
export const StateProvider = ({reducer, initialState, children}) => (
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    );

// Pull the information from the data layer
export const useStateValue = () => useContext(StateContext);