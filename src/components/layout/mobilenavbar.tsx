'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icons for hamburger and close
import { ThemeSwitcher } from '@/components/theme/theme-switcher';
import { navLinks } from '@/lib/nav-links';

export default function MobileNavbar() {
	// Local state to control mobile menu open/close
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className='flex xl:hidden fixed top-0 left-0 right-0 z-20 h-16 bg-background border-b px-6 items-center justify-between'>
			{/* Logo */}
			<div className='text-lg font-semibold'>Derek Holland</div>

			{/* ThemeSwitcher and Hamburger */}
			<div className='flex items-center gap-4'>
				<ThemeSwitcher />

				{/* Hamburger Button */}
				<button
					onClick={() => setMenuOpen(prev => !prev)}
					className='focus:outline-none'
					aria-label='Toggle menu'>
					{menuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Dropdown Menu */}
			{menuOpen && (
				<div className='absolute top-16 left-0 right-0 bg-background border-b flex flex-col items-center py-4 space-y-4 shadow-md'>
					{navLinks.map(link => (
						<Link
							key={link.name}
							href={link.href}
							onClick={() => setMenuOpen(false)} // Close menu on link click
							className='text-foreground hover:text-primary transition text-lg'>
							{link.name}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}
