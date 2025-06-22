import SectionWrapper from '@/components/layout/section-wrapper';
import ProjectCard from './project-card';

const projects = [
	{
		title: 'Kingdom Warrior',
		image: '/screenshots/workouts.jpg',
		slug: 'kingdom-warrior',
		description: 'A faith-based fitness tracker using Next.js and Supabase.'
	},
	{
		title: 'Movie Buff',
		image: '/screenshots/movietrailerpage.jpg',
		slug: 'movie-trailer',
		description: 'Search and watch movie trailers using TMDB API.'
	},
	{
		title: 'Next Project Coming soon',
		image: '/screenshots/workouts.jpg',
		slug: '',
		description: 'Final project will be added soon. Stay tuned!'
	}
	// Add more projects as needed
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
