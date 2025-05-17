"use client";
import { useRouter } from "next/navigation";
import { ProjectNav } from "../components/projectsNav";
import { ImHome } from "react-icons/im";
import { useMediaQuery } from "react-responsive";

export default function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div className="flex flex-row bg-[#0a0a0a] min-h-screen">
            <ProjectNav />
            <div className="w-full flex flex-col">
                <header className="bg-[#13191f]/70 backdrop-blur-md p-5 flex justify-end gap-5 items-center shadow-md sticky top-0 z-40">
                    <div className="border-r-2 border-white px-5">
                      <ImHome
                        onClick={() => router.push("/")}
                        className="text-3xl cursor-pointer text-gray-300 hover:text-white transition transform hover:scale-110 hover:drop-shadow-lg"
                    />
                    </div>
                    {!isMobile && (
                        <div className="flex flex-col text-right">
                            <h1 className="text-xl font-semibold text-gray-100">
                                Jayson Rosales Custodio
                            </h1>
                            <div className="flex flex-row gap-3 text-gray-400 text-sm">
                                <p>Web Developer</p>
                                <span>|</span>
                                <p>Engineer</p>
                            </div>
                        </div>
                    )}
                </header>
                <main className="flex-grow p-5 mx-auto w-full">{children}</main>
            </div>
        </div>
    );
}
