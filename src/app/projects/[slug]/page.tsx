// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import GoBackButton from '@/components/ui/back-button';

const projects = [
	{
		slug: 'kingdom-warrior',
		title: 'Kingdom Warrior',
		description: `Kingdom Warrior is a full-stack fitness app built with Next.js 15, Supabase, Tailwind CSS, Prisma, and TypeScript. It allows users to log custom workouts or follow a pre-designed 3-day workout template with progressive overload logic. The app includes dynamic warm-up calculations, real-time set tracking, and a exercise-specific weight progression system. Advanced features include Supabase Auth for secure user accounts and data persistence.This project showcases CRUD operations, conditional rendering, route-based data fetching, and form validation with Zod — all within a sleek, responsive modern UI using Shadcn and Radix UI.`,

		image: '/screenshots/homepage.jpg',
		github: 'https://github.com/derekholland/fitnessApp',
		live: 'https://kingdomwarrior.app'
	},
	{
		slug: 'movie-trailer',
		title: 'Movie Buff',
		description: `Movie Buff is a front-end movie trailer search app that leverages the TMDB API to provide live search results and video previews. Built with React and Tailwind CSS inside a Next.js 14 framework, the app offers a smooth user experience with minimal loading times and dynamic content rendering. Each movie page includes trailer embeds, genre info, and metadata pulled from the API. The project demonstrates client-side routing, controlled inputs for live search, and effective API integration with error handling.`,
		image: '/screenshots/moviebuffhome.jpg',
		github: 'https://github.com/derekholland/React-Movie-App',
		live: 'https://react-movie-app21.netlify.app'
	},
	{
		slug: 'daily-history-facts-app',
		title: 'Daily History App',
		description: `Daily History is a Next.js 15 app that fetches historical events for the current day using an external API. Users can browse, paginate, and favorite events from history, with optional thumbnails for visual context. The app is styled with Tailwind CSS and features dark/light mode support via next-themes. State management is handled client-side, with persistent favorites stored in localStorage. This project showcases API integration, responsive design, dynamic routing, and real-time UI updates.`,
		image: '/screenshots/history-app.jpg',
		github: 'https://github.com/derekholland/daily-history-app',
		live: 'https://daily-history-app.vercel.app/'
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
			<p className='mb-6 text-lg mt-5'>{project.description}</p>
			<div className='flex gap-4'>
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
		</main>
	);
}
