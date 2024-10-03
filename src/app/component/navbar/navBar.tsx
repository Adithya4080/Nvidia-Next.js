"use client";
import { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        setOpenDropdown(null); 
    };

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
            <div className="bg-black sticky top-0 z-20">
                <div className="wrapper py-4 flex items-center justify-between">
                    <div className="flex justify-center items-center gap-10">
                        <div>
                            <h2 className="font-bold text-[30px] max-[1100px]:text-[26px] max-[768px]:text-[24px] max-[480px]:text-[22px] text-white">
                                Artificial Intelligence
                            </h2>
                        </div>

                        <div className="hidden lg:flex gap-10 items-center">
                            <ul className="flex flex-row gap-10 text-[#7d7d7d] text-[18px] cursor-pointer">
                                <li>
                                    <Link href='/industries'>
                                        Industries
                                    </Link>
                                </li>
                                <li className="flex gap-2 items-center">
                                    <Link href='/solution'>
                                        Solutions
                                    </Link>
                                    <IoMdArrowDropdown className="text-2xl" />
                                </li>
                                <li className="flex items-center gap-1 dropdown relative" onClick={() => toggleDropdown('software')}>
                                    Software
                                    <IoMdArrowDropdown className="text-2xl" />
                                    {openDropdown === 'software' && (
                                        <ul className="absolute top-6 bg-white text-black mt-2 px-10 py-8 shadow-md space-y-4 whitespace-nowrap">
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">AI Enterprise Suite</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">AI Inference - Triton</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">AI Workflows</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Avatar - Tokkio</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Cybersecurity - Morpheus</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Data Science</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Large Language Models - NeMo</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Logistics - cuOpt</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Recommender Systems - Merlin</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Speech AI - Riva</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Software and Services</li>
                                        </ul>
                                    )}
                                </li>
                                <li className="flex items-center gap-1 dropdown relative" onClick={() => toggleDropdown('products')}>
                                    Products
                                    <IoMdArrowDropdown className="text-2xl" />
                                    {openDropdown === 'products' && (
                                        <ul className="absolute top-6 bg-white text-black mt-2 px-10 py-8 shadow-md space-y-4 whitespace-nowrap">
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Laptops & Workstations</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Data Center</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Cloud</li>
                                        </ul>
                                    )}
                                </li>
                                <li className="flex items-center gap-1 dropdown relative" onClick={() => toggleDropdown('resources')}>
                                    Resources
                                    <IoMdArrowDropdown className="text-2xl" />
                                    {openDropdown === 'resources' && (
                                        <ul className="absolute top-6 bg-white text-black mt-2 px-10 py-8 shadow-md space-y-3 whitespace-nowrap overflow-y-scroll">
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">AI Foundation Models</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Content Library</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Customer Stories</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Deep Learning Blogs</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Developer Education</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Documentation</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Glossary</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">GTC AI Conference</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Kaggle Grandmasters</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Professional Services</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Research</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Startups and VCs</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Technical Blog</li>
                                            <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Technical Training</li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="lg:hidden text-white" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute w-full bg-black text-white top-full text-center z-10">
                        <ul className="flex flex-col gap-4 py-4 px-4 text-[#7d7d7d] text-[18px] cursor-pointer">
                            <li>
                                <Link href='/industries'>
                                    Industries
                                </Link>
                            </li>
                            <li>
                                <Link href='/solution'>
                                    Solutions
                                </Link>
                            </li>
                            <li className="flex justify-center items-center gap-1 dropdown relative" onClick={() => toggleDropdown('software')}>
                                Software
                                <IoMdArrowDropdown className="text-2xl" />
                                {openDropdown === 'software' && (
                                    <ul className="bg-white text-black mt-2 px-4 py-2 shadow-md space-y-4">
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">AI Enterprise Suite</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">AI Inference - Triton</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">AI Workflows</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Avatar - Tokkio</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Cybersecurity - Morpheus</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Data Science</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Large Language Models - NeMo</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Logistics - cuOpt</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Recommender Systems - Merlin</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Speech AI - Riva</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Software and Services</li>
                                    </ul>
                                )}
                            </li>
                            <li className="flex justify-center items-center gap-1 dropdown relative" onClick={() => toggleDropdown('products')}>
                                Products
                                <IoMdArrowDropdown className="text-2xl" />
                                {openDropdown === 'products' && (
                                    <ul className="bg-white text-black mt-2 px-4 py-2 shadow-md space-y-4">
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Laptops & Workstations</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Data Center</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Cloud</li>
                                    </ul>
                                )}
                            </li>
                            <li className="flex justify-center items-center gap-1 dropdown relative" onClick={() => toggleDropdown('resources')}>
                                Resources
                                <IoMdArrowDropdown className="text-2xl" />
                                {openDropdown === 'resources' && (
                                    <ul className="bg-white text-black mt-2 px-4 py-2 shadow-md space-y-3">
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">AI Enterprise Suite</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">AI Inference - Triton</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">AI Workflows</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Avatar - Tokkio</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Cybersecurity - Morpheus</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Data Science</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Large Language Models - NeMo</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Logistics - cuOpt</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Recommender Systems - Merlin</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Speech AI - Riva</li>
                                        <li className="text-[#7d7d7d] hover:text-[#7fbe11]">Software and Services</li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}

