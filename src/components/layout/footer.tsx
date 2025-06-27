// components/Footer.tsx
export default function Footer() {
	return (
		<footer className='w-full border-t border-border mt-16 py-6 text-center text-sm text-muted-foreground'>
			<p>
				&copy; {new Date().getFullYear()} Derek Holland. Built with 💻 Next.js,
				Tailwind, and ShadCN.
			</p>
		</footer>
	);
}
