"use client";
import { ProjectNav } from "../components/projectsNav";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

export default function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div className="flex flex-row bg-[#0a0a0a] min-h-screen">
            <ProjectNav />
            <div className="w-full flex flex-col">
                <header className="bg-gradient-to-br from-black to-gray-800 p-5 flex justify-end gap-5 items-center shadow-md sticky top-0 z-40">
                    <div className="border-r-2 border-white px-5">
                        <Link
                            href="/"
                            className="flex mx-auto w-fit px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-blue-400 hover:text-blue-300 hover:bg-white/20 transition-all shadow-md hover:shadow-lg"
                        >
                            Back to Home
                        </Link>

                    </div>
                    {!isMobile && (
                        <div className="flex flex-col text-right">
                            <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                                Jayson Rosales Custodio
                            </h1>
                            <div className="flex flex-row gap-3 text-gray-400 text-sm">
                                <p>Web Developer</p>
                            </div>
                        </div>
                    )}
                </header>
                <main className="flex-grow mx-auto w-full">{children}</main>
            </div>
        </div>
    );
}
