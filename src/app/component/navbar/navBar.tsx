// import { IoMdArrowDropdown } from "react-icons/io";

// export default function Navbar() {
//     return (
//         <>
//             <div className="bg-black sticky top-0 z-10">
//                 <div className="wrapper py-4 flex gap-10 items-center">
//                     <div>
//                         <h2 className="font-bold text-[30px]">
//                             Artificial Intelligence
//                         </h2>
//                     </div>
//                     <div>
//                         <ul className="flex gap-10 text-[#7d7d7d] text-[18px]">
//                             <li>Industries</li>
//                             <li className="flex items-center justify-center gap-1">
//                                 Solutions
//                                 <IoMdArrowDropdown className="text-2xl" />
//                             </li>
//                             <li className="flex items-center justify-center gap-1">
//                                 Software
//                                 <IoMdArrowDropdown className="text-2xl" />
//                             </li>
//                             <li className="flex items-center justify-center gap-1">
//                                 Products
//                                 <IoMdArrowDropdown className="text-2xl" />
//                             </li>
//                             <li className="flex items-center justify-center gap-1">
//                                 Resources
//                                 <IoMdArrowDropdown className="text-2xl" />
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="border-b-8 border-[#005400] "></div>
//         </>
//     )
// }

"use client"
import { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown')) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="bg-black sticky top-0 z-10">
                <div className="wrapper py-4 flex gap-10 items-center">
                    <div>
                        <h2 className="font-bold text-[30px] text-white">
                            Artificial Intelligence
                        </h2>
                    </div>
                    <div>
                        <ul className="flex gap-10 text-[#7d7d7d] text-[18px] cursor-pointer">
                            <li>Industries</li>
                            <li className="flex items-center gap-1 dropdown relative" onClick={() => toggleDropdown('solutions')}>
                                Solutions
                                <IoMdArrowDropdown className="text-2xl" />
                                {openDropdown === 'solutions' && (
                                    <ul className="absolute top-6 bg-white text-black mt-2 px-10 py-8 shadow-md space-y-4 whitespace-nowrap">
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Overview
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            AI Playform
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            AI Inference
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            AI Workflows
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Conversational AI
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Data Analytics
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Generative AI
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Machine Learning
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Prediction and Forecasting
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Speech AI
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="flex items-center gap-1 dropdown relative" onClick={() => toggleDropdown('software')}>
                                Software
                                <IoMdArrowDropdown className="text-2xl" />
                                {openDropdown === 'software' && (
                                    <ul className="absolute top-6 bg-white text-black mt-2 px-10 py-8 shadow-md space-y-4 whitespace-nowrap">
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            AI Enterprise Suite
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            AI Inference - Triton
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            AI Workflows
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Avatar - Tokkio
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Cybersecurity - Morpheus
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Data Science
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Large Language Models - <br />NeMo Framework
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Logistics and Route <br /> Optimization - cuOpt
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Recommender Systems - <br /> Merlin
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Speech AI -Riva
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Software and Services
                                        </li>
                                </ul>
                                )}
                            </li>
                            <li className="flex items-center gap-1 dropdown relative" onClick={() => toggleDropdown('products')}>
                                Products
                                <IoMdArrowDropdown className="text-2xl" />
                                {openDropdown === 'products' && (
                                    <ul className="absolute top-6 bg-white text-black mt-2 px-10 py-8 shadow-md space-y-4 whitespace-nowrap">
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Laptops & Workstations
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Data Center
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Cloud
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="flex items-center gap-1 dropdown relative" onClick={() => toggleDropdown('resources')}>
                                Resources
                                <IoMdArrowDropdown className="text-2xl" />
                                {openDropdown === 'resources' && (
                                    <ul className="absolute top-6 bg-white text-black mt-2 px-10 py-8 shadow-md space-y-3 whitespace-nowrap overflow-y-scroll">
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            AI Foundation Models
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Content Library
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Customer Stories
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Deep Learning Blogs
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Developer Education
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Documentation
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Glossary
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            GTC AI Conference
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Kaggle Grandmasters
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Professional Services
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Research
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Startups and VCs
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Technical Blog
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Technical Training
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Training for IT Professionals
                                        </li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">
                                            Trustworthy AI
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-b-8 border-[#005400]"></div>
        </>
    );
}

