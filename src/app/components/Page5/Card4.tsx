//  eslint-disable react/no-unescaped-entities
import Image from "next/image";
import Light from '@/assets/images/Flow.svg';

const Card4 = () => {
  return (
    <div className="flex-col justify-center w-[450px]">
      <Image src={Light} alt='light' width={71} height={76} className="py-12 mx-auto" />
      <p className="font-inter font-semibold text-black text-center"
        style={{ fontSize: 24 }}>
        Dynamic Conversational Flows
      </p>
      <p className="font-inter font-normal text-center text-black mt-24"
        style={{ fontSize: 18 }}>
        Navigate through complex <br/>
        conversations with ease, thanks <br/>
        to our AI's ability to understand <br/>
        and adapt to various <br/>
        conversational pathways.
      </p>
      <div className="w-44 h-10 mt-20 m-auto my-10"
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

export default Card4
