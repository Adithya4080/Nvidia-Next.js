import { IoIosArrowForward } from "react-icons/io";

export default function Resource() {
    return (
        <>
            <div className="bg-[#eeeeee] text-black max-[1080px]:hidden">
                <div className="wrapper pb-20">
                    <div className="flex flex-col items-center space-y-3 pb-10">
                        <h6 className="text-[20px] font-bold">
                            Resources
                        </h6>
                        <h4 className="text-[36px] max-[768px]:text-[30px] max-[540px]:text-[22px] font-bold">
                            Unlock, Upskill, and Upscale
                        </h4>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="bg-white">
                            <div className="w-full">
                                <img src="/images/launchpad.jpeg" alt="w-full" />
                            </div>
                            <div className="space-y-6 px-4 py-8">
                                <h6 className="font-bold">
                                    NVIDIA Launchpad
                                </h6>
                                <h4 className="text-[26px] font-bold">
                                    Unlock AI With a Hands-On Lab
                                </h4>
                                <p className="text-[#4d4c4d] h-[150px]">
                                    Experience end-to-end AI solutions through guided hands-on labs for development frameworks, retrieval-augmented generation (RAG)-based chatbots, route optimizations, and more.
                                </p>
                                <span className="text-[20px] font-bold flex items-center">
                                    Go To LaunchPad
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                                </span>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="w-full">
                                <img src="/images/training.jpeg" alt="w-full" />
                            </div>
                            <div className="space-y-6 px-4 py-8">
                                <h6 className="font-bold">
                                    NVIDIA Developer Program
                                </h6>
                                <h4 className="text-[26px] font-bold">
                                    Accelerate Your AI Applications
                                </h4>
                                <p className="text-[#4d4c4d] h-[150px]">
                                    Get free access to NIM for application development, research, and testing plus technical learning resources through the NVIDIA Developer Program.
                                </p>
                                <span className="text-[20px] font-bold flex items-center">
                                    Start Building
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                                </span>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="w-full">
                                <img src="/images/workbench.jpeg" alt="w-full" />
                            </div>
                            <div className="space-y-6 px-4 py-8">
                                <h6 className="font-bold">
                                    AI Workbench
                                </h6>
                                <h4 className="text-[26px] font-bold">
                                    Start Small. Scale Big
                                </h4>
                                <p className="text-[#4d4c4d]">
                                    NVIDIA AI Workbench gives developers the flexibility to run API-enabled models on local or remote GPU-powered containers, allowing for interactive project workflows from experimentation to prototyping to proof of concept.
                                </p>
                                <span className="text-[20px] font-bold flex items-center">
                                    Learn More ABout AI Workbench
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                                </span>
                            </div>
                        </div>
                        <div className="bg-white">
                            <div className="w-full">
                                <img src="/images/ai.jpeg" alt="w-full" />
                            </div>
                            <div className="space-y-6 px-4 py-8">
                                <h6 className="font-bold">
                                    News
                                </h6>
                                <h4 className="text-[26px] font-bold">
                                    Explore NVIDIA NIM in the News
                                </h4>
                                <p className="text-[#4d4c4d] h-[150px]">
                                    Check out the latest NVIDIA press releases to see how NIM and generative AI are impacting industries, partners, customers, and more.
                                </p>
                                <span className="text-[20px] font-bold flex items-center">
                                    View More
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
