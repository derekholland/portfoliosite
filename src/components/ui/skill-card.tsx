// src/components/SkillCard.tsx
'use client';

import { Skill } from '@/lib/skills';

export default function SkillCard({ name, icon: Icon }: Skill) {
	return (
		<div className='flex flex-col items-center justify-center gap-2 p-4 border rounded-md transition-all hover:bg-primary/10 hover:text-primary hover:scale-105'>
			<Icon size={40} />
			<p className='text-sm font-semibold'>{name}</p>
		</div>
	);
}
