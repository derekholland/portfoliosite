import SectionWrapper from './section-wrapper';

const bio = `I'm Derek Holland — a frontend-focused fullstack developer and creative problem solver. I’m passionate about turning complex challenges into clean, scalable, and engaging web applications. Whether building sleek UIs or connecting backend systems, I focus on delivering user-first solutions that work beautifully across the stack.`;

export default function About() {
	return (
		<SectionWrapper id='about'>
			<h2 className='text-3xl sm:text-4xl font-bold'>About Me</h2>

			<p className='max-w-md sm:max-w-2xl text-muted-foreground text-base sm:text-lg'>
				{bio}
			</p>
		</SectionWrapper>
	);
}
