import Laura from '@/assets/images/Laura.jpg';
import Image from 'next/image';

const Card3 = () => {
  return (
    <div className="w-[350px] h-[446px] rounded-xl border-4 relative z-1"
      style={{
        boxShadow: "0px 4px 21.8px 0px rgba(93, 93, 93, 0.25)",
      }}>
      <Image src={Laura} alt='Testimonial' width={80} height={80} className='mx-auto mt-5 rounded-full' />
      <p className="font-inter font-semibold text-center text-black mt-10"
        style={{ fontSize: 24 }}>
        Laura
      </p>
      <p className="text-center text-black font-inter font-normal mt-16 px-3"
        style={{ fontSize: 15 }}>
        What truly sets Toingg apart, however, is their commitment to collaboration and customer success. From the initial consultation to ongoing support, their team has been a trusted partner every step of the way, providing tailored guidance and ensuring that our AI investments deliver tangible ROI.
      </p>
    </div>
  )
}

export default Card3
