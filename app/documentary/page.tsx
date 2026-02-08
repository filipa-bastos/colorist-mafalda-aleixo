import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../scr/constants/projects";

export default function DocumentaryPage() {
  // Filter per category
  const documentaryProjects = projects.filter(p => p.category === 'documentary');

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <header className="mb-20 font-mono">
          <span className="text-[10px] opacity-40 uppercase tracking-[0.5em]">Category</span>
          <h1 className="text-4xl uppercase tracking-widest mt-2">Documentary</h1>
        </header>

        <section>
          {documentaryProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}