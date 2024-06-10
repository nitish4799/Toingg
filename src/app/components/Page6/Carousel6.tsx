import Card2 from "./Card2";
import Card3 from "./Card3";
import Card1 from "./CArd1";

const Carousel6 = () => {
  return (
    <div className="w-[350px] carousel rounded-box items-center m-20">
            <div className="carousel-item ">
                <Card1/>
            </div>
            <div className="carousel-item ">
                <Card2/>
            </div>
            <div className="carousel-item ">
                <Card3/>
            </div>
    </div>
  )
}

export default Carousel6;
