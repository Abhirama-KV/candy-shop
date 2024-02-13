import { createContext } from "react";

const UseContext = createContext({
    items:[],
    totalAmount:0,
    addOneItem:(item)=>{},
    addTwoItem:(item)=>{},
    addThreeItem:(item)=>{},
    removeItem:(id)=>{}
})

export default UseContext;