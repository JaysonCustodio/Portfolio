"use client"
import { useRouter } from 'next/navigation';
import { ProjectNav } from '../components/projectsNav';
import { ImHome } from "react-icons/im";
import { useMediaQuery } from 'react-responsive';

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="flex flex-row">
      <ProjectNav />
      <div className='w-full'>
        <div className='bg-[#0a0a0a] p-5 flex justify-between items-center'>
          <ImHome onClick={() => router.push('/')} className='text-3xl cursor-pointer hover:text-gray-700'/>
          { !isMobile && <div
            className="flex flex-col"
          >
            <h1 className='text-lg'>Jayson Rosales Custodio</h1>
            <div className='flex flex-row gap-3 max-sm:gap-1'>
              <p>Web Developer</p>
              <p>|</p>
              <p>Engineer</p>
            </div>
          </div> }
        </div>
        {children}
      </div>
    </div>
  );
}
