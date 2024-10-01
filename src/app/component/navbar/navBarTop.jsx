import { IoMdSearch } from "react-icons/io";
import Link from 'next/link'


export default function NavbarTop() {
    return (
        <>
        <div className="bg-white">
            <div className="flex justify-between items-center wrapper py-1 max-[580px]:hidden">
                <div className="w-[150px]">
                    <h1 className="text-black">
                        <Link href="/">
                            <img src='/images/Logo.jpeg' alt="Logo" className="w-full" />
                        </Link>
                    </h1>
                </div>
                <div>
                    <ul className="flex items-center gap-4 text-[#666666] cursor-pointer font-[400]">
                        <li className="hover:text-black">Shop</li>
                        <li className="hover:text-black">Drivers</li>
                        <li className="hover:text-black">Support</li>
                        <li className="text-2xl">
                            <IoMdSearch />    
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        </>
    )
}

