"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaNodeJs } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from 'react-responsive';

export const ProjectNav = () => {
    const path = usePathname();
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [hide, setHide] = useState(isMobile);

    return (
        <nav className={`${!hide && 'w-md'} h-screen bg-[#13191f] px-5 font-bold text-lg select-none`}>
            <div onClick={() => setHide(!hide)} className={`flex flex-row items-center text-xl gap-3 cursor-pointer py-5`}>
                <FaNodeJs className="text-green-400 text-3xl" />
                { !hide && <>
                    <p className="text-gray-400">project.jayson</p>
                    <IoIosArrowForward className="text-3xl text-gray-400" />
                </>}
            </div>
            <div className="flex flex-row gap-2">
                <div className="gap-2 flex flex-col">
                    {Array.from({ length: 10 }, (_, i) => (
                        <p key={i} className="text-gray-400">{i + 1}</p>
                    ))}
                </div>
                { !hide && <div className="gap-2 flex flex-col">
                    <p className=" text-yellow-400">&#123;</p>
                    <div className="gap-2 flex flex-col border-l-[2px] border-gray-600 ml-1 px-2">
                        <p className="text-gray-400"><span className="text-[#68a9eb]">&quot;name&quot;</span><span className="text-white"> : </span><span className="text-green-400"> &quot;jayson-projects&quot;,</span></p>
                        <p className="text-gray-400"><span className="text-[#68a9eb]">&quot;year&quot;</span><span className="text-white"> : </span><span className="text-green-400"> &quot;2020-2025&quot;,</span></p>
                        <p className="text-gray-400"><span className="text-[#68a9eb]">&quot;private&quot;</span><span className="text-white"> : </span><span className="text-green-400"> &quot;false&quot;,</span></p>
                        <p className=" text-yellow-400"><span className="text-[#68a9eb]">&quot;projects&quot;</span><span className="text-white"> : </span> &#123;</p>
                        <div className="flex flex-col border-l-[2px] border-gray-600 ml-1 px-2 gap-2">
                            <Link href={'/projects/adeus'}>
                                <p className={`text-gray-400 cursor-pointer hover:border-b-2 ${path === '/projects/adeus' && 'border-b-2'}`}><span className="text-[#68a9eb]">&quot;adeus-life&quot;</span><span>:</span><span className="text-green-400"> &quot;2024-2025&quot;,</span></p>
                            </Link>
                            <Link href={'/projects/jetlogistics'}>
                                <p className={`text-gray-400 cursor-pointer hover:border-b-2 ${path === '/projects/jetlogistics' && 'border-b-2'}`}><span className="text-[#68a9eb]">&quot;jetlogistics&quot;</span><span>:</span><span className="text-green-400"> &quot;2022-2024&quot;,</span></p>
                            </Link>
                            <Link href={'/projects/ibc'}>
                                <p className={`text-gray-400 cursor-pointer hover:border-b-2 ${path === '/projects/ibc' && 'border-b-2'}`}><span className="text-[#68a9eb]">&quot;ibc-auto&quot;</span><span>:</span><span className="text-green-400"> &quot;2020-2021&quot;,</span></p>
                            </Link>
                        </div>
                        <p className=" text-yellow-400">&#125;</p>
                    </div>
                    <p className=" text-yellow-400">&#125;</p>
                </div>}
            </div>
        </nav>
    );
}
