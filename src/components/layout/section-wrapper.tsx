import React from 'react';

interface SectionWrapperProps {
	id?: string; // optional id for anchor scrolling
	children: React.ReactNode;
}

export default function SectionWrapper({ id, children }: SectionWrapperProps) {
	return (
		<section
			id={id}
			className='min-h-screen flex flex-col justify-center items-center text-center gap-6 px-4 sm:px-6 md:px-8 lg:px-12'>
			{children}
		</section>
	);
}
