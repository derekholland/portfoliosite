import SectionWrapper from './section-wrapper';
const bioParagraphs = [
	`I love the art of programming and solving problems with technology. It brings me great joy to create software that can help people and make their lives easier in some way. Whether it's building a simple tool or a complex application, I enjoy the process of turning ideas into reality through code. I take steps to ensure the user experience is smooth and intuitive.`,
	`Using the latest web development technologies and working side by side with AI tools like ChatGPT for a more efficient workflow, I strive to build software that’s not only functional but also enjoyable to use.`,
	`My goal is to make a positive impact through my work — whether it's by improving efficiency, enhancing creativity, or making everyday tasks a little bit easier.`,
	`I have a growth mindset and am always eager to learn new skills and technologies to become the best developer I can be. I believe continuous learning is essential in the ever-evolving field of software development, and I embrace challenges as opportunities to grow.`
];

export default function About() {
	return (
		<SectionWrapper id='about'>
			<h2 className='text-3xl sm:text-4xl font-bold'>About Me</h2>

			<div className='max-w-md sm:max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg text-left space-y-4'>
				{bioParagraphs.map((paragraph, index) => (
					<p key={index}>{paragraph}</p>
				))}
			</div>
		</SectionWrapper>
	);
}
