import { useReducer } from "react";
import UseContext from "./UseContext";

const defaultState = {
    items:[],
    totalAmount:0
}

const cartReducer = (state,action) =>{
    if(action.type=='ADD'){
        const index = state.items.findIndex(item=>item.id == action.item.id);
        const existingItem = state.items[index];
        
        let updatedItem;
        let updatedItems = [];
        let updatedTotalAmount;

        if(existingItem){
            // console.log(existingItem.amount + +action.item.amount)
            updatedItem = {...existingItem,amount:existingItem.amount + +action.item.amount}
            updatedItems = [...state.items]
            updatedItems[index] = updatedItem;
            updatedTotalAmount = state.totalAmount + action.item.amount * +action.item.price
            // console.log(typeof(updatedTotalAmount))
        }else{
            updatedItems = state.items.concat(action.item);
            updatedTotalAmount = state.totalAmount + +action.item.amount * action.item.price;
        }
        

        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
        
    }
    else if(action.type == 'REMOVE'){
        const index = state.items.findIndex(item=>item.id == action.id);
        const existingItem = state.items[index];
        existingItem.amount = existingItem.amount - 1;

        let updatedItems=[];
        let updatedItem;
        let updatedTotalAmount = state.totalAmount - existingItem.price;

        if(existingItem.amount == 0){
            updatedItems = state.items.filter(item=>item.id !== action.id)
        }else {
            // console.log(existingItem.amount)
            updatedItem = {...existingItem,amount:existingItem.amount};
            updatedItems = [...state.items]
            updatedItems[index] = updatedItem
            // console.log(updatedItems)
        }

        console.log({
            items:updatedItems,
            totalAmount:updatedTotalAmount
        })
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
}

const UseContextProvider = (props) => {

    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultState);

    const addItemToStore = (item) => {
        dispatchCartAction({type:'ADD',item:item})
    }
    // const addTwoItemToStore = (item) => {
        
    // }
    // const addThreeItemToStore = (item) => {
        
    // }
    const removeItemFromStore = (id) => {
        dispatchCartAction({type:'REMOVE',id:id})
    }

    const useContext = {
        items:cartState.items,
        addItem:addItemToStore,
        // addTwoItem:addTwoItemToStore,
        // addThreeItem:addThreeItemToStore,
        removeItem:removeItemFromStore,
        totalAmount:cartState.totalAmount
    }

    return (
        <UseContext.Provider value={useContext}>
            {props.children}
        </UseContext.Provider>
    )
}

export default UseContextProvider;