"use client";

import { projects } from "../../scr/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { IoCloseOutline, IoArrowBackOutline } from "react-icons/io5";

// Declaramos a interface expandida aqui para o TypeScript aceitar o heroPosition de forma segura
interface CustomProject {
  id: string;
  title: string;
  year: string;
  category: string;
  imageUrl: string;
  slug: string;
  director: string;
  dop: string;
  production: string;
  heroImage: string;
  gallery: string[];
  heroPosition?: string; // Permitido qualquer valor: "top", "20%", etc.
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Fazemos a conversão segura de tipo usando a interface que criámos acima (sem usar 'any')
  const project = projects.find((p) => p.slug === slug) as CustomProject | undefined;

  if (!project) return <div className="p-20">Project not found.</div>;

  // Se não houver heroPosition definido no ficheiro de dados, o CSS assume "center" por padrão
  const customPosition = project.heroPosition || "center";

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* Back to category page */}
      <nav className="max-w-7xl mx-auto px-8 pt-32 pb-10">
        <Link 
          href={`/${project.category}`} 
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] opacity-50 hover:opacity-100 transition-opacity"
        >
          <IoArrowBackOutline size={14} />
          {project.category}
        </Link>
      </nav>

      {/* Hero Image */}
      <section className="relative w-full h-[300px] overflow-hidden group">
        <Image 
          src={project.imageUrl} 
          alt={project.title} 
          fill 
          className="object-cover brightness-[0.7]" 
          // Controla o alinhamento vertical da imagem sem quebrar regras de tipos
          style={{ objectPosition: `center ${customPosition}` }}
        />
        <div className="absolute left-50 bottom-4 transform flex items-center justify-center">
          <h1 className="text-[13px] font-bold uppercase tracking-[0.2em] opacity-60">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Info Bar */}
      <section className="max-w-7xl mx-auto px-8 py-12 border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[10px] uppercase tracking-[0.2em] opacity-60">
          <div><span className="opacity-40">Director:</span> {project.director}</div>
          <div><span className="opacity-40">DoP:</span> {project.dop}</div>
          <div><span className="opacity-40">Production:</span> {project.production}</div>
        </div>
      </section>

      {/* Responsive Gallery Grid */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.gallery.map((img: string, idx: number) => (
            <div 
              key={idx} 
              className="relative aspect-video cursor-zoom-in overflow-hidden"
              onClick={() => setSelectedImg(img)}
            >
              <Image 
                src={img} 
                alt={`${project.title} gallery ${idx}`} 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-20">
          <button 
            onClick={() => setSelectedImg(null)}
            className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform duration-300"
          >
            <IoCloseOutline size={40} />
          </button>
          <div className="relative w-full h-full">
            <Image 
              src={selectedImg} 
              alt="Fullscreen view" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>
      )}
    </main>
  );
}