import Link from "next/link";

export default function Footer() {
    return (
        <>
            <div className="bg-white py-5">
                <div className="wrapper">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                        <h1 className="w-[150px]">
                            <Link href="#">
                                <img 
                                    src="/images/Logo.jpeg" 
                                    alt="Logo" 
                                    className="w-full filter saturate-0" 
                                />
                            </Link>
                        </h1>
                        <h6 className="text-[#666666] font-bold text-[16px] md:text-[18px] md:text-left">
                            India
                        </h6>
                    </div>
                    <div className="text-[#666666] mt-4 md:mt-6">
                        <ul className="flex flex-wrap items-center justify-center gap-2 text-center md:text-left md:justify-start">
                            <li>
                                <Link href='/'>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link href='/'>
                                    Manage My Privacy
                                </Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link href='/'>
                                    Do Not Sell or Share My Data
                                </Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link href='/'>
                                    Legal
                                </Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link href='/'>
                                    Accessibility
                                </Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link href='/'>
                                    Corporate Policies
                                </Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link href='/'>
                                    Product Security
                                </Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link href='/'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <p className="pt-2 text-[12px] text-center md:text-left">
                            Copyright © 2024 NVIDIA Corporation
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
