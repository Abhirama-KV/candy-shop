import UseContext from "../../store/UseContext";
import { useContext } from "react";

const Candy = (props) => {
    const useContextCandy = useContext(UseContext);

    const addOneHandler = ()=>{
        useContextCandy.addItem(
            {
                id:props.name+props.price,
                name:props.name,
                description:props.description,
                price:props.price,
                amount:+1
            }
        ) 
    }
    const addTwoHandler = ()=>{
        useContextCandy.addItem(
            {
                id:props.name+props.price,
                name:props.name,
                description:props.description,
                price:props.price,
                amount:+2
            }
        ) 
    }
    const addThreeHandler = ()=>{
        useContextCandy.addItem(
            {
                id:props.name+props.price,
                name:props.name,
                description:props.description,
                price:props.price,
                amount:+3
            }
        ) 
    }

    return (
        <li className="text-white text-4xl text-center py-4">
            <span>{props.name} - {props.description} - {props.price}rs</span>
            <button onClick={addOneHandler} className="font-bold text-amber-700 text-3xl px-4 bg-white rounded-lg m-4">Add One</button>
            <button onClick={addTwoHandler} className="font-bold text-amber-700 text-3xl px-4 bg-white rounded-lg m-4">Add Two</button>
            <button onClick={addThreeHandler} className="font-bold text-amber-700 text-3xl px-4 bg-white rounded-lg m-4">Add Three</button>
        </li>
    )
}

export default Candy;