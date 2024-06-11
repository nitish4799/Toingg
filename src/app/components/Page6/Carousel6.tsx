import Card2 from "./Card2";
import Card3 from "./Card3";
import Card1 from "./Card1";
import bg from '@/assets/images/Bg.svg';
import Image from "next/image";

const Carousel6 = () => {
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

export default Carousel6;
