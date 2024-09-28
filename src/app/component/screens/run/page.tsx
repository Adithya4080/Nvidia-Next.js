import { IoIosArrowForward } from "react-icons/io";

export default function Run() {
    return (
        <>
            <div className="wrapper">
                <div className="flex flex-col items-center justify-center space-y-4 pt-10 ">
                    <h6 className="text-[24px] font-bold">
                        Run Anywhere
                    </h6>
                    <h5 className="text-[36px] font-bold">
                        Accelerate Your AI Deployment With NVIDIA NIM
                    </h5>
                    <p className="text-center max-w-[850px]">
                        Part of NVIDIA AI Enterprise, NVIDIA NIM is a set of easy-to-use inference microservices for accelerating the deployment of foundation models on any cloud or data center and helping to keep your data secure.
                    </p>
                </div>
                <div>
                    <img src="/images/run1.jpg" alt="Info" />
                </div>
                <div className="flex justify-center font-bold">
                    <h6 className="text-[18px]">Learn More About NVIDIA NIM</h6>
                    <IoIosArrowForward className="text-[24px] font-bold text-[#5fb900] hover:text-white" />
                </div>
                <div className="flex justify-center items-center font-bold py-2">
                    <h6 className="text-[18px]">See How to Deploy NIM in Five Minutes</h6>
                    <IoIosArrowForward className="text-[24px] font-bold text-[#5fb900] hover:text-white" />
                </div>
            </div>
        </>
    )
}
