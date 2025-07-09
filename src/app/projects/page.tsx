import SectionWrapper from '@/components/layout/section-wrapper';
import ProjectCard from './project-card';

export const projects = [
	{
		slug: 'kingdom-warrior',
		title: 'Kingdom Warrior',
		description:
			'A faith-based fitness tracker for logging workouts, creating custom workouts, saving daily bible verses and more.',
		image: '/screenshots/workouts.jpg'
	},
	{
		slug: 'movie-trailer',
		title: 'Movie Buff',
		description: 'Search and watch movie trailers using TMDB API.',
		image: '/screenshots/movietrailerpage.jpg'
	},
	{
		slug: 'daily-history-facts-app',
		title: 'Daily History Facts App',
		description:
			'Explore daily historical facts and events that took place on the current day.',
		image: '/screenshots/history-app.jpg'
	}
];

export default function ProjectsPage() {
	return (
		<SectionWrapper id='projects'>
			<h2 className='text-3xl md:text-4xl font-bold'>Projects</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
				{projects.map(project => (
					<ProjectCard key={project.slug} project={project} />
				))}
			</div>
		</SectionWrapper>
	);
}
