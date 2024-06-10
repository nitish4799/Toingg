import Image from "next/image"
import Tools from '../../../assets/images/Tools.png'

const Card2 = () => {
  return (
    <div className="w-[350px] h-[446px] rounded-xl shadow-md"
    style={{ borderWidth: 1}}>
      <Image className="mx-auto mt-8" src={Tools} alt="Tools Image"
      width={88} height={92}/>
      <p className="font-inter font-semibold text-center text-black mt-10"
      style={{ fontSize: 24 }}>
        Custom Tools
      </p>
      <p className="text-center text-black font-inter font-normal mt-16"
      style={{ fontSize: 15}}>
      Enable your phone agent to access <br/>
      external APIs, live during the call, to access <br/>
      customer records and knowledgebases, <br/>
      and perform actions like scheduling <br/>
      appointments.
      </p>
    </div>
  )
}

export default Card2
