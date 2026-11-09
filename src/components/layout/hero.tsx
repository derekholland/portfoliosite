import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Hero() {
	return (
		<section id='home' className='relative isolate scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card px-6 py-12 sm:px-12 sm:py-16 lg:px-16'>
			<div aria-hidden='true' className='portfolio-grid pointer-events-none absolute inset-0 -z-10' />
			<p className='flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-portfolio-accent'>
				<span className='size-2 rounded-full bg-portfolio-accent' />
				Full-stack web developer
			</p>
			<h1 className='mt-5 text-5xl font-bold tracking-[-0.065em] sm:text-7xl lg:text-8xl'>
				Derek Holland<span className='text-portfolio-accent'>.</span>
			</h1>
			<p className='mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl'>
				I build web apps that make everyday things easier, from tracking a workout to finding a movie to watch.
			</p>
			<div className='mt-8 flex flex-wrap items-center gap-3'>
				<a href='#projects' className='inline-flex items-center gap-2 rounded-full bg-portfolio-accent px-5 py-3 text-sm font-semibold text-portfolio-on-accent transition hover:opacity-85'>
					View my work <ArrowDown aria-hidden='true' size={16} />
				</a>
				<a href='/derek_holland_resume_2025.pdf' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:bg-muted'>
					Résumé <ArrowUpRight aria-hidden='true' size={16} />
				</a>
			</div>
			<div className='mt-9 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground'>
				<a href='https://github.com/derekholland' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 transition hover:text-portfolio-accent'>
					<SiGithub aria-hidden='true' /> GitHub
				</a>
				<a href='https://www.linkedin.com/in/derek-holland-93ab0617b/' target='_blank' rel='noopener noreferrer' className='inline-flex items-center gap-2 transition hover:text-portfolio-accent'>
					<SiLinkedin aria-hidden='true' /> LinkedIn
				</a>
			</div>
		</section>
	);
}