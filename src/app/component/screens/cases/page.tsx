import { IoIosArrowForward } from "react-icons/io";

export default function Case() {
    return (
        <>
        <div className="bg-[#eeeeee] text-black">
            <div className="wrapper py-20">
                <div className="flex flex-col items-center space-y-3">
                    <h6 className="text-[20px] font-semibold">
                        Use Cases
                    </h6>
                    <h4 className="text-[36px] font-bold">
                        Ignite Your Innovation
                        </h4>
                    <p>
                        See how NVIDIA APIs support industry use cases and jump-start your AI development with curated examples.
                    </p>
                </div>
                <div className="pt-10 flex w-full gap-6">
                    <div className="w-1/3 bg-white">
                        <div className="w-full">
                            <img src="/images/Human.jpeg" alt="" className="w-full" />
                        </div>
                        <div className="py-8 px-6">
                            <h4 className="text-[24px] font-bold pb-5">
                                Digital Humans
                            </h4>
                            <p className="pb-10 h-[150px]">
                                Bring game characters to life or create interactive virtual avatars to enhance customer service, empowering your application to connect more deeply with users.
                            </p>
                            <span className="text-[20px] font-bold flex items-center">
                                Learn More
                                <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                            </span>
                        </div>
                    </div>
                    <div className="w-1/3 bg-white">
                        <div className="w-full">
                            <img src="/images/Content.jpeg" alt="Content" className="w-full" />
                        </div>
                        <div className="py-8 px-6">
                            <h4 className="text-[24px] font-bold pb-5">
                                Content Generation
                            </h4>
                            <p className="pb-10 h-[150px]">
                                Generate highly relevant, bespoke, and accurate content, grounded in the domain expertise and proprietary IP of your enterprise.
                            </p>
                            <span className="text-[20px] font-bold flex items-center">
                                Learn More
                                <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                            </span>
                        </div>
                    </div>
                    <div className="w-1/3 bg-white">
                        <div className="w-full">
                            <img src="/images/Biomelecular.jpeg" alt="Biomolecular" className="w-full" />
                        </div>
                        <div className="py-8 px-6">
                            <h4 className="text-[24px] font-bold pb-5">
                                Biomolecular Generation
                            </h4>
                            <p className="pb-10 h-[150px]">
                                Biomolecular generative models and the computational power of GPUs efficiently explore the chemical space, rapidly generating diverse sets of small molecules tailored to specific drug targets or properties.
                            </p>
                            <span className="text-[20px] font-bold flex items-center">
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
