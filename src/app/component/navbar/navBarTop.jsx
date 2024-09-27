import { IoMdSearch } from "react-icons/io";

export default function NavbarTop() {
    return (
        <>
        <div className="bg-white">
            <div className="flex justify-between items-center wrapper py-3">
                <div>
                    <h1 className="text-black">NVIDIA</h1>
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

