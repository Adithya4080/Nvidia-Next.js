import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
    return (
        <>
            <div className="bg-black sticky top-0 z-10">
                <div className="wrapper py-4 flex gap-10 items-center">
                    <div>
                        <h2 className="font-bold text-[30px]">
                            Artificial Intelligence
                        </h2>
                    </div>
                    <div>
                        <ul className="flex gap-10 text-[#7d7d7d] text-[18px]">
                            <li>Industries</li>
                            <li className="flex items-center justify-center gap-1">
                                Solutions
                                <IoMdArrowDropdown className="text-2xl" />
                            </li>
                            <li className="flex items-center justify-center gap-1">
                                Software
                                <IoMdArrowDropdown className="text-2xl" />
                            </li>
                            <li className="flex items-center justify-center gap-1">
                                Products
                                <IoMdArrowDropdown className="text-2xl" />
                            </li>
                            <li className="flex items-center justify-center gap-1">
                                Resources
                                <IoMdArrowDropdown className="text-2xl" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-b-8 border-[#005400] "></div>
        </>
    )
}