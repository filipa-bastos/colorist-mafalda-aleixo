import Image from 'next/image';
import NextLink from 'next/link';
import { Project } from '../scr/constants/projects';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 py-16 border-b border-black/5 last:border-none">
      {/* left area: Info */}
      <div className="w-full md:w-1/3 flex flex-col items-start font-mono">
        <span className="text-[10px] opacity-40 mb-2">{project.year}</span>
        <h3 className="text-2xl uppercase tracking-widest mb-6">{project.title}</h3>
        
        <NextLink 
          href={`/projects/${project.slug}`}
          className="text-[10px] uppercase tracking-[0.3em] border-b border-black/20 pb-1 hover:border-black transition-all"
        >
          View Details
        </NextLink>
      </div>

      {/* Right image*/}
      <NextLink 
        href={`/projects/${project.slug}`}
        className="w-full md:w-2/3 aspect-[16/9] relative overflow-hidden group cursor-pointer"
      >
        <Image 
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover transition-all duration-700 ease-in-out shadow-sm group-hover:scale-105"
          priority={false} 
        />
        {/* Overlay hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
      </NextLink>
    </div>
  );
};