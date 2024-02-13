const Button = (props) =>{
    return (
        <button className="font-bold text-amber-700 text-3xl px-4 bg-white rounded-lg m-4">{props.children}</button>
    )
}

export default Button;