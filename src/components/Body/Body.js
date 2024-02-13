import AvailableCandies from "./AvailableCandies";
import InputMenu from "./InputMenu";

const Body = () => {
    return (
        <div className="bg-gray-700 h-screen">     
            <InputMenu />
            <AvailableCandies />
        </div>
    )
}

export default Body;