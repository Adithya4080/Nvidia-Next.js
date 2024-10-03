import { IoIosArrowForward } from "react-icons/io";

export default function Run() {
    return (
        <>
            <div className="wrapper">
                <div className="flex flex-col items-center justify-center space-y-4 pt-10 ">
                    <h6 className="text-[24px] font-bold max-[768px]:text-[20px]">
                        Run Anywhere
                    </h6>
                    <h5 className="text-[36px] font-bold max-[768px]:text-[24px] max-[480px]:text-[20px]">
                        Accelerate Your AI Deployment With NVIDIA NIM
                    </h5>
                    <p className="text-center max-w-[850px] max-[768px]:text-[18px] max-[480px]:text-[14px]">
                        Part of NVIDIA AI Enterprise, NVIDIA NIM is a set of easy-to-use inference microservices for accelerating the deployment of foundation models on any cloud or data center and helping to keep your data secure.
                    </p>
                </div>
                <div>
                    <img src="/images/run1.jpg" alt="Info" />
                </div>
                <div className="flex justify-center font-bold cursor-pointer">
                    <h6 className="text-[18px] max-[680px]:text-[14px]">Learn More About NVIDIA NIM</h6>
                    <IoIosArrowForward className="text-[24px] font-bold text-[#5fb900] hover:text-white" />
                </div>
                <div className="flex justify-center items-center font-bold py-2 cursor-pointer">
                    <h6 className="text-[18px] max-[680px]:text-[14px]">See How to Deploy NIM in Five Minutes</h6>
                    <IoIosArrowForward className="text-[24px] font-bold text-[#5fb900] hover:text-white" />
                </div>

                <div className="flex w-full h-full py-10 gap-4 max-[768px]:flex-col">
                    <div className="w-1/2 space-y-10 last:space-y-0 max-[768px]:w-full">
                        <div>
                            <h4 className="text-[26px] font-bold mb-4">
                                Deploy NIM
                            </h4>
                            <p>
                                Deploy NIM for your model with a single command. You can also easily run NIM with fine tuned-models.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[26px] font-bold mb-4">
                                Run Inference
                            </h4>
                            <p>
                                Get NIM up and running with the optimal runtime engine based on your NVIDIA-accelerated infrastructure.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-[26px] font-bold mb-4">
                                Build
                            </h4>
                            <p>
                                Developers can integrate self-hosted NIM endpoints in just a few lines of code. 
                            </p>
                        </div>
                    </div>
                    <div className="space-y-5 w-1/2 max-[768px]:w-full max-[768px]:mt-3">
                        <div className="flex items-center gap-4 cursor-pointer">
                            <span className="bg-[#333333] font-medium py-1 px-2 rounded-lg">Deploy</span>
                            <span>Run</span>
                            <span>Biuld</span>
                        </div>
                        <div className="bg-[#101010] border border-[#424242] rounded-xl w-full h-full p-10">
                            docker run nvcr.io/nim/publisher_name/model_name
                        </div>
                    </div>
                </div>
                <div className="border-b-2 border-[#999999] mt-20"></div>

                <div className="py-20">
                    <div className="flex justify-between gap-10 w-full max-[768px]:flex-col">
                        <div className="flex flex-col items-center justify-center w-1/2 max-[768px]:w-full">
                            <div className="w-[100px]">
                                <img src="/images/kubernets.svg" alt="Kubernetes" className="w-full mb-5" />
                            </div>
                            <h4 className="text-[24px] max-[768px]:text-[20px] font-bold mb-3">
                                Launch Locally or Scale With Kubernetes
                            </h4>
                            <p className="text-center">
                                Seamlessly deploy containerized AI microservices on any NVIDIA accelerated infrastructure, from a single device to data center scale.
                            </p>
                        </div>
                        <div className="flex flex-col items-center w-1/2 max-[768px]:w-full">
                            <div className="w-[100px]">
                                <img src="/images/Security.svg" alt="" className="w-full mb-5" />
                            </div>
                            <h4 className="text-[24px] max-[768px]:text-[20px] font-bold mb-3">
                                Deploy Securely With Confidence
                            </h4>
                            <p className="text-center">
                                Rely on production-grade runtimes, including ongoing security updates, and run your business applications with stable APIs backed by enterprise-grade support.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-10">
                        <div className="w-[100px]">
                            <img src="/images/Carbon.svg" alt="Carbon Footprint" className="w-full mb-5" />
                        </div>
                        <h4 className="text-[24px] max-[768px]:text-[20px] font-bold mb-3">
                            Lower Costs and Your Carbon Footprint
                        </h4>
                        <p className="text-center max-w-[850px]">
                            Lower the operational cost of running models in production with AI runtimes that are continuously optimized for low latency and high throughput on NVIDIA-accelerated infrastructure.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
