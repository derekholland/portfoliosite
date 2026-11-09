import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import GoBackButton from '@/components/ui/back-button';
import { projects } from '@/lib/projects';

type ProjectProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
	return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectProps): Promise<Metadata> {
	const { slug } = await params;
	const project = projects.find(item => item.slug === slug);
	if (!project) notFound();

	return {
		title: project.title,
		description: project.summary,
		openGraph: {
			title: project.title,
			description: project.summary,
			images: [{ url: project.image, alt: project.title }]
		}
	};
}

export default async function ProjectDetail({ params }: ProjectProps) {
	const { slug } = await params;
	const project = projects.find(p => p.slug === slug);

	if (!project) return notFound();

	return (
		<article className='min-h-screen px-6 py-16 max-w-4xl mx-auto'>
			<h1 className='text-3xl font-bold mb-4'>{project.title}</h1>
			<div className='relative w-full h-64 mb-6'>
				<Image
					src={project.image}
					alt={project.title}
					fill
					sizes='(min-width: 1280px) 848px, (min-width: 944px) 848px, calc(100vw - 96px)'
					className='object-cover rounded-md'
				/>
			</div>
			<p className='mb-6 text-lg mt-5'>{project.description}</p>
			<div className='flex flex-wrap gap-4'>
				<Link
					href={project.github}
					className='bg-muted px-4 py-2 rounded hover:bg-muted/80'
					target='_blank'>
					GitHub
				</Link>
				<Link
					href={project.live}
					className='bg-muted px-4 py-2 rounded hover:bg-muted/80'
					target='_blank'>
					Live App
				</Link>
				<GoBackButton />
			</div>
		</article>
	);
}
