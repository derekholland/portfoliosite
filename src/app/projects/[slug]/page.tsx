// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import GoBackButton from '@/components/ui/back-button';

const projects = [
	{
		slug: 'kingdom-warrior',
		title: 'Kingdom Warrior',
		description: 'A faith-based fitness tracker using Next.js and Supabase.',
		image: '/screenshots/homepage.jpg',
		github: 'https://github.com/yourname/kingdom-warrior',
		live: 'https://kingdomwarrior.app'
	},
	{
		slug: 'movie-trailer',
		title: 'Movie Trailer App',
		description: 'Search and watch movie trailers using TMDB API.',
		image: '/screenshots/moviebuffhome.jpg',
		github: 'https://github.com/yourname/movie-trailer-app',
		live: 'https://react-movie-app21.netlify.app'
	}
];

export default function ProjectDetail({
	params
}: {
	params: { slug: string };
}) {
	const project = projects.find(p => p.slug === params.slug);

	if (!project) return notFound();

	return (
		<main className='min-h-screen px-6 py-16 max-w-4xl mx-auto'>
			<h1 className='text-3xl font-bold mb-4'>{project.title}</h1>
			<div className='relative w-full h-64 mb-6'>
				<Image
					src={project.image}
					alt={project.title}
					fill
					className='object-cover rounded-md'
				/>
			</div>
			<p className='mb-6 text-lg'>{project.description}</p>
			<div className='flex gap-4'>
				<Link
					href={project.github}
					className='bg-muted px-4 py-2 rounded hover:bg-muted/80'
					target='_blank'>
					GitHub
				</Link>
				<Link
					href={project.live}
					className='bg-primary text-white px-4 py-2 rounded hover:bg-primary/90'
					target='_blank'>
					Live App
				</Link>
				<GoBackButton />
			</div>
		</main>
	);
}
