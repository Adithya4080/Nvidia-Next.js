import { IoIosArrowForward } from "react-icons/io";

export default function Integrations() {
    return (
        <>
            <div className="wrapper">
                <div className="flex flex-col items-center justify-center space-y-4 pt-10 pb-20">
                    <h6 className="text-[24px] font-bold">
                        Integrations
                    </h6>
                    <h5 className="text-[36px] font-bold">
                        Accelerated AI is Just an API Call Away
                    </h5>
                    <p>
                        Get up and running quickly with familiar APIs.
                    </p>
                </div>
                <div className="pb-10 max-[980px]:space-y-4">
                    <div className="flex justify-center items-center w-full max-[980px]:flex-col max-[980px]:mb-3">
                        <div className="w-1/2">
                            <img src="/images/Inter1.jpeg" alt="Library" className="w-full" />
                        </div>
                        <div>
                            <h4 className="text-[28px] font-bold mb-4 max-[768px]:text-[24px] max-[480px]:text-[20px]">Seamless Compatibility With Popular Libraries</h4>
                            <p className="max-[480px]:text-[14px]">Use NVIDIA APIs from your existing tools and applications with as little as three lines of code.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full max-[980px]:flex-col">
                        <div className="max-[980px]:pt-4">
                            <h4 className="text-[28px] font-bold mb-4 max-[768px]:text-[24px] max-[480px]:text-[20px]">Build With the Tools You Love</h4>
                            <p className="max-[480px]:text-[14px]">Work with your favorite LLM programming frameworks, including LangChain and LlamaIndex, and easily deploy your applications.</p>
                        </div>
                        <div className="w-1/2">
                            <img src="/images/Inter2.jpeg" alt="Library" className="w-full" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center pb-20 font-bold cursor-pointer">
                    <h6 className=" text-[20px] max-[640px]:text-[16px] max-[480px]:text-[14px]">Learn More About Building With NVIDIA NIM</h6>
                    <IoIosArrowForward className="text-[24px] font-bold text-[#5fb900] hover:text-white" />
                </div>
                <div className="border-b-2 border-[#999999] mb-3"></div>
            </div>
        </>
    )
}
