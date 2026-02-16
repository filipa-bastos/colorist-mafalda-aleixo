import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../scr/constants/projects";


export default function NarrativePage() {
  // Filter per category
  const narrativeProjects = projects.filter(p => p.category === 'narrative');

  return (
    <main className="px-8">
       <header className="flex items-bottom gap-4 w-full">
        {/* Conteúdo do Header */}
        <div className="flex flex-col">
          <span className="text-[10px] opacity-40 uppercase tracking-widest">Category</span>
          <h1 className="text-l lowercase mt-1">Narrative</h1>
        </div>
      </header>

        <section>
          {narrativeProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
    </main>
  );
}