import Image from "next/image";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Testimonials = () => {
    return (
        <div className="w-[350px] carousel rounded-box items-center m-20 relative z-20 bg-white">
            <div className="carousel-item relative z-10">
                <Card1 />
            </div>
            <div className="carousel-item relative z-10">
                <Card2 />
            </div>
            <div className="carousel-item relative z-10">
                <Card3 />
            </div>
        </div>
    )
}

export default Testimonials;
