"use client";

import { projects } from "../../scr/constants/projects";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { IoCloseOutline, IoArrowBackOutline } from "react-icons/io5";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div className="p-20 font-mono">Project not found.</div>;

  return (
    <main className="min-h-screen bg-background font-mono pb-20">
      {/* back to category page*/}
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
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl uppercase tracking-[0.4em] font-light">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Info Bar */}
      <section className="max-w-7xl mx-auto px-8 py-12 border-b border-black/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[10px] uppercase tracking-[0.2em] opacity-60">
          <div><span className="opacity-40">Director:</span> {project.director}</div>
          <div><span className="opacity-40">DP:</span> {project.dop}</div>
          <div><span className="opacity-40">Production:</span> {project.production}</div>
        </div>
      </section>

      {/* Responsive Gallery Grid */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.gallery.map((img, idx) => (
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

      {/*  Lightbox */}
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