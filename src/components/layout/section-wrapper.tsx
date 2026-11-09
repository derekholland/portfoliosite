import React from 'react';

interface SectionWrapperProps {
	id?: string; // optional id for anchor scrolling
	children: React.ReactNode;
}

export default function SectionWrapper({ id, children }: SectionWrapperProps) {
	return (
		<section
			id={id}
			className='scroll-mt-16 xl:scroll-mt-0 flex flex-col items-center gap-6 border-b border-border py-14 text-center sm:py-18'>
			{children}
		</section>
	);
}
