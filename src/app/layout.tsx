import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/theme/theme-provider';
import Sidebar from '@/components/layout/sidebar';
import MobileNavbar from '@/components/layout/mobilenavbar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'Derek Holland | Fullstack Developer',
	description: 'Web Developer Portfolio'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang='en'>
			{/* Sidebar for larger screens */}
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider>
					<MobileNavbar />
					<Sidebar />
					{/* Main content area */}
					<main className='w-full min-h-screen bg-background pt-24 px-6 lg:pl-64'>
						<div className='mx-auto max-w-5xl'>{children}</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
