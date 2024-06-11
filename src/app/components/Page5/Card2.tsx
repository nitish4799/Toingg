import Image from "next/image";
import Light from '@/assets/images/Hand.svg';
import Border from '@/assets/images/Border.svg';

const Card2 = () => {
  return (
    <div className="flex-col justify-center w-[495px] h-[700px] relative px-auto py-auto">
      <Image src={Border} alt="Border" width={390} height={684} className="absolute mx-auto left-0 right-0 my-auto top-0 bottom-0" />
      <Image src={Light} alt='light' width={71} height={76} className="py-12 mx-auto mt-20" />
      <p className="font-inter font-semibold text-black text-center"
        style={{ fontSize: 24 }}>
        Smart Interruption <br/> Management
      </p>
      <p className="font-inter font-normal text-center text-black mt-24"
        style={{ fontSize: 18 }}>
        Our system adeptly handles <br />
        interruptions, ensuring smooth, <br />
        natural dialogues just like human <br />
        conversations
      </p>
      <div className="w-44 h-10 m-auto my-10"
        style={{ backgroundColor: "rgba(255, 147, 69, 1)" }}>
        <button className="w-full">
          <p className="text-white font-inter font-medium text-center">
            Try Now
          </p>
        </button>
      </div>
    </div>
  )
}

export default Card2
