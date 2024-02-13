import { useContext } from "react";
import UseContext from "../store/UseContext";


const Header = (props) => {
    const cartCtx = useContext(UseContext);
    const total = cartCtx.items.reduce((currentNumber,item)=>{return currentNumber+item.amount},0)

    return (
        <div className=" h-28">
            
            <img className="absolute w-full h-28" src="https://www.shutterstock.com/image-photo/assortment-colourful-festive-sweets-icecream-600nw-711008179.jpg" />

            <div className="absolute w-full flex justify-between">
            <h1 className=" font-bold text-amber-700 text-6xl ">Candy Shop</h1>
            <button onClick={()=>props.show()} className="font-bold text-amber-700 text-3xl px-4 bg-white rounded-lg m-4">Cart - {total}</button>
            </div>
        </div>
    )
}

export default Header;