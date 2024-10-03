import { IoIosArrowForward } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Solution() {
    return (
        <>
            <div className='bg-white text-black'>
                <div className="wrapper">
                    <div className='flex justify-between py-10 max-[900px]:flex-col'>
                        <div className='space-y-3'>
                            <span className='font-bold text-[22px]'>
                                Overview
                            </span>
                            <h5 className='font-bold text-[36px] max-[768px]:text-[30px] max-[480px]:text-[24px]'>
                                What Is NVIDIA AI?
                            </h5>
                            <p className='text-[#1a1a1a] text-[20px] max-[768px]:text-[18px] max-w-[600px] max-[900px]:max-w-full'>
                                Transform any enterprise into an AI organization with full-stack innovation across accelerated infrastructure, enterprise-grade software, and AI models. By accelerating the entire AI workflow, projects reach production faster, with higher accuracy, efficiency, and infrastructure performance at a lower overall cost for various solutions and applications.
                            </p>
                        </div>
                        <div className=' bg-white p-7 space-y-5 shadow rounded-sm h-[200px] max-[1080px]:h-[250px] max-[900px]:h-[200px] max-[900px]:mt-3 max-[480px]:h-[240px]'>
                            <h6 className="font-bold">
                                Overcoming Challenges in AI Implementation
                            </h6>
                            <p className="max-w-[500px] max-[900px]:max-w-full">
                                Learn why AI needs to be taken out of silos and integrated into the data center or cloud to be infused into an organization.
                            </p>
                            <span className="text-[20px] max-[768px]:text-[16px] font-bold flex items-center cursor-pointer">
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
                        <h5 className="text-[30px] font-bold text-center">
                            Explore Our AI Solutions
                        </h5>
                        <p className="max-w-[740px] text-[20px] text-center">
                            Preventing disease. Generating human-level code, dialog, or images. Revolutionizing data analytics. These are just a few breakthroughs made possible with NVIDIA AI.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 pt-10 gap-8 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
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
                        <div className="bg-white shadow">
                            <div>
                                <img src="/images/conversational.jpeg" alt="" />
                            </div>
                            <div className="p-4 space-y-4">
                                <h4 className="text-[24px] font-bold">
                                    Conversational AI
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
                                    Explore Conversational AI Solutions
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                                </span>
                            </div>
                        </div>
                        <div className="bg-white shadow">
                            <div>
                                <img src="/images/vision.jpeg" alt="" />
                            </div>
                            <div className="p-4 space-y-4">
                                <h4 className="text-[24px] font-bold">
                                    Vision AI
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
                                    Explore Vision AI Solutions
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                                </span>
                            </div>
                        </div>
                        <div className="bg-white shadow">
                            <div>
                                <img src="/images/cybersecurity.jpeg" alt="" />
                            </div>
                            <div className="p-4 space-y-4">
                                <h4 className="text-[24px] font-bold">
                                    Cybersecurity AI
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
                                    Explore Cybersecurity AI Solutions
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
                        <h5 className="text-[36px] font-bold max-[768px]:text-[30px] max-[480px]:text-[24px]">
                            Ready to Get Started?
                        </h5>
                        <p className="max-w-[900px] text-[20px] text-center max-[480px]:text-[18px]">
                            Explore the latest community-built AI models with APIs optimized and accelerated by NVIDIA, then deploy anywhere with NVIDIA NIM.
                        </p>
                        <button className="bg-[#76b900] text-black py-2 px-4 font-bold text-[18px] cursor-pointer">
                            Get Started
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10">
                        <div className="flex gap-4 lg:gap-6 flex-col sm:flex-row">
                            <div className="w-[100px] lg:w-[160px] mx-auto sm:mx-0">
                                <img src="/images/augmented.svg" alt="Enterprise" className="w-full" />
                            </div>
                            <div className="space-y-3 text-center sm:text-left">
                                <h6 className="text-[18px] sm:text-[22px] font-bold">
                                    For Enterprise Leaders
                                </h6>
                                <p className="text-sm sm:text-base">
                                    Innovate, mitigate risk, and capitalize on AI and accelerated computing opportunities.
                                </p>
                                <span className="text-[14px] sm:text-[16px] font-bold flex items-center justify-center sm:justify-start cursor-pointer">
                                    Explore Executive Insights
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-white ml-2" />
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-4 lg:gap-6 flex-col sm:flex-row">
                            <div className="w-[100px] mx-auto sm:mx-0">
                                <img src="/images/augmented.svg" alt="Enterprise" className="w-full" />
                            </div>
                            <div className="space-y-3 text-center sm:text-left">
                                <h6 className="text-[18px] sm:text-[22px] font-bold">
                                    For Infrastructure and IT Leaders
                                </h6>
                                <p className="text-sm sm:text-base max-w-[400px] mx-auto sm:mx-0">
                                    Power your business with a secure, scalable, full-stack AI platform that runs anywhere.
                                </p>
                                <span className="text-[14px] sm:text-[16px] font-bold flex items-center justify-center sm:justify-start cursor-pointer">
                                    Explore AI Infrastructure Resources
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-white ml-2" />
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-4 lg:gap-6 flex-col sm:flex-row">
                            <div className="w-[100px] lg:w-[160px] mx-auto sm:mx-0">
                                <img src="/images/development.svg" alt="Enterprise" className="w-full" />
                            </div>
                            <div className="space-y-3 text-center sm:text-left">
                                <h6 className="text-[18px] sm:text-[22px] font-bold">
                                    For Developers
                                </h6>
                                <p className="text-sm sm:text-base">
                                    Get the AI tools, training, and technical resources you need to develop AI applications faster.
                                </p>
                                <span className="text-[14px] sm:text-[16px] font-bold flex items-center justify-center sm:justify-start cursor-pointer">
                                    Explore Generative AI Development Tools
                                    <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-white ml-2" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
