import Testi from '@/assets/images/Testi.jpg';
import Image from 'next/image';

const Card1 = () => {
  return (
    <div className="w-[350px] h-[446px] rounded-xl border-4 relative z-1"
      style={{
        boxShadow: "0px 4px 21.8px 0px rgba(93, 93, 93, 0.25)",
      }}>
      <Image src={Testi} alt='Testimonial' width={80} height={80} className='mx-auto mt-5 rounded-full'/>
      <p className="font-inter font-semibold text-center text-black mt-10"
        style={{ fontSize: 24 }}>
        Bruce
      </p>
      <p className="text-center text-black font-inter font-medium mt-16 px-3"
        style={{ fontSize: 15 }}>
       I have had the pleasure of working with the Toingg team to implement their AI solutions across our organization, and the results have been nothing short of transformative
      </p>
    </div>
  )
}

export default Card1
