import React from 'react';
import Arror from '@/assets/images/Arrow.svg';
import Image from 'next/image';

const Sidebar = () => {
    return (
        <div className='bg-gradient-to-b from-[rgba(254,236,223,1)] to-[rgba(211,135,81,1)] w-[350px] h-[560px] mx-auto rounded-3xl'>
            <div className='pt-20 px-10'>
                <div className='flex justify-between'>
                    <p className='font-inter font-medium text-black'
                        style={{ fontSize: 16 }}>
                        Contact
                    </p>
                    <Image src={Arror} alt='arror' width={40} height={15} />
                </div>
                <div className='flex justify-between pt-6'>
                    <p className='font-inter font-medium text-black'
                        style={{ fontSize: 16 }}>
                        Pricing
                    </p>
                    <Image src={Arror} alt='arror' width={40} height={15} />
                </div>
                <div className='flex justify-between pt-6'>
                    <p className='font-inter font-medium text-black'
                        style={{ fontSize: 16 }}>
                        Documentation
                    </p>
                    <Image src={Arror} alt='arror' width={40} height={15} />
                </div>
                <div className='flex justify-between pt-6'>
                    <p className='font-inter font-medium text-black'
                        style={{ fontSize: 16 }}>
                        Join our Community
                    </p>
                    <Image src={Arror} alt='arror' width={40} height={15} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
