import { IoIosArrowForward } from "react-icons/io";

export default function Industries() {
    return (
        <>
            <div className="bg-white text-black">
                <div className="wrapper py-20">
                    <div className=" flex flex-col justify-center items-center space-y-4">
                        <h2 className="text-[36px] font-bold">
                            Revolutionizing the Future of Industries
                        </h2>
                        <p className="text-[24px] max-w-[700px] text-center">
                            Discover the possibility, power, and performance of AI and accelerated computing from the cloud to the edge.
                        </p>
                        <button className="bg-[#91c733] font-bold p-4 text-[20px]">
                            Watch the Video
                        </button>
                    </div>

                    <div className="border-b border-b-[#cccccc] pt-10"></div>
                </div>
            </div>

            <div className="bg-[#cccccc] text-black">
                <div className="wrapper py-20">
                    <div className="flex flex-col items-center space-y-3">
                        <h6 className="text-[20px] max-[480px]:text-[16px] font-semibold">
                            Use Cases
                        </h6>
                        <h4 className="text-[36px] max-[768px]:text-[30px] max-[480px]:text-[22px] font-bold">
                            Ignite Your Innovation
                            </h4>
                        <p>
                            See how NVIDIA APIs support industry use cases and jump-start your AI development with curated examples.
                        </p>
                    </div>
                    <div className="pt-10 grid grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1 w-full gap-6">
                        <div className=" bg-white">
                            <div className="w-full">
                                <img src="/images/Human.jpeg" alt="" className="w-full" />
                            </div>
                            <div className="py-8 px-6">
                                <h4 className="text-[24px] max-[1160px]:text-[20px] font-bold pb-5">
                                    Digital Humans
                                </h4>
                                <p className="pb-10 h-[150px] max-[1160px]:h-[250px] max-[768px]:h-[200px] max-[580px]:h-[250px] max-[480px]:h-[180px]">
                                    Bring game characters to life or create interactive virtual avatars to enhance customer service, empowering your application to connect more deeply with users.
                                </p>
                                <span className="text-[20px] max-[768px]:text-[16px] font-bold flex items-center">
                                    Learn More
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                                </span>
                            </div>
                        </div>
                        <div className=" bg-white">
                            <div className="w-full">
                                <img src="/images/Content.jpeg" alt="Content" className="w-full" />
                            </div>
                            <div className="py-8 px-6">
                                <h4 className="text-[24px] max-[1160px]:text-[20px] font-bold pb-5">
                                    Content Generation
                                </h4>
                                <p className="pb-10 h-[150px] max-[1160px]:h-[250px] max-[768px]:h-[200px] max-[580px]:h-[250px] max-[480px]:h-[180px]">
                                    Generate highly relevant, bespoke, and accurate content, grounded in the domain expertise and proprietary IP of your enterprise.
                                </p>
                                <span className="text-[20px] max-[768px]:text-[16px] font-bold flex items-center">
                                    Learn More
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                                </span>
                            </div>
                        </div>
                        <div className=" bg-white">
                            <div className="w-full">
                                <img src="/images/Biomelecular.jpeg" alt="Biomolecular" className="w-full" />
                            </div>
                            <div className="py-8 px-6">
                                <h4 className="text-[24px] max-[1160px]:text-[20px] font-bold pb-5">
                                    Biomolecular Generation
                                </h4>
                                <p className="pb-10 h-[150px] max-[1160px]:h-[250px] max-[768px]:h-[200px] max-[580px]:h-[250px] max-[480px]:h-[180px]">
                                    Biomolecular generative models and the computational power of GPUs efficiently explore the chemical space, rapidly generating diverse sets of small molecules tailored to specific drug targets or properties.
                                </p>
                                <span className="text-[20px] max-[768px]:text-[16px] font-bold flex items-center">
                                    Learn More
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#eeeeee] py-20 text-black">
                <div className="wrapper">
                    <div className="grid grid-cols-3 px-20">
                        <div className="flex flex-col justify-center items-center text-center space-y-3">
                            <div>
                                <img src="/images/discuss.svg" alt="Discuss" />
                            </div>
                            <h6 className="text-[24px] font-bold max-w-[400px]">
                                Discuss How to Unlock the Potential of Your Business
                            </h6>
                            <p className="max-w-[300px]">
                                The world's leading experts explain how AI works, how it's evolving, and how it impacts every human endeavor.
                            </p>
                            <span className="text-[20px] max-[768px]:text-[16px] font-bold flex items-center">
                                Lets Talk
                                <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                            </span>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center space-y-3">
                            <div>
                                <img src="/images/discover.svg" alt="Discover" />
                            </div>
                            <h6 className="text-[24px] font-bold max-w-[300px]">
                                Discover Training to Meet Your Organization's Goals
                            </h6>
                            <p className="max-w-[300px]">
                                The NVIDIA Deep Learning Institute (DLI) offers hands-on training in AI, accelerated computing, and accelerated data science.
                            </p>
                            <span className="text-[20px] max-[768px]:text-[16px] font-bold flex items-center">
                                Start Learning
                                <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                            </span>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center space-y-3">
                            <div>
                                <img src="/images/develop.svg" alt="Develop" />
                            </div>
                            <h6 className="text-[24px] font-bold max-w-[300px]">
                                Develop Solutions to the Most Complex Challenges
                            </h6>
                            <p className="max-w-[300px]">
                            Access hundreds of GPU-accelerated containers, models, and SDKs—all the tools necessary to successfully build apps.
                            </p>
                            <span className="text-[20px] max-[768px]:text-[16px] font-bold flex items-center">
                                Start Building
                                <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
