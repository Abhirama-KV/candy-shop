import { useContext, useRef } from "react";
import CandyContext from "../../store/CandyContext";

const InputMenu = () => {
    const name = useRef();
    const description = useRef();
    const price = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const candy = {
            id:name.current.value+price.current.value,
            name:name.current.value,
            description:description.current.value,
            price:price.current.value
        }
        candyContext.addCandy(candy);
       
    }

    const candyContext = useContext(CandyContext)

    return (
        <form className="text-center bg-white " onSubmit={handleSubmit}>
            <label className="px-4 text-gray-700">Candy Name:</label>
            <input ref={name} type="text" className="border border-gray-700 rounded-2xl px-4 py-2 "/>
            <label className="px-4 text-gray-700">Description:</label>
            <input ref={description} type="text" className="border border-gray-700 rounded-2xl px-4 py-2"/>
            <label className="px-4 text-gray-700">Price:</label>
            <input ref={price} type="text" className="border border-gray-700 rounded-2xl px-4 py-2"/>

            <button className="font-bold text-amber-700 text-3xl px-4 bg-white rounded-lg m-4">ADD TO CART</button>


        </form>
    )
}

export default InputMenu;