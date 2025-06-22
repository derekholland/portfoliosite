import { ThemeProvider as BaseThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

type ThemeProviderProps = {
	children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
	return (
		<BaseThemeProvider attribute='class' defaultTheme='system' enableSystem>
			{children}
		</BaseThemeProvider>
	);
}
