import Image from "next/image";
import Tools from "@/assets/images/Voice.png";

const Card3 = () => {
    return (
        <div className="w-[350px] h-[446px] rounded-xl shadow-md"
            style={{ borderWidth: 1 }}>
            <Image className="mx-auto mt-8" src={Tools} alt="Tools Image"
                width={88} height={92} />
            <p className="font-inter font-semibold text-center text-black mt-10"
                style={{ fontSize: 24 }}>
                Dedicated Infrastructure
            </p>
            <p className="text-center text-black font-inter font-normal mt-16"
                style={{ fontSize: 15 }}>
                Even during moments of high volume, <br/>
                your enterprise’ infrastructure is <br/>
                partitioned from our general API, <br/>
                increasing the reliability of your <br/>
                phone agents.
            </p>
        </div>
    )
}

export default Card3
