import { createContext } from "react";

const CandyContext = createContext(
    {
        candies:[],
        totalAmount:0,
        addCandy:(candy)=>{},
        removeItem:(id)=>{}
    }
)

export default CandyContext;