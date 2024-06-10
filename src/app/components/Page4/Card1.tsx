import GPT from '@/assets/images/GPT.svg';
import Image from 'next/image';

const Card1 = () => {
  return (
    <div className="">
      <div className="w-[356px] h-[633px] mx-auto rounded-3xl"
      style={{ backgroundColor: "rgba(255, 246, 232, 1" }}>
        <Image src={GPT} width={290} height={258} className='mx-auto py-5' alt='GPT'/>
        <p className='font-inter font-medium text-center text-black'
        style={{ fontSize: 24 }}>
            Explore TOINGG <br/> in
            <span className='mx-2' style={{ color: "rgba(252, 107, 1, 1)"}}>
                GPT
            </span>Store
        </p>
        <div className='mx-8'>
            <li className='font-inter font-normal text-black'
            style={{ fontSize: 16 }}>
                Interactive Communication: Engage in single or batch calls using TOINGG GPT.
            </li>
            <li className='font-inter font-normal text-black'
            style={{ fontSize: 16 }}>
                Interactive Communication: Engage in single or batch calls using TOINGG GPT.
            </li>
            <li className='font-inter font-normal text-black'
            style={{ fontSize: 16 }}>
                Interactive Communication: Engage in single or batch calls using TOINGG GPT.
            </li>
            <li className='font-inter font-normal text-black'
            style={{ fontSize: 16 }}>
                Interactive Communication: Engage in single or batch calls using TOINGG GPT.
            </li>
        </div>
        <div className='mx-auto rounded h-11 w-32 bg-gradient-to-r from-[rgba(255,169,107,1)] to-[rgba(153,91,46,0.75)] mt-5'>
            <button className='w-full'>
                <p className='text-white font-inter font-medium text-center m-auto'
                style={{ fontSize: 15}}>
                    Explore<br/> More
                </p>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Card1
