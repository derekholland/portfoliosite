// src/components/layout/Sidebar.tsx
'use client';

import Link from 'next/link';
import { ThemeSwitcher } from '@/components/theme/theme-switcher';
import { navLinks } from '@/lib/nav-links';

export default function Sidebar() {
	return (
		<aside className='hidden xl:flex fixed top-0 left-0 h-full w-64 bg-background border-r p-6 flex-col justify-between'>
			{/* Top Section: Logo and Navigation */}
			<div className='space-y-8'>
				{/* Logo */}
				<div className='text-center'>
					<h1 className='text-2xl font-bold'>Derek Holland</h1>
					<p className='text-sm text-muted-foreground'>Fullstack Developer</p>
				</div>

				{/* Navigation Links */}
				<nav className='flex flex-col gap-4'>
					{navLinks.map(link => (
						<Link
							key={link.name}
							href={link.href}
							className='text-foreground hover:text-primary transition text-lg'>
							{link.name}
						</Link>
					))}
				</nav>
			</div>

			{/* Bottom Section: Theme Switcher */}
			<div className='mt-6'>
				<ThemeSwitcher />
			</div>
		</aside>
	);
}
