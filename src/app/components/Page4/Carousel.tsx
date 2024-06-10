import Card1 from "./Card1";
import Card2 from "./Card2";

const Carousel = () => {
    return (
        <div className="w-[356px] carousel rounded-box items-center  my-auto">
            <div className="carousel-item ">
                <Card1/>
            </div>
            <div className="carousel-item">
                <Card2/>
            </div>
        </div>
    )
}

export default Carousel
