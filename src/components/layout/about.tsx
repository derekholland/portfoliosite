import SectionWrapper from './section-wrapper';

export default function About() {
	return (
		<SectionWrapper id='about'>
			<h2 className='text-3xl sm:text-4xl font-bold'>About Me</h2>

			<p className='max-w-md sm:max-w-2xl text-muted-foreground text-base sm:text-lg'>
				I\'m Derek Holland, a creative problem solver and fullstack developer
				passionate about building meaningful web experiences. I love tackling
				complex challenges and turning ideas into scalable, beautiful
				applications.
			</p>
		</SectionWrapper>
	);
}
