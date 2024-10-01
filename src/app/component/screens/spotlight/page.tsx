import { CiPlay1 } from "react-icons/ci";
import NavBarbot from "../../navbar/navBarbot";

export default function Spotlight() {
    return (
        <>
            <div className="wrapper py-12 space-y-6">
                <h3 className="text-[50px] max-w-[800px] font-bold max-[768px]:text-[30px] max-[480px]:text-[24px]">
                    Instantly Deploy Generative AI with NVIDIA NIM
                </h3>
                <p className="text-[24px] max-w-[770px] max-[768px]:text-[20px]">
                    Explore the latest community-built AI models with an API optimized and accelerated by NVIDIA, then deploy anywhere with NVIDIA NIM™ inference microservices.
                </p>
                <div className="flex gap-2">
                    <button className="border-none bg-[#91c733] text-black py-2 px-4 text-[20px] font-bold max-[768px]:text-[18px]">
                        Try Now
                    </button>
                    <button className="border-2 border-[#91c733] py-2 px-4 text-[20px] font-bold flex items-center gap-1 max-[768px]:text-[18px]">
                        <CiPlay1 className="font-bold" />
                        Watch Video
                    </button>
                </div>
            </div>
            <NavBarbot />
        </>
    )
}
