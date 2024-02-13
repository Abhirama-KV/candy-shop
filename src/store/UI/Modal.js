import { Fragment } from "react";
import  ReactDOM  from "react-dom";

const Modal = (props) => {
    const Backdrop = ()=>{
        return (
            <div onClick={()=>props.close()} className="fixed h-screen top-0 left-0 bg-black opacity-50 w-full z-20"></div>
        )
    }
    const Overlay = (props)=>{
        return (
            <div className="fixed top-[20vh] bg-white w-[90%] left-[5%] rounded-lg p-4 shadow-lg z-30">
                
                <div>{props.children}</div>
            </div>
            
        )
    }
    const overlayElement = document.getElementById('overlay');
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />,overlayElement)}
            {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,overlayElement)}
        </Fragment>
    )
}

export default Modal;