import Card1 from "./Card1";
import Card2 from './Card2';
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
const Carousel5 = () => {
    return (
        <div className="w-full carousel items-center h-screen">
            <div className="carousel-item">
                <Card1/>
            </div>
            <div className="carousel-item ">
                <Card2/>
            </div>
            <div className="carousel-item ">
                <Card3/>
            </div>
            <div className="carousel-item ">
                <Card4/>
            </div>
            <div className="carousel-item ">
                <Card5/>
            </div>
            <div className="carousel-item ">
                <Card6/>
            </div>
        </div>
    )
}

export default Carousel5
