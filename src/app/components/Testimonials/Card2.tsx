import Image from "next/image";
import Christina from '@/assets/images/Christina.jpg';

const Card2 = () => {
    return (
        <div className="w-[350px] h-[446px] rounded-xl border-4 relative z-1"
            style={{
                boxShadow: "0px 4px 21.8px 0px rgba(93, 93, 93, 0.25)",
            }}>
            <Image src={Christina} alt='Testimonial' width={80} height={80} className='mx-auto mt-5 rounded-full' />
            <p className="font-inter font-semibold text-center text-black mt-10"
                style={{ fontSize: 24 }}>
                Christina
            </p>
            <p className="text-center text-black font-inter font-normal mt-16 px-3"
                style={{ fontSize: 15 }}>
                Toinggs cutting-edge technology and expertise have enabled us to automate manual processes, gain unprecedented insights from our data, and drive business growth in ways we never thought possible.
            </p>
        </div>
    )
}

export default Card2
