

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
                <div className="pb-10">
                    <div className="flex justify-center items-center w-full">
                        <div className="w-1/2">
                            <img src="/images/Inter1.jpeg" alt="Library" className="w-full" />
                        </div>
                        <div>
                            <h4 className="text-[28px] font-bold mb-4">Seamless Compatibility With Popular Libraries</h4>
                            <p>Use NVIDIA APIs from your existing tools and applications with as little as three lines of code.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-full">
                        <div>
                            <h4 className="text-[28px] font-bold mb-4">Build With the Tools You Love</h4>
                            <p>Work with your favorite LLM programming frameworks, including LangChain and LlamaIndex, and easily deploy your applications.</p>
                        </div>
                        <div className="w-1/2">
                            <img src="/images/Inter2.jpeg" alt="Library" className="w-full" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pb-20 font-bold text-[20px]">
                    <h6>Learn More About Building With NVIDIA NIM</h6>
                </div>
                <div className="border-b-2 border-[#999999] mb-3"></div>
            </div>
        </>
    )
}
