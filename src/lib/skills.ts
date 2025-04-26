// src/data/skills.ts
import {
	SiNextdotjs,
	SiReact,
	SiTypescript,
	SiTailwindcss,
	SiPrisma,
	SiSupabase,
	SiPostgresql,
	SiGithub,
	SiVercel,
	SiShadcnui,
	SiZod,
	SiNodedotjs,
	SiAib,
} from 'react-icons/si';

export type Skill = {
	name: string;
	icon: React.ComponentType<{ size?: number; className?: string }>;
};

export const skills: Skill[] = [
	{ name: 'Next.js', icon: SiNextdotjs },
	{ name: 'React', icon: SiReact },
	{ name: 'TypeScript', icon: SiTypescript },
	{ name: 'Tailwind CSS', icon: SiTailwindcss },
	{ name: 'Prisma', icon: SiPrisma },
	{ name: 'Supabase', icon: SiSupabase },
	{ name: 'PostgreSQL', icon: SiPostgresql },
	{ name: 'Node.js', icon: SiNodedotjs },
	{ name: 'zod', icon: SiZod },
	{ name: 'shadcn/ui', icon: SiShadcnui },
	{ name: 'Vercel', icon: SiVercel },
	{ name: 'GitHub', icon: SiGithub },
];
