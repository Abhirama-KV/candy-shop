import CandyContext from './CandyContext';
import { useReducer, useState } from 'react';

const defaultCandies = {
    candies:[]
}

const candyReducer = (state,action) => {
    const updatedCandies = state.candies.concat(action.inputCandy)
    return {
        candies:updatedCandies
    }
} 

const CandyContextProvider = (props) => {

    const [candyState,dispatchAction] = useReducer(candyReducer,defaultCandies)

    const addCandyToStore = (candy)=> {
        dispatchAction({inputCandy:candy})
    }

    const candyContext = {
        candies:candyState.candies,
        addCandy:addCandyToStore
    }

    return (
        <CandyContext.Provider value={candyContext}>
            
            {props.children}
        </CandyContext.Provider>
    )
}

export default CandyContextProvider;