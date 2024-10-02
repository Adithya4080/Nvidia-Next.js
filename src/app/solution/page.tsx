import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Solution() {
    return (
        <>
            <div className='bg-white text-black'>
                <div className="wrapper">
                    <div className='flex justify-between py-10'>
                        <div className='space-y-3'>
                            <span className='font-bold text-[22px]'>
                                Overview
                            </span>
                            <h5 className='font-bold text-[36px]'>
                                What Is NVIDIA AI?
                            </h5>
                            <p className='text-[#1a1a1a] text-[20px] max-w-[600px]'>
                                Transform any enterprise into an AI organization with full-stack innovation across accelerated infrastructure, enterprise-grade software, and AI models. By accelerating the entire AI workflow, projects reach production faster, with higher accuracy, efficiency, and infrastructure performance at a lower overall cost for various solutions and applications.
                            </p>
                        </div>
                        <div className=' bg-white p-7 space-y-5 shadow rounded-sm h-[200px]'>
                            <h6 className="font-bold">
                                Overcoming Challenges in AI Implementation
                            </h6>
                            <p className="max-w-[500px]">
                                Learn why AI needs to be taken out of silos and integrated into the data center or cloud to be infused into an organization.
                            </p>
                            <span className="text-[20px] max-[768px]:text-[16px] font-bold flex items-center">
                                Read IDC Report
                                <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#f7f7f7] text-black py-20">
                <div className="wrapper">
                    <div className="flex flex-col justify-center items-center space-y-4">
                        <span className="font-bold">
                            Solutions
                        </span>
                        <h5 className="text-[30px] font-bold">
                            Explore Our AI Solutions
                        </h5>
                        <p className="max-w-[740px] text-[20px] text-center">
                            Preventing disease. Generating human-level code, dialog, or images. Revolutionizing data analytics. These are just a few breakthroughs made possible with NVIDIA AI.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 pt-10 gap-8">
                        <div className="bg-white shadow">
                            <div>
                                <img src="/images/generative.jpeg" alt="" />
                            </div>
                            <div className="p-4 space-y-4">
                                <h4 className="text-[24px] font-bold">
                                    Generative AI
                                </h4>
                                <ul className="space-y-3 text-[18px]">
                                    <li className="flex items-center">
                                        <MdKeyboardArrowRight />
                                        Instantly deploy generative AI with NVIDIA NIM.
                                    </li>
                                    <li className="flex items-center">
                                        <MdKeyboardArrowRight />
                                        Scale generative AI workloads securely.
                                    </li>
                                    <li className="flex items-center">
                                        <MdKeyboardArrowRight />
                                        Improve key business functions.
                                    </li>
                                </ul>
                                <span className="text-[16px] max-[768px]:text-[16px] font-bold flex items-center cursor-pointer">
                                    Explore Generative AI Solutions
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                                </span>
                            </div>
                        </div>
                        <div className="bg-white shadow">
                            <div>
                                <img src="/images/data.jpeg" alt="" />
                            </div>
                            <div className="p-4 space-y-4">
                                <h4 className="text-[24px] font-bold">
                                    Data Analytics
                                </h4>
                                <ul className="space-y-3 text-[18px]">
                                    <li className="flex items-center">
                                        <MdKeyboardArrowRight />
                                        Accelerate data processing and AI training.
                                    </li>
                                    <li className="flex items-center">
                                        <MdKeyboardArrowRight />
                                        Reduce infrastructure costs and power consumption. 
                                    </li>
                                    <li className="flex items-center">
                                        <MdKeyboardArrowRight />
                                        Get started quickly with no code changes
                                    </li>
                                </ul>
                                <span className="text-[16px] max-[768px]:text-[16px] font-bold flex items-center cursor-pointer">
                                    Explore Data Analytics Solutions
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                                </span>
                            </div>
                        </div>
                        <div className="bg-white shadow">
                            <div>
                                <img src="/images/inference.jpeg" alt="" />
                            </div>
                            <div className="p-4 space-y-4">
                                <h4 className="text-[24px] font-bold">
                                    Inference
                                </h4>
                                <ul className="space-y-3 text-[18px]">
                                    <li className="flex items-center">
                                        <MdKeyboardArrowRight />
                                        Deploy AI models faster and with accuracy.
                                    </li>
                                    <li className="flex items-center">
                                        <MdKeyboardArrowRight />
                                        Deploy with fewer servers and less power.
                                    </li>
                                    <li className="flex items-center">
                                        <MdKeyboardArrowRight />
                                        Achieve faster insights with dramatically lower costs.
                                    </li>
                                </ul>
                                <span className="text-[16px] max-[768px]:text-[16px] font-bold flex items-center cursor-pointer">
                                    Explore AI Inference Solutions
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#222222]">
                <div className="wrapper py-20">
                    <div className="flex flex-col justify-center items-center space-y-4">
                        <span className="font-bold">
                            Next Steps
                        </span>
                        <h5 className="text-[36px] font-bold">
                            Ready to Get Started?
                        </h5>
                        <p className="max-w-[900px] text-[20px] text-center">
                            Explore the latest community-built AI models with APIs optimized and accelerated by NVIDIA, then deploy anywhere with NVIDIA NIM.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-10">
                        <div className="flex">
                            <div>
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h6>

                                </h6>
                                <p>

                                </p>
                                <span className="text-[14px] max-[768px]:text-[16px] font-bold flex items-center cursor-pointer">
                                    Explore Executive Insights
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
