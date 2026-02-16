import Image from 'next/image';
import NextLink from 'next/link';
import { Project } from '../scr/constants/projects';

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 py-8 border-b border-black/60 last:border-none">
      
      {/* Left area: Info (Ocupa 1/3 no Desktop) */}
      <div className="w-full md:w-1/5 flex flex-col items-start">
        <h3 className="text-1xl uppercase tracking-widest mb-6">
          {project.title}
        </h3>
        
        <NextLink 
          href={`/projects/${project.slug}`}
          className="text-[10px] uppercase tracking-[0.3em] border-b border-black/20 pb-1 hover:border-black transition-all"
        >
          View Details
        </NextLink>
      </div>

      {/* Right image: (Ajustado para ocupar um pouco menos de espaço se desejar) */}
      <NextLink 
        href={`/projects/${project.slug}`}
        /* Se quiser que a imagem seja menor, mude md:w-2/3 para md:w-1/2 ou md:w-3/5 */
        className="w-full md:w-4/5 aspect-[16/9] relative overflow-hidden group cursor-pointer"
      >
        <Image 
          src={project.imageUrl}
          alt={project.title}
          fill
          /* O sizes deve refletir a largura real na tela para performance */
          sizes="(max-width: 768px) 100vw, 66vw" 
          className="object-cover transition-all duration-700 ease-in-out shadow-sm group-hover:scale-105"
          priority={false} 
        />
        
        {/* Overlay hover - escurece levemente ao passar o mouse */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700" />
      </NextLink>

    </div>
  );
};