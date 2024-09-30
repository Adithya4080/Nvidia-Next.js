import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

export default function Docs() {
    return (
        <>
            <div className="bg-[#1a1a1a]">
                <div className="wrapper flex flex-col items-center py-20 space-y-4">
                    <h4 className="text-[34px] font-bold">
                        Documentation
                    </h4>
                    <p className="text-[20px] max-w-[940px] text-center">
                        Explore technical documentation to start prototyping and building your enterprise AI applications with NVIDIA APIs, or scale on your own infrastructure with NVIDIA NIM.
                    </p>
                    <div className="flex gap-4 cursor-pointer">
                        <button className="border border-[#76b900] p-3 font-bold hover:border-white text-[18px]">
                            NVIDIA API Docs
                        </button>
                        <button className="flex items-center gap-2 font-bold text-[18px]">
                            NVIDIA NIM Docs
                            <IoIosArrowForward className="text-[20px] font-extrabold text-[#7fb900] hover:text-black" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="wrapper py-10">
                <div className="flex w-full gap-8">
                    <div className="w-1/4">
                        <h5 className="text-[24px] font-bold">
                            Products
                        </h5>
                        <div className="border-b border-gray-300 py-1"></div>
                        <ul className="text-[#39a800] space-y-2 pt-2">
                            <li>
                                <Link href='#'>
                                    DGX Systems
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    DGX A100
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    DGX Station A100
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    EGX Platform
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Data Center GPUs
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Virtual GPU
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    NVIDIA Drive
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    NVIDIA Issac
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Jetson
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/4">
                        <h5 className="text-[24px] font-bold">
                            Technologies
                        </h5>
                        <div className="border-b border-gray-300 py-1"></div>
                        <ul className="text-[#39a800] space-y-2 pt-2">
                            <li>
                                <Link href='#'>
                                    CUDA-X
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    NVIDIA Ampere Architecture
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Tensor Cores
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Multi-Indtancd GPU (MIG)
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/4">
                        <h5 className="text-[24px] font-bold">
                            Resources
                        </h5>
                        <div className="border-b border-gray-300 py-1"></div>
                        <ul className="text-[#39a800] space-y-2 pt-2">
                            <li>
                                <Link href='#'>
                                    AI Foundation Models
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Content Library
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Deep Learning Blogs
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Developer Education
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Glossary    
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    GTC AI Conference
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Kaggle GRandmasters
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Professional Services
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Research
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Statrups and VCs    
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Technical Blog
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Techinical Training
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Training fot IT Professional
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/4">
                        <h5 className="text-[24px] font-bold">
                            Company Info
                        </h5>
                        <div className="border-b border-gray-300 py-1"></div>
                        <ul className="text-[#39a800] space-y-2 pt-2">
                            <li>
                                <Link href='#'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Company Overview
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Investors
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Venture Capital (NVentures)
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    NVIDIA Foundation
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Research
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Social Responsibility
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Technologies
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
