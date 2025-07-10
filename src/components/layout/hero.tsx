import { SiGithub, SiLinkedin } from 'react-icons/si';
import SectionWrapper from './section-wrapper';

const bio = `I don't just build websites — I craft seamless web experiences.`;

export default function Hero() {
	return (
		<SectionWrapper id='home'>
			<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
				Derek Holland
			</h1>

			<h2 className='text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground'>
				Fullstack Developer | Frontend-Focused | Creative Problem Solver
			</h2>

			<p className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl text-muted-foreground text-sm sm:text-base md:text-lg'>
				{bio}
			</p>

			<a
				href='#projects'
				className='mt-6 inline-block rounded-md bg-primary px-6 py-3 text-background hover:bg-primary/90 transition'>
				View My Work
			</a>

			{/* Social Icons */}
			<div className='mt-6 flex gap-4 justify-center'>
				<a
					href='https://github.com/derekholland'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='GitHub'
					className='text-muted-foreground hover:text-foreground transition'>
					<SiGithub className='w-6 h-6' />
				</a>

				<a
					href='https://www.linkedin.com/in/derek-holland-93ab0617b/'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='LinkedIn'
					className='text-muted-foreground hover:text-foreground transition'>
					<SiLinkedin className='w-6 h-6' />
				</a>
			</div>
		</SectionWrapper>
	);
}
