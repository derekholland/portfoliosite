import SectionWrapper from './section-wrapper';

export default function Hero() {
	return (
		<SectionWrapper id='home'>
			<h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
				Derek Holland
			</h1>

			<h2 className='text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground'>
				Fullstack Developer | Creative Problem Solver
			</h2>

			<p className='max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl text-muted-foreground text-sm sm:text-base md:text-lg'>
				I don\'t just build websites — I build solutions that last.
			</p>

			<a
				href='#projects'
				className='mt-6 inline-block rounded-md bg-primary px-6 py-3 text-background hover:bg-primary/90 transition'>
				View My Work
			</a>
		</SectionWrapper>
	);
}
