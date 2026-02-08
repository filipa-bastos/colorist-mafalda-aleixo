import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../scr/constants/projects";


export default function NarrativePage() {
  // Filter per category
  const narrativeProjects = projects.filter(p => p.category === 'narrative');

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <header className="mb-20 font-mono">
          <span className="text-[10px] opacity-40 uppercase tracking-[0.5em]">Category</span>
          <h1 className="text-4xl uppercase tracking-widest mt-2">Narrative</h1>
        </header>

        <section>
          {narrativeProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}