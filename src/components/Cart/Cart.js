import { useContext, useState } from "react";
import Button from "../../store/UI/Button";
import Modal from "../../store/UI/Modal";
import UseContext from "../../store/UseContext";


const Cart = (props)=>{
    const cartCtx = useContext(UseContext)
    
    const totalAmount = cartCtx.totalAmount;

    const addItemHandler = (item) =>{
        cartCtx.addItem({...item,amount:1})
    }

    const removeItemHandler = (id) =>{
        cartCtx.removeItem(id)
        console.log('removeItem')
    }

   

    return (
        <Modal close={props.close}>
            <h1 className="mx-4 font-bold text-2xl ">CART</h1>
            {cartCtx.items.map(item=><div className=" mx-4 pb-4 border border-b-amber-700 border-collapse mb-2 border-white ">
                                <div className="flex justify-between ">
                                    <span className="text-3xl">{item.name} </span>
                                    <div className="mr-[10%]">
                                        <span onClick={()=>addItemHandler(item)} className="cursor-pointer border text-3xl text-red-700 border-red-700 px-2 rounded-lg">+</span>
                                        <span onClick={()=>removeItemHandler(item.id)} className=" cursor-pointer border text-3xl text-red-700 border-red-700 px-3 mx-2 rounded-lg">-</span>
                                    </div>
                                </div>

                                <span className="text-xl">{item.price} </span> 
                                <span className="text-xl"> * {item.amount} </span> 
                                
                                        </div>)}
            
            <div className="flex mt-12">
            <span className="inline-block my-4 px-4 py-2 text-2xl font-bold text-white rounded-lg bg-red-600">Total Price:{totalAmount}</span>
            <div className="ml-[50%]">
                <button onClick={()=>props.close()} className="font-bold bg-amber-700 text-3xl px-4 py-3 text-white rounded-lg m-4">Close</button>
                {cartCtx.length > 0 && <button className="font-bold bg-amber-700 text-3xl px-4 py-3 text-white rounded-lg m-4">Submit</button>}
            </div>
            </div>
        </Modal>
        
    )
}

export default Cart;