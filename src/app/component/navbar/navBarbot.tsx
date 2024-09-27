
export default function NavBarbot() {
    return (
        <>
            <div className="bg-[#1a1a1a] sticky top-20">
                <div className="wrapper flex justify-between items-center py-4 cursor-pointer">
                    <div>
                        <ul className="flex gap-7 text-[16px] font-medium">
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
                    <div>
                        <button className="border-none bg-[#91c733] text-black py-2 px-4 text-[20px] font-bold">
                            Try Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
