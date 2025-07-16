"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaNodeJs } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

export const ProjectNav = () => {
    const path = usePathname();
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const [hide, setHide] = useState(isMobile);

    useEffect(() => {
        setHide(isMobile);
    }, [isMobile]);

    return (
        <nav
            className={`
                ${hide ? "w-16" : "w-96"} 
                h-screen bg-[#13191f]/70 backdrop-blur-md shadow-lg 
                px-5 text-lg select-none transition-all duration-300 ease-in-out
                fixed left-0 top-0 z-50
            `}
        >
            <div
                onClick={() => setHide(!hide)}
                className="flex items-center gap-3 cursor-pointer py-5"
            >
                <FaNodeJs className="text-green-400 text-3xl" />
                {!hide && (
                    <>
                        <p className="text-gray-300 font-semibold text-xl">projects.jayson</p>
                        <IoIosArrowForward
                            className={`text-3xl text-gray-400 transform transition-transform duration-300 ${hide ? "" : "rotate-90"}`}
                        />
                    </>
                )}
            </div>
            <div className="flex gap-2">
                <div className="flex flex-col items-center gap-2">
                    {Array.from({ length: 10 }, (_, i) => (
                        <p key={i} className="text-gray-500">{i + 1}</p>
                    ))}
                </div>
                {!hide && (
                    <div className="flex flex-col gap-2">
                        <p className="text-yellow-400">&#123;</p>
                        <div className="flex flex-col border-l-2 border-gray-700 ml-1 px-2 gap-2">
                            <ProjectMeta label="name" value="jayson-projects" />
                            <ProjectMeta label="year" value="2023-2025" />
                            <ProjectMeta label="private" value="false" />
                            <p className="text-yellow-400">
                                <span className="text-[#68a9eb]">&quot;projects&quot;</span>
                                <span className="text-white"> : </span> &#123;
                            </p>
                            <div className="flex flex-col border-l-2 border-gray-700 ml-1 px-2 gap-2">
                                <ProjectLink href="/projects/adeus" path={path} label="adeus-life" year="2020-2025" />
                                <ProjectLink href="/projects/jetlogistics" path={path} label="jetlogistics" year="2020-2023" />
                            </div>
                            <p className="text-yellow-400">&#125;</p>
                        </div>
                        <p className="text-yellow-400">&#125;</p>
                    </div>
                )}
            </div>
        </nav>
    );
};

const ProjectMeta = ({ label, value }: { label: string; value: string }) => (
    <p className="text-gray-400">
        <span className="text-[#68a9eb]">&quot;{label}&quot;</span>
        <span className="text-white"> : </span>
        <span className="text-green-400">&quot;{value}&quot;,</span>
    </p>
);

const ProjectLink = ({
    href,
    path,
    label,
    year,
}: {
    href: string;
    path: string;
    label: string;
    year: string;
}) => {
    const isActive = path === href;
    return (
        <Link href={href}>
            <p
                className={`
                    text-gray-400 cursor-pointer px-2 py-1 rounded-lg
                    hover:bg-[#1e293b] hover:text-white transition 
                    ${isActive ? "bg-[#1e293b] text-white shadow-inner" : ""}
                `}
            >
                <span className="text-[#68a9eb]">&quot;{label}&quot;</span>
                <span>: </span>
                <span className="text-green-400">&quot;{year}&quot;,</span>
            </p>
        </Link>
    );
};
