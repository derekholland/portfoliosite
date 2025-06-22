'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface Project {
	title: string;
	image: string;
	slug: string;
	description: string;
}

export default function ProjectCard({ project }: { project: Project }) {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className={cn(
				'group block overflow-hidden rounded-lg border border-border hover:shadow-lg transition'
			)}>
			<div className='relative h-48 md:h-56 w-full'>
				<Image
					src={project.image}
					alt={project.title}
					fill
					className='object-cover group-hover:scale-105 transition-transform duration-300'
				/>
			</div>
			<div className='p-4'>
				<h3 className='text-lg font-semibold group-hover:text-primary transition'>
					{project.title}
				</h3>
				<p className='text-sm text-muted-foreground mt-1 line-clamp-2'>
					{project.description}
				</p>
			</div>
		</Link>
	);
}
