import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../scr/constants/projects";

export default function LifestylePage() {
  // Filter per category
  const lifestyleProjects = projects.filter(p => p.category === 'lifestyle');

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <header className="mb-20 font-mono">
          <span className="text-[10px] opacity-40 uppercase tracking-[0.5em]">Category</span>
          <h1 className="text-4xl uppercase tracking-widest mt-2">Lifestyle</h1>
        </header>

        <section>
          {lifestyleProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}