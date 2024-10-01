import { IoIosArrowForward } from "react-icons/io";

export default function Case() {
    return (
        <>
        <div className="bg-[#eeeeee] text-black">
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
        </>
    )
}
