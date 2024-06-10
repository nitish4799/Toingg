import Copy from '@/assets/images/Copy.svg';
import Image from 'next/image';
import Lan1 from '@/assets/images/1.svg';
import Lan2 from '@/assets/images/2.svg';
import Lan3 from '@/assets/images/3.svg';
import Lan4 from '@/assets/images/4.svg';
import Lan5 from '@/assets/images/5.svg';
import Lan6 from '@/assets/images/6.svg';

const Card2 = () => {
  return (
    <div className="">
      <div className="w-[356px] h-[633px] mx-auto rounded-3xl pt-5"
      style={{ backgroundColor: "rgba(255, 246, 232, 1" }}>
        <div className="w-[302px] h-[520] rounded-lg mx-auto"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            <div className="bg-black w-[302px] h-[365px]">
                <div className="h-[26px] flex justify-between px-4"
                style={{ backgroundColor: "rgba(217, 217, 217, 0.24)"}}>
                    <p className="font-inter font-normal text-white text-center py-1"
                    style={{ fontSize: 15}}>
                        Python
                    </p>
                    <div className='flex flex-wrap'>
                        <button>
                            <Image src={Copy} alt='Copy' width={24} height={21}/>
                        </button>
                        <p className='text-white ml-1 font-inter font-normal'>
                            Copy Code
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap items-center h-[150px] gap-5 px-5'>
                <p className='text-black font-roboto-mono font-semibold'>
                    Curl://
                </p>
                <Image src={Lan1} alt='Programming' width={45} height={45}/>
                <Image src={Lan2} alt='Programming' width={28} height={35}/>
                <Image src={Lan3} alt='Programming' width={55} height={53}/>
                <Image src={Lan4} alt='Programming' width={35} height={38}/>
                <Image src={Lan5} alt='Programming' width={46} height={44}/>
                <Image src={Lan6} alt='Programming' width={49} height={51}/>
            </div>
        </div>
       <div className='mt-2'>
        <p className="text-center font-inter font-semibold text-black"
        style={{ fontSize: 24}}>
            Build your own voice agent
        </p>
        <p className="text-center font-inter font-semibold"
        style={{ color: "rgba(107, 107, 107, 1)", fontSize:18}}>
            in just a few lines of code
        </p>
       </div>
      </div>
    </div>
  )
}

export default Card2
