import Image from "next/image";
import Tools from '@/assets/images/Tune.png';

const Card1 = () => {
    return (
        <>
            <div className="w-[350px] h-[446px] rounded-xl border-4 relative z-1"
                style={{
                    boxShadow: "0px 4px 21.8px 0px rgba(93, 93, 93, 0.25)",
                }}>
                <Image className="mx-auto mt-8" src={Tools} alt="Tools Image"
                    width={88} height={92} />
                <p className="font-inter font-semibold text-center text-black mt-10"
                    style={{ fontSize: 24 }}>
                    Fine Tuning
                </p>
                <p className="text-center text-black font-inter font-normal mt-16"
                    style={{ fontSize: 15 }}>
                    Train an AI phone agent on <br />
                    existing phone calls to <br />
                    improve call performance, <br />
                    and build guardrails <br />
                    against hallucination.
                </p>
            </div>
        </>
    )
}

export default Card1
