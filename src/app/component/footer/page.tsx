import Link from "next/link"

export default function Footer() {
    return (
        <>
            <div className="bg-white">
                <div className="wrapper py-3">
                    <div className="flex justify-between items-center">
                        <div className="w-[150px]">
                            <h1>
                                <Link href="#">
                                    <img 
                                        src="/images/Logo.jpeg" 
                                        alt="Logo" 
                                        className="w-full filter saturate-0" 
                                    />                                
                                </Link>
                            </h1>
                        </div> 
                        <h6 className="text-[#666666] font-bold text-[18px]">
                            India
                        </h6>
                    </div>
                    <div className="text-[#666666]">
                        <ul className=" flex items-center gap-2">
                            <li>
                                <Link href='/'>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>|</li>
                            <li>
                                <Link href='/'>
                                    manage My Privacy
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
                                    Conatct
                                </Link>
                            </li>
                        </ul>
                        <p className="pt-1 text-[12px]">
                            Copyright © 2024 NVIDIA Corporation
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
