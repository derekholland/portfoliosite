// src/components/Skills.tsx
'use client';

import SectionWrapper from './section-wrapper';
import SkillCard from '../ui/skill-card';
import { skills } from '@/lib/skills';

export default function Skills() {
	return (
		<SectionWrapper id='skills'>
			<div className='text-center mb-10'>
				<h2 className='text-4xl font-bold'>My Tech Stack</h2>
			</div>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
				{skills.map(skill => (
					<SkillCard key={skill.name} {...skill} />
				))}
			</div>
		</SectionWrapper>
	);
}
