import Image from "next/image";
import Light from "@/assets/images/Light.svg";
import Border from "@/assets/images/Border.svg";

const Card1 = () => {
  return (
    <div className="flex-col justify-center w-[495px] h-[700px] relative px-auto py-auto">
      <Image src={Border} alt="Border" width={390} height={684} className="absolute mx-auto left-0 right-0 my-auto top-0 bottom-0"/>
      <Image src={Light} alt='light' width={71} height={76} className="py-12 mx-auto mt-20" />
      <p className="font-inter font-semibold text-black text-center"
        style={{ fontSize: 24 }}>
        Ultra-Fast Response
      </p>
      <p className="font-inter font-normal text-center text-black mt-24"
        style={{ fontSize: 18 }}>
        Experience lightning-quick <br />
        interactions with an impressive <br />
        500 ms response time, ensuring <br />
        seamless conversations.
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

export default Card1
