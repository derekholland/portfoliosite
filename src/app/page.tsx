import About from '@/components/layout/about';
import Hero from '@/components/layout/hero';
import Skills from '@/components/layout/skills';
import ProjectsPage from './projects/page';
import Contact from '@/components/layout/contact';

export default function HomePage() {
	return (
		<>
			<Hero />
			<About />
			<Skills />
			<ProjectsPage />
			<Contact />
		</>
	);
}
