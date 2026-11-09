import { projects } from '@/lib/projects';
import ProjectCard from './project-card';

export default function ProjectsPage() {
	return (
		<section id='projects' className='scroll-mt-16 xl:scroll-mt-0 border-b border-border py-14 sm:py-18'>
			<p className='font-mono text-xs font-semibold uppercase tracking-widest text-portfolio-accent'>Portfolio</p>
			<h2 className='mt-2 text-3xl font-bold tracking-tight md:text-4xl'>Selected projects</h2>
			<div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-3'>
				{projects.map(project => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</section>
	);
}
