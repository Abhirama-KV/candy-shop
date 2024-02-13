import { useContext, useRef } from "react";
import CandyContext from "../../store/CandyContext";
import Button from "../../store/UI/Button";
import UseContext from "../../store/UseContext";
import Candy from "./Candy";

const AvailableCandies = ()=>{
    const candyContext = useContext(CandyContext);
   
    const candies = candyContext.candies;

    

    return (
        <div className="bg-amber-700 m-8 rounded-2xl">
            
            
            <ul className="text-center">
                {candies.map(candy=><Candy name={candy.name} description={candy.description} price={candy.price}/>
                )}
            </ul>
        </div>
        
        
    )
}

export default AvailableCandies;