import { IoIosArrowForward } from "react-icons/io";

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
                </div>
            </div>
        </>
    )
}
