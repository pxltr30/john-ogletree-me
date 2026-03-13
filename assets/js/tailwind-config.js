/**
 * Tailwind Configuration Module
 * Defines the custom design system for Echo.
 */
tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Background and Surfaces
                'bg': '#3B2F2A',
                'surface': '#4A3E38',
                
                // Typography
                'text': '#F0EAD6',
                'text-light': '#D4C9A8',
                'heading': '#E07A5F',
                
                // Accents and UI Elements
                'accent': '#3D87A6',
                'border': '#5B4F48',
                'tag-bg': 'rgba(61, 135, 166, 0.15)',
            },
            fontFamily: {
                // Matching your IBM Plex Mono preference
                mono: ['IBM Plex Mono', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
            },
            keyframes: {
                blink: {
                    '50%': { backgroundColor: 'transparent' }
                }
            },
            animation: {
                blink: 'blink 1s steps(1) infinite'
            }
        }
    }
}
