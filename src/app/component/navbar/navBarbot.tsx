
// export default function NavBarbot() {
//     return (
//         <>
//             <div className="bg-[#1a1a1a] sticky top-[77px] z-10">
//                 <div className="wrapper flex justify-between items-center py-4 cursor-pointer">
//                     <div>
//                         <ul className="flex gap-7 text-[16px] font-medium">
//                             <li>Models</li>
//                             <li>Integrations</li>
//                             <li>Run Anywhere</li>
//                             <li>Get Started</li>
//                             <li>Use Cases</li>
//                             <li>Ecosystem</li>
//                             <li>Resources</li>
//                             <li>Docs</li>
//                         </ul>
//                     </div>
//                     <div>
//                         <button className="border-none bg-[#91c733] text-black py-2 px-4 text-[20px] font-bold">
//                             Try Now
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
"use client"
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBarbot() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="bg-[#1a1a1a] sticky top-[77px] z-10">
                <div className="wrapper flex justify-between items-center py-4 cursor-pointer">
                    <div className="flex gap-7 text-[16px] font-medium">
                        <button
                            className="lg:hidden text-white text-xl"
                            onClick={toggleMenu}
                        >
                            <GiHamburgerMenu />
                        </button>

                        <ul className="hidden lg:flex gap-7">
                            <li className="text-white">Models</li>
                            <li className="text-white">Integrations</li>
                            <li className="text-white">Run Anywhere</li>
                            <li className="text-white">Get Started</li>
                            <li className="text-white">Use Cases</li>
                            <li className="text-white">Ecosystem</li>
                            <li className="text-white">Resources</li>
                            <li className="text-white">Docs</li>
                        </ul>
                    </div>

                    {/* Button */}
                    <div>
                        <button className="border-none bg-[#91c733] text-black py-2 px-4 text-[16px] sm:text-[20px] font-bold hover:bg-[#7db125] transition-all duration-300">
                            Try Now
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden">
                        <ul className="flex flex-col gap-4 text-[16px] font-medium text-white p-4 bg-[#1a1a1a]">
                            <li>Models</li>
                            <li>Integrations</li>
                            <li>Run Anywhere</li>
                            <li>Get Started</li>
                            <li>Use Cases</li>
                            <li>Ecosystem</li>
                            <li>Resources</li>
                            <li>Docs</li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}
