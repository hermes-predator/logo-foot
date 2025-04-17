
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'info': ['Roboto', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: 'var(--primary)',
					light: 'var(--primary-light)',
					dark: 'var(--primary-dark)',
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					light: 'var(--secondary-light)',
				},
				accent: {
					DEFAULT: 'var(--accent)',
					light: 'var(--accent-light)',
				},
				text: {
					primary: 'var(--text-primary)',
					secondary: 'var(--text-secondary)',
				},
				success: 'var(--success)',
				error: 'var(--error)',
				warning: 'var(--warning)',
				
				// Garder les valeurs existantes pour la compatibilité
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'shimmer': {
					'0%': { transform: 'translateX(-100%) skewX(-12deg)' },
					'100%': { transform: 'translateX(200%) skewX(-12deg)' }
				},
				'shine': {
					'0%': { left: '-100%', opacity: '0.3' },
					'100%': { left: '100%', opacity: '0.3' }
				},
				'bounce': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-25%)' }
				},
				'glow': {
					'0%': { filter: 'brightness(100%)' },
					'100%': { filter: 'brightness(150%) drop-shadow(0 0 3px rgba(255, 255, 255, 0.6))' }
				},
				'ping': {
					'75%, 100%': {
						transform: 'scale(1.5)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'shimmer': 'shimmer 2s infinite',
				'shine': 'shine 2s ease-out infinite',
				'ping': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
				'bounce': 'bounce 1s infinite',
				'glow': 'glow 1.5s infinite alternate'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
