import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface Project {
	title: string;
	cover: string;
	slug: string;
	summary: string;
}

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className='group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-portfolio-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-portfolio-accent'>
			<div className='relative aspect-[16/10] overflow-hidden border-b border-border bg-muted'>
				<Image
					src={project.cover}
					alt=''
					fill
					sizes='(min-width: 1280px) 340px, (min-width: 768px) 33vw, 100vw'
					className='object-cover object-top transition-transform duration-300 motion-safe:group-hover:scale-105'
				/>
			</div>
			<div className='flex flex-1 flex-col p-5'>
				<h3 className='text-lg font-semibold tracking-tight'>{project.title}</h3>
				<p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
					{project.summary}
				</p>
				<span className='mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-portfolio-accent'>
					View project <ArrowUpRight aria-hidden='true' size={15} />
				</span>
			</div>
		</Link>
	);
}
