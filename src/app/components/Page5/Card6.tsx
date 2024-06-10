import Image from "next/image";
import Light from '@/assets/images/Scale.svg';

const Card6 = () => {
  return (
    <div className="flex-col justify-center w-[450px]">
      <Image src={Light} alt='light' width={71} height={76} className="py-12 mx-auto" />
      <p className="font-inter font-semibold text-black text-center"
        style={{ fontSize: 24 }}>
        Scalability at Your Fingertips
      </p>
      <p className="font-inter font-normal text-center text-black mt-24"
        style={{ fontSize: 18 }}>
        From one-on-one <br/>
        conversations to managing <br/>
        10,000 concurrent calls, our <br/>
        platform scales effortlessly <br/>
        with your business.
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

export default Card6
