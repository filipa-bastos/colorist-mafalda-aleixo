"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { projects } from "../scr/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

export default function HeroCarousel() {
  // Configuração do Embla
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start", 
    loop: true,
    slidesToScroll: 1,
    dragFree: true 
  });

  // Funções de Navegação
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Filtramos apenas os projetos que têm a heroImage definida
  const heroProjects = projects.filter(project => project.heroImage);

  return (
    <section className="w-full bg-background h-[calc(100vh-80px)] flex flex-col pt-4 pb-12 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-8 w-full h-full flex flex-col">
        
        {/* Viewport do Carrossel (flex-1 para ocupar o espaço vertical restante) */}
        <div 
          className="overflow-hidden cursor-grab active:cursor-grabbing flex-1 w-full" 
          ref={emblaRef}
        >
          <div className="flex h-full gap-8">
            {heroProjects.map((project) => (
              <div 
                key={project.id} 
                // h-full garante que o slide tem a altura total do viewport
                // flex-[0_0_auto] permite que a largura seja definida pelo aspect-ratio
                className="h-full flex-[0_0_300px] md:flex-[0_0_400px] min-w-0"
              >
                <Link href={`/projects/${project.slug}`} className="group block h-full flex flex-col">
                  
                  {/* Container da Imagem com proporção de Poster (2:3) */}
                  <div className="relative flex-1 aspect-[3/5] overflow-hidden bg-zinc-100 mb-4 shadow-sm">
                    <Image
                      src={project.heroImage!}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                      priority
                      sizes="(max-height: 1080px) 40vw, 25vw"
                    />
                    {/* Overlay subtil no hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  </div>

                  {/* Legenda (flex-shrink-0 para não ser esmagada) */}
                  <div className="font-mono uppercase tracking-[0.2em] flex-shrink-0 h-12">
                    <h3 className="text-[11px] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      {project.title}
                    </h3>
                    <p className="text-[9px] opacity-40 mt-1">
                      {project.category} — {project.year}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Controlos de Navegação */}
        <div className="flex justify-end items-center gap-10 mt-4 pr-4 flex-shrink-0">
          <button 
            onClick={scrollPrev} 
            className="group p-2 outline-none"
            aria-label="Previous Project"
          >
            <IoArrowBackOutline 
              size={24} 
              className="opacity-30 group-hover:opacity-100 group-hover:-translate-x-1 transition-all duration-300" 
            />
          </button>
          
          <button 
            onClick={scrollNext} 
            className="group p-2 outline-none"
            aria-label="Next Project"
          >
            <IoArrowForwardOutline 
              size={24} 
              className="opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" 
            />
          </button>
        </div>

      </div>
    </section>
  );
}
